'use client'

import {
  useApolloClient,
  useLazyQuery,
  useMutation,
} from '@apollo/client/react'
import {
  MUTATION_BOOKMARK_USTW_ARTICLE,
  MUTATION_BOOKMARK_KETAGALAN_ARTICLE,
  MUTATION_SUBSCRIBE_BILL,
  MUTATION_SUBSCRIBE_PEOPLE,
  MUTATION_UPDATE_MY_PASSWORD,
  MUTATION_UPDATE_MY_NAME,
  MUTATION_UPDATE_MY_EMAIL,
  MUTATION_UPDATE_MY_NOTIFICATION_SETTING,
  QUERY_ME,
  MUTATION_UNSUBSCRIBE_BILL,
  MUTATION_UNSUBSCRIBE_PEOPLE,
  MUTATION_UNBOOKMARK_USTW_ARTICLE,
  MUTATION_UNBOOKMARK_KETAGALAN_ARTICLE,
  MUTATION_DELETE_ME,
} from '@/modules/Account/graphql/gql'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  MeQuery,
  MeQueryVariables,
  SubscribeBillMutation,
  SubscribeBillMutationVariables,
  SubscribePeopleMutationVariables,
  SubscribePeopleMutation,
  BookmarkUstwArticleMutation,
  BookmarkUstwArticleMutationVariables,
  BookmarkKetagalanArticleMutation,
  BookmarkKetagalanArticleMutationVariables,
  UpdateMyPasswordMutation,
  UpdateMyPasswordMutationVariables,
  UpdateMyNameMutation,
  UpdateMyNameMutationVariables,
  UpdateMyEmailMutation,
  UpdateMyEmailMutationVariables,
  UpdateMyNotificationSettingMutation,
  UpdateMyNotificationSettingMutationVariables,
  UnsubscribeBillMutation,
  UnsubscribeBillMutationVariables,
  UnsubscribePeopleMutation,
  UnsubscribePeopleMutationVariables,
  UnbookmarkUstwArticleMutation,
  UnbookmarkUstwArticleMutationVariables,
  UnbookmarkKetagalanArticleMutation,
  UnbookmarkKetagalanArticleMutationVariables,
  DeleteMeMutation,
  DeleteMeMutationVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import AccountUtils, { Account } from '@/modules/Account/business/Account'
import type React from 'react'
import { useToast } from '@/common/providers/ToastProvider'
import { Bill } from '@/modules/Bill/business/Bill'
import { People } from '@/modules/People/business/People'
import { Article, ArticleType } from '@/modules/Article/business/Article'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useUser } from '@auth0/nextjs-auth0'
import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { AccountNotificationSettingOutput } from '@/modules/Account/Notification/business/AccountNotification'

type AccountProviderContext = {
  fetchMe: () => void
  account: Account | null
  isAccountLoading: boolean
  refetchAccount: () => void
  isMutating: boolean
  subscribeBill: (bill: Bill) => void
  unsubscribeBill: (bill: Bill) => void
  checkIfBillIsSubscribed: (bill: Bill) => boolean
  subscribePeople: (people: People) => void
  unsubscribePeople: (people: People) => void
  checkIfPeopleIsSubscribed: (people: People) => boolean
  bookmarkArticle: (article: Article) => Promise<boolean>
  unbookmarkArticle: (article: Article) => Promise<boolean>
  checkIfArticleIsBookmarked: (article: Article) => boolean
  updatePassword: (password: string) => Promise<void>
  updateName: (name: string) => Promise<void>
  updateEmail: (email: string) => Promise<void>
  updateNotificationSetting: (
    setting: AccountNotificationSettingOutput
  ) => Promise<void>
  deleteMe: () => Promise<void>
}

const AccountContext = createContext<AccountProviderContext>({
  fetchMe: () => {},
  account: null,
  isAccountLoading: true,
  refetchAccount: () => {},
  isMutating: false,
  subscribeBill: () => {},
  unsubscribeBill: () => {},
  checkIfBillIsSubscribed: () => false,
  subscribePeople: () => {},
  unsubscribePeople: () => {},
  checkIfPeopleIsSubscribed: () => false,
  bookmarkArticle: async () => false,
  unbookmarkArticle: async () => false,
  checkIfArticleIsBookmarked: () => false,
  updatePassword: async () => {},
  updateName: async () => {},
  updateEmail: async () => {},
  updateNotificationSetting: async () => {},
  deleteMe: async () => {},
})

export const useAccount = () => {
  const context = useContext(AccountContext)
  if (!context) {
    throw new Error('useAccount must be used within a AccountProvider')
  }
  return context
}

export default function AccountProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { lang } = useParams<{ lang: Language }>()
  const { login, logout } = useUAuth()
  const { user, isLoading: isAuth0Loading } = useUser()
  const [account, setAccount] = useState<Account | null>(null)
  const [isAccountLoading, setIsAccountLoading] = useState(true)
  const isMountedRef = useRef(true)

  // Track mounted state to prevent race conditions
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const subscribedBillsSet = useMemo(() => {
    if (!account) return new Set<string>()
    return new Set(account.subscribeBills.map((bill) => bill.id))
  }, [account])
  const subscribedPeoplesSet = useMemo(() => {
    if (!account) return new Set<string>()
    return new Set(account.subscribePeoples.map((people) => people.id))
  }, [account])
  const bookmarkedUstwArticlesSet = useMemo(() => {
    if (!account) return new Set<string>()
    return new Set(account.bookmarkUstwArticles.map((article) => article.id))
  }, [account])
  const bookmarkedKetagalanArticlesSet = useMemo(() => {
    if (!account) return new Set<string>()
    return new Set(
      account.bookmarkKetagalanArticles.map((article) => article.id)
    )
  }, [account])

  const [getMe, { data, refetch }] = useLazyQuery<MeQuery, MeQueryVariables>(
    QUERY_ME,
    {
      fetchPolicy: 'cache-and-network',
    }
  )
  const apolloClient = useApolloClient()

  const fetchMe = useCallback(async () => {
    if (isAuth0Loading) return
    // After Auth0 is cheched, if user is not authenticated, set account loading to false and return
    if (!user) {
      if (isMountedRef.current) {
        setIsAccountLoading(false)
      }
      return
    }

    try {
      if (isMountedRef.current) {
        setIsAccountLoading(true)
      }
      apolloClient.defaultContext.token = await fetch('/api/auth/token')
        .then((res) => res.json())
        .then((data) => data.idToken)
      await getMe({
        context: {
          token: apolloClient.defaultContext.token,
        },
      })
    } catch (error) {
      console.error('Failed to fetch token or user data:', error)
      // Clear token on error to prevent stale token usage
      apolloClient.defaultContext.token = undefined
    } finally {
      if (isMountedRef.current) {
        setIsAccountLoading(false)
      }
    }
  }, [user, isAuth0Loading, apolloClient, getMe])

  useEffect(() => {
    if (isAuth0Loading) return

    fetchMe()
  }, [isAuth0Loading, fetchMe])

  /**
   * Set user data to state
   */
  useEffect(() => {
    if (!data || !user || !data.Me) return

    const account = AccountUtils.parseMeAndAuth0User(lang, data.Me, user)
    if (isMountedRef.current) {
      setAccount(account)
    }
  }, [user, data, setAccount, lang])

  /**
   * Clear account data when user is not authenticated
   */
  useEffect(() => {
    if (isAuth0Loading) return
    // After Auth0 is cheched, if user is authenticated, return
    if (user) return
    if (isMountedRef.current) {
      setAccount(null)
    }
    apolloClient.defaultContext.token = null
  }, [isAuth0Loading, user, setAccount, apolloClient])

  const [isMutating, setIsMutating] = useState(false)
  const { t } = useTranslationClient(['bill', 'people', 'article', 'common'])
  const { toast } = useToast()

  const [gqlSubscribeBill] = useMutation<
    SubscribeBillMutation,
    SubscribeBillMutationVariables
  >(MUTATION_SUBSCRIBE_BILL)
  const [gqlUnsubscribeBill] = useMutation<
    UnsubscribeBillMutation,
    UnsubscribeBillMutationVariables
  >(MUTATION_UNSUBSCRIBE_BILL)
  const [gqlSubscribePeople] = useMutation<
    SubscribePeopleMutation,
    SubscribePeopleMutationVariables
  >(MUTATION_SUBSCRIBE_PEOPLE)
  const [gqlUnsubscribePeople] = useMutation<
    UnsubscribePeopleMutation,
    UnsubscribePeopleMutationVariables
  >(MUTATION_UNSUBSCRIBE_PEOPLE)
  const [gqlBookmarkUstwArticle] = useMutation<
    BookmarkUstwArticleMutation,
    BookmarkUstwArticleMutationVariables
  >(MUTATION_BOOKMARK_USTW_ARTICLE)
  const [gqlUnbookmarkUstwArticle] = useMutation<
    UnbookmarkUstwArticleMutation,
    UnbookmarkUstwArticleMutationVariables
  >(MUTATION_UNBOOKMARK_USTW_ARTICLE)
  const [gqlBookmarkKetagalanArticle] = useMutation<
    BookmarkKetagalanArticleMutation,
    BookmarkKetagalanArticleMutationVariables
  >(MUTATION_BOOKMARK_KETAGALAN_ARTICLE)
  const [gqlUnbookmarkKetagalanArticle] = useMutation<
    UnbookmarkKetagalanArticleMutation,
    UnbookmarkKetagalanArticleMutationVariables
  >(MUTATION_UNBOOKMARK_KETAGALAN_ARTICLE)
  const [gqlUpdateMyPassword] = useMutation<
    UpdateMyPasswordMutation,
    UpdateMyPasswordMutationVariables
  >(MUTATION_UPDATE_MY_PASSWORD)
  const [gqlUpdateMyName] = useMutation<
    UpdateMyNameMutation,
    UpdateMyNameMutationVariables
  >(MUTATION_UPDATE_MY_NAME)
  const [gqlUpdateMyEmail] = useMutation<
    UpdateMyEmailMutation,
    UpdateMyEmailMutationVariables
  >(MUTATION_UPDATE_MY_EMAIL)
  const [gqlUpdateMyNotificationSetting] = useMutation<
    UpdateMyNotificationSettingMutation,
    UpdateMyNotificationSettingMutationVariables
  >(MUTATION_UPDATE_MY_NOTIFICATION_SETTING)
  const [gqlDeleteMe] = useMutation<
    DeleteMeMutation,
    DeleteMeMutationVariables
  >(MUTATION_DELETE_ME)

  const redirectToLogin = useCallback(() => {
    login({
      returnTo: window.location.pathname + window.location.search,
    })
  }, [login])

  /**
   * 在觸發 mutation 前的檢查
   */
  const preMutate = useCallback(() => {
    if (!user) {
      redirectToLogin()
      throw new Error(t('subscribe.login.msg', { ns: 'common' }))
    }
  }, [t, user, redirectToLogin])

  /**
   * 訂閱 bill
   * @param bill - 欲訂閱的 bill
   */
  const subscribeBill = useCallback(
    async (bill: Bill) => {
      try {
        if (!bill.id)
          throw new Error(t('subscribe.error.notFound', { ns: 'bill' }))
        preMutate()

        setIsMutating(true)
        await gqlSubscribeBill({ variables: { billId: bill.id } })
        toast(
          'success',
          t('subscribe.msg', { ns: 'bill', bill: bill.title ?? '' })
        )
        setIsMutating(false)

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after subscribing:',
            fetchError
          )
        }
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
      } finally {
        setIsMutating(false)
      }
    },
    [preMutate, toast, t, gqlSubscribeBill, fetchMe]
  )

  /**
   * 取消訂閱 bill
   * @param bill - 欲訂閱的 bill
   */
  const unsubscribeBill = useCallback(
    async (bill: Bill) => {
      try {
        if (!bill.id)
          throw new Error(t('unsubscribe.error.notFound', { ns: 'bill' }))
        preMutate()

        setIsMutating(true)
        await gqlUnsubscribeBill({ variables: { billId: bill.id } })
        toast(
          'success',
          t('unsubscribe.msg', { ns: 'bill', bill: bill.title ?? '' })
        )
        setIsMutating(false)

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after unsubscribing:',
            fetchError
          )
        }
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
      } finally {
        setIsMutating(false)
      }
    },
    [preMutate, toast, t, gqlUnsubscribeBill, fetchMe]
  )

  /**
   * 檢查 bill 是否訂閱
   * @param bill - 欲檢查的 bill
   */
  const checkIfBillIsSubscribed = useCallback(
    (bill: Bill) => {
      if (!bill.id) return false
      return subscribedBillsSet.has(bill.id)
    },
    [subscribedBillsSet]
  )

  /**
   * 訂閱 people
   * @param people - 欲訂閱的 people
   */
  const subscribePeople = useCallback(
    async (people: People) => {
      try {
        if (!people.id)
          throw new Error(t('subscribe.error.notFound', { ns: 'people' }))
        preMutate()

        setIsMutating(true)
        await gqlSubscribePeople({ variables: { peopleId: people.id } })
        toast(
          'success',
          t('subscribe.msg', { ns: 'people', people: people.name ?? '' })
        )
        setIsMutating(false)

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after subscribing:',
            fetchError
          )
        }
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
      } finally {
        setIsMutating(false)
      }
    },
    [preMutate, toast, t, gqlSubscribePeople, fetchMe]
  )
  /**
   * 取消訂閱 people
   * @param people - 欲訂閱的 people
   */
  const unsubscribePeople = useCallback(
    async (people: People) => {
      try {
        if (!people.id)
          throw new Error(t('unsubscribe.error.notFound', { ns: 'people' }))
        preMutate()

        setIsMutating(true)
        await gqlUnsubscribePeople({ variables: { peopleId: people.id } })
        toast(
          'success',
          t('unsubscribe.msg', { ns: 'people', people: people.name ?? '' })
        )
        setIsMutating(false)

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after unsubscribing:',
            fetchError
          )
        }
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
      } finally {
        setIsMutating(false)
      }
    },
    [preMutate, toast, t, gqlUnsubscribePeople, fetchMe]
  )

  /**
   * 檢查 people 是否訂閱
   * @param people - 欲檢查的 people
   */
  const checkIfPeopleIsSubscribed = useCallback(
    (people: People) => {
      if (!people.id) return false
      return subscribedPeoplesSet.has(people.id)
    },
    [subscribedPeoplesSet]
  )

  /**
   * 收藏文章
   * @param article - 欲收藏的文章
   * @returns 是否成功
   */
  const bookmarkArticle = useCallback(
    async (article: Article): Promise<boolean> => {
      try {
        if (!article.id)
          throw new Error(t('bookmark.error.notFound', { ns: 'article' }))
        preMutate()

        setIsMutating(true)
        if (article.type === ArticleType.Article) {
          await gqlBookmarkUstwArticle({ variables: { articleId: article.id } })
        } else if (article.type === ArticleType.Ketagalan) {
          await gqlBookmarkKetagalanArticle({
            variables: { articleId: article.id },
          })
        }
        setIsMutating(false)

        toast(
          'success',
          t('bookmark.msg', { ns: 'article', article: article.title ?? '' })
        )

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after bookmarking:',
            fetchError
          )
        }
        return true
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
        return false
      } finally {
        setIsMutating(false)
      }
    },
    [
      preMutate,
      toast,
      t,
      gqlBookmarkUstwArticle,
      gqlBookmarkKetagalanArticle,
      fetchMe,
    ]
  )

  /**
   * 取消收藏文章
   * @param article - 欲收藏的文章
   * @returns 是否成功
   */
  const unbookmarkArticle = useCallback(
    async (article: Article): Promise<boolean> => {
      try {
        if (!article.id)
          throw new Error(t('unbookmark.error.notFound', { ns: 'article' }))
        preMutate()

        setIsMutating(true)
        if (article.type === ArticleType.Article) {
          await gqlUnbookmarkUstwArticle({
            variables: { articleId: article.id },
          })
        } else if (article.type === ArticleType.Ketagalan) {
          await gqlUnbookmarkKetagalanArticle({
            variables: { articleId: article.id },
          })
        }
        setIsMutating(false)

        toast(
          'success',
          t('unbookmark.msg', { ns: 'article', article: article.title ?? '' })
        )

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after unbookmarking:',
            fetchError
          )
        }
        return true
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
        return false
      } finally {
        setIsMutating(false)
      }
    },
    [
      preMutate,
      toast,
      t,
      gqlUnbookmarkUstwArticle,
      gqlUnbookmarkKetagalanArticle,
      fetchMe,
    ]
  )

  const checkIfArticleIsBookmarked = useCallback(
    (article: Article) => {
      if (!article.id) return false
      if (article.type === ArticleType.Article) {
        return bookmarkedUstwArticlesSet.has(article.id)
      } else if (article.type === ArticleType.Ketagalan) {
        return bookmarkedKetagalanArticlesSet.has(article.id)
      }
      return false
    },
    [bookmarkedUstwArticlesSet, bookmarkedKetagalanArticlesSet]
  )

  /**
   * 更新密碼
   * @param password - 新密碼
   */
  const updatePassword = useCallback(
    async (password: string) => {
      preMutate()

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyPassword({
          variables: { password },
        })

        if (response.error) {
          console.error('GraphQL error in updatePassword:', response.error)
          throw new Error('Failed to update password')
        }

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after updating password:',
            fetchError
          )
        }
      } catch (error) {
        console.error('Failed to update password:', error)
        throw error
      } finally {
        setIsMutating(false)
      }
    },
    [gqlUpdateMyPassword, fetchMe, preMutate]
  )

  /**
   * 更新姓名
   * @param name - 新姓名
   */
  const updateName = useCallback(
    async (name: string) => {
      preMutate()

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyName({
          variables: { name },
        })

        if (response.error) {
          console.error('GraphQL error in updateName:', response.error)
          throw new Error('Failed to update name')
        }

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after updating name:',
            fetchError
          )
        }
      } catch (error) {
        console.error('Failed to update name:', error)
        throw error
      } finally {
        setIsMutating(false)
      }
    },
    [gqlUpdateMyName, fetchMe, preMutate]
  )

  /**
   * 更新電子郵件
   * @param email - 新電子郵件
   */
  const updateEmail = useCallback(
    async (email: string) => {
      preMutate()

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyEmail({
          variables: { email },
        })

        if (response.error) {
          console.error('GraphQL error in updateEmail:', response.error)
          throw new Error('Failed to update email')
        }

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after updating email:',
            fetchError
          )
        }
      } catch (error) {
        console.error('Failed to update email:', error)
        throw error
      } finally {
        setIsMutating(false)
      }
    },
    [gqlUpdateMyEmail, fetchMe, preMutate]
  )

  /**
   * 更新通知設定
   * @param setting - 通知設定
   */
  const updateNotificationSetting = useCallback(
    async (setting: AccountNotificationSettingOutput) => {
      preMutate()

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyNotificationSetting({
          variables: { notificationSetting: setting },
        })

        if (response.error) {
          console.error(
            'GraphQL error in updateNotificationSetting:',
            response.error
          )
          throw new Error('Failed to update notification setting')
        }

        // refetch me
        try {
          await fetchMe()
        } catch (fetchError) {
          console.error(
            'Failed to refetch user data after updating notification setting:',
            fetchError
          )
        }
      } catch (error) {
        console.error('Failed to update notification setting:', error)
        throw error
      } finally {
        setIsMutating(false)
      }
    },
    [gqlUpdateMyNotificationSetting, fetchMe, preMutate]
  )

  /**
   * 刪除帳戶
   */
  const deleteMe = useCallback(async () => {
    preMutate()

    setIsMutating(true)
    try {
      const response = await gqlDeleteMe()

      if (response.error) {
        console.error('GraphQL error in deleteMe:', response.error)
        throw new Error('Failed to delete account')
      }

      // Logout
      logout()
    } catch (error) {
      console.error('Failed to delete account:', error)
      throw error
    } finally {
      setIsMutating(false)
    }
  }, [gqlDeleteMe, preMutate, logout])

  return (
    <AccountContext.Provider
      value={{
        fetchMe,
        account,
        isAccountLoading,
        refetchAccount: refetch,
        isMutating,
        subscribeBill,
        unsubscribeBill,
        checkIfBillIsSubscribed,
        subscribePeople,
        unsubscribePeople,
        checkIfPeopleIsSubscribed,
        bookmarkArticle,
        unbookmarkArticle,
        checkIfArticleIsBookmarked,
        updatePassword,
        updateName,
        updateEmail,
        updateNotificationSetting,
        deleteMe,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

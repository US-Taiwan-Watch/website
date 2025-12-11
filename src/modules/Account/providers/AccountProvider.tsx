'use client'

import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client'
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
} from '@/modules/Account/graphql/gql'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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
import { AccountSettingOutput } from '@/modules/Account/Setting/business/AccountSetting'
import { AccountNotificationSettingOutput } from '@/modules/Account/Notification/business/AccountNotification'

type AccountProviderContext = {
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
  bookmarkArticle: (article: Article) => void
  unbookmarkArticle: (article: Article) => void
  checkIfArticleIsBookmarked: (article: Article) => boolean
  updateAccountSetting: (setting: AccountSettingOutput) => void
  updatePassword: (password: string) => Promise<void>
  updateName: (name: string) => Promise<void>
  updateEmail: (email: string) => Promise<void>
  updateNotificationSetting: (
    setting: AccountNotificationSettingOutput
  ) => Promise<void>
}

const AccountContext = createContext<AccountProviderContext>({
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
  bookmarkArticle: () => {},
  unbookmarkArticle: () => {},
  checkIfArticleIsBookmarked: () => false,
  updateAccountSetting: () => {},
  updatePassword: async () => {},
  updateName: async () => {},
  updateEmail: async () => {},
  updateNotificationSetting: async () => {},
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
  const { login } = useUAuth()
  const { user, isLoading: isAuth0Loading } = useUser()
  const [account, setAccount] = useState<Account | null>(null)
  const [isAccountLoading, setIsAccountLoading] = useState(true)
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
      setIsAccountLoading(false)
      return
    }

    try {
      setIsAccountLoading(true)
      apolloClient.defaultContext.token = await fetch('/api/auth/token')
        .then((res) => res.json())
        .then((data) => data.idToken)
      await getMe({
        context: {
          token: apolloClient.defaultContext.token,
        },
      })
    } finally {
      setIsAccountLoading(false)
    }
  }, [user, isAuth0Loading, apolloClient.defaultContext, getMe])

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
    setAccount(account)
  }, [user, data, setAccount, lang])

  /**
   * Clear account data when user is not authenticated
   */
  useEffect(() => {
    if (isAuth0Loading) return
    // After Auth0 is cheched, if user is authenticated, return
    if (user) return
    setAccount(null)
    apolloClient.defaultContext.token = null
  }, [isAuth0Loading, user, setAccount, apolloClient.defaultContext, data])

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

  const loginOnceSubscribe = useCallback(() => {
    setTimeout(() => {
      login({
        returnTo: window.location.pathname + window.location.search,
      })
    }, 3000)
  }, [login])

  /**
   * 在觸發 mutation 前的檢查
   */
  const preMutate = useCallback(() => {
    if (!user) {
      loginOnceSubscribe()
      throw new Error(t('subscribe.login.msg', { ns: 'common' }))
    }
  }, [t, user, loginOnceSubscribe])

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
        await fetchMe()
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
        await fetchMe()
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
        await fetchMe()
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
        await fetchMe()
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
   */
  const bookmarkArticle = useCallback(
    async (article: Article) => {
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
        await fetchMe()
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
      } finally {
        setIsMutating(false)
      }
    },
    [
      preMutate,
      toast,
      t,
      user,
      loginOnceSubscribe,
      gqlBookmarkUstwArticle,
      gqlBookmarkKetagalanArticle,
      fetchMe,
    ]
  )

  /**
   * 取消收藏文章
   * @param article - 欲收藏的文章
   */
  const unbookmarkArticle = useCallback(
    async (article: Article) => {
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
        await fetchMe()
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
        }
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

  const updateAccountSetting = useCallback(
    async (setting: AccountSettingOutput) => {
      // TODO: Implement update account setting
      console.log('updateAccountSetting', setting)

      // refetch me
      await fetchMe()
    },
    [fetchMe]
  )

  /**
   * 更新密碼
   * @param password - 新密碼
   */
  const updatePassword = useCallback(
    async (password: string) => {
      if (!user) {
        throw new Error('User not authenticated')
      }

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyPassword({
          variables: { password },
        })

        if (response.errors) {
          throw new Error('Failed to update password')
        }

        // refetch me
        await fetchMe()
      } finally {
        setIsMutating(false)
      }
    },
    [user, gqlUpdateMyPassword, fetchMe]
  )

  /**
   * 更新姓名
   * @param name - 新姓名
   */
  const updateName = useCallback(
    async (name: string) => {
      if (!user) {
        throw new Error('User not authenticated')
      }

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyName({
          variables: { name },
        })

        if (response.errors) {
          throw new Error('Failed to update name')
        }

        // refetch me
        await fetchMe()
      } finally {
        setIsMutating(false)
      }
    },
    [user, gqlUpdateMyName, fetchMe]
  )

  /**
   * 更新電子郵件
   * @param email - 新電子郵件
   */
  const updateEmail = useCallback(
    async (email: string) => {
      if (!user) {
        throw new Error('User not authenticated')
      }

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyEmail({
          variables: { email },
        })

        if (response.errors) {
          throw new Error('Failed to update email')
        }

        // refetch me
        await fetchMe()
      } finally {
        setIsMutating(false)
      }
    },
    [user, gqlUpdateMyEmail, fetchMe]
  )

  /**
   * 更新通知設定
   * @param setting - 通知設定
   */
  const updateNotificationSetting = useCallback(
    async (setting: AccountNotificationSettingOutput) => {
      if (!user) {
        throw new Error('User not authenticated')
      }

      setIsMutating(true)
      try {
        const response = await gqlUpdateMyNotificationSetting({
          variables: { notificationSetting: setting },
        })

        if (response.errors) {
          throw new Error('Failed to update notification setting')
        }

        // refetch me
        await fetchMe()
      } finally {
        setIsMutating(false)
      }
    },
    [user, gqlUpdateMyNotificationSetting, fetchMe]
  )

  return (
    <AccountContext.Provider
      value={{
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
        updateAccountSetting,
        updatePassword,
        updateName,
        updateEmail,
        updateNotificationSetting,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

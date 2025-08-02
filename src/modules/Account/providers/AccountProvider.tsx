'use client'

import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client'
import {
  MUTATION_BOOKMARK_USTW_ARTICLE,
  MUTATION_BOOKMARK_KETAGALAN_ARTICLE,
  MUTATION_SUBSCRIBE_BILL,
  MUTATION_SUBSCRIBE_PEOPLE,
  QUERY_ME,
} from '@/modules/Account/graphql/gql'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
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
} from '@/common/lib/graphql/__generated__/graphql'
import AccountUtils from '@/modules/Account/business/Account'
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

type AccountProviderContext = {
  refetchAccount: () => void
  isMutating: boolean
  subscribeBill: (bill: Bill) => void
  checkIfBillIsSubscribed: (bill: Bill) => boolean
  subscribePeople: (people: People) => void
  checkIfPeopleIsSubscribed: (people: People) => boolean
  bookmarkArticle: (article: Article) => void
  checkIfArticleIsBookmarked: (article: Article) => boolean
}

const AccountContext = createContext<AccountProviderContext>({
  refetchAccount: () => {},
  isMutating: false,
  subscribeBill: () => {},
  checkIfBillIsSubscribed: () => false,
  subscribePeople: () => {},
  checkIfPeopleIsSubscribed: () => false,
  bookmarkArticle: () => {},
  checkIfArticleIsBookmarked: () => false,
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
  const { user, isLoading } = useUser()
  const setAccount = useAccountStore.use.setAccount()
  const account = useAccountStore.use.account()
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
    if (!user || isLoading) return

    apolloClient.defaultContext.token = await fetch('/api/auth/token')
      .then((res) => res.json())
      .then((data) => data.idToken)
    getMe({
      context: {
        token: apolloClient.defaultContext.token,
      },
    })
  }, [user, isLoading, apolloClient.defaultContext, getMe])

  /**
   * Set Id_Token to Apollo Client and get user data
   */
  useEffect(() => {
    fetchMe()
  }, [fetchMe])

  /**
   * Set user data to AccountStore
   */
  useEffect(() => {
    if (!user || isLoading) return
    if (!data) return

    const me = data.Me
    if (!me || !user) return

    const account = AccountUtils.parseMeAndAuth0User(lang, me, user)
    setAccount(account)
  }, [isLoading, user, data, setAccount, lang])

  /**
   * Clear account data when user is not authenticated
   */
  useEffect(() => {
    if (user || isLoading) return
    setAccount(null)
    apolloClient.defaultContext.token = null
  }, [isLoading, user, setAccount, apolloClient.defaultContext])

  // ----- 訂閱相關 -----
  const [isMutating, setIsMutating] = useState(false)
  const { t } = useTranslationClient(['bill', 'people', 'article', 'common'])
  const { toast } = useToast()

  const [gqlSubscribeBill] = useMutation<
    SubscribeBillMutation,
    SubscribeBillMutationVariables
  >(MUTATION_SUBSCRIBE_BILL)
  const [gqlSubscribePeople] = useMutation<
    SubscribePeopleMutation,
    SubscribePeopleMutationVariables
  >(MUTATION_SUBSCRIBE_PEOPLE)
  const [gqlBookmarkUstwArticle] = useMutation<
    BookmarkUstwArticleMutation,
    BookmarkUstwArticleMutationVariables
  >(MUTATION_BOOKMARK_USTW_ARTICLE)
  const [gqlBookmarkKetagalanArticle] = useMutation<
    BookmarkKetagalanArticleMutation,
    BookmarkKetagalanArticleMutationVariables
  >(MUTATION_BOOKMARK_KETAGALAN_ARTICLE)

  const loginOnceSubscribe = useCallback(() => {
    toast('warning', t('subscribe.login.msg', { ns: 'common' }))
    setTimeout(() => {
      login({
        returnTo: window.location.pathname + window.location.search,
      })
    }, 3000)
  }, [login, t, toast])

  /**
   * 訂閱 bill
   * @param bill - 欲訂閱的 bill
   */
  const subscribeBill = useCallback(
    async (bill: Bill) => {
      if (!user) {
        loginOnceSubscribe()
        return
      }

      if (!bill.id) return
      setIsMutating(true)
      await gqlSubscribeBill({ variables: { billId: bill.id } })
      toast(
        'success',
        t('subscribe.msg', { ns: 'bill', bill: bill.title ?? '' })
      )
      setIsMutating(false)

      // refetch me
      await fetchMe()
    },
    [toast, t, user, loginOnceSubscribe, gqlSubscribeBill, fetchMe]
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
      if (!user) {
        loginOnceSubscribe()
        return
      }

      if (!people.id) return
      setIsMutating(true)
      await gqlSubscribePeople({ variables: { peopleId: people.id } })
      toast(
        'success',
        t('subscribe.msg', { ns: 'people', people: people.name ?? '' })
      )
      setIsMutating(false)

      // refetch me
      await fetchMe()
    },
    [toast, t, user, loginOnceSubscribe, gqlSubscribePeople, fetchMe]
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
      if (!user) {
        loginOnceSubscribe()
        return
      }

      if (!article.id) return

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
    },
    [toast, t, user, loginOnceSubscribe, gqlBookmarkUstwArticle, fetchMe]
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

  return (
    <AccountContext.Provider
      value={{
        refetchAccount: refetch,
        isMutating,
        subscribeBill,
        checkIfBillIsSubscribed,
        subscribePeople,
        checkIfPeopleIsSubscribed,
        bookmarkArticle,
        checkIfArticleIsBookmarked,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

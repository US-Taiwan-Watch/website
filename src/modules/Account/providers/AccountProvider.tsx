'use client'

import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client'
import {
  MUTATION_BOOKMARK_ARTICLE,
  MUTATION_SUBSCRIBE_BILL,
  MUTATION_SUBSCRIBE_PEOPLE,
  QUERY_ME,
} from '@/modules/Account/graphql/gql'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import { createContext, useCallback, useContext, useEffect } from 'react'
import {
  MeQuery,
  MeQueryVariables,
  SubscribeBillMutation,
  SubscribeBillMutationVariables,
  SubscribePeopleMutationVariables,
  SubscribePeopleMutation,
  BookmarkArticleMutation,
  BookmarkArticleMutationVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import AccountUtils from '@/modules/Account/business/Account'
import type React from 'react'
import { useToast } from '@/common/providers/ToastProvider'
import { Bill } from '@/modules/Bill/business/Bill'
import { People } from '@/modules/People/business/People'
import { Article } from '@/modules/Article/business/Article'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useUser } from '@auth0/nextjs-auth0'
import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'

type AccountProviderContext = {
  refetchAccount: () => void
  subscribeBill: (bill: Bill) => void
  subscribePeople: (people: People) => void
  bookmarkArticle: (article: Article) => void
}

const AccountContext = createContext<AccountProviderContext>({
  refetchAccount: () => {},
  subscribeBill: () => {},
  subscribePeople: () => {},
  bookmarkArticle: () => {},
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
  const { login } = useUAuth()
  const { user, isLoading } = useUser()
  const { setAccount } = useAccountStore()
  const [getMe, { data, refetch }] = useLazyQuery<MeQuery, MeQueryVariables>(
    QUERY_ME,
    {
      fetchPolicy: 'cache-and-network',
    }
  )
  const apolloClient = useApolloClient()

  /**
   * Set Id_Token to Apollo Client and get user data
   */
  useEffect(() => {
    ;(async () => {
      if (!user || isLoading) return

      apolloClient.defaultContext.token = await fetch('/api/auth/token')
        .then((res) => res.json())
        .then((data) => data.idToken)
      getMe({
        context: {
          token: apolloClient.defaultContext.token,
        },
      })
    })()
  }, [user, apolloClient.defaultContext, getMe, isLoading])

  /**
   * Set user data to AccountStore
   */
  useEffect(() => {
    if (!user || isLoading) return
    if (!data) return

    const me = data.Me
    if (!me || !user) return

    const account = AccountUtils.parseMeAndAuth0User(me, user)
    setAccount(account)
  }, [isLoading, user, data, setAccount])

  /**
   * Clear account data when user is not authenticated
   */
  useEffect(() => {
    if (user || isLoading) return
    setAccount(null)
    apolloClient.defaultContext.token = null
  }, [isLoading, user, setAccount, apolloClient.defaultContext])

  // ----- 訂閱相關 -----
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
  const [gqlBookmarkArticle] = useMutation<
    BookmarkArticleMutation,
    BookmarkArticleMutationVariables
  >(MUTATION_BOOKMARK_ARTICLE)

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
      await gqlSubscribeBill({ variables: { billId: bill.id } })
      toast(
        'success',
        t('subscribe.msg', { ns: 'bill', bill: bill.title ?? '' })
      )
    },
    [toast, t, user, loginOnceSubscribe, gqlSubscribeBill]
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
      await gqlSubscribePeople({ variables: { peopleId: people.id } })
      toast(
        'success',
        t('subscribe.msg', { ns: 'people', people: people.name ?? '' })
      )
    },
    [toast, t, user, loginOnceSubscribe, gqlSubscribePeople]
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
      await gqlBookmarkArticle({ variables: { articleId: article.id } })
      toast(
        'success',
        t('bookmark.msg', { ns: 'article', article: article.title ?? '' })
      )
    },
    [toast, t, user, loginOnceSubscribe, gqlBookmarkArticle]
  )

  return (
    <AccountContext.Provider
      value={{
        refetchAccount: refetch,
        subscribeBill,
        subscribePeople,
        bookmarkArticle,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

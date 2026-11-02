'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHStack from '@/common/components/atoms/UHStack'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import {
  AccountSubscribe,
  AccountSubscribeType,
} from '@/modules/Account/Subscribe/business/AccountSubscribe'
import { Box, CircularProgress, Stack } from '@mui/material'
import { memo, useCallback, useEffect, useMemo } from 'react'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import Link from 'next/link'
import { CloseIcon, ExternalLinkIcon } from '@/common/styles/assets/Icons'
import UIconButton from '@/common/components/atoms/UIconButton'
import useAccountSubscribeStore from '@/modules/Account/Subscribe/hooks/useAccountSubscribeStore'
import AccountUtils from '@/modules/Account/business/Account'
import { useQuery, useLazyQuery } from '@apollo/client/react'
import { QUERY_ME_SUBSCRIBES } from '@/modules/Account/graphql/gql'
import {
  BillQuery,
  BillQueryVariables,
  KetagalanArticleQuery,
  KetagalanArticleQueryVariables,
  PeopleQuery,
  PeopleQueryVariables,
  QueryMeSubscribesQuery,
  QueryMeSubscribesQueryVariables,
  UstwArticleQuery,
  UstwArticleQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { QUERY_BILL } from '@/modules/Bill/graphql/gql'
import { QUERY_PEOPLE } from '@/modules/People/graphql/gql'
import {
  QUERY_KETAGALAN_ARTICLE,
  QUERY_USTW_ARTICLE,
} from '@/modules/Article/graphql/gql'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { PeopleUtils } from '@/modules/People/business/People'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'
import { useToast } from '@/common/providers/ToastProvider'

type AccountSubscribeListItemProps = {
  accountSubscribe: AccountSubscribe
}

const AccountSubscribeListItem = memo(function AccountSubscribeListItem({
  accountSubscribe,
}: AccountSubscribeListItemProps) {
  const { t, i18n } = useTranslationClient('account')
  const { isCompactView } = useAccountLayout()
  const { unsubscribeBill, unsubscribePeople, unbookmarkArticle } = useAccount()

  const [getBill] = useLazyQuery<BillQuery, BillQueryVariables>(QUERY_BILL)
  const [getPeople] = useLazyQuery<PeopleQuery, PeopleQueryVariables>(
    QUERY_PEOPLE
  )
  const [getUstwArticle] = useLazyQuery<
    UstwArticleQuery,
    UstwArticleQueryVariables
  >(QUERY_USTW_ARTICLE)
  const [getKetagalanArticle] = useLazyQuery<
    KetagalanArticleQuery,
    KetagalanArticleQueryVariables
  >(QUERY_KETAGALAN_ARTICLE)

  const { toast } = useToast()
  const handleUnsubscribe = useCallback(async () => {
    try {
      const lang = i18n.language as Language
      if (accountSubscribe.type === AccountSubscribeType.Bill) {
        const data = (
          await getBill({
            variables: {
              id: accountSubscribe.id,
            },
          })
        ).data?.Bill
        if (!data) throw new Error('Bill not found')
        const bill = BillUtils.parse(lang, data)
        unsubscribeBill(bill)
      } else if (accountSubscribe.type === AccountSubscribeType.People) {
        const data = (
          await getPeople({
            variables: {
              id: accountSubscribe.id,
            },
          })
        ).data?.People
        if (!data) throw new Error('People not found')
        unsubscribePeople(PeopleUtils.parse(lang, data))
      } else if (accountSubscribe.type === AccountSubscribeType.UstwArticle) {
        const data = (
          await getUstwArticle({
            variables: {
              id: accountSubscribe.id,
            },
          })
        ).data?.UstwArticle
        if (!data) throw new Error('UstwArticle not found')
        unbookmarkArticle(ArticleUtils.parse(lang, data, ArticleType.Article))
      } else if (
        accountSubscribe.type === AccountSubscribeType.KetagalanArticle
      ) {
        const data = (
          await getKetagalanArticle({
            variables: {
              id: accountSubscribe.id,
            },
          })
        ).data?.KetagalanArticle
        if (!data) throw new Error('KetagalanArticle not found')
        unbookmarkArticle(ArticleUtils.parse(lang, data, ArticleType.Ketagalan))
      }
      toast(
        'success',
        t('unsubscribe.msg.success', {
          ns: 'account',
          title: accountSubscribe.title,
        })
      )
    } catch {
      toast(
        'error',
        t('unsubscribe.msg.error', {
          ns: 'account',
          title: accountSubscribe.title,
        })
      )
    }
  }, [
    i18n,
    accountSubscribe,
    unsubscribeBill,
    unsubscribePeople,
    unbookmarkArticle,
    getBill,
    getPeople,
    getUstwArticle,
    getKetagalanArticle,
    toast,
    t,
  ])

  return (
    <UHStack
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: 4,
        py: 2,
      }}
    >
      <UHStack alignItems="center" gap={isCompactView ? 1.5 : 3.75}>
        <Box
          sx={{
            minWidth: isCompactView ? '46px' : '100px',
            textAlign: 'center',
            px: isCompactView ? 0.75 : 3.125,
            py: isCompactView ? 0.75 : 0.75,
            color: 'indigo.1000',
            fontSize: isCompactView ? '0.625rem' : '0.875rem',
            fontWeight: 600,
            borderRadius: '9.35px',
            borderColor: 'grey.1400',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: 'grey.2600',
          }}
        >
          {t(`subscribe.type.${accountSubscribe.type}`, { ns: 'account' })}
        </Box>
        <UHeightLimitedText
          maxLine={2}
          variant="bodyS"
          color="grey.4400"
          fontWeight={'600 !important'}
        >
          {accountSubscribe.title}
        </UHeightLimitedText>
      </UHStack>
      <UHStack gap={isCompactView ? 0 : 1.5}>
        <Link
          href={accountSubscribe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIconButton variant="text" color="info" size="xs">
            <ExternalLinkIcon
              sx={{
                width: 14,
                height: 14,
                color: 'grey.4500',
              }}
            />
          </UIconButton>
        </Link>
        <UIconButton
          variant="text"
          color="info"
          size="xs"
          onClick={handleUnsubscribe}
        >
          <CloseIcon
            sx={{
              width: 14,
              height: 14,
              color: 'grey.4500',
            }}
          />
        </UIconButton>
      </UHStack>
    </UHStack>
  )
})

const AccountSubscribeList = memo(function AccountSubscribeList() {
  const { lang } = useParams<{ lang: Language }>()
  const { data, loading } = useQuery<
    QueryMeSubscribesQuery,
    QueryMeSubscribesQueryVariables
  >(QUERY_ME_SUBSCRIBES, {
    fetchPolicy: 'cache-and-network',
  })

  const setSubscribeBills = useAccountSubscribeStore.use.setSubscribeBills()
  const subscribeBills = useAccountSubscribeStore.use.subscribeBills()
  const setSubscribePeoples = useAccountSubscribeStore.use.setSubscribePeoples()
  const subscribePeoples = useAccountSubscribeStore.use.subscribePeoples()
  const setBookmarkUstwArticles =
    useAccountSubscribeStore.use.setBookmarkUstwArticles()
  const bookmarkUstwArticles =
    useAccountSubscribeStore.use.bookmarkUstwArticles()
  const setBookmarkKetagalanArticles =
    useAccountSubscribeStore.use.setBookmarkKetagalanArticles()
  const bookmarkKetagalanArticles =
    useAccountSubscribeStore.use.bookmarkKetagalanArticles()

  useEffect(() => {
    if (!data?.Me) return

    const subscribeBills = AccountUtils.parseSubscribeBills(
      lang,
      data.Me.subscribeBills
    )
    const subscribePeoples = AccountUtils.parseSubscribePeoples(
      lang,
      data.Me.subscribePeoples
    )
    const bookmarkUstwArticles = AccountUtils.parseBookmarkUstwArticles(
      lang,
      data.Me.bookmarkUstwArticles
    )
    const bookmarkKetagalanArticles =
      AccountUtils.parseBookmarkKetagalanArticles(
        lang,
        data.Me.bookmarkKetagalanArticles
      )

    setSubscribeBills(subscribeBills)
    setSubscribePeoples(subscribePeoples)
    setBookmarkUstwArticles(bookmarkUstwArticles)
    setBookmarkKetagalanArticles(bookmarkKetagalanArticles)
  }, [
    data,
    lang,
    setSubscribeBills,
    setSubscribePeoples,
    setBookmarkUstwArticles,
    setBookmarkKetagalanArticles,
  ])

  const currentAccountSubscribeType =
    useAccountSubscribeStore.use.currentAccountSubscribeType()
  const filteredAccountSubscribeList = useMemo(() => {
    if (!currentAccountSubscribeType)
      return [
        ...subscribeBills,
        ...subscribePeoples,
        ...bookmarkUstwArticles,
        ...bookmarkKetagalanArticles,
      ]

    switch (currentAccountSubscribeType) {
      case AccountSubscribeType.Bill:
        return subscribeBills
      case AccountSubscribeType.People:
        return subscribePeoples
      case AccountSubscribeType.UstwArticle:
        return bookmarkUstwArticles
      case AccountSubscribeType.KetagalanArticle:
        return bookmarkKetagalanArticles
    }
  }, [
    subscribeBills,
    subscribePeoples,
    bookmarkUstwArticles,
    bookmarkKetagalanArticles,
    currentAccountSubscribeType,
  ])

  const { isCompactView } = useAccountLayout()

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress color="info" />
      </Box>
    )
  }

  if (isCompactView) {
    return (
      <UFullWidthBackgroundBox>
        <Stack
          width="100%"
          sx={{
            backgroundColor: 'grey.100',
          }}
        >
          {filteredAccountSubscribeList.map((accountSubscribe) => (
            <Box
              key={accountSubscribe.id}
              sx={{
                '&:not(:last-child)': {
                  borderBottomColor: 'grey.4600',
                  borderBottomWidth: 1,
                  borderBottomStyle: 'solid',
                },
              }}
            >
              <AccountSubscribeListItem accountSubscribe={accountSubscribe} />
            </Box>
          ))}
        </Stack>
      </UFullWidthBackgroundBox>
    )
  }

  return (
    <Stack width="100%">
      {filteredAccountSubscribeList.map((accountSubscribe) => (
        <Box
          key={accountSubscribe.id}
          sx={{
            '&:not(:last-child)': {
              borderBottomColor: 'grey.4600',
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
            },
          }}
        >
          <AccountSubscribeListItem accountSubscribe={accountSubscribe} />
        </Box>
      ))}
    </Stack>
  )
})

export default AccountSubscribeList

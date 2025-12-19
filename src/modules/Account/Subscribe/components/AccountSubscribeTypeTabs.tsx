'use client'

import UButton from '@/common/components/atoms/UButton'
import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHStack from '@/common/components/atoms/UHStack'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { AccountSubscribeType } from '@/modules/Account/Subscribe/business/AccountSubscribe'
import useAccountSubscribeStore from '@/modules/Account/Subscribe/hooks/useAccountSubscribeStore'
import { Box } from '@mui/material'
import { memo, useMemo } from 'react'
import type React from 'react'

const TabCount = ({ count }: { count: number }) => {
  const { isCompactView } = useAccountLayout()

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'common.black',
        borderRadius: '25px',
        px: '4.8px !important',
        py: '1.6px !important',
        fontSize: isCompactView ? '8px !important' : '9.6px !important',
        fontWeight: 500,
        height: '20px',
        minWidth: '20px',
        textAlign: 'center',
        lineHeight: '18px',
      }}
    >
      {count}
    </Box>
  )
}

type AccountSubscribeTypeTab = {
  label: string
  value: AccountSubscribeType
  count: number
}

const TabsWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isCompactView } = useAccountLayout()

  if (isCompactView) {
    return (
      <UFullWidthBackgroundBox
        backgroundColor="neutral.100"
        containerSx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <UContainer
          sx={{
            px: 0,
          }}
        >
          {children}
        </UContainer>
      </UFullWidthBackgroundBox>
    )
  }

  return children
}

const AccountSubscribeTypeTabs = memo(function AccountSubscribeTypeTabs() {
  const { account } = useAccount()
  const currentAccountSubscribeType =
    useAccountSubscribeStore.use.currentAccountSubscribeType()
  const setCurrentAccountSubscribeType =
    useAccountSubscribeStore.use.setCurrentAccountSubscribeType()
  const subscribeBills = useAccountSubscribeStore.use.subscribeBills()
  const subscribePeoples = useAccountSubscribeStore.use.subscribePeoples()
  const bookmarkUstwArticles =
    useAccountSubscribeStore.use.bookmarkUstwArticles()
  const bookmarkKetagalanArticles =
    useAccountSubscribeStore.use.bookmarkKetagalanArticles()
  const { t } = useTranslationClient('account')
  const { isCompactView } = useAccountLayout()

  const tabs = useMemo<AccountSubscribeTypeTab[]>(() => {
    return [
      {
        label: t('subscribe.type.bill', { ns: 'account' }),
        value: AccountSubscribeType.Bill,
        count: subscribeBills.length ?? 0,
      },
      {
        label: t('subscribe.type.ustwArticle', { ns: 'account' }),
        value: AccountSubscribeType.UstwArticle,
        count: bookmarkUstwArticles.length ?? 0,
      },
      {
        label: t('subscribe.type.ketagalanArticle', { ns: 'account' }),
        value: AccountSubscribeType.KetagalanArticle,
        count: bookmarkKetagalanArticles.length ?? 0,
      },
      {
        label: t('subscribe.type.people', { ns: 'account' }),
        value: AccountSubscribeType.People,
        count: subscribePeoples.length ?? 0,
      },
    ]
  }, [
    t,
    account,
    subscribeBills,
    subscribePeoples,
    bookmarkUstwArticles,
    bookmarkKetagalanArticles,
  ])

  return (
    <TabsWrapper>
      <UHStack
        gap={1}
        px={isCompactView ? 4 : 2}
        sx={{
          width: isCompactView ? '100%' : 'auto',
          overflowX: 'auto',
          flexWrap: 'nowrap',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        {tabs.map((tab) => (
          <UButton
            key={tab.value}
            variant="contained"
            color="info"
            rounded
            onClick={() => {
              if (currentAccountSubscribeType !== tab.value) {
                setCurrentAccountSubscribeType(tab.value)
              } else {
                setCurrentAccountSubscribeType(null)
              }
            }}
            sx={{
              ...(currentAccountSubscribeType &&
                currentAccountSubscribeType !== tab.value && {
                  opacity: 0.5,
                }),
              px: isCompactView ? '8px !important' : '12px !important',
              py: isCompactView ? '6px !important' : '7.2px !important',
              fontSize: isCompactView ? '12px !important' : '12.8px !important',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            endIcon={<TabCount count={tab.count} />}
            size="small"
          >
            {tab.label}
          </UButton>
        ))}
      </UHStack>
    </TabsWrapper>
  )
})

export default AccountSubscribeTypeTabs

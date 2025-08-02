'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import { AccountSubscribeType } from '@/modules/Account/Subscribe/business/AccountSubscribe'
import useAccountSubscribeStore from '@/modules/Account/Subscribe/hooks/useAccountSubscribeStore'
import { Box } from '@mui/material'
import { memo, useMemo } from 'react'

const TabCount = ({ count }: { count: number }) => {
  const { isNarrow } = useAccountLayout()

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'common.black',
        borderRadius: '25px',
        px: '4.8px !important',
        py: '1.6px !important',
        fontSize: isNarrow ? '8px !important' : '9.6px !important',
        fontWeight: 500,
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

const AccountSubscribeTypeTabs = memo(function AccountSubscribeTypeTabs() {
  const { account } = useAccountStore()
  const currentAccountSubscribeType =
    useAccountSubscribeStore.use.currentAccountSubscribeType()
  const setCurrentAccountSubscribeType =
    useAccountSubscribeStore.use.setCurrentAccountSubscribeType()
  const { t } = useTranslationClient('account')
  const { isNarrow } = useAccountLayout()

  const tabs = useMemo<AccountSubscribeTypeTab[]>(() => {
    return [
      {
        label: t('subscribe.type.bill', { ns: 'account' }),
        value: AccountSubscribeType.Bill,
        count: account?.subscribeBills.length ?? 0,
      },
      {
        label: t('subscribe.type.ustwArticle', { ns: 'account' }),
        value: AccountSubscribeType.UstwArticle,
        count: account?.bookmarkUstwArticles.length ?? 0,
      },
      {
        label: t('subscribe.type.ketagalanArticle', { ns: 'account' }),
        value: AccountSubscribeType.KetagalanArticle,
        count: account?.bookmarkKetagalanArticles.length ?? 0,
      },
      {
        label: t('subscribe.type.people', { ns: 'account' }),
        value: AccountSubscribeType.People,
        count: account?.subscribePeoples.length ?? 0,
      },
    ]
  }, [t, account])

  return (
    <UHStack
      gap={1}
      width={isNarrow ? '100%' : 'auto'}
      justifyContent={isNarrow ? 'space-between' : 'flex-start'}
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
            px: isNarrow ? '8px !important' : '12px !important',
            py: isNarrow ? '6px !important' : '7.2px !important',
            fontSize: isNarrow ? '12px !important' : '12.8px !important',
            fontWeight: 500,
            flex: isNarrow ? '1 1 0' : 'none',
          }}
          endIcon={<TabCount count={tab.count} />}
          size="small"
        >
          {tab.label}
        </UButton>
      ))}
    </UHStack>
  )
})

export default AccountSubscribeTypeTabs

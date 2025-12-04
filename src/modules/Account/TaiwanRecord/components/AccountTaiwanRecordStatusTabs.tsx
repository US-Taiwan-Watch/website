'use client'

import UButton from '@/common/components/atoms/UButton'
import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHStack from '@/common/components/atoms/UHStack'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import { TaiwanRecordStatus } from '@/modules/TaiwanRecord/business/TaiwanRecord'
import useAccountTaiwanRecordStore from '@/modules/Account/TaiwanRecord/hooks/useAccountTaiwanRecordStore'
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

type AccountTaiwanRecordStatusTab = {
  label: string
  value: TaiwanRecordStatus
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

const AccountTaiwanRecordStatusTabs = memo(
  function AccountTaiwanRecordStatusTabs() {
    const accountTaiwanRecordList =
      useAccountTaiwanRecordStore.use.accountTaiwanRecordList()
    const currentAccountTaiwanRecordStatus =
      useAccountTaiwanRecordStore.use.currentAccountTaiwanRecordStatus()
    const setCurrentAccountTaiwanRecordStatus =
      useAccountTaiwanRecordStore.use.setCurrentAccountTaiwanRecordStatus()
    const { t } = useTranslationClient('account')
    const { isCompactView } = useAccountLayout()

    const tabs = useMemo<AccountTaiwanRecordStatusTab[]>(() => {
      return [
        {
          label: t('taiwanRecord.status.approved', { ns: 'account' }),
          value: TaiwanRecordStatus.Approved,
          count:
            accountTaiwanRecordList.filter(
              (taiwanRecord) =>
                taiwanRecord.status === TaiwanRecordStatus.Approved
            ).length ?? 0,
        },
        {
          label: t('taiwanRecord.status.drafted', { ns: 'account' }),
          value: TaiwanRecordStatus.Drafted,
          count:
            accountTaiwanRecordList.filter(
              (taiwanRecord) =>
                taiwanRecord.status === TaiwanRecordStatus.Drafted
            ).length ?? 0,
        },
        {
          label: t('taiwanRecord.status.rejected', { ns: 'account' }),
          value: TaiwanRecordStatus.Rejected,
          count:
            accountTaiwanRecordList.filter(
              (taiwanRecord) =>
                taiwanRecord.status === TaiwanRecordStatus.Rejected
            ).length ?? 0,
        },
      ]
    }, [t, accountTaiwanRecordList])

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
                if (currentAccountTaiwanRecordStatus !== tab.value) {
                  setCurrentAccountTaiwanRecordStatus(tab.value)
                } else {
                  setCurrentAccountTaiwanRecordStatus(null)
                }
              }}
              sx={{
                ...(currentAccountTaiwanRecordStatus &&
                  currentAccountTaiwanRecordStatus !== tab.value && {
                    opacity: 0.5,
                  }),
                px: isCompactView ? '8px !important' : '12px !important',
                py: isCompactView ? '6px !important' : '7.2px !important',
                fontSize: isCompactView
                  ? '12px !important'
                  : '12.8px !important',
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
  }
)

export default AccountTaiwanRecordStatusTabs

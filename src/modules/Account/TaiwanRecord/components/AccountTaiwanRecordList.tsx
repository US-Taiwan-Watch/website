'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHStack from '@/common/components/atoms/UHStack'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Box, Stack } from '@mui/material'
import { memo, useCallback, useEffect, useState } from 'react'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import useAccountTaiwanRecordStore from '@/modules/Account/TaiwanRecord/hooks/useAccountTaiwanRecordStore'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import {
  TaiwanRecord,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import TaiwanRecordDialog from '@/modules/TaiwanRecord/components/TaiwanRecordDialog'

type AccountTaiwanRecordListItemProps = {
  taiwanRecord: TaiwanRecord
  onClick: (taiwanRecord: TaiwanRecord) => void
}

const AccountTaiwanRecordListItem = memo(function AccountTaiwanRecordListItem({
  taiwanRecord,
  onClick,
}: AccountTaiwanRecordListItemProps) {
  const { t } = useTranslationClient('account')
  const { isCompactView } = useAccountLayout()

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
          {t(`taiwanRecord.status.${taiwanRecord.status}`, { ns: 'account' })}
        </Box>
        <UHeightLimitedText
          maxLine={2}
          variant="bodyS"
          color="grey.4400"
          fontWeight={'600 !important'}
          onClick={() => onClick(taiwanRecord)}
          sx={{
            cursor: 'pointer',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {taiwanRecord.title}
        </UHeightLimitedText>
      </UHStack>
    </UHStack>
  )
})

const AccountTaiwanRecordList = memo(function AccountTaiwanRecordList() {
  const { account, fetchMe } = useAccount()
  const setAccountTaiwanRecordList =
    useAccountTaiwanRecordStore.use.setAccountTaiwanRecordList()
  useEffect(() => {
    if (!account) return
    setAccountTaiwanRecordList(account.submittedTaiwanRecords)
  }, [account, setAccountTaiwanRecordList])

  const filteredAccountTaiwanRecordList =
    useAccountTaiwanRecordStore.use.filteredAccountTaiwanRecordList()
  const { isCompactView } = useAccountLayout()

  const [taiwanRecordForDialog, setTaiwanRecordForDialog] =
    useState<TaiwanRecord | null>(null)
  const [isTaiwanRecordDialogOpen, setIsTaiwanRecordDialogOpen] =
    useState(false)
  const handleTaiwanRecordClick = useCallback((taiwanRecord: TaiwanRecord) => {
    setTaiwanRecordForDialog(taiwanRecord)
    setIsTaiwanRecordDialogOpen(true)
  }, [])
  const handleTaiwanRecordDialogClose = useCallback(() => {
    setTaiwanRecordForDialog(null)
    setIsTaiwanRecordDialogOpen(false)
  }, [])

  const onSubmit = useCallback(() => {
    /**
     * 重新獲取使用者資料
     */
    fetchMe()
  }, [fetchMe])

  if (isCompactView) {
    return (
      <UFullWidthBackgroundBox>
        <Stack
          width="100%"
          sx={{
            backgroundColor: 'grey.100',
          }}
        >
          {filteredAccountTaiwanRecordList.map((taiwanRecord) => (
            <Box
              key={taiwanRecord.id}
              sx={{
                '&:not(:last-child)': {
                  borderBottomColor: 'grey.4600',
                  borderBottomWidth: 1,
                  borderBottomStyle: 'solid',
                },
              }}
            >
              <AccountTaiwanRecordListItem
                taiwanRecord={taiwanRecord}
                onClick={handleTaiwanRecordClick}
              />
            </Box>
          ))}
        </Stack>
      </UFullWidthBackgroundBox>
    )
  }

  return (
    <Stack width="100%">
      {filteredAccountTaiwanRecordList.map((taiwanRecord) => (
        <Box
          key={taiwanRecord.id}
          sx={{
            '&:not(:last-child)': {
              borderBottomColor: 'grey.4600',
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
            },
          }}
        >
          <AccountTaiwanRecordListItem
            taiwanRecord={taiwanRecord}
            onClick={handleTaiwanRecordClick}
          />
        </Box>
      ))}
      {taiwanRecordForDialog && (
        <TaiwanRecordDialog
          mode={
            TaiwanRecordUtils.isReadonly(taiwanRecordForDialog)
              ? 'view'
              : 'update'
          }
          peopleId={taiwanRecordForDialog.peopleId}
          taiwanRecord={taiwanRecordForDialog}
          open={isTaiwanRecordDialogOpen}
          onClose={handleTaiwanRecordDialogClose}
          onSubmitTaiwanRecord={onSubmit}
        />
      )}
    </Stack>
  )
})

export default AccountTaiwanRecordList

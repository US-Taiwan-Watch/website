'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHStack from '@/common/components/atoms/UHStack'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import useAccountTaiwanRecordStore from '@/modules/Account/TaiwanRecord/hooks/useAccountTaiwanRecordStore'
import {
  TaiwanRecord,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import TaiwanRecordDialog from '@/modules/TaiwanRecord/components/TaiwanRecordDialog'
import { useQuery } from '@apollo/client/react'
import { QUERY_ME_SUBMITTED_TAIWAN_RECORDS } from '@/modules/Account/graphql/gql'
import AccountUtils from '@/modules/Account/business/Account'
import {
  QueryMeSubmittedTaiwanRecordsQuery,
  QueryMeSubmittedTaiwanRecordsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'

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
        <Stack
          onClick={() => onClick(taiwanRecord)}
          sx={{
            cursor: 'pointer',
            ':hover': {
              '& > .MuiTypography-root': {
                textDecoration: 'underline',
              },
            },
          }}
        >
          <UHeightLimitedText
            maxLine={2}
            variant="buttonXS"
            color="grey.4400"
            fontWeight={'600 !important'}
          >
            {taiwanRecord.title}
          </UHeightLimitedText>
          <Typography variant="buttonXXS" color="grey.4400">
            {taiwanRecord.people.name}
          </Typography>
        </Stack>
      </UHStack>
    </UHStack>
  )
})

const AccountTaiwanRecordList = memo(function AccountTaiwanRecordList() {
  const { lang } = useParams<{ lang: Language }>()
  const { data, loading, refetch } = useQuery<
    QueryMeSubmittedTaiwanRecordsQuery,
    QueryMeSubmittedTaiwanRecordsQueryVariables
  >(QUERY_ME_SUBMITTED_TAIWAN_RECORDS, {
    fetchPolicy: 'cache-and-network',
  })
  const setAccountTaiwanRecordList =
    useAccountTaiwanRecordStore.use.setAccountTaiwanRecordList()
  const accountTaiwanRecordList =
    useAccountTaiwanRecordStore.use.accountTaiwanRecordList()

  useEffect(() => {
    if (!data?.Me?.submittedTaiwanRecords) return
    const parsedRecords = AccountUtils.parseSubmittedTaiwanRecords(
      lang,
      data.Me.submittedTaiwanRecords
    )
    setAccountTaiwanRecordList(parsedRecords)
  }, [data, lang, setAccountTaiwanRecordList])

  const currentAccountTaiwanRecordStatus =
    useAccountTaiwanRecordStore.use.currentAccountTaiwanRecordStatus()
  const filteredAccountTaiwanRecordList = useMemo(() => {
    if (currentAccountTaiwanRecordStatus === null) {
      return accountTaiwanRecordList
    }
    return accountTaiwanRecordList.filter(
      (item) => item.status === currentAccountTaiwanRecordStatus
    )
  }, [accountTaiwanRecordList, currentAccountTaiwanRecordStatus])
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
    refetch()
  }, [refetch])

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
              peopleId={taiwanRecordForDialog.people.id}
              taiwanRecord={taiwanRecordForDialog}
              open={isTaiwanRecordDialogOpen}
              onClose={handleTaiwanRecordDialogClose}
              onSubmitTaiwanRecord={onSubmit}
            />
          )}
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
          peopleId={taiwanRecordForDialog.people.id}
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

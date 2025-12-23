import UButton from '@/common/components/atoms/UButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { AccountNotificationSettingOutput } from '@/modules/Account/Notification/business/AccountNotification'
import useAccountNotificationSetting from '@/modules/Account/Notification/hooks/useAccountNotificationSetting'
import {
  Box,
  Checkbox,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material'
import { memo, useCallback } from 'react'
import { Controller } from 'react-hook-form'
import type React from 'react'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'

const AccountFormItem = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => {
  return (
    <Stack
      direction="row"
      gap={1}
      sx={{
        alignItems: 'center',
      }}
    >
      {children}
      <Typography variant="body1" fontWeight={600}>
        {label}
      </Typography>
    </Stack>
  )
}

const AccountNotificationSetting = memo(function AccountNotificationSetting() {
  const { t } = useTranslationClient('account')
  const {
    form,
    handleSubmit: submitForm,
    loading,
  } = useAccountNotificationSetting()
  const { isMutating } = useAccount()
  const { isCompactView } = useAccountLayout()

  const handleSubmit = useCallback(
    async (value: AccountNotificationSettingOutput) => {
      await submitForm(value)
    },
    [submitForm]
  )

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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: 4,
        py: 2,
        backgroundColor: 'background.paper',
        borderRadius: 4,
      }}
      component="form"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <AccountFormItem
        label={t('notificationSetting.billRelease.label', {
          ns: 'account',
        })}
      >
        <Controller
          control={form.control}
          name="billRelease"
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(_e, checked) => {
                field.onChange(checked)
              }}
              color="info"
            />
          )}
        />
      </AccountFormItem>
      <AccountFormItem
        label={t('notificationSetting.ustwArticleRelease.label', {
          ns: 'account',
        })}
      >
        <Controller
          control={form.control}
          name="ustwArticleRelease"
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(_e, checked) => {
                field.onChange(checked)
              }}
              color="info"
            />
          )}
        />
      </AccountFormItem>
      <AccountFormItem
        label={t('notificationSetting.ketagalanArticleRelease.label', {
          ns: 'account',
        })}
      >
        <Controller
          control={form.control}
          name="ketagalanArticleRelease"
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(_e, checked) => {
                field.onChange(checked)
              }}
              color="info"
            />
          )}
        />
      </AccountFormItem>
      <AccountFormItem
        label={t('notificationSetting.podcastRelease.label', {
          ns: 'account',
        })}
      >
        <Controller
          control={form.control}
          name="podcastRelease"
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(_e, checked) => {
                field.onChange(checked)
              }}
              color="info"
            />
          )}
        />
      </AccountFormItem>
      <AccountFormItem
        label={t('notificationSetting.subscribedBillUpdate.label', {
          ns: 'account',
        })}
      >
        <Controller
          control={form.control}
          name="subscribedBillUpdate"
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(_e, checked) => {
                field.onChange(checked)
              }}
              color="info"
            />
          )}
        />
      </AccountFormItem>
      <AccountFormItem
        label={t('notificationSetting.subscribedPeopleUpdate.label', {
          ns: 'account',
        })}
      >
        <Controller
          control={form.control}
          name="subscribedPeopleUpdate"
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(_e, checked) => {
                field.onChange(checked)
              }}
              color="info"
            />
          )}
        />
      </AccountFormItem>
      {/** TODO: 等後端實作電子報 */}
      {/* <AccountFormItem
        label={t('notificationSetting.newsletter.label', {
          ns: 'account',
        })}
      >
        <Controller
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(_e, checked) => {
                field.onChange(checked)
              }}
              color="info"
            />
          )}
        />
      </AccountFormItem> */}

      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <UButton
          type="submit"
          variant="contained"
          color="info"
          disabled={isMutating}
          sx={{
            mt: 3,
            width: isCompactView ? '100%' : 'auto',
          }}
        >
          {isMutating ? (
            <>
              <CircularProgress color="info" size={20} sx={{ mr: 1 }} />
              {t('notificationSetting.submitting.msg', { ns: 'account' })}
            </>
          ) : (
            t('notificationSetting.submit.btn', { ns: 'account' })
          )}
        </UButton>
      </Box>
    </Box>
  )
})

export default AccountNotificationSetting

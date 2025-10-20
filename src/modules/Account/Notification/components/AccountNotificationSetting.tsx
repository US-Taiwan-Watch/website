import UButton from '@/common/components/atoms/UButton'
import UIconButton from '@/common/components/atoms/UIconButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { SettingIcon } from '@/common/styles/assets/Icons'
import { AccountNotificationSettingOutput } from '@/modules/Account/Notification/business/AccountNotification'
import useAccountNotificationSetting from '@/modules/Account/Notification/hooks/useAccountNotificationSetting'
import {
  Box,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'
import { memo, useCallback, useState } from 'react'
import { Controller } from 'react-hook-form'
import type React from 'react'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'

const AccountFormItem = ({
  label,
  direction = 'column',
  children,
}: {
  label: string
  direction?: 'column' | 'row'
  children: React.ReactNode
}) => {
  return (
    <Stack
      direction={direction}
      gap={1}
      sx={{
        alignItems: direction === 'row' ? 'center' : 'flex-start',
        justifyContent: direction === 'row' ? 'space-between' : 'initial',
      }}
    >
      <Typography variant="body1" fontWeight={600}>
        {label}
      </Typography>
      {children}
    </Stack>
  )
}

interface AccountNotificationSettingDialogProps extends DialogProps {
  onSettingSubmit?: (value: AccountNotificationSettingOutput) => void
}

const AccountNotificationSettingDialog = memo(
  function AccountNotificationSettingDialog(
    props: AccountNotificationSettingDialogProps
  ) {
    const { onSettingSubmit, ...dialogProps } = props
    const { t } = useTranslationClient('account')
    const { form, handleSubmit: submitForm } = useAccountNotificationSetting()
    const { isMutating } = useAccount()
    const { isCompactView } = useAccountLayout()

    const handleSubmit = useCallback(
      async (value: AccountNotificationSettingOutput) => {
        await submitForm(value)
        onSettingSubmit?.(value)
      },
      [onSettingSubmit, submitForm]
    )

    return (
      <Dialog {...dialogProps}>
        <DialogTitle>
          {t('notificationSetting.dialog.title', { ns: 'account' })}
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
            component="form"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <AccountFormItem
              label={t('notificationSetting.subscribedBillUpdate.label', {
                ns: 'account',
              })}
              direction="row"
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
              label={t('notificationSetting.podcastRelease.label', {
                ns: 'account',
              })}
              direction="row"
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
              label={t('notificationSetting.ustwArticleRelease.label', {
                ns: 'account',
              })}
              direction="row"
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
              direction="row"
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
              label={t('notificationSetting.newsletter.label', {
                ns: 'account',
              })}
              direction="row"
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
            </AccountFormItem>

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
        </DialogContent>
      </Dialog>
    )
  }
)

const AccountNotificationSetting = memo(function AccountNotificationSetting() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Box display="flex" justifyContent="flex-end">
      <UIconButton
        variant="text"
        color="info"
        onClick={() => setIsDialogOpen(true)}
      >
        <SettingIcon />
      </UIconButton>
      <AccountNotificationSettingDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSettingSubmit={() => setIsDialogOpen(false)}
      />
    </Box>
  )
})

export default AccountNotificationSetting

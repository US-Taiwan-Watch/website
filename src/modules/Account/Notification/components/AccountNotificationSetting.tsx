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
  TextField,
  Typography,
} from '@mui/material'
import { memo, useCallback, useState } from 'react'
import { Controller } from 'react-hook-form'
import type React from 'react'

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
    const { form } = useAccountNotificationSetting()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = useCallback(
      (value: AccountNotificationSettingOutput) => {
        console.log(value)
        setIsSubmitting(true)
        // TODO: update account notification setting
        setIsSubmitting(false)
        onSettingSubmit?.(value)
      },
      [onSettingSubmit]
    )

    return (
      <Dialog
        {...dialogProps}
        PaperProps={{
          sx: {
            borderRadius: 4,
            minWidth: {
              xs: '280px', // Mobile: 280px
              sm: '400px', // Tablet: 400px
              md: '480px', // Desktop: 480px
              lg: '520px', // Large desktop: 520px
            },
            maxWidth: {
              xs: '90vw', // Mobile: 90% of viewport width
              sm: '500px', // Tablet: 500px max
              md: '600px', // Desktop: 600px max
              lg: '650px', // Large desktop: 650px max
            },
          },
        }}
      >
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
              label={t('notificationSetting.email.label', { ns: 'account' })}
            >
              <Controller
                control={form.control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={Boolean(form.formState.errors.email)}
                    helperText={form.formState.errors.email?.message}
                    margin="normal"
                    color="info"
                    sx={{
                      my: 0,
                    }}
                  />
                )}
              />
            </AccountFormItem>
            <AccountFormItem
              label={t('notificationSetting.subscribeNewsletter.label', {
                ns: 'account',
              })}
              direction="row"
            >
              <Controller
                control={form.control}
                name="subscribeNewsletter"
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
                disabled={isSubmitting}
                sx={{
                  mt: 3,
                  width: {
                    xs: '100%',
                    sm: 'auto',
                  },
                }}
              >
                {isSubmitting ? (
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

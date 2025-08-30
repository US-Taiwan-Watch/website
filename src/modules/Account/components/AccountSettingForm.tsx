import UButton from '@/common/components/atoms/UButton'
import UImageUploader from '@/common/components/elements/UImageUploader'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { AccountSettingOutput } from '@/modules/Account/business/Account'
import useAccountSetting from '@/modules/Account/hooks/useAccountSetting'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import {
  Avatar,
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Trans } from 'react-i18next'
import type React from 'react'
import { useAccount } from '@/modules/Account/providers/AccountProvider'

const AccountFormItem = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography variant="body1" fontWeight={600}>
        {label}
      </Typography>
      {children}
    </Box>
  )
}

const AccountSettingForm = () => {
  const { t } = useTranslationClient('account')
  const account = useAccountStore.use.account()
  const { updateAccountSetting } = useAccount()
  const { form } = useAccountSetting()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const existingAvatarSrc = useMemo(() => {
    if (!account) return undefined
    return account.picture
  }, [account])

  const handleSubmit = useCallback(
    (value: AccountSettingOutput) => {
      console.log(value)

      setIsSubmitting(true)
      updateAccountSetting(value)
      setIsSubmitting(false)
    },
    [updateAccountSetting]
  )

  return (
    <Box
      sx={{ px: 4, py: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
      component="form"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <AccountFormItem label={t('setting.fullName.label', { ns: 'account' })}>
        <Controller
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              error={Boolean(form.formState.errors.fullName)}
              helperText={form.formState.errors.fullName?.message}
              margin="normal"
              color="info"
              sx={{
                my: 0,
              }}
            />
          )}
        />
      </AccountFormItem>
      <AccountFormItem label={t('setting.avatar.label', { ns: 'account' })}>
        <Controller
          control={form.control}
          name="avatarBlob"
          render={({ field }) => (
            <Box ref={field.ref}>
              <UImageUploader
                value={field.value}
                onChange={(value) => {
                  if (!value) {
                    field.onChange(undefined)
                    return
                  }
                  field.onChange(value)
                }}
                enableCrop
                cropAspectRatio={1}
                cropDialogTitle={t('setting.avatar.dialog.title', {
                  ns: 'account',
                })}
                caption={
                  existingAvatarSrc ? (
                    <Stack gap={0.5} alignItems="center">
                      <Trans
                        i18nKey="setting.avatar.upload.caption.replace"
                        ns="account"
                        components={{
                          Avatar: (
                            <Avatar
                              sx={{
                                width: 24,
                                height: 24,
                                color: 'common.black',
                              }}
                              src={existingAvatarSrc}
                            />
                          ),
                        }}
                      />
                    </Stack>
                  ) : (
                    t('setting.avatar.upload.caption.create', { ns: 'account' })
                  )
                }
              />
            </Box>
          )}
        />
      </AccountFormItem>

      <Box display="flex" alignItems="center" justifyContent="center">
        <UButton
          type="submit"
          variant="contained"
          color="info"
          size="large"
          disabled={isSubmitting}
          rounded
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
              {t('setting.submitting.msg', { ns: 'account' })}
            </>
          ) : (
            t('setting.submit.btn', { ns: 'account' })
          )}
        </UButton>
      </Box>
    </Box>
  )
}

export default AccountSettingForm

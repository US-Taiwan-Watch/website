import UButton from '@/common/components/atoms/UButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useAccountSetting from '@/modules/Account/Setting/hooks/useAccountSetting'
import { Box, CircularProgress, TextField, Typography } from '@mui/material'
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
  const { isMutating } = useAccount()
  const { form, handleSubmit, loading } = useAccountSetting()
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

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        backgroundColor: 'background.paper',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
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
      <AccountFormItem label={t('setting.email.label', { ns: 'account' })}>
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="email"
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

      <Box display="flex" alignItems="center" justifyContent="center">
        <UButton
          type="submit"
          variant="contained"
          color="info"
          size="large"
          disabled={isMutating}
          rounded
          sx={{
            mt: 3,
            width: isCompactView ? '100%' : 'auto',
          }}
        >
          {isMutating ? (
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

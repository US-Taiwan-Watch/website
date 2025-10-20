'use client'

import { useCallback, useState } from 'react'
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from '@mui/material'
import { Visibility, VisibilityOff, Lock } from '@mui/icons-material'
import useAccountChangePassword from '@/modules/Account/AuthSetting/hooks/useAccountChangePassword'
import { Controller } from 'react-hook-form'
import UButton from '@/common/components/atoms/UButton'
import UAlertDialog from '@/common/components/elements/UAlertDialog'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useAccount } from '@/modules/Account/providers/AccountProvider'

export default function AccountChangePasswordForm() {
  const { t } = useTranslationClient('account')
  const { form, handleSubmit: submitForm } = useAccountChangePassword()
  const { isMutating } = useAccount()

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)

  const handleSubmit = useCallback(async () => {
    setIsConfirmDialogOpen(true)
  }, [])

  const handleConfirm = useCallback(async () => {
    setIsConfirmDialogOpen(false)
    await submitForm(form.getValues())
  }, [form, submitForm])

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        backgroundColor: 'background.paper',
        borderRadius: 4,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        mb={3}
        sx={{
          whiteSpace: 'pre-line',
          textAlign: {
            xs: 'center',
            sm: 'left',
          },
        }}
      >
        {t('changePassword.description')}
      </Typography>

      <Box component="form" onSubmit={form.handleSubmit(handleSubmit)}>
        <Controller
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type={showPassword ? 'text' : 'password'}
              label={t('changePassword.newPassword.label', { ns: 'account' })}
              error={Boolean(form.formState.errors.newPassword)}
              helperText={form.formState.errors.newPassword?.message}
              margin="normal"
              required
              color="info"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        <Controller
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="password"
              label={t('changePassword.confirmPassword.label', {
                ns: 'account',
              })}
              error={Boolean(form.formState.errors.confirmPassword)}
              helperText={form.formState.errors.confirmPassword?.message}
              margin="normal"
              required
              color="info"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

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
              width: {
                xs: '100%',
                sm: 'auto',
              },
            }}
          >
            {isMutating ? (
              <>
                <CircularProgress color="info" size={20} sx={{ mr: 1 }} />
                {t('changePassword.submitting.msg', { ns: 'account' })}
              </>
            ) : (
              t('changePassword.submit.btn', { ns: 'account' })
            )}
          </UButton>
        </Box>
      </Box>
      <UAlertDialog
        open={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        title={t('changePassword.confirmDialog.title', { ns: 'account' })}
        description={t('changePassword.confirmDialog.description', {
          ns: 'account',
        })}
        onConfirm={handleConfirm}
      />
    </Box>
  )
}

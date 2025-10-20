import { useForm } from 'react-hook-form'
import {
  AccountChangePasswordInput,
  AccountChangePasswordOutput,
  accountChangePasswordSchema,
  defaultAccountChangePasswordInput,
} from '@/modules/Account/AuthSetting/business/AccountAuthSetting'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { useToast } from '@/common/providers/ToastProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'

export default function useAccountChangePassword() {
  const { logout } = useUAuth()
  const { updatePassword } = useAccount()
  const { toast } = useToast()
  const { t } = useTranslationClient('account')

  const form = useForm<AccountChangePasswordInput>({
    resolver: zodResolver(accountChangePasswordSchema),
    mode: 'onSubmit',
  })

  const handleReset = useCallback(() => {
    form.reset(defaultAccountChangePasswordInput)
  }, [form])

  const handleSubmit = useCallback(
    async (value: AccountChangePasswordOutput) => {
      try {
        await updatePassword(value.newPassword)
        toast('success', t('changePassword.success.msg', { ns: 'account' }))
        handleReset()
        setTimeout(() => {
          logout()
        }, 3000)
      } catch {
        toast('error', t('changePassword.error.msg', { ns: 'account' }))
      }
    },
    [updatePassword, toast, t, handleReset, logout]
  )

  return { form, handleReset, handleSubmit }
}

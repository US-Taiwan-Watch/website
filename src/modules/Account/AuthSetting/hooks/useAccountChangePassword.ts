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

export default function useAccountChangePassword() {
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
      } catch {
        toast('error', t('changePassword.error.msg', { ns: 'account' }))
      }
    },
    [updatePassword, toast, t, handleReset]
  )

  return { form, handleReset, handleSubmit }
}

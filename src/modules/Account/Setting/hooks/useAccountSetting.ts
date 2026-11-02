import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo } from 'react'
import {
  AccountSettingInput,
  AccountSettingOutput,
  accountSettingSchema,
  getDefaultAccountSettingInput,
} from '@/modules/Account/Setting/business/AccountSetting'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { useToast } from '@/common/providers/ToastProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Connection } from '@/modules/Account/business/Account'

export default function useAccountSetting() {
  const { isAccountLoading, account, updateName, updateEmail } = useAccount()
  const { toast } = useToast()
  const { t } = useTranslationClient('account')

  const defaultAccountSettingInput = useMemo<AccountSettingInput>(() => {
    return getDefaultAccountSettingInput(account)
  }, [account])

  const form = useForm<AccountSettingInput>({
    resolver: zodResolver(accountSettingSchema),
    mode: 'onSubmit',
    defaultValues: defaultAccountSettingInput,
  })

  const handleReset = useCallback(() => {
    form.reset(defaultAccountSettingInput)
  }, [form, defaultAccountSettingInput])

  // 表單預設值變化時，更新表單，保持最新狀態
  useEffect(() => {
    form.reset(defaultAccountSettingInput)
  }, [form, defaultAccountSettingInput])

  const handleSubmit = useCallback(
    async (value: AccountSettingOutput) => {
      try {
        // 更新姓名
        if (value.fullName !== defaultAccountSettingInput.fullName) {
          await updateName(value.fullName)
        }

        // 更新電子郵件
        if (
          account?.connection === Connection['User-Password'] &&
          value.email &&
          value.email !== defaultAccountSettingInput.email
        ) {
          await updateEmail(value.email)
        }

        toast('success', t('setting.success.msg', { ns: 'account' }))
      } catch (error) {
        console.error('Failed to update account settings:', error)
        toast('error', t('setting.error.msg', { ns: 'account' }))
      }
    },
    [
      defaultAccountSettingInput.fullName,
      defaultAccountSettingInput.email,
      account?.connection,
      toast,
      t,
      updateName,
      updateEmail,
    ]
  )

  return {
    form,
    handleReset,
    handleSubmit,
    defaultAccountSettingInput,
    loading: isAccountLoading,
  }
}

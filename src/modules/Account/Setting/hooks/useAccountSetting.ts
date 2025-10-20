import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import {
  AccountSettingInput,
  AccountSettingOutput,
  accountSettingSchema,
  getDefaultAccountSettingInput,
} from '@/modules/Account/Setting/business/AccountSetting'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { useToast } from '@/common/providers/ToastProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

export default function useAccountSetting() {
  const account = useAccountStore.use.account()
  const { updateAccountSetting, updateName, updateEmail } = useAccount()
  const { toast } = useToast()
  const { t } = useTranslationClient('account')

  const defaultAccountSettingInput = useMemo(
    () => getDefaultAccountSettingInput(account),
    [account]
  )

  const form = useForm<AccountSettingInput>({
    resolver: zodResolver(accountSettingSchema),
    mode: 'onSubmit',
    defaultValues: defaultAccountSettingInput,
  })

  const handleReset = useCallback(() => {
    form.reset(defaultAccountSettingInput)
  }, [form, defaultAccountSettingInput])

  const handleSubmit = useCallback(
    async (value: AccountSettingOutput) => {
      try {
        // 更新姓名
        if (value.fullName !== account?.fullName) {
          await updateName(value.fullName)
        }

        // 更新電子郵件
        if (value.email !== account?.email) {
          await updateEmail(value.email)
        }

        // 更新其他設定（頭像等）
        updateAccountSetting(value)

        toast('success', t('setting.success.msg', { ns: 'account' }))
      } catch {
        toast('error', t('setting.error.msg', { ns: 'account' }))
      }
    },
    [updateAccountSetting, updateName, updateEmail, account, toast, t]
  )

  return { form, handleReset, handleSubmit, defaultAccountSettingInput }
}

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo } from 'react'
import {
  AccountNotificationSettingInput,
  AccountNotificationSettingOutput,
  accountNotificationSettingSchema,
  getDefaultAccountNotificationSettingInput,
} from '@/modules/Account/Notification/business/AccountNotification'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { useToast } from '@/common/providers/ToastProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

export default function useAccountNotificationSetting() {
  const { account, updateNotificationSetting } = useAccount()
  const { toast } = useToast()
  const { t } = useTranslationClient('account')

  const defaultAccountSettingInput = useMemo(
    () => getDefaultAccountNotificationSettingInput(account),
    [account]
  )

  const form = useForm<AccountNotificationSettingInput>({
    resolver: zodResolver(accountNotificationSettingSchema),
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
    async (value: AccountNotificationSettingOutput) => {
      try {
        await updateNotificationSetting(value)
        toast(
          'success',
          t('notificationSetting.success.msg', { ns: 'account' })
        )
      } catch {
        toast('error', t('notificationSetting.error.msg', { ns: 'account' }))
      }
    },
    [updateNotificationSetting, toast, t]
  )

  return { form, handleReset, handleSubmit, defaultAccountSettingInput }
}

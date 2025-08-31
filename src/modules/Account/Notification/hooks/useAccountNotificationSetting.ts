import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import {
  AccountNotificationSettingInput,
  accountNotificationSettingSchema,
  getDefaultAccountNotificationSettingInput,
} from '@/modules/Account/Notification/business/AccountNotification'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'

export default function useAccountNotificationSetting() {
  const account = useAccountStore.use.account()
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

  return { form, handleReset, defaultAccountSettingInput }
}

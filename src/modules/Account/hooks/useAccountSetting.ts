import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import {
  AccountSettingInput,
  accountSettingSchema,
  getDefaultAccountSettingInput,
} from '@/modules/Account/business/Account'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'

export default function useAccountSetting() {
  const account = useAccountStore.use.account()
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

  return { form, handleReset, defaultAccountSettingInput }
}

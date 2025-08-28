import { useForm } from 'react-hook-form'
import {
  AccountChangePasswordInput,
  accountChangePasswordSchema,
  defaultAccountChangePasswordInput,
} from '@/modules/Account/business/Account'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'

export default function useAccountChangePassword() {
  const form = useForm<AccountChangePasswordInput>({
    resolver: zodResolver(accountChangePasswordSchema),
    mode: 'onSubmit',
  })

  const handleReset = useCallback(() => {
    form.reset(defaultAccountChangePasswordInput)
  }, [form])

  return { form, handleReset }
}

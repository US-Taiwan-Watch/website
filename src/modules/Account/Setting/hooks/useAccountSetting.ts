import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo } from 'react'
import {
  AccountSettingInput,
  AccountSettingOutput,
  accountSettingSchema,
} from '@/modules/Account/Setting/business/AccountSetting'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { useToast } from '@/common/providers/ToastProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useQuery } from '@apollo/client'
import { QUERY_ME_BASIC_INFO } from '@/modules/Account/graphql/gql'
import {
  QueryMeBasicInfoQuery,
  QueryMeBasicInfoQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'

export default function useAccountSetting() {
  const { updateName, updateEmail } = useAccount()
  const { toast } = useToast()
  const { t } = useTranslationClient('account')

  const { data, loading } = useQuery<
    QueryMeBasicInfoQuery,
    QueryMeBasicInfoQueryVariables
  >(QUERY_ME_BASIC_INFO, {
    fetchPolicy: 'cache-and-network',
  })

  const defaultAccountSettingInput = useMemo<AccountSettingInput>(() => {
    if (!data?.Me)
      return {
        fullName: '',
        email: '',
      }

    return {
      fullName: data.Me.fullName ?? '',
      email: data.Me.email ?? '',
    }
  }, [data])

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
        if (value.fullName !== data?.Me?.fullName) {
          await updateName(value.fullName)
        }

        // 更新電子郵件
        if (value.email !== data?.Me?.email) {
          await updateEmail(value.email)
        }

        toast('success', t('setting.success.msg', { ns: 'account' }))
      } catch (error) {
        console.error('Failed to update account settings:', error)
        toast('error', t('setting.error.msg', { ns: 'account' }))
      }
    },
    [updateName, updateEmail, data, toast, t]
  )

  return {
    form,
    handleReset,
    handleSubmit,
    defaultAccountSettingInput,
    loading,
  }
}

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo } from 'react'
import {
  AccountNotificationSettingInput,
  AccountNotificationSettingOutput,
  accountNotificationSettingSchema,
} from '@/modules/Account/Notification/business/AccountNotification'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { useToast } from '@/common/providers/ToastProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useQuery } from '@apollo/client/react'
import { QUERY_ME_NOTIFICATION_SETTING } from '@/modules/Account/graphql/gql'
import {
  QueryMeNotificationSettingQuery,
  QueryMeNotificationSettingQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'

export default function useAccountNotificationSetting() {
  const { updateNotificationSetting } = useAccount()
  const { toast } = useToast()
  const { t } = useTranslationClient('account')

  const { data, loading } = useQuery<
    QueryMeNotificationSettingQuery,
    QueryMeNotificationSettingQueryVariables
  >(QUERY_ME_NOTIFICATION_SETTING, {
    fetchPolicy: 'cache-and-network',
  })

  const defaultAccountSettingInput =
    useMemo<AccountNotificationSettingInput>(() => {
      if (!data?.Me?.notificationSetting)
        return {
          subscribedPeopleUpdate: false,
          subscribedBillUpdate: false,
          billRelease: false,
          podcastRelease: false,
          ustwArticleRelease: false,
          ketagalanArticleRelease: false,
          newsletter: false,
        }

      return {
        subscribedPeopleUpdate:
          data.Me.notificationSetting.subscribedPeopleUpdate ?? false,
        subscribedBillUpdate:
          data.Me.notificationSetting.subscribedBillUpdate ?? false,
        billRelease: data.Me.notificationSetting.billRelease ?? false,
        podcastRelease: data.Me.notificationSetting.podcastRelease ?? false,
        ustwArticleRelease:
          data.Me.notificationSetting.ustwArticleRelease ?? false,
        ketagalanArticleRelease:
          data.Me.notificationSetting.ketagalanArticleRelease ?? false,
        newsletter: data.Me.notificationSetting.newsletter ?? false,
      }
    }, [data])

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
      } catch (error) {
        console.error('Failed to update notification settings:', error)
        toast('error', t('notificationSetting.error.msg', { ns: 'account' }))
      }
    },
    [updateNotificationSetting, toast, t]
  )

  return {
    form,
    handleReset,
    handleSubmit,
    defaultAccountSettingInput,
    loading,
  }
}

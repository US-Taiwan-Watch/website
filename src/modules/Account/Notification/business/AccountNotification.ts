import { Account } from '@/modules/Account/business/Account'
import { z } from '@/common/lib/zod'

export const accountNotificationSettingSchema = z.object({
  subscribedPeopleUpdate: z.boolean(),
  subscribedBillUpdate: z.boolean(),
  billRelease: z.boolean(),
  podcastRelease: z.boolean(),
  ustwArticleRelease: z.boolean(),
  ketagalanArticleRelease: z.boolean(),
  newsletter: z.boolean(),
})

export type AccountNotificationSettingInput = z.input<
  typeof accountNotificationSettingSchema
>
export type AccountNotificationSettingOutput = z.output<
  typeof accountNotificationSettingSchema
>

export const getDefaultAccountNotificationSettingInput = (
  account: Account | null
): AccountNotificationSettingInput => {
  if (!account)
    return {
      subscribedPeopleUpdate: false,
      subscribedBillUpdate: false,
      billRelease: false,
      podcastRelease: false,
      ustwArticleRelease: false,
      ketagalanArticleRelease: false,
      newsletter: false,
    }

  return account.notificationSetting
}

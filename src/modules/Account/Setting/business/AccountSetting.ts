import { z } from 'zod'
import { Account } from '@/modules/Account/business/Account'

export const accountSettingSchema = z.object({
  fullName: z.string().min(1),
  /**
   * 在更新圖片前的暫存
   */
  avatarBlob: z.instanceof(Blob).optional(),
})

export type AccountSettingInput = z.input<typeof accountSettingSchema>
export type AccountSettingOutput = z.output<typeof accountSettingSchema>

export const getDefaultAccountSettingInput = (account: Account | null) => {
  if (!account)
    return {
      fullName: '',
      avatarBlob: undefined,
    }

  return {
    fullName: account.fullName,
    avatarBlob: undefined,
  }
}

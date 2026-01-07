import { z } from 'zod'
import { Account, Connection } from '@/modules/Account/business/Account'

export const accountSettingSchema = z.object({
  fullName: z.string().min(1),
  /** 若是 Social Login，則不提供更改 Email */
  email: z.string().email({ message: 'email.invalid' }).optional(),
})

export type AccountSettingInput = z.input<typeof accountSettingSchema>
export type AccountSettingOutput = z.output<typeof accountSettingSchema>

export const getDefaultAccountSettingInput = (account: Account | null) => {
  if (!account)
    return {
      fullName: '',
    }

  if (account.connection === Connection['User-Password']) {
    return {
      fullName: account.fullName,
      email: account.email,
    }
  }

  return {
    fullName: account.fullName,
  }
}

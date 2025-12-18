import { z } from 'zod'
import { Account } from '@/modules/Account/business/Account'

export const accountSettingSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email({ message: 'email.invalid' }),
})

export type AccountSettingInput = z.input<typeof accountSettingSchema>
export type AccountSettingOutput = z.output<typeof accountSettingSchema>

export const getDefaultAccountSettingInput = (account: Account | null) => {
  if (!account)
    return {
      fullName: '',
      email: '',
    }

  return {
    fullName: account.fullName,
    email: account.email,
  }
}

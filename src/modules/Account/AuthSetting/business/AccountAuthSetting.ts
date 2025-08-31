import { z } from 'zod'

const passwordSchema = z.string().superRefine((val, ctx) => {
  if (val.length < 8) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      params: { i18n: 'password.minLength' },
    })
  }

  if (!/[A-Z]/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      params: { i18n: 'password.minUppercase' },
    })
  }

  if (!/[a-z]/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      params: { i18n: 'password.minLowercase' },
    })
  }

  if (!/\d/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      params: { i18n: 'password.minDigit' },
    })
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(val)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      params: { i18n: 'password.minSymbols' },
    })
  }
})

export const accountChangePasswordSchema = z
  .object({
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    params: { i18n: 'password.confirmNotMatch' },
    path: ['confirmPassword'],
  })

export type AccountChangePasswordInput = z.input<
  typeof accountChangePasswordSchema
>
export type AccountChangePasswordOutput = z.output<
  typeof accountChangePasswordSchema
>

export const defaultAccountChangePasswordInput: AccountChangePasswordInput = {
  newPassword: '',
  confirmPassword: '',
}

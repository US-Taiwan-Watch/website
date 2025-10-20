import { z } from 'zod'

const passwordSchema = z.string().superRefine((val, ctx) => {
  // Check minimum length
  if (val.length < 8) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      params: { i18n: 'password.minLength' },
    })
  }

  // Count how many character types are present
  let typeCount = 0
  const hasLowercase = /[a-z]/.test(val)
  const hasUppercase = /[A-Z]/.test(val)
  const hasDigit = /\d/.test(val)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(val)

  if (hasLowercase) typeCount++
  if (hasUppercase) typeCount++
  if (hasDigit) typeCount++
  if (hasSpecialChar) typeCount++

  // Require at least 3 out of 4 character types
  if (typeCount < 3) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      params: { i18n: 'password.minComplexity' },
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

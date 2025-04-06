import { z } from 'zod'

export enum AccountSubscribeType {
  Bill = 'bill',
  Article = 'article',
  People = 'people',
}

const accountSubscribeSchema = z.object({
  id: z.string(),
  type: z.nativeEnum(AccountSubscribeType),
  title: z.string(),
  url: z.string(),
})

export type AccountSubscribeInput = z.input<typeof accountSubscribeSchema>
export type AccountSubscribe = z.infer<typeof accountSubscribeSchema>

export default class AccountSubscribeUtils {
  static parse(input: AccountSubscribeInput): AccountSubscribe {
    return accountSubscribeSchema.parse(input)
  }
}

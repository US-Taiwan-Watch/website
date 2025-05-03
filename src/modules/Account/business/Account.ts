import { Me } from '@/common/lib/graphql/__generated__/graphql'
import AccountSubscribeUtils, {
  accountSubscribeSchema,
  AccountSubscribeType,
} from '@/modules/Account/Subscribe/business/AccountSubscribe'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { PeopleUtils } from '@/modules/People/business/People'
import { User } from '@auth0/nextjs-auth0/types'
import { z } from 'zod'

const accountSchema = z.object({
  id: z.string(),
  givenName: z.string(),
  familyName: z.string(),
  fullName: z.string(),
  email: z.string(),
  subscribeBills: z.array(accountSubscribeSchema),
  subscribePeoples: z.array(accountSubscribeSchema),
  bookmarkArticles: z.array(accountSubscribeSchema),
  notifications: z.any(),
  picture: z.string().optional(),
})

export type AccountInput = z.input<typeof accountSchema>
export type Account = z.infer<typeof accountSchema>

export default class AccountUtils {
  static parse(input: AccountInput): Account {
    return accountSchema.parse(input)
  }

  static parseMeAndAuth0User(me: Me, user: User) {
    return AccountUtils.parse({
      id: user.sub ?? '',
      givenName: user.given_name ?? '',
      familyName: user.family_name ?? '',
      fullName: me.fullName ?? '',
      email: me.email ?? '',
      subscribeBills: AccountUtils.parseSubscribeBills(me.subscribeBills),
      subscribePeoples: AccountUtils.parseSubscribePeoples(me.subscribePeoples),
      bookmarkArticles: AccountUtils.parseBookmarkArticles(me.bookmarkArticles),
      notifications: me.notifications ?? [],
      picture: user.picture,
    })
  }

  static parseSubscribeBills(subscribeBills: Me['subscribeBills']) {
    if (!subscribeBills) return []
    return subscribeBills.map((billId) => {
      return AccountSubscribeUtils.parse({
        id: billId ?? '',
        type: AccountSubscribeType.Bill,
        title: billId ?? '',
        url: BillUtils.getLink(billId ?? ''),
      })
    })
  }

  static parseSubscribePeoples(subscribePeoples: Me['subscribePeoples']) {
    if (!subscribePeoples) return []
    return subscribePeoples.map((peopleId) => {
      return AccountSubscribeUtils.parse({
        id: peopleId ?? '',
        type: AccountSubscribeType.People,
        title: peopleId ?? '',
        url: PeopleUtils.getLink(peopleId ?? ''),
      })
    })
  }

  static parseBookmarkArticles(bookmarkArticles: Me['bookmarkArticles']) {
    if (!bookmarkArticles) return []
    return bookmarkArticles.map((articleId) => {
      return AccountSubscribeUtils.parse({
        id: articleId ?? '',
        type: AccountSubscribeType.Article,
        title: articleId ?? '',
        url: ArticleUtils.getLink(ArticleType.Article, articleId ?? ''),
      })
    })
  }

  static getAccountSubscribeList(account: Account) {
    return [
      ...account.subscribeBills,
      ...account.subscribePeoples,
      ...account.bookmarkArticles,
    ]
  }
}

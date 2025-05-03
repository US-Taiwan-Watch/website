import { Me } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import AccountSubscribeUtils, {
  accountSubscribeSchema,
  AccountSubscribeType,
} from '@/modules/Account/Subscribe/business/AccountSubscribe'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { PeopleUtils } from '@/modules/People/business/People'
import { User } from '@auth0/nextjs-auth0/types'
import { isNull } from 'lodash-es'
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

  static parseMeAndAuth0User(lang: Language, me: Me, user: User) {
    return AccountUtils.parse({
      id: user.sub ?? '',
      givenName: user.given_name ?? '',
      familyName: user.family_name ?? '',
      fullName: me.fullName ?? '',
      email: me.email ?? '',
      subscribeBills: AccountUtils.parseSubscribeBills(lang, me.subscribeBills),
      subscribePeoples: AccountUtils.parseSubscribePeoples(
        lang,
        me.subscribePeoples
      ),
      bookmarkArticles: AccountUtils.parseBookmarkArticles(
        lang,
        me.bookmarkArticles
      ),
      notifications: me.notifications ?? [],
      picture: user.picture,
    })
  }

  static parseSubscribeBills(
    lang: Language,
    subscribeBills: Me['subscribeBills']
  ) {
    if (!subscribeBills) return []
    return subscribeBills
      .map((subscribeBill) => {
        if (!subscribeBill) return null
        const bill = BillUtils.parse(lang, subscribeBill)
        return AccountSubscribeUtils.parse({
          id: bill.id ?? '',
          type: AccountSubscribeType.Bill,
          title: bill.title ?? '',
          url: BillUtils.getLink(bill.id),
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseSubscribePeoples(
    lang: Language,
    subscribePeoples: Me['subscribePeoples']
  ) {
    if (!subscribePeoples) return []
    return subscribePeoples
      .map((subscribePeople) => {
        if (!subscribePeople) return null
        const people = PeopleUtils.parse(lang, subscribePeople)
        return AccountSubscribeUtils.parse({
          id: people.id ?? '',
          type: AccountSubscribeType.People,
          title: people.name ?? '',
          url: PeopleUtils.getLink(people.id),
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseBookmarkArticles(
    lang: Language,
    bookmarkArticles: Me['bookmarkArticles']
  ) {
    if (!bookmarkArticles) return []
    return bookmarkArticles
      .map((subscribeArticle) => {
        if (!subscribeArticle) return null
        const article = ArticleUtils.parse(
          lang,
          subscribeArticle,
          ArticleType.Article
        )
        return AccountSubscribeUtils.parse({
          id: article.id ?? '',
          type: AccountSubscribeType.Article,
          title: article.title ?? '',
          url: ArticleUtils.getLink(ArticleType.Article, article.id),
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static getAccountSubscribeList(account: Account) {
    return [
      ...account.subscribeBills,
      ...account.subscribePeoples,
      ...account.bookmarkArticles,
    ]
  }
}

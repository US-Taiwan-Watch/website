import { Member } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { accountNotificationSettingSchema } from '@/modules/Account/Notification/business/AccountNotification'
import AccountSubscribeUtils, {
  accountSubscribeSchema,
  AccountSubscribeType,
} from '@/modules/Account/Subscribe/business/AccountSubscribe'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { PeopleUtils } from '@/modules/People/business/People'
import {
  taiwanRecordSchema,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import { User } from '@auth0/nextjs-auth0/types'
import { isNull } from 'lodash-es'
import { z } from 'zod'

export enum Connection {
  'User-Password' = 'User-Password',
  'Google-Oauth2' = 'Google-Oauth2',
}

const accountSchema = z.object({
  id: z.string(),
  givenName: z.string(),
  familyName: z.string(),
  fullName: z.string(),
  email: z.string(),
  subscribeBills: z.array(accountSubscribeSchema),
  subscribePeoples: z.array(accountSubscribeSchema),
  bookmarkUstwArticles: z.array(accountSubscribeSchema),
  bookmarkKetagalanArticles: z.array(accountSubscribeSchema),
  notificationSetting: accountNotificationSettingSchema,
  submittedTaiwanRecords: z.array(taiwanRecordSchema),
  picture: z.string().optional(),
  connection: z.nativeEnum(Connection).optional(),
})

export type AccountInput = z.input<typeof accountSchema>
export type Account = z.infer<typeof accountSchema>

export default class AccountUtils {
  static parse(input: AccountInput): Account {
    return accountSchema.parse(input)
  }

  static parseMeAndAuth0User(lang: Language, me: Member, user: User) {
    return AccountUtils.parse({
      id: user.sub ?? '',
      givenName: user.given_name ?? '',
      familyName: user.family_name ?? '',
      fullName: me.fullName ?? '',
      email: me.email ?? '',
      subscribeBills: AccountUtils.parseSubscribeBillIds(me.subscribeBills),
      subscribePeoples: AccountUtils.parseSubscribePeopleIds(
        me.subscribePeoples
      ),
      bookmarkUstwArticles: AccountUtils.parseBookmarkUstwArticleIds(
        me.bookmarkUstwArticles
      ),
      bookmarkKetagalanArticles: AccountUtils.parseBookmarkKetagalanArticleIds(
        me.bookmarkKetagalanArticles
      ),
      notificationSetting: {
        subscribedPeopleUpdate: false,
        subscribedBillUpdate: false,
        billRelease: false,
        podcastRelease: false,
        ustwArticleRelease: false,
        ketagalanArticleRelease: false,
        newsletter: false,
      },
      submittedTaiwanRecords: [],
      picture: user.picture,
      connection: AccountUtils.parseConnection(me.providerId),
    })
  }

  static parseConnection(providerId: Member['providerId']) {
    if (!providerId) return undefined

    if (providerId.startsWith('auth0|')) {
      return Connection['User-Password']
    }
    if (providerId.startsWith('google-oauth2|')) {
      return Connection['Google-Oauth2']
    }
    return undefined
  }

  static parseSubscribeBillIds(subscribeBills: Member['subscribeBills']) {
    if (!subscribeBills) return []
    return subscribeBills
      .map((subscribeBill) => {
        if (!subscribeBill?.id) return null
        return AccountSubscribeUtils.parse({
          id: subscribeBill.id,
          type: AccountSubscribeType.Bill,
          title: '',
          url: '',
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseSubscribeBills(
    lang: Language,
    subscribeBills: Member['subscribeBills']
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

  static parseSubscribePeopleIds(subscribePeoples: Member['subscribePeoples']) {
    if (!subscribePeoples) return []
    return subscribePeoples
      .map((subscribePeople) => {
        if (!subscribePeople?.id) return null
        return AccountSubscribeUtils.parse({
          id: subscribePeople.id,
          type: AccountSubscribeType.People,
          title: '',
          url: '',
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseSubscribePeoples(
    lang: Language,
    subscribePeoples: Member['subscribePeoples']
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

  static parseBookmarkUstwArticleIds(
    bookmarkUstwArticles: Member['bookmarkUstwArticles']
  ) {
    if (!bookmarkUstwArticles) return []
    return bookmarkUstwArticles
      .map((subscribeArticle) => {
        if (!subscribeArticle?.id) return null
        return AccountSubscribeUtils.parse({
          id: subscribeArticle.id,
          type: AccountSubscribeType.UstwArticle,
          title: '',
          url: '',
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseBookmarkUstwArticles(
    lang: Language,
    bookmarkUstwArticles: Member['bookmarkUstwArticles']
  ) {
    if (!bookmarkUstwArticles) return []
    return bookmarkUstwArticles
      .map((subscribeArticle) => {
        if (!subscribeArticle) return null
        const article = ArticleUtils.parse(
          lang,
          subscribeArticle,
          ArticleType.Article
        )
        return AccountSubscribeUtils.parse({
          id: article.id ?? '',
          type: AccountSubscribeType.UstwArticle,
          title: article.title ?? '',
          url: ArticleUtils.getLink(ArticleType.Article, article.id),
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseBookmarkKetagalanArticleIds(
    bookmarkKetagalanArticles: Member['bookmarkKetagalanArticles']
  ) {
    if (!bookmarkKetagalanArticles) return []
    return bookmarkKetagalanArticles
      .map((subscribeArticle) => {
        if (!subscribeArticle?.id) return null
        return AccountSubscribeUtils.parse({
          id: subscribeArticle.id,
          type: AccountSubscribeType.KetagalanArticle,
          title: '',
          url: '',
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseBookmarkKetagalanArticles(
    lang: Language,
    bookmarkKetagalanArticles: Member['bookmarkKetagalanArticles']
  ) {
    if (!bookmarkKetagalanArticles) return []
    return bookmarkKetagalanArticles
      .map((subscribeArticle) => {
        if (!subscribeArticle) return null
        const article = ArticleUtils.parse(
          lang,
          subscribeArticle,
          ArticleType.Ketagalan
        )
        return AccountSubscribeUtils.parse({
          id: article.id ?? '',
          type: AccountSubscribeType.KetagalanArticle,
          title: article.title ?? '',
          url: ArticleUtils.getLink(ArticleType.Ketagalan, article.id),
        })
      })
      .filter((subscribe) => !isNull(subscribe))
  }

  static parseSubmittedTaiwanRecords(
    submittedTaiwanRecords: Member['submittedTaiwanRecords']
  ) {
    if (!submittedTaiwanRecords) return []
    return submittedTaiwanRecords
      .map((submittedTaiwanRecord) => {
        if (!submittedTaiwanRecord) return null
        return TaiwanRecordUtils.parse(submittedTaiwanRecord)
      })
      .filter((record) => !isNull(record))
  }

  static getAccountSubscribeList(account: Account) {
    return [
      ...account.subscribeBills,
      ...account.subscribePeoples,
      ...account.bookmarkUstwArticles,
      ...account.bookmarkKetagalanArticles,
    ]
  }
}

export enum RouteName {
  /** Not Found 頁 */
  NotFound = 'not_found',
  /** 首頁 */
  Home = 'home',
  /** 法案列表 */
  Bill = 'bill',
  /** 單一法案 */
  BillDetail = 'bill_detail',
  /** 法案列表 */
  BillList = 'bill_list',
  /** 人物 */
  People = 'people',
  /** 單一人物 */
  PeopleDetail = 'people_detail',
  /** 文章 */
  Article = 'article',
  /** 文章分類搜尋 */
  ArticleCategory = 'article_category',
  /** 單一文章 */
  ArticleDetail = 'article_detail',
  /** 搜尋 */
  Search = 'search',
  /** Auth */
  AuthLogin = 'auth_login',
  AuthLogout = 'auth_logout',
  AuthCallback = 'auth_callback',
  AuthProfile = 'auth_profile',
  AuthAccessToken = 'auth_access_token',
  AuthBackchannelLogout = 'auth_backchannel_logout',
  AuthChangePassword = 'auth_change_password',
  /** About */
  AboutMission = 'about_mission',
  AboutProjects = 'about_projects',
  AboutMembers = 'about_members',
  AboutFootprints = 'about_footprints',
  AboutNewsroom = 'about_newsroom',
  AboutData = 'about_data',
  AboutUserAgreementPrivacyPolicy = 'about_user_agreement_privacy_policy',
  AboutDonation = 'about_donation',
  /** Ketagalan About */
  KetagalanAboutProjects = 'ketagalan_about_projects',
  KetagalanAboutMembers = 'ketagalan_about_members',
  KetagalanAboutFootprints = 'ketagalan_about_footprints',
  /** Podcast */
  PodcastWatchHere = 'podcast_watch_here',
  PodcastWatchInfo = 'podcast_watch_info',
  PodcastWatchBookClub = 'podcast_watch_book_club',
  /** Account */
  Account = 'account',
  AccountSubscribe = 'account_subscribe',
  AccountSetting = 'account_setting',
  AccountPassword = 'account_password',
  AccountNotification = 'account_notification',
  /** Ketagalan Media */
  KetagalanMedia = 'ketagalan_media',
  /** 單一 Ketagalan Media */
  KetagalanMediaDetail = 'ketagalan_media_detail',
  /** Ketagalan Media 分類搜尋 */
  KetagalanMediaCategory = 'ketagalan_media_category',
}

export type URoute = {
  name: RouteName
  query?: {
    [k: string]: string | number | boolean | null
  }
} & (
  | {
      name: RouteName.BillDetail
      params: {
        billId: string
      }
    }
  | {
      name: RouteName.PeopleDetail
      params: {
        peopleId: string
      }
    }
  | {
      name: RouteName.ArticleCategory
      params: {
        categoryId: string
      }
    }
  | {
      name: RouteName.ArticleDetail
      params: {
        articleId: string
      }
    }
  | {
      name: RouteName.KetagalanMediaCategory
      params: {
        categoryId: string
      }
    }
  | {
      name: RouteName.KetagalanMediaDetail
      params: {
        articleId: string
      }
    }
  | {
      name: RouteName.Search
    }
  | {
      name: Exclude<
        RouteName,
        | RouteName.BillDetail
        | RouteName.PeopleDetail
        | RouteName.ArticleDetail
        | RouteName.KetagalanMediaDetail
        | RouteName.ArticleCategory
        | RouteName.KetagalanMediaCategory
        | RouteName.Search
      >
    }
)

export type HasParamsRouteName = Extract<URoute, { params: unknown }>['name']

export type HasRouteParamsParams<K extends HasParamsRouteName> = Extract<
  URoute,
  { name: K }
>['params']

/**
 * Map for converting GRoute objects into path strings
 * @type {Object.<URoute["name"], Function>}
 * @description Each key is a GRoute["name"] and each value is a function that builds the path string
 * @example
 * // Get path for city search
 * ROUTE_PATH_MAP[RouteName.Bill]({ billId: "123" })
 * // Returns: "/bill/123"
 */
export const ROUTE_PATH_MAP: {
  [K in RouteName]: K extends HasParamsRouteName
    ? (params: HasRouteParamsParams<K>) => string
    : () => string
} = {
  [RouteName.NotFound]: () => '/404',
  [RouteName.Home]: () => '/',
  [RouteName.Bill]: () => '/bill',
  [RouteName.BillDetail]: (params) => `/bill/${params.billId}`,
  [RouteName.BillList]: () => '/bill-list',
  [RouteName.People]: () => '/people',
  [RouteName.PeopleDetail]: (params) => `/people/${params.peopleId}`,
  [RouteName.Article]: () => '/article',
  [RouteName.ArticleCategory]: (params) =>
    `/article/search/${params.categoryId}`,
  [RouteName.ArticleDetail]: (params) => `/article/${params.articleId}`,
  [RouteName.Search]: () => '/search',
  /** Auth */
  [RouteName.AuthLogin]: () => '/auth/login',
  [RouteName.AuthLogout]: () => '/auth/logout',
  [RouteName.AuthCallback]: () => '/auth/callback',
  [RouteName.AuthProfile]: () => '/auth/profile',
  [RouteName.AuthAccessToken]: () => '/auth/access-token',
  [RouteName.AuthBackchannelLogout]: () => '/auth/backchannel-logout',
  [RouteName.AuthChangePassword]: () => '/api/auth/change-password',
  /** About */
  [RouteName.AboutMission]: () => '/about/mission',
  [RouteName.AboutProjects]: () => '/about/projects',
  [RouteName.AboutMembers]: () => '/about/members',
  [RouteName.AboutFootprints]: () => '/about/footprints',
  [RouteName.AboutNewsroom]: () => '/about/newsroom',
  [RouteName.AboutData]: () => '/about/data',
  [RouteName.AboutUserAgreementPrivacyPolicy]: () =>
    '/about/user-agreement-privacy-policy',
  [RouteName.AboutDonation]: () => '/about/donation',
  /** Ketagalan About */
  [RouteName.KetagalanAboutProjects]: () => '/ketagalan/about/projects',
  [RouteName.KetagalanAboutMembers]: () => '/ketagalan/about/members',
  [RouteName.KetagalanAboutFootprints]: () => '/ketagalan/about/footprints',
  /** Podcast */
  [RouteName.PodcastWatchHere]: () => '/podcast/category/watch-here',
  [RouteName.PodcastWatchInfo]: () => '/podcast/category/watch-info',
  [RouteName.PodcastWatchBookClub]: () => '/podcast/category/watch-book-club',
  /** Account */
  [RouteName.Account]: () => '/account',
  [RouteName.AccountSubscribe]: () => '/account/subscribe',
  [RouteName.AccountSetting]: () => '/account/setting',
  [RouteName.AccountPassword]: () => '/account/password',
  [RouteName.AccountNotification]: () => '/account/notification',
  /** Ketagalan Media */
  [RouteName.KetagalanMedia]: () => '/ketagalan/media',
  [RouteName.KetagalanMediaDetail]: (params) =>
    `/ketagalan/media/${params.articleId}`,
  [RouteName.KetagalanMediaCategory]: (params) =>
    `/ketagalan/media/search/${params.categoryId}`,
} as const

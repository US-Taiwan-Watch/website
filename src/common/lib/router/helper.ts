import { Language } from '@/common/lib/i18n/types'
import {
  URoute,
  ROUTE_PATH_MAP,
  HasParamsRouteName,
} from '@/common/lib/router/routes'
import { config } from '@/config'

// 共用 Helper
export type ResolveRouteUrlHelperOptions = {
  /**
   * 是否回傳絕對路徑, e.g. "https://ustw.com/people/1"
   * @default false
   * */
  returnAbsoluteUrl?: boolean
  /**
   * 語系
   */
  language?: Language
}

/**
 * 將 URoute Object 轉換成路徑字串
 * @example
 * resolveRouteUrlHelper({ name: "home" }) => "/"
 * resolveRouteUrlHelper({ name: "bill", params: { billId: "123" } }) => "/bill/123"
 * resolveRouteUrlHelper({ name: "bill", params: { billId: "123" }, query: { a: "1", b: "2" } }) => "/bill/123?a=1&b=2"
 * resolveRouteUrlHelper({ name: "bill", params: { billId: "123" }, query: { a: "1", b: "2" }, returnAbsoluteUrl: true }) => "https://ustw.com/bill/123?a=1&b=2"
 */
export default function resolveRouteUrlHelper(
  route: URoute,
  options?: ResolveRouteUrlHelperOptions
) {
  let url = '/'
  if ('params' in route) {
    /**
     * TODO: 修正強轉型
     * 沒有強轉型會出現
     * Argument of type '{ shopId: string; } | { shopId: string; } | { carId: string; } | { carId: string; } | { carId: string; }' is not assignable to parameter of type '{ shopId: string; } & { shopId: string; } & { carId: string; } & { carId: string; } & { carId: string; }'.
     * 但本身不影響功能，未來開發者只會在 URoute & ROUTE_PATH_MAP 擴充，
     * resolveRouteUrlHelper 應該不會再變動，所以先不處理
     */
    url =
      (
        ROUTE_PATH_MAP[route.name] as (
          params: Extract<URoute, { name: HasParamsRouteName }>['params']
        ) => string
      )(route.params) ?? '/'
  } else {
    url = ROUTE_PATH_MAP[route.name]?.() ?? '/'
  }

  /**
   * 合併 query 到 url 上
   * 1. 自定義的 router query
   * 2. 追蹤用的 router source query
   */
  const query = {
    ...(route.query ?? {}),
  }
  return concatPathAndQuery(
    { url, query },
    {
      returnAbsoluteUrl: options?.returnAbsoluteUrl,
      language: options?.language,
    }
  )
}

type ConCatPathAndQueryProps = {
  /** URL, 可兼容帶 query string 和 absolute URL */
  url: string
  /** Query string (search params) in object  */
  query: Record<string, string | number | boolean | null>
}

type ConCatPathAndQueryOptions = {
  /**
   * 是否回傳絕對路徑, e.g. "https://ustw.com/people/1"
   * @default false
   * */
  returnAbsoluteUrl?: boolean
  /**
   * 語系
   */
  language?: Language
}

/** 簡易判斷 URL 是否為 absolute URL */
const isAbsoluteUrl = (url: string) => /^http(s)?:\/\//.test(url)

/** 將 query 填入 url query string */
export const concatPathAndQuery = (
  { url, query }: ConCatPathAndQueryProps,
  options: ConCatPathAndQueryOptions = {}
) => {
  // 拆出 path 和 query string
  const [path, queryString] = url.split('?')
  const searchParams = new URLSearchParams(queryString)

  // 將新的 query 填入 searchParams
  for (const key in query) {
    const value = query[key as keyof typeof query]
    if (value === null) {
      searchParams.delete(key)
    } else if (value !== undefined) {
      searchParams.set(key, String(value))
    }
  }

  // 組合 path 和 query string
  let urlWithQueryString =
    (path || '') + (searchParams.size > 0 ? `?${searchParams.toString()}` : '')

  if (isAbsoluteUrl(urlWithQueryString)) {
    return urlWithQueryString
  }

  if (options.language) {
    urlWithQueryString = `/${options.language}${urlWithQueryString}`
  }

  // 如果需要回傳絕對路徑，且 url 不是絕對路徑，則加上 base
  if (options.returnAbsoluteUrl) {
    return new URL(urlWithQueryString, config.WEB_BASE_URL).toString()
  }

  return urlWithQueryString
}

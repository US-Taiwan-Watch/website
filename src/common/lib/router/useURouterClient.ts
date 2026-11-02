'use client'

import { URoute } from '@/common/lib/router/routes'
import { useCallback } from 'react'
import resolveRouteUrlHelper, {
  concatPathAndQuery,
  ResolveRouteUrlHelperOptions,
} from '@/common/lib/router/helper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Language } from '@/common/lib/i18n/types'

type ResolveRouteUrlOptions = ResolveRouteUrlHelperOptions & {
  /**
   * 是否保留既有的 SearchParams
   * @default false
   */
  preserveSearchParams?: boolean
  /**
   * 是否保留目前語系
   * @default true
   */
  preserveLanguage?: boolean
  /**
   * 既有的 SearchParams 的黑名單，
   * 不會被保留到新的路徑
   */
  blackListSearchParams?: string[]
}

/**
 * 只能用於 client component 的 router 操作
 */
export default function useURouterClient() {
  const { i18n } = useTranslationClient()

  /**
   * 將 Route Object 轉換成路徑字串
   * @example
   * resolveRouteUrl({ name: "home" }) => "/"
   * resolveRouteUrl({ name: "bill", params: { billId: "123" } }) => "/bill/123"
   * resolveRouteUrl({ name: "bill", params: { billId: "123" }, query: { a: "1", b: "2" } }) => "/bill/123?a=1&b=2"
   */
  const resolveRouteUrl = useCallback(
    (route: URoute, options?: ResolveRouteUrlOptions) => {
      const {
        preserveSearchParams = false,
        preserveLanguage = true,
        blackListSearchParams = [],
      } = options ?? {}

      // 將 route 的 query 填入 params
      // 如果需要保留既有的 SearchParams，則複製一份
      const query = {
        ...(preserveSearchParams &&
          Object.fromEntries(
            Array.from(
              new URLSearchParams(window.location.search).entries()
            ).filter(([key]) => !blackListSearchParams.includes(key))
          )),
        ...(route.query ?? {}),
      }
      const newRoute: URoute = {
        ...route,
        query: query as never,
      }

      const url = resolveRouteUrlHelper(newRoute, {
        returnAbsoluteUrl: options?.returnAbsoluteUrl,
        language: preserveLanguage ? (i18n.language as Language) : undefined,
      })

      return url
    },
    [i18n.language]
  )

  return { resolveRouteUrl, concatPathAndQuery }
}

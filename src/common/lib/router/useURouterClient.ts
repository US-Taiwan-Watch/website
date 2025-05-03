'use client'

import { URoute } from '@/common/lib/router/routes'
import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import resolveRouteUrlHelper, {
  concatPathAndQuery,
  ResolveRouteUrlHelperOptions,
} from '@/common/lib/router/helper'

type ResolveRouteUrlOptions = ResolveRouteUrlHelperOptions & {
  /**
   * 是否保留既有的 SearchParams
   * @default false
   */
  preserveSearchParams?: boolean
  /**
   * 既有的 SearchParams 的黑名單，
   * 不會被保留到新的路徑
   */
  blackListSearchParams?: string[]
}

/**
 * 只能用於 client component 的 router 操作
 * 由於 `useSearchParams` 是 client component 的 hook
 */
export default function useURouterClient() {
  const searchParams = useSearchParams()

  /**
   * 將 Route Object 轉換成路徑字串
   * @example
   * resolveRouteUrl({ name: "home" }) => "/"
   * resolveRouteUrl({ name: "bill", params: { billId: "123" } }) => "/bill/123"
   * resolveRouteUrl({ name: "bill", params: { billId: "123" }, query: { a: "1", b: "2" } }) => "/bill/123?a=1&b=2"
   */
  const resolveRouteUrl = useCallback(
    (route: URoute, options?: ResolveRouteUrlOptions) => {
      const { preserveSearchParams = false, blackListSearchParams = [] } =
        options ?? {}

      // 將 route 的 query 填入 params
      // 如果需要保留既有的 SearchParams，則複製一份
      const query = {
        ...(preserveSearchParams &&
          Object.fromEntries(
            Array.from(searchParams.entries()).filter(
              ([key]) => !blackListSearchParams.includes(key)
            )
          )),
        ...(route.query ?? {}),
      }
      const newRoute: URoute = {
        ...route,
        query: query as never,
      }

      const url = resolveRouteUrlHelper(newRoute, {
        returnAbsoluteUrl: options?.returnAbsoluteUrl,
      })

      return url
    },
    [searchParams]
  )

  return { resolveRouteUrl, concatPathAndQuery }
}

/**
 * ISR Revalidation Configuration
 *
 * 定義不同資料類型的快取 revalidate 時間。
 * 所有值的單位為秒。
 *
 * @see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
 */

/**
 * 資料新鮮度分類
 *
 * 依據資料更新頻率分類：
 * - REAL_TIME: 高頻更新資料（如文章列表、熱門法案）
 * - DYNAMIC: 中頻更新資料（如單篇文章、法案詳情）
 * - STABLE: 低頻更新資料（如統計資料、議員列表）
 * - STATIC: 極少更新資料（如 About 頁面內容）
 */
export enum RevalidateCategory {
  /** 高頻更新 - 5 分鐘 */
  REAL_TIME = 'REAL_TIME',

  /** 中頻更新 - 30 分鐘 */
  DYNAMIC = 'DYNAMIC',

  /** 低頻更新 - 2 小時 */
  STABLE = 'STABLE',

  /** 極少更新 - 24 小時 */
  STATIC = 'STATIC',
}

/**
 * Revalidate 時間常數（秒）
 */
export const REVALIDATE_TIMES: Record<RevalidateCategory, number> = {
  [RevalidateCategory.REAL_TIME]: 60 * 5, // 300s = 5 分鐘
  [RevalidateCategory.DYNAMIC]: 60 * 30, // 1800s = 30 分鐘
  [RevalidateCategory.STABLE]: 60 * 60 * 2, // 7200s = 2 小時
  [RevalidateCategory.STATIC]: 60 * 60 * 24, // 86400s = 24 小時
}

/**
 * 取得指定分類的 revalidate 時間
 */
export const getRevalidateTime = (category: RevalidateCategory): number => {
  return REVALIDATE_TIMES[category]
}

/**
 * 建立 Apollo Client query 用的 context fetchOptions
 *
 * @example
 * ```typescript
 * const { data } = await client.query({
 *   query: QUERY_ARTICLES,
 *   variables: { limit: 10 },
 *   context: createFetchOptions(RevalidateCategory.REAL_TIME),
 * })
 * ```
 */
export const createFetchOptions = (category: RevalidateCategory) => ({
  fetchOptions: {
    next: {
      revalidate: getRevalidateTime(category),
    },
  },
})

/**
 * 預定義的 fetchOptions，方便快速使用
 *
 * @example
 * ```typescript
 * const { data } = await client.query({
 *   query: QUERY_ARTICLE,
 *   variables: { id },
 *   context: FetchOptions.dynamic,
 * })
 * ```
 */
export const FetchOptions = {
  /** 5 分鐘 - 用於文章列表、熱門法案等高頻更新資料 */
  realTime: createFetchOptions(RevalidateCategory.REAL_TIME),

  /** 30 分鐘 - 用於單篇文章、法案詳情等中頻更新資料 */
  dynamic: createFetchOptions(RevalidateCategory.DYNAMIC),

  /** 2 小時 - 用於統計資料、議員列表等低頻更新資料 */
  stable: createFetchOptions(RevalidateCategory.STABLE),

  /** 24 小時 - 用於 About 頁面等極少更新資料 */
  static: createFetchOptions(RevalidateCategory.STATIC),
} as const

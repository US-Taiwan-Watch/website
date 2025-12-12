import { algoliasearch } from 'algoliasearch'
import { config } from '@/config'

/**
 * Algolia Search Client (v5)
 * 用於全站搜尋和 autosuggestion
 */
export const algoliaClient = algoliasearch(
  config.ALGOLIA_APP_ID,
  config.ALGOLIA_SEARCH_KEY
)

/**
 * Algolia Index Name
 * 預設使用設定檔中的 index name
 */
export const ALGOLIA_INDEX_NAME = config.ALGOLIA_INDEX_NAME

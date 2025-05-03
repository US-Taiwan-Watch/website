import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { z } from 'zod'

const searchResultSchema = z.object({
  value: z.string(),
})

export type SearchResultInput = z.input<typeof searchResultSchema>
export type SearchResult = z.infer<typeof searchResultSchema>

export class SearchResultUtils {
  static parse(input: SearchResultInput) {
    return searchResultSchema.parse(input)
  }

  static getHref(value: string) {
    const { resolveRouteUrl } = getURouterServer()
    return resolveRouteUrl({ name: RouteName.Search, params: { query: value } })
  }
}

import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { z } from 'zod'

const searchSuggestionSchema = z.object({
  value: z.string(),
})

export type SearchSuggestionInput = z.input<typeof searchSuggestionSchema>
export type SearchSuggestion = z.infer<typeof searchSuggestionSchema>

export class SearchSuggestionUtils {
  static parse(input: SearchSuggestionInput) {
    return searchSuggestionSchema.parse(input)
  }

  static getHref(value: string) {
    const { resolveRouteUrl } = getURouterServer()
    return resolveRouteUrl({ name: RouteName.Search, params: { query: value } })
  }
}

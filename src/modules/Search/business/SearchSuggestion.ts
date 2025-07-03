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
}

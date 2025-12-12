import { z } from 'zod'

export enum SearchSuggestionType {
  UstwArticle = 'ustw-article',
  KetagalanArticle = 'ketagalan-article',
  Bill = 'bill',
  People = 'people',
}

const searchSuggestionSchema = z.object({
  type: z.nativeEnum(SearchSuggestionType),
  value: z.string(),
  objectID: z.string(),
})

export type SearchSuggestionInput = z.input<typeof searchSuggestionSchema>
export type SearchSuggestion = z.infer<typeof searchSuggestionSchema>

export class SearchSuggestionUtils {
  static parse(input: SearchSuggestionInput) {
    return searchSuggestionSchema.parse(input)
  }
}

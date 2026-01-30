import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  SearchResult,
  SearchResults,
  SearchResultTotalMap,
} from '@/modules/Search/business/SearchResult'

type State = {
  searchResults: SearchResults | null
  searchResultTotalMap: SearchResultTotalMap | null
  parsedSearchResults: Array<SearchResult>
}

type Action = {
  setSearchResults: (results: SearchResults | null) => void
  setSearchResultTotalMap: (totalMap: SearchResultTotalMap | null) => void
}

const initialState: State = {
  searchResults: null,
  searchResultTotalMap: null,
  parsedSearchResults: [],
}

const useSearchResultsStore = createSelectors(
  create<State & Action>()(
    immer(
      devtools(
        (set) => ({
          ...initialState,
          setSearchResults: (results) =>
            set(() => ({
              searchResults: results,
              parsedSearchResults: results
                ? [
                    ...results.people.results,
                    ...results.bills.results,
                    ...results.articles.results,
                    ...results.ketagalans.results,
                  ]
                : [],
            })),
          setSearchResultTotalMap: (totalMap) =>
            set(() => ({
              searchResultTotalMap: totalMap,
            })),
        }),
        {
          name: 'SearchResultsStore',
        }
      )
    )
  )
)

export default useSearchResultsStore

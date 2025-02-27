import { Tag } from '@/common/lib/graphql/__generated__/graphql'
import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { ArticleCategory } from '@/modules/Article/business/ArticleCategory'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  /** 首頁 Tags */
  landingTags: Array<Tag>
  /** 熱門分類，存在在 NavBar 中 */
  highlightedCategories: Array<ArticleCategory>
}

type Action = {
  setLandingTags: (tags: Array<Tag>) => void
  setHomeHighlightedCategories: (categories: Array<ArticleCategory>) => void
}

const initialState: State = {
  landingTags: [],
  highlightedCategories: [],
}

const useArticleStore = createSelectors(
  create<State & Action>()(
    devtools(
      (set) => ({
        ...initialState,
        setLandingTags: (tags) => set(() => ({ landingTags: tags })),
        setHomeHighlightedCategories: (categories) =>
          set(() => ({ highlightedCategories: categories })),
      }),
      {
        name: 'ArticleStore',
      }
    )
  )
)

export default useArticleStore

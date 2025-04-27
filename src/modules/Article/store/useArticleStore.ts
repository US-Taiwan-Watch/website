import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { ArticleCategory } from '@/modules/Article/business/ArticleCategory'
import { Tag } from '@/modules/Common/business/Tag'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  /** 首頁 Article 的 Tags */
  articleLandingTags: Array<Tag>
  /** 熱門分類，存在在 NavBar 中 */
  articleHighlightedCategories: Array<ArticleCategory>
  /** 首頁 Ketagalan 的 Tags */
  ketagalanLandingTags: Array<Tag>
  /** 熱門分類，存在在 NavBar 中 */
  ketagalanHighlightedCategories: Array<ArticleCategory>
}

type Action = {
  setArticleLandingTags: (tags: Array<Tag>) => void
  setArticleHighlightedCategories: (categories: Array<ArticleCategory>) => void
  setKetagalanLandingTags: (tags: Array<Tag>) => void
  setKetagalanHighlightedCategories: (
    categories: Array<ArticleCategory>
  ) => void
}

const initialState: State = {
  articleLandingTags: [],
  articleHighlightedCategories: [],
  ketagalanLandingTags: [],
  ketagalanHighlightedCategories: [],
}

const useArticleStore = createSelectors(
  create<State & Action>()(
    devtools(
      (set) => ({
        ...initialState,
        setArticleLandingTags: (tags) =>
          set(() => ({ articleLandingTags: tags })),
        setArticleHighlightedCategories: (categories) =>
          set(() => ({ articleHighlightedCategories: categories })),
        setKetagalanLandingTags: (tags) =>
          set(() => ({ ketagalanLandingTags: tags })),
        setKetagalanHighlightedCategories: (categories) =>
          set(() => ({ ketagalanHighlightedCategories: categories })),
      }),
      {
        name: 'ArticleStore',
      }
    )
  )
)

export default useArticleStore

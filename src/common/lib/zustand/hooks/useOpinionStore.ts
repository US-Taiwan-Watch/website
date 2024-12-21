import { Tag } from '@/common/lib/graphql/__generated__/graphql'
import { config } from '@/config'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

type State = {
  /** 首頁 Tags */
  landingTags: Array<Tag>
  /** 熱門分類，存在在 NavBar 中 */
  highlightedCategories: Array<OpinionCategory>
}

type Action = {
  setLandingTags: (tags: Array<Tag>) => void
  setHomeHighlightedCategories: (categories: Array<OpinionCategory>) => void
}

const initialState: State = {
  landingTags: [],
  highlightedCategories: [],
}

const useOpinionStore = create<State & Action>((set) => ({
  ...initialState,
  setLandingTags: (tags) => set(() => ({ landingTags: tags })),
  setHomeHighlightedCategories: (categories) =>
    set(() => ({ highlightedCategories: categories })),
}))

export default useOpinionStore

if (config.NODE_ENV === 'development') {
  mountStoreDevtool('OpinionStore', useOpinionStore)
}

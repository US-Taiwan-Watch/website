import { config } from '@/config'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

type State = {
  /** 首頁分類 */
  homeCategories: Array<OpinionCategory>
  /** 熱門分類，存在在 NavBar 中 */
  highlightedCategories: Array<OpinionCategory>
}

type Action = {
  setHomeCategories: (categories: Array<OpinionCategory>) => void
  setHomeHighlightedCategories: (categories: Array<OpinionCategory>) => void
}

const initialState: State = {
  homeCategories: [],
  highlightedCategories: [],
}

const useOpinionStore = create<State & Action>((set) => ({
  ...initialState,
  setHomeCategories: (categories) =>
    set(() => ({ homeCategories: categories })),
  setHomeHighlightedCategories: (categories) =>
    set(() => ({ highlightedCategories: categories })),
}))

export default useOpinionStore

if (config.NODE_ENV === 'development') {
  mountStoreDevtool('OpinionStore', useOpinionStore)
}

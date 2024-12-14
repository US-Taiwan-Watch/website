import { config } from '@/config'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import {
  highlightedOpinionCategories,
  homeOpinionCategories,
} from '@/modules/Opinion/data'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

type State = {
  /** 首頁分類 */
  homeCategories: Array<OpinionCategory>
  /** 熱門分類，存在在 NavBar 中 */
  highlightedCategories: Array<OpinionCategory>
  /** 所有分類 */
  categories: Array<OpinionCategory>
}

type Action = {
  fetchHomeCategories: () => void
  setCategories: (categories: Array<OpinionCategory>) => void
  fetchHighlightedCategories: () => void
  clearCategories: () => void
}

const initialState: State = {
  homeCategories: [],
  highlightedCategories: [],
  categories: [],
}

const useOpinionStore = create<State & Action>((set) => ({
  ...initialState,
  fetchHomeCategories: () => {
    // TODO: 從 API 取得資料
    set(() => ({
      homeCategories: homeOpinionCategories.map(
        (category) => new OpinionCategory(category)
      ),
    }))
  },
  fetchHighlightedCategories: () => {
    // TODO: 從 API 取得資料
    set(() => ({
      highlightedCategories: highlightedOpinionCategories.map(
        (category) => new OpinionCategory(category)
      ),
    }))
  },
  setCategories: (categories) => set(() => ({ categories })),
  clearCategories: () => set(() => ({ categories: [] })),
}))

export default useOpinionStore

if (config.NODE_ENV === 'development') {
  mountStoreDevtool('OpinionStore', useOpinionStore)
}

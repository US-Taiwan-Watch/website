import { config } from '@/config'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import {
  highlightedOpinionCategories,
  opinionCategories,
} from '@/modules/Opinion/data'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

type State = {
  /** 熱門分類，存在在 NavBar 中 */
  highlightedCategories: Array<OpinionCategory>
  /** 所有分類 */
  categories: Array<OpinionCategory>
}

type Action = {
  fetchCategories: () => void
  fetchHighlightedCategories: () => void
  clearCategories: () => void
}

const initialState: State = {
  highlightedCategories: [],
  categories: [],
}

const useOpinionStore = create<State & Action>((set) => ({
  ...initialState,
  fetchHighlightedCategories: () => {
    // TODO: 從 API 取得資料
    set(() => ({
      highlightedCategories: highlightedOpinionCategories.map(
        (category) => new OpinionCategory(category)
      ),
    }))
  },
  fetchCategories: () => {
    // TODO: 從 API 取得資料
    set(() => ({
      categories: opinionCategories.map(
        (category) => new OpinionCategory(category)
      ),
    }))
  },
  clearCategories: () => set(() => ({ categories: [] })),
}))

export default useOpinionStore

if (config.NODE_ENV === 'development') {
  mountStoreDevtool('OpinionStore', useOpinionStore)
}

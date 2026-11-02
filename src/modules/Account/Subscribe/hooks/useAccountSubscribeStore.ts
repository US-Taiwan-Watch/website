import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { immer } from 'zustand/middleware/immer'
import {
  AccountSubscribe,
  AccountSubscribeType,
} from '@/modules/Account/Subscribe/business/AccountSubscribe'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  currentAccountSubscribeType: AccountSubscribeType | null
  subscribeBills: AccountSubscribe[]
  subscribePeoples: AccountSubscribe[]
  bookmarkUstwArticles: AccountSubscribe[]
  bookmarkKetagalanArticles: AccountSubscribe[]
}

type Action = {
  setCurrentAccountSubscribeType: (type: AccountSubscribeType | null) => void
  setSubscribeBills: (list: AccountSubscribe[]) => void
  setSubscribePeoples: (list: AccountSubscribe[]) => void
  setBookmarkUstwArticles: (list: AccountSubscribe[]) => void
  setBookmarkKetagalanArticles: (list: AccountSubscribe[]) => void
}

const initialState: State = {
  currentAccountSubscribeType: null,
  subscribeBills: [],
  subscribePeoples: [],
  bookmarkUstwArticles: [],
  bookmarkKetagalanArticles: [],
}

const useAccountSubscribeStore = createSelectors(
  create<State & Action>()(
    immer(
      devtools(
        (set) => ({
          ...initialState,
          setCurrentAccountSubscribeType: (type) =>
            set((state) => ({
              ...state,
              currentAccountSubscribeType: type,
            })),
          setSubscribeBills: (list) =>
            set((state) => ({
              ...state,
              subscribeBills: list,
            })),
          setSubscribePeoples: (list) =>
            set((state) => ({
              ...state,
              subscribePeoples: list,
            })),
          setBookmarkUstwArticles: (list) =>
            set((state) => ({
              ...state,
              bookmarkUstwArticles: list,
            })),
          setBookmarkKetagalanArticles: (list) =>
            set((state) => ({
              ...state,
              bookmarkKetagalanArticles: list,
            })),
        }),
        {
          name: 'AccountSubscribeStore',
        }
      )
    )
  )
)

export default useAccountSubscribeStore

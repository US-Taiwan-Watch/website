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
  accountSubscribeList: AccountSubscribe[]
  filteredAccountSubscribeList: AccountSubscribe[]
}

type Action = {
  setCurrentAccountSubscribeType: (type: AccountSubscribeType | null) => void
  setAccountSubscribeList: (list: AccountSubscribe[]) => void
}

const initialState: State = {
  currentAccountSubscribeType: null,
  accountSubscribeList: [],
  filteredAccountSubscribeList: [],
}

const useAccountSubscribeStore = createSelectors(
  create<State & Action>()(
    immer(
      devtools(
        (set, get) => ({
          ...initialState,
          setCurrentAccountSubscribeType: (type) =>
            set((state) => {
              const accountSubscribeList = get().accountSubscribeList

              if (type === null) {
                return {
                  ...state,
                  currentAccountSubscribeType: null,
                  filteredAccountSubscribeList: accountSubscribeList,
                }
              }

              return {
                ...state,
                currentAccountSubscribeType: type,
                filteredAccountSubscribeList: accountSubscribeList.filter(
                  (item) => item.type === type
                ),
              }
            }),
          setAccountSubscribeList: (list) =>
            set(() => ({
              accountSubscribeList: list,
              filteredAccountSubscribeList: list,
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

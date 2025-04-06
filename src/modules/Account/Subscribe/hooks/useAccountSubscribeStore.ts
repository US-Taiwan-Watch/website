import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { immer } from 'zustand/middleware/immer'
import {
  AccountSubscribe,
  AccountSubscribeType,
} from '@/modules/Account/Subscribe/business/AccountSubscribe'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const MOCK_ACCOUNT_SUBSCRIBE_LIST: AccountSubscribe[] = [
  {
    id: '1',
    type: AccountSubscribeType.Bill,
    title: 'Bill',
    url: 'https://www.google.com',
  },
  {
    id: '2',
    type: AccountSubscribeType.Bill,
    title: 'Bill',
    url: 'https://www.google.com',
  },
  {
    id: '3',
    type: AccountSubscribeType.Article,
    title: 'Article',
    url: 'https://www.google.com',
  },
  {
    id: '4',
    type: AccountSubscribeType.Article,
    title: 'Article',
    url: 'https://www.google.com',
  },
  {
    id: '5',
    type: AccountSubscribeType.People,
    title: 'People',
    url: 'https://www.google.com',
  },
  {
    id: '6',
    type: AccountSubscribeType.People,
    title: 'People',
    url: 'https://www.google.com',
  },
]

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
  accountSubscribeList: MOCK_ACCOUNT_SUBSCRIBE_LIST,
  filteredAccountSubscribeList: MOCK_ACCOUNT_SUBSCRIBE_LIST,
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

import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  TaiwanRecord,
  TaiwanRecordStatus,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'

type State = {
  currentAccountTaiwanRecordStatus: TaiwanRecordStatus | null
  accountTaiwanRecordList: TaiwanRecord[]
  filteredAccountTaiwanRecordList: TaiwanRecord[]
}

type Action = {
  setCurrentAccountTaiwanRecordStatus: (
    status: TaiwanRecordStatus | null
  ) => void
  setAccountTaiwanRecordList: (list: TaiwanRecord[]) => void
}

const initialState: State = {
  currentAccountTaiwanRecordStatus: null,
  accountTaiwanRecordList: [],
  filteredAccountTaiwanRecordList: [],
}

const useAccountTaiwanRecordStore = createSelectors(
  create<State & Action>()(
    immer(
      devtools(
        (set, get) => ({
          ...initialState,
          setCurrentAccountTaiwanRecordStatus: (status) =>
            set((state) => {
              const accountTaiwanRecordList = get().accountTaiwanRecordList

              if (status === null) {
                return {
                  ...state,
                  currentAccountTaiwanRecordType: null,
                  filteredAccountTaiwanRecordList: accountTaiwanRecordList,
                }
              }

              return {
                ...state,
                currentAccountTaiwanRecordStatus: status,
                filteredAccountTaiwanRecordList: accountTaiwanRecordList.filter(
                  (item) => item.status === status
                ),
              }
            }),
          setAccountTaiwanRecordList: (list) =>
            set(() => ({
              accountTaiwanRecordList: list,
              filteredAccountTaiwanRecordList: list,
            })),
        }),
        {
          name: 'AccountTaiwanRecordStore',
        }
      )
    )
  )
)

export default useAccountTaiwanRecordStore

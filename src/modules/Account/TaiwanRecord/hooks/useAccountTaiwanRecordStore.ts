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
}

const useAccountTaiwanRecordStore = createSelectors(
  create<State & Action>()(
    immer(
      devtools(
        (set) => ({
          ...initialState,
          setCurrentAccountTaiwanRecordStatus: (status) =>
            set((state) => {
              return {
                ...state,
                currentAccountTaiwanRecordStatus: status,
              }
            }),
          setAccountTaiwanRecordList: (list) =>
            set(() => ({
              accountTaiwanRecordList: list,
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

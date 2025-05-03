import createSelectors from '@/common/lib/zustand/hooks/createSelectors'
import { Account } from '@/modules/Account/business/Account'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  account: Account | null
}

type Action = {
  setAccount: (account: Account | null) => void
}

const initialState: State = {
  account: null,
}

const useAccountStore = createSelectors(
  create<State & Action>()(
    devtools(
      (set) => ({
        ...initialState,
        setAccount: (account) => set(() => ({ account })),
      }),
      {
        name: 'AccountStore',
      }
    )
  )
)

export default useAccountStore

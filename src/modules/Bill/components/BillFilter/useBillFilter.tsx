'use client'

import { useCallback, useReducer } from 'react'

export type BillFilterState = {
  category: string
  party: string
  type: string
  status: string
  sponsors: string
  cosponsors: string
}

type FilterAction =
  | { type: 'SET_FILTER'; field: keyof BillFilterState; value: string }
  | { type: 'RESET' }

const initialState: BillFilterState = {
  category: '',
  party: '',
  type: '',
  status: '',
  sponsors: '',
  cosponsors: '',
}

function filterReducer(
  state: BillFilterState,
  action: FilterAction
): BillFilterState {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, [action.field]: action.value }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default function useBillFilter() {
  const [filterState, dispatch] = useReducer(filterReducer, initialState)

  const handleFilterChange = useCallback(
    (field: keyof BillFilterState, value: string) => {
      dispatch({ type: 'SET_FILTER', field, value })
    },
    [dispatch]
  )

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [dispatch])

  return { filterState, handleFilterChange, handleReset }
}

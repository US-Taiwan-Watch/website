'use client'

import useSearchStore from '@/common/lib/zustand/hooks/useSearchStore'
import { memo } from 'react'

const SearchBar = memo(function SearchBar () {
  const updateLocation = useSearchStore((state) => state.updateLocation)
  const updateLatLng = useSearchStore((state) => state.updateLatLng)
  const updateNestedData = useSearchStore((state) => state.updateNestedData)
  const reset = useSearchStore((state) => state.reset)

  return (
    <div>
      <button onClick={() => updateLocation('New Location')}>
        Update Location
      </button>
      <button onClick={() => updateLatLng(1, 2)}>Update LatLng</button>
      <button onClick={() => updateNestedData()}>Update Nested Data</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
})

export default SearchBar

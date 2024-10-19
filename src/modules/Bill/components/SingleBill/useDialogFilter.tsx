'use client'

import { useCallback, useState } from 'react'

export default function useDialogFilter<T extends string>() {
  const [selectedOptionIdList, setSelectedOptionIdList] = useState<T[]>([])

  const handleSelectOption = useCallback((optionId: T) => {
    setSelectedOptionIdList((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId)
      }
      return [...prev, optionId]
    })
  }, [])

  const clearAll = useCallback(() => {
    setSelectedOptionIdList([])
  }, [])

  return {
    selectedOptionIdList,
    handleSelectOption,
    clearAll,
  }
}

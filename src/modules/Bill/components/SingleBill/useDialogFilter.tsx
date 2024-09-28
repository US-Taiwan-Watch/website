'use client'

import { useCallback, useState } from 'react'

type Props<T extends string> = {
  allOptionId: T[]
}

export default function useDialogFilter<T extends string>({
  allOptionId,
}: Props<T>) {
  const [selectedOptionIdList, setSelectedOptionIdList] = useState<T[]>([])

  const handleSelectOption = useCallback((optionId: T) => {
    setSelectedOptionIdList((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId)
      }
      return [...prev, optionId]
    })
  }, [])

  const toggleSelectAllOption = useCallback(() => {
    setSelectedOptionIdList((prev) =>
      prev.length === allOptionId.length ? [] : allOptionId
    )
  }, [allOptionId])

  return {
    selectedOptionIdList,
    handleSelectOption,
    toggleSelectAllOption,
  }
}

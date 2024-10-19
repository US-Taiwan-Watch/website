'use client'

import {
  FilterCategory,
  FilterOption,
} from '@/modules/Bill/components/SingleBill/CosponsorDialog/DialogFilter'
import { useCallback, useState } from 'react'

export type SelectedOption = Record<FilterCategory['id'], FilterOption['id'][]>

const DEFAULT_SELECTED_OPTION: SelectedOption = {
  party: [],
  constituency: [],
}

export default function useDialogFilter() {
  const [selectedOptionList, setSelectedOptionList] = useState<SelectedOption>(
    DEFAULT_SELECTED_OPTION
  )

  const handleSelectOption = useCallback(
    (categoryId: FilterCategory['id'], optionId: FilterOption['id']) => {
      setSelectedOptionList((prev) => {
        const currentOptions = prev[categoryId] || []
        const newOptions = currentOptions.includes(optionId)
          ? currentOptions.filter((id) => id !== optionId)
          : [...currentOptions, optionId]
        return { ...prev, [categoryId]: newOptions }
      })
    },
    []
  )

  const clearAll = useCallback(() => {
    setSelectedOptionList(DEFAULT_SELECTED_OPTION)
  }, [])

  return {
    selectedOptionList,
    handleSelectOption,
    clearAll,
  }
}

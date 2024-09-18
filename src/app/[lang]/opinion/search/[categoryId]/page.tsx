'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import OpinionNavbar from '@/modules/Opinion/components/OpinionNavbar'
import OpinionSearchCategorySection from '@/modules/Opinion/components/OpinionSearch/OpinionSearchCategorySection'
import { Stack } from '@mui/material'
import { useEffect } from 'react'

export default function OpinionSearchCategory({
  params: { categoryId },
}: {
  params: {
    categoryId: string
  }
}) {
  const fetchCategories = useOpinionStore((state) => state.fetchCategories)
  const fetchHighlightedCategories = useOpinionStore(
    (state) => state.fetchHighlightedCategories
  )

  useEffect(() => {
    fetchCategories()
    fetchHighlightedCategories()
  }, [fetchCategories, fetchHighlightedCategories])

  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <OpinionNavbar activeId={categoryId} />
      </UFullWidthBackgroundBox>
      <OpinionSearchCategorySection categoryId={categoryId} />
    </Stack>
  )
}

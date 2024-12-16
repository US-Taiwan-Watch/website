'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import OpinionNavbar from '@/modules/Opinion/components/OpinionNavbar'
import OpinionSearchCategorySection from '@/modules/Opinion/components/OpinionSearch/OpinionSearchCategorySection'
import { Stack } from '@mui/material'

export default function OpinionSearchCategory({
  params: { categoryId },
}: {
  params: {
    categoryId: string
  }
}) {
  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <OpinionNavbar activeId={categoryId} />
      </UFullWidthBackgroundBox>
      <OpinionSearchCategorySection categoryId={categoryId} />
    </Stack>
  )
}

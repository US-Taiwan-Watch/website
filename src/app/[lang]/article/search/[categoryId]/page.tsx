'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ArticleNavbar from '@/modules/Article/components/ArticleNavbar'
import ArticleSearchCategorySection from '@/modules/Article/components/ArticleSearch/ArticleSearchCategorySection'
import { Stack } from '@mui/material'

export default function ArticleSearchCategory({
  params: { categoryId },
}: {
  params: {
    categoryId: string
  }
}) {
  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <ArticleNavbar activeId={categoryId} />
      </UFullWidthBackgroundBox>
      <ArticleSearchCategorySection categoryId={categoryId} />
    </Stack>
  )
}

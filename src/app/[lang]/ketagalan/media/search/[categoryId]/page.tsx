'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import KetagalanArticleNavbar from '@/modules/Article/components/KetagalanArticleNavbar'
import ArticleSearchCategorySection from '@/modules/Article/components/ArticleSearch/ArticleSearchCategorySection'
import { ArticleType } from '@/modules/Article/business/Article'
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
        <KetagalanArticleNavbar activeId={categoryId} />
      </UFullWidthBackgroundBox>
      <ArticleSearchCategorySection
        categoryId={categoryId}
        articleType={ArticleType.Ketagalan}
      />
    </Stack>
  )
}

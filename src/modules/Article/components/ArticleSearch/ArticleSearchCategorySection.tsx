'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import ArticlePostCards, {
  ArticlePostCardsSkeleton,
} from '@/modules/Article/components/ArticlePostCards'
import useArticleSearch from '@/modules/Article/hooks/useArticleSearch'
import { Box, Skeleton, Stack, Typography, useTheme } from '@mui/material'
import { notFound } from 'next/navigation'

const ArticleSearchCategorySectionSkeleton = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={8} padding={theme.spacing(10, 0, 15, 0)}>
      {/** Title */}
      <Skeleton
        variant="rounded"
        sx={{
          height: 70,
          width: 200,
        }}
      />

      {/** Result */}
      <ArticlePostCardsSkeleton />
    </Stack>
  )
}

interface ArticleSearchCategorySectionProps {
  categoryId: string
}

const ArticleSearchCategorySection = ({
  categoryId,
}: ArticleSearchCategorySectionProps) => {
  const theme = useTheme<USTWTheme>()

  const { isArticlesLoading, category, articles } = useArticleSearch(categoryId)

  // TODO: 顯示 loading
  if (isArticlesLoading) {
    return <ArticleSearchCategorySectionSkeleton />
  }

  // 沒有結果，到 404
  if (!category) {
    notFound()
  }

  return (
    <Stack spacing={8} padding={theme.spacing(10, 0, 15, 0)}>
      {/** Title */}
      <UHStack spacing={2}>
        <Typography variant="h1" lineHeight={1}>
          {category.label}
        </Typography>
        <Box
          sx={{
            backgroundColor: theme.color.common.black,
            padding: theme.spacing(1, 2),
            borderRadius: '100px',
            height: '100%',
          }}
        >
          <Typography color="primary" variant="subtitleL">
            {articles.length}
          </Typography>
        </Box>
      </UHStack>

      {/** Result */}
      <ArticlePostCards articles={articles} showCategory={false} />
    </Stack>
  )
}

export default ArticleSearchCategorySection

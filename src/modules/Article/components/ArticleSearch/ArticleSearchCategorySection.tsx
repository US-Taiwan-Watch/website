'use client'

import UHStack from '@/common/components/atoms/UHStack'
import ULoadMoreButton from '@/common/components/atoms/ULoadMoreButton'
import UPagination from '@/common/components/atoms/UPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import ArticlePostCards, {
  ArticlePostCardsSkeleton,
} from '@/modules/Article/components/ArticlePostCards'
import useArticleSearch from '@/modules/Article/hooks/useArticleSearch'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { ArticleType } from '@/modules/Article/business/Article'

interface ArticleSearchCategorySectionProps {
  articleType: ArticleType
  categoryId: string
}

const ArticleSearchCategorySection = ({
  articleType,
  categoryId,
}: ArticleSearchCategorySectionProps) => {
  const theme = useTheme<USTWTheme>()

  const {
    isArticlesLoading,
    category,
    articles,
    shouldAppendData,
    totalPages,
    page,
    handlePageChange,
    resetArticles,
    totalDocs,
  } = useArticleSearch(articleType, categoryId)

  return (
    <Stack
      spacing={{
        xs: 2,
        sm: 8,
      }}
      sx={{
        pt: {
          xs: 3,
          sm: 5,
        },
        pb: {
          xs: 5,
          sm: 10,
        },
      }}
      alignItems="center"
    >
      {/** Title */}
      {category && (
        <UHStack
          width="100%"
          spacing={2}
          alignItems={{
            xs: 'center',
            sm: 'flex-start',
          }}
          justifyContent={{
            xs: 'space-between',
            sm: 'flex-start',
          }}
          borderBottom={{
            xs: `1px solid ${theme.color.neutral[200]}`,
            sm: 'none',
          }}
          pb={{
            xs: 1.5,
            sm: 0,
          }}
        >
          <Typography variant="h1" lineHeight={1}>
            {category.label}
          </Typography>
          <Box
            sx={{
              backgroundColor: theme.color.article.searchResultCountBackground,
              padding: {
                xs: theme.spacing(0.25, 0.75),
                sm: theme.spacing(1, 2),
              },
              borderRadius: '100px',
            }}
          >
            <Typography
              color="primary"
              sx={{
                fontSize: {
                  xs: '0.75rem',
                  sm: '1.375rem',
                },
                fontWeight: 500,
              }}
            >
              {totalDocs}
            </Typography>
          </Box>
        </UHStack>
      )}

      {isArticlesLoading && !articles.length ? (
        <ArticlePostCardsSkeleton />
      ) : (
        <>
          {/** Result */}
          <ArticlePostCards articles={articles} showCategory={false} />

          {/** Infinite Scroll (Mobile) */}
          {shouldAppendData && (
            <ULoadMoreButton
              loading={isArticlesLoading}
              onLoadMore={() => handlePageChange(page + 1)}
              hasMore={page < totalPages}
            />
          )}

          {/** Pagination (Desktop) */}
          {!shouldAppendData && !isArticlesLoading && totalPages > 1 && (
            <UPagination
              count={totalPages}
              page={page}
              onChange={(_, page) => {
                resetArticles()
                handlePageChange(page)
              }}
            />
          )}
        </>
      )}
    </Stack>
  )
}

export default ArticleSearchCategorySection

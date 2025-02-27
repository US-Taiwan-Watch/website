import UPagination from '@/common/components/atoms/UPagination'
import { Article } from '@/modules/Article/business/Article'
import ArticlePostCard, {
  ArticlePostCardSkeleton,
} from '@/modules/Article/components/ArticlePostCard'
import { Box, Grid2 as Grid, Stack } from '@mui/material'

interface ArticlePostCardsProps {
  articles: Array<Article>
  pagination?: boolean
  /** 是否呈現 Category */
  showCategory?: boolean
}

const ArticlePostCards = ({
  articles,
  pagination = true,
  showCategory = true,
}: ArticlePostCardsProps) => {
  return (
    <Stack spacing={8}>
      {/** Posts */}
      <Grid container rowSpacing={8} columnSpacing={4}>
        {articles.map((article) => (
          <Grid size={4} key={article.id}>
            <ArticlePostCard article={article} showCategory={showCategory} />
          </Grid>
        ))}
      </Grid>
      {/** Pagination */}
      {pagination && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <UPagination count={10} />
        </Box>
      )}
    </Stack>
  )
}

export default ArticlePostCards

export const ArticlePostCardsSkeleton = ({
  count = 12,
}: {
  /** 呈現的卡片數量 */
  count?: number
}) => {
  return (
    <Grid container rowSpacing={8} columnSpacing={4}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid size={4} key={index}>
          <ArticlePostCardSkeleton />
        </Grid>
      ))}
    </Grid>
  )
}

import UHStack from '@/common/components/atoms/UHStack'
import { Article } from '@/modules/Article/business/Article'
import ArticlePostCard, {
  ArticlePostCardSkeleton,
} from '@/modules/Article/components/ArticlePostCard'
import { Box, Grid2 as Grid, Stack } from '@mui/material'

interface ArticlePostCardsProps {
  articles: Array<Article>
  /** 是否呈現 Category */
  showCategory?: boolean
  /** 是否強制為 Card 模式 */
  forceCard?: boolean
}

/**
 * Grid 卡片列表
 */
const ArticlePostCards = ({
  articles,
  showCategory = true,
  forceCard = false,
}: ArticlePostCardsProps) => {
  return (
    <Stack spacing={8} width="100%">
      {/** Posts */}
      <Grid
        container
        rowSpacing={{
          xs: 0.75,
          sm: 8,
        }}
        columnSpacing={{
          xs: 0.75,
          sm: 4,
        }}
      >
        {articles.map((article) => (
          <Grid
            key={article.id}
            size={{
              xs: 12,
              sm: 4,
            }}
          >
            <ArticlePostCard
              article={article}
              showCategory={showCategory}
              forceCard={forceCard}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default ArticlePostCards

/**
 * 可滾動的卡片列表
 */
export const ScrollableArticlePostCards = ({
  articles,
  showCategory = true,
  forceCard = false,
}: ArticlePostCardsProps) => {
  return (
    <Box overflow="auto" py={2} px={2}>
      <UHStack gap={1} width="max-content">
        {articles.map((article) => (
          <Box key={article.id} width="80dvw">
            <ArticlePostCard
              article={article}
              showCategory={showCategory}
              forceCard={forceCard}
            />
          </Box>
        ))}
      </UHStack>
    </Box>
  )
}

export const ArticlePostCardsSkeleton = ({
  count = 9,
  forceCard = false,
}: {
  /** 呈現的卡片數量 */
  count?: number
  /** 是否強制為 Card 模式 */
  forceCard?: boolean
}) => {
  return (
    <Grid
      container
      rowSpacing={{
        xs: 0.75,
        sm: 8,
      }}
      columnSpacing={{
        xs: 0.75,
        sm: 4,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Grid
          size={{
            xs: 12,
            sm: 4,
          }}
          key={index}
        >
          <ArticlePostCardSkeleton forceCard={forceCard} />
        </Grid>
      ))}
    </Grid>
  )
}

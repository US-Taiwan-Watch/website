'use client'

import Carousel from '@/common/components/elements/Carousel'
import DotPagination from '@/common/components/elements/Carousel/DotPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Article } from '@/modules/Article/business/Article'
import ArticleLandingBannerCard from '@/modules/Article/components/ArticleLanding/ArticleLandingBannerCard'
import { Box, useTheme } from '@mui/material'

interface ArticleLandingBannerCardsProps {
  articles: Article[]
}

const ArticleLandingBannerCards = ({
  articles,
}: ArticleLandingBannerCardsProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Box
      padding={{
        xs: theme.spacing(2, 0),
        sm: theme.spacing(6, 0),
      }}
      sx={{
        mx: -1,
      }}
    >
      <Carousel renderPagination={(props) => <DotPagination {...props} />}>
        {articles.map((article) => (
          <ArticleLandingBannerCard key={article.id} article={article} />
        ))}
      </Carousel>
    </Box>
  )
}

export default ArticleLandingBannerCards

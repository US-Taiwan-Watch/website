import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import IndexArticleCard from '@/common/components/elements/IndexArticleCard'
import { Box, Container } from '@mui/material'
import ClientCarousel from '@/common/components/elements/IndexArticleCarousel/ClientCarousel'
import { Article } from '@/modules/Article/business/Article'

export type IndexArticleCarouselProps = {
  articles: Article[]
}

export default function IndexArticleCarousel({
  articles,
}: IndexArticleCarouselProps) {
  return (
    <UFullWidthBackgroundBox>
      <Container maxWidth="xl">
        <Box sx={{ mx: -1 }}>
          <ClientCarousel>
            {articles.map((article) => (
              <IndexArticleCard article={article} key={article.id} />
            ))}
          </ClientCarousel>
        </Box>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

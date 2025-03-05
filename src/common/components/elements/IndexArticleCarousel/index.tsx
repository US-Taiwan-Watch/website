import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import IndexArticleCard from '@/common/components/elements/IndexArticleCard'
import { Container } from '@mui/material'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'

/**
 * 首頁文章輪播車的限制數量
 */
const INDEX_ARTICLE_CAROUSEL_LIMIT = 3

export default async function IndexArticleCarousel() {
  const articles = await ServerArticleApi.getHomeFeaturedArticles({
    limit: INDEX_ARTICLE_CAROUSEL_LIMIT,
  })

  return (
    <UFullWidthBackgroundBox>
      <Container maxWidth="xl">
        <Carousel>
          {articles.map((article) => (
            <IndexArticleCard
              containerSx={{
                mx: 1,
              }}
              article={article}
              key={article.id}
            />
          ))}
        </Carousel>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

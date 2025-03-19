import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import IndexArticleCard from '@/common/components/elements/IndexArticleCard'
import { Container } from '@mui/material'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import ClientCarousel from '@/common/components/elements/IndexArticleCarousel/ClientCarousel'

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
        <ClientCarousel>
          {articles.map((article) => (
            <IndexArticleCard article={article} key={article.id} />
          ))}
        </ClientCarousel>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

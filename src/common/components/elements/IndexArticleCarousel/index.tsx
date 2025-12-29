import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import IndexArticleCard from '@/common/components/elements/IndexArticleCard'
import { Box, Container } from '@mui/material'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import ClientCarousel from '@/common/components/elements/IndexArticleCarousel/ClientCarousel'
import { ArticleType } from '@/modules/Article/business/Article'
import { Language } from '@/common/lib/i18n/types'

/**
 * 首頁文章輪播車的限制數量
 */
const INDEX_ARTICLE_CAROUSEL_LIMIT = 3

type IndexArticleCarouselProps = {
  lang: Language
}

export default async function IndexArticleCarousel({
  lang,
}: IndexArticleCarouselProps) {
  const articles = await ServerArticleApi.getHomeFeaturedArticles(lang, {
    limit: INDEX_ARTICLE_CAROUSEL_LIMIT,
    articleType: ArticleType.Article,
  })

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

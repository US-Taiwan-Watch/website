import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import IndexArticleCard from '@/common/components/elements/IndexArticleCard'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { Language } from '@/common/lib/i18n/types'
import { ArticleUtils } from '@/modules/Article/business/Article'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import { Container } from '@mui/material'
import { isNull } from 'lodash-es'

interface IndexArticleCarouselProps {
  lang: Language
}

export default async function IndexArticleCarousel({
  lang,
}: IndexArticleCarouselProps) {
  const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
    query: QUERY_ARTICLES,
    variables: {
      limit: 3,
      where: {
        isFeatured: {
          equals: true,
        },
      },
    },
  })

  const articles = data?.Articles?.docs
    ?.filter((article) => !isNull(article))
    .map((article) => ArticleUtils.parse(lang, article))

  if (!articles) return null

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

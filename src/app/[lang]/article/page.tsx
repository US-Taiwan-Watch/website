import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { Language } from '@/common/lib/i18n/types'
import { ArticleUtils } from '@/modules/Article/business/Article'
import ArticleLandingBannerCards from '@/modules/Article/components/ArticleLanding/ArticleLandingBannerCards'
import ArticlePostSection from '@/modules/Article/components/ArticleLanding/ArticlePostSection'
import ArticleNavbar from '@/modules/Article/components/ArticleNavbar'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import Stack from '@mui/material/Stack'
import { isNull } from 'lodash-es'

const ARTICLE_LANDING_BANNER_CARDS_LIMIT = 4

interface ArticlePageProps {
  params: {
    lang: Language
  }
}

export default async function Article({ params }: ArticlePageProps) {
  const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
    query: QUERY_ARTICLES,
    variables: {
      limit: ARTICLE_LANDING_BANNER_CARDS_LIMIT,
      where: {
        isFeatured: {
          equals: true,
        },
      },
    },
  })

  const landingBannerArticles =
    data?.Articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => ArticleUtils.parse(params.lang, article)) ?? []

  return (
    <UContainer>
      <Stack flex={1}>
        <UFullWidthBackgroundBox>
          <ArticleNavbar />
        </UFullWidthBackgroundBox>
        {landingBannerArticles.length > 0 && (
          <ArticleLandingBannerCards articles={landingBannerArticles} />
        )}
        <ArticlePostSection />
      </Stack>
    </UContainer>
  )
}

import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import ArticleLandingBannerCards from '@/modules/Article/components/ArticleLanding/ArticleLandingBannerCards'
import ArticlePostSection from '@/modules/Article/components/ArticleLanding/ArticlePostSection'
import ArticleNavbar from '@/modules/Article/components/ArticleNavbar'
import { ArticleType } from '@/modules/Article/business/Article'
import Stack from '@mui/material/Stack'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Language } from '@/common/lib/i18n/types'

/**
 * 首頁橫幅卡片數量
 */
const ARTICLE_LANDING_BANNER_CARDS_LIMIT = 4

/**
 * 預設拉取的文章數量
 */
const ARTICLE_POST_COUNT = 9

type ArticlePageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: ArticlePageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.Article }),
    namespace: 'seo_article',
  })
}

export default async function Article({ params }: ArticlePageProps) {
  const landingBannerArticles = await ServerArticleApi.getLandingArticles(
    params.lang,
    {
      limit: ARTICLE_LANDING_BANNER_CARDS_LIMIT,
      articleType: ArticleType.Article,
    }
  )

  const articles = await ServerArticleApi.getArticles(params.lang, {
    limit: ARTICLE_POST_COUNT,
    articleType: ArticleType.Article,
  })

  return (
    <UContainer>
      <Stack flex={1}>
        <UFullWidthBackgroundBox>
          <ArticleNavbar />
        </UFullWidthBackgroundBox>
        {landingBannerArticles.length > 0 && (
          <ArticleLandingBannerCards articles={landingBannerArticles} />
        )}
        <ArticlePostSection
          articleType={ArticleType.Article}
          defaultArticles={articles}
        />
      </Stack>
    </UContainer>
  )
}

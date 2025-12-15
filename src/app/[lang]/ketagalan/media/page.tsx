import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'
import ArticleLandingBannerCards from '@/modules/Article/components/ArticleLanding/ArticleLandingBannerCards'
import ArticlePostSection from '@/modules/Article/components/ArticleLanding/ArticlePostSection'
import KetagalanArticleNavbar from '@/modules/Article/components/KetagalanArticleNavbar'
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

type KetagalanMediaPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: KetagalanMediaPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.KetagalanMedia }),
    namespace: 'seo_ketagalan_media',
  })
}

export default async function Article() {
  const landingBannerArticles = await ServerArticleApi.getLandingArticles({
    limit: ARTICLE_LANDING_BANNER_CARDS_LIMIT,
    articleType: ArticleType.Ketagalan,
  })

  const articles = await ServerArticleApi.getArticles({
    limit: ARTICLE_POST_COUNT,
    articleType: ArticleType.Ketagalan,
  })

  return (
    <UContainer>
      <Stack flex={1}>
        <UFullWidthBackgroundBox>
          <KetagalanArticleNavbar />
        </UFullWidthBackgroundBox>
        {landingBannerArticles.length > 0 && (
          <ArticleLandingBannerCards articles={landingBannerArticles} />
        )}
        <ArticlePostSection
          articleType={ArticleType.Ketagalan}
          defaultArticles={articles}
        />
      </Stack>
    </UContainer>
  )
}

import IndexArticleCarousel from '@/common/components/elements/IndexArticleCarousel'
import Stack from '@mui/material/Stack'
import ArticleSection from '@/modules/LandingPage/components/ArticleSection'
import PodcastSection from '@/modules/LandingPage/components/PodcastSection'
import FollowUsSection from '@/modules/LandingPage/components/FollowUsSection'
import BillSection from '@/modules/LandingPage/components/BillSection'
import { SECTION_OVERLAP_PX } from '@/modules/LandingPage/constants'
import { Language } from '@/common/lib/i18n/types'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Article, ArticleType } from '@/modules/Article/business/Article'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Tag } from '@/modules/Common/business/Tag'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import { Suspense } from 'react'

/**
 * 根據 tags 並行獲取對應的文章
 * @param lang 語言
 * @param tags 標籤列表
 * @param articleType 文章類型
 * @returns tagArticleMap
 */
const getTagArticleMap = async (
  lang: Language,
  tags: Tag[],
  articleType: ArticleType
): Promise<Record<string, Article[]>> => {
  const tagArticles = await Promise.all(
    tags.map((tag) =>
      ServerArticleApi.getArticles(lang, {
        articleType,
        limit: 3,
        sort: '-releaseTime',
        where: {
          tags: {
            equals: tag.id,
          },
        },
      }).then((articles) => ({ tagId: tag.id, articles }))
    )
  )

  return tagArticles.reduce(
    (acc, { tagId, articles }) => {
      acc[tagId] = articles
      return acc
    },
    {} as Record<string, Article[]>
  )
}

type HomeProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: HomeProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.Home }),
    namespace: 'seo_home',
  })
}

/**
 * 首頁文章輪播車的限制數量
 */
const INDEX_ARTICLE_CAROUSEL_LIMIT = 3

/**
 * 首頁法案區塊呈現數量
 */
const BILL_SECTION_LIMIT = 10

export default async function Home({ params }: HomeProps) {
  const { t } = await getTranslationServer(params.lang, 'home')

  // 第一階段：並行獲取 tags 和其他獨立資料
  const [
    articles,
    ketagalanArticles,
    carouselArticles,
    featuredBills,
    landingTags,
    ketagalanTags,
  ] = await Promise.all([
    ServerArticleApi.getHomeArticles(params.lang, {
      limit: 3,
      articleType: ArticleType.Article,
    }),
    ServerArticleApi.getHomeArticles(params.lang, {
      limit: 3,
      articleType: ArticleType.Ketagalan,
    }),
    ServerArticleApi.getHomeFeaturedArticles(params.lang, {
      limit: INDEX_ARTICLE_CAROUSEL_LIMIT,
      articleType: ArticleType.Article,
    }),
    ServerBillApi.getHomeFeaturedBills(params.lang, {
      limit: BILL_SECTION_LIMIT,
    }),
    ServerArticleApi.getLandingArticleTags(params.lang),
    ServerArticleApi.getLandingArticleTags(params.lang),
  ])

  // 第二階段：根據 tags 並行獲取對應的文章
  const [landingTagArticleMap, ketagalanTagArticleMap] = await Promise.all([
    getTagArticleMap(params.lang, landingTags, ArticleType.Article),
    getTagArticleMap(params.lang, ketagalanTags, ArticleType.Ketagalan),
  ])

  return (
    <Stack alignContent="center" justifyContent="center">
      <IndexArticleCarousel articles={carouselArticles} />
      <BillSection title={t('section.bills.title')} bills={featuredBills} />
      <ArticleSection
        articleType={ArticleType.Article}
        defaultArticles={articles}
        tags={landingTags}
        tagArticleMap={landingTagArticleMap}
      />
      <Stack
        sx={{
          '& > *': {
            marginTop: `-${SECTION_OVERLAP_PX}px`,
          },
        }}
      >
        <ThemeProvider
          mode="ketagalan"
          lang={params.lang}
          withCssBaseline={false}
        >
          <ArticleSection
            articleType={ArticleType.Ketagalan}
            defaultArticles={ketagalanArticles}
            tags={ketagalanTags}
            tagArticleMap={ketagalanTagArticleMap}
          />
        </ThemeProvider>
        <Suspense fallback={null}>
          <PodcastSection title={t('section.podcasts.title')} />
        </Suspense>
        <FollowUsSection />
      </Stack>
    </Stack>
  )
}

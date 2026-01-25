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
import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { Tag } from '@/modules/Common/business/Tag'

/**
 * Prefetch tags and mapping between tags and articles for article section
 * @param lang
 * @param articleType
 * @returns
 */
const getLandingTagsAndTagArticleMap = async (
  lang: Language,
  articleType: ArticleType
) => {
  const tags = await ServerArticleApi.getLandingArticleTags(lang)
  const tagArticleMap = await Promise.all(
    tags.map((tag) => {
      return new Promise<{
        tag: Tag
        articles: Article[]
      }>((resolve) => {
        ServerArticleApi.getArticles(lang, {
          articleType,
          limit: 3,
          sort: '-releaseTime',
          where: {
            tags: {
              equals: tag.id,
            },
          },
        }).then((articles) => {
          resolve({ tag, articles })
        })
      })
    })
  )
  return [
    tags,
    tagArticleMap.reduce(
      (acc, tagArticles) => {
        acc[tagArticles.tag.id] = tagArticles.articles
        return acc
      },
      {} as Record<string, Article[]>
    ),
  ] as const
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

export default async function Home({ params }: HomeProps) {
  const { t } = await getTranslationServer(params.lang, 'home')
  const podcastId = config.SOUNDON_PODCAST_ID

  const [
    articles,
    ketagalanArticles,
    episodes,
    [landingTags, landingTagsAndTagArticleMap],
    [ketagalanTags, ketagalanTagsAndTagArticleMap],
  ] = await Promise.all([
    ServerArticleApi.getHomeArticles(params.lang, {
      limit: 3,
      articleType: ArticleType.Article,
    }),
    ServerArticleApi.getHomeArticles(params.lang, {
      limit: 3,
      articleType: ArticleType.Ketagalan,
    }),
    podcastId ? getEpisodes({ podcastId }) : Promise.resolve([]),
    getLandingTagsAndTagArticleMap(params.lang, ArticleType.Article),
    getLandingTagsAndTagArticleMap(params.lang, ArticleType.Ketagalan),
  ])

  return (
    <Stack alignContent="center" justifyContent="center">
      <IndexArticleCarousel lang={params.lang} />
      <BillSection lang={params.lang} title={t('section.bills.title')} />
      <ArticleSection
        articleType={ArticleType.Article}
        defaultArticles={articles}
        tags={landingTags}
        tagArticleMap={landingTagsAndTagArticleMap}
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
            tagArticleMap={ketagalanTagsAndTagArticleMap}
          />
        </ThemeProvider>
        {episodes.length > 0 && (
          <PodcastSection
            title={t('section.podcasts.title')}
            episodes={episodes}
          />
        )}
        <FollowUsSection />
      </Stack>
    </Stack>
  )
}

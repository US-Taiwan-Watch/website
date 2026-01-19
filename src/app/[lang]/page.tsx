import IndexArticleCarousel from '@/common/components/elements/IndexArticleCarousel'
import Stack from '@mui/material/Stack'
import ArticleSection from '@/modules/LandingPage/components/ArticleSection'
import PodcastSection from '@/modules/LandingPage/components/PodcastSection'
import FollowUsSection from '@/modules/LandingPage/components/FollowUsSection'
import BillSection from '@/modules/LandingPage/components/BillSection'
import { SECTION_OVERLAP_PX } from '@/modules/LandingPage/constants'
import { Language } from '@/common/lib/i18n/types'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { ArticleType } from '@/modules/Article/business/Article'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'

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

  const [articles, ketagalanArticles, episodes] = await Promise.all([
    ServerArticleApi.getHomeArticles(params.lang, {
      limit: 3,
      articleType: ArticleType.Article,
    }),
    ServerArticleApi.getHomeArticles(params.lang, {
      limit: 3,
      articleType: ArticleType.Ketagalan,
    }),
    podcastId ? getEpisodes({ podcastId }) : Promise.resolve([]),
  ])

  return (
    <Stack alignContent="center" justifyContent="center">
      <IndexArticleCarousel lang={params.lang} />
      <BillSection lang={params.lang} title={t('section.bills.title')} />
      <ArticleSection
        articleType={ArticleType.Article}
        defaultArticles={articles}
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

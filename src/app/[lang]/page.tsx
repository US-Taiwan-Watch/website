import IndexArticleCarousel from '@/common/components/elements/IndexArticleCarousel'
import Stack from '@mui/material/Stack'
import ArticleSection from '@/modules/LandingPage/components/ArticleSection'
import PodcastSection from '@/modules/LandingPage/components/PodcastSection'
import FreeUsageSection from '@/modules/LandingPage/components/FreeUsageSection'
import BillSection from '@/modules/LandingPage/components/BillSection'
import { SECTION_OVERLAP_PX } from '@/modules/LandingPage/constants'
import { Language } from '@/common/lib/i18n/types'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { ArticleType } from '@/modules/Article/business/Article'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'

type HomeProps = {
  params: {
    lang: Language
  }
}

export default async function Home({ params }: HomeProps) {
  const { t } = await getTranslationServer(params.lang, 'home')

  const articles = await ServerArticleApi.getHomeArticles({
    limit: 3,
    articleType: ArticleType.Article,
  })

  const ketagalanArticles = await ServerArticleApi.getHomeArticles({
    limit: 3,
    articleType: ArticleType.Ketagalan,
  })

  return (
    <Stack alignContent="center" justifyContent="center">
      <IndexArticleCarousel />
      <BillSection title={t('section.bills.title')} />
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
        <PodcastSection title={t('section.podcasts.title')} />
        <FreeUsageSection />
      </Stack>
    </Stack>
  )
}

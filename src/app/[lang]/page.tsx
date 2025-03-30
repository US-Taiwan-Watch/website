import IndexArticleCarousel from '@/common/components/elements/IndexArticleCarousel'
import Stack from '@mui/material/Stack'
import ArticleSection from '@/modules/LandingPage/components/ArticleSection'
import KetagalanSection from '@/modules/LandingPage/components/KetagalanSection'
import PodcastSection from '@/modules/LandingPage/components/PodcastSection'
import FreeUsageSection from '@/modules/LandingPage/components/FreeUsageSection'
import BillSection from '@/modules/LandingPage/components/BillSection'
import { SECTION_OVERLAP_PX } from '@/modules/LandingPage/constants'
import { Language } from '@/common/lib/i18n/types'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'

type HomeProps = {
  params: {
    lang: Language
  }
}

export default async function Home({ params }: HomeProps) {
  const { t } = await getTranslationServer(params.lang, 'home')

  return (
    <Stack alignContent="center" justifyContent="center">
      <IndexArticleCarousel />
      <BillSection title={t('section.bills.title')} />
      <ArticleSection title={t('section.articles.title')} />
      <Stack
        sx={{
          '& > *': {
            marginTop: `-${SECTION_OVERLAP_PX}px`,
          },
        }}
      >
        <KetagalanSection />
        <PodcastSection title={t('section.podcasts.title')} />
        <FreeUsageSection />
      </Stack>
    </Stack>
  )
}

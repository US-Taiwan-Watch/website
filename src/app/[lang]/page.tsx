import IndexArticleCarousel from '@/common/components/elements/IndexArticleCarousel'
import Stack from '@mui/material/Stack'
import ArticleSection from '@/modules/LandingPage/components/ArticleSection'
import KetagalanSection from '@/modules/LandingPage/components/KetagalanSection'
import PodcastSection from '@/modules/LandingPage/components/PodcastSection'
import FreeUsageSection from '@/modules/LandingPage/components/FreeUsageSection'
import BillSection from '@/modules/LandingPage/components/BillSection'
import { SECTION_OVERLAP_PX } from '@/modules/LandingPage/constants'
import { Language } from '@/common/lib/i18n/types'

interface HomeProps {
  params: {
    lang: Language
  }
}

export default function Home({ params }: HomeProps) {
  return (
    <Stack alignContent="center" justifyContent="center">
      <IndexArticleCarousel lang={params.lang} />
      <BillSection />
      <ArticleSection />
      <Stack
        sx={{
          '& > *': {
            marginTop: `-${SECTION_OVERLAP_PX}px`,
          },
        }}
      >
        <KetagalanSection />
        <PodcastSection />
        <FreeUsageSection />
      </Stack>
    </Stack>
  )
}

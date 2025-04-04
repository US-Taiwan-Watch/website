import AboutLayout from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import FootprintCard from '@/modules/About/Footprint/components/FootprintCard'
import {
  FootprintUtils,
  FootprintType,
} from '@/modules/About/Footprint/business/Project'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

const MOCK_API_FOOTPRINTS = [
  {
    id: '1',
    title: 'U.S. Delegation Arrives in Taiwan as Senate Approves Aid Package',
    source: 'Taiwan Insight',
    releaseDate: '2024-03-13T00:00:00.000Z',
    type: FootprintType.Article,
  },
  {
    id: '2',
    title: 'U.S. Delegation Arrives in Taiwan as Senate Approves Aid Package',
    source: 'Taiwan Plus',
    releaseDate: '2024-03-13T00:00:00.000Z',
    type: FootprintType.Article,
  },
  {
    id: '3',
    title: '台美關係有「雙重共享保障」 她喊話要有信心：別陷入歷史焦慮',
    source: '自由時報',
    releaseDate: '2024-03-13T00:00:00.000Z',
    type: FootprintType.Article,
  },
]

type AboutFootprintsPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutFootprintsPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_footprint')

  return {
    title: t('meta.title', { ns: 'seo_about_footprint' }),
    description: t('meta.description', { ns: 'seo_about_footprint' }),
  }
}

export default function AboutFootprintsPage({
  params,
}: AboutFootprintsPageProps) {
  const { lang } = params

  const footprints = MOCK_API_FOOTPRINTS.map((footprint) =>
    FootprintUtils.parse(lang, footprint)
  )

  return (
    <AboutLayout currentPathname={'/about/footprints'}>
      <Stack gap={2.5}>
        {footprints.map((footprint) => (
          <FootprintCard key={footprint.id} footprint={footprint} />
        ))}
      </Stack>
    </AboutLayout>
  )
}

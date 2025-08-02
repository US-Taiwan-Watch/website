import KetagalanAboutLayout from '@/modules/About/components/KetagalanAboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import FootprintCard from '@/modules/About/Footprint/components/FootprintCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'
import ServerFootprintApi from '@/modules/About/Footprint/api/ServerFootprintApi'

type KetagalanAboutFootprintsPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: KetagalanAboutFootprintsPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(
    lang,
    'seo_ketagalan_about_footprint'
  )

  return {
    title: t('meta.title', { ns: 'seo_ketagalan_about_footprint' }),
    description: t('meta.description', { ns: 'seo_ketagalan_about_footprint' }),
  }
}

export default async function KetagalanAboutFootprintsPage() {
  const footprints = await ServerFootprintApi.getKetagalanFootprints()

  return (
    <KetagalanAboutLayout currentPathname={'/ketagalan/about/footprints'}>
      <Stack gap={2.5}>
        {footprints.map((footprint) => (
          <FootprintCard key={footprint.id} footprint={footprint} />
        ))}
      </Stack>
    </KetagalanAboutLayout>
  )
}

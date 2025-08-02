import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import FootprintCard from '@/modules/About/Footprint/components/FootprintCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'
import ServerFootprintApi from '@/modules/About/Footprint/api/ServerFootprintApi'

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

export default async function AboutFootprintsPage({
  params,
}: AboutFootprintsPageProps) {
  const { lang } = params

  const footprints = await ServerFootprintApi.getUstwFootprints()

  return (
    <UstwAboutLayout lang={lang} currentPathname={'/about/footprints'}>
      <Stack gap={2.5}>
        {footprints.map((footprint) => (
          <FootprintCard key={footprint.id} footprint={footprint} />
        ))}
      </Stack>
    </UstwAboutLayout>
  )
}

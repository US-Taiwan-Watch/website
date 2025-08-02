import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import MissionContent from '@/modules/About/Mission/components/MissionContent'
import MissionHighlightSection from '@/modules/About/Mission/components/MissionHighlightSection'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

type AboutMissionPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutMissionPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_mission')

  return {
    title: t('meta.title', { ns: 'seo_about_mission' }),
    description: t('meta.description', { ns: 'seo_about_mission' }),
  }
}

export default function AboutMissionPage({ params }: AboutMissionPageProps) {
  const { lang } = params

  return (
    <UstwAboutLayout
      lang={lang}
      currentPathname={'/about/mission'}
      containerSx={{
        overflowX: {
          xs: 'hidden',
          lg: 'visible',
        },
      }}
    >
      <MissionHighlightSection />
      <Box zIndex={10}>
        <MissionContent lang={lang} />
      </Box>
    </UstwAboutLayout>
  )
}

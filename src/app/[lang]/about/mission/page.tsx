import AboutLayout from '@/modules/About/components/AboutLayout'
import MissionContent from '@/modules/About/Mission/components/MissionContent'
import MissionHighlightSection from '@/modules/About/Mission/components/MissionHighlightSection'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'

type AboutMissionPageProps = {
  params: {
    lang: Language
  }
}

export default function AboutMissionPage({ params }: AboutMissionPageProps) {
  const { lang } = params

  return (
    <AboutLayout currentPathname={'/about/mission'}>
      <MissionHighlightSection />
      <Box zIndex={10}>
        <MissionContent lang={lang} />
      </Box>
    </AboutLayout>
  )
}

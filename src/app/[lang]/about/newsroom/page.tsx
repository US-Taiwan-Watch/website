import AboutLayout from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import NewsroomContent from '@/modules/About/Newsroom/components/NewsroomContent'

type AboutNewsroomPageProps = {
  params: {
    lang: Language
  }
}

export default function AboutNewsroomPage({ params }: AboutNewsroomPageProps) {
  const { lang } = params

  return (
    <AboutLayout currentPathname={'/about/newsroom'}>
      <Box>
        <NewsroomContent lang={lang} />
      </Box>
    </AboutLayout>
  )
}

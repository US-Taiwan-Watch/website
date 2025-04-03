import AboutLayout from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import DataContent from '@/modules/About/Data/components/DataContent'

type AboutDataPageProps = {
  params: {
    lang: Language
  }
}

export default function AboutDataPage({ params }: AboutDataPageProps) {
  const { lang } = params

  return (
    <AboutLayout withHeaderSection={false} currentPathname={'/about/data'}>
      <Box>
        <DataContent lang={lang} />
      </Box>
    </AboutLayout>
  )
}

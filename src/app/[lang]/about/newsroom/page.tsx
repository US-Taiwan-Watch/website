import AboutLayout from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import NewsroomContent from '@/modules/About/Newsroom/components/NewsroomContent'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

type AboutNewsroomPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutNewsroomPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_newsroom')

  return {
    title: t('meta.title', { ns: 'seo_about_newsroom' }),
    description: t('meta.description', { ns: 'seo_about_newsroom' }),
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

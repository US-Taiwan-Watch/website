import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import DataContent from '@/modules/About/Data/components/DataContent'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next'

type AboutDataPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutDataPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_data')

  return {
    title: t('meta.title', { ns: 'seo_about_data' }),
    description: t('meta.description', { ns: 'seo_about_data' }),
  }
}

export default function AboutDataPage({ params }: AboutDataPageProps) {
  const { lang } = params

  return (
    <UstwAboutLayout
      lang={lang}
      withHeaderSection={false}
      currentPathname={'/about/data'}
    >
      <Box>
        <DataContent lang={lang} />
      </Box>
    </UstwAboutLayout>
  )
}

import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import DataContent from '@/modules/About/Data/components/DataContent'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

export const dynamic = 'force-static'

type AboutDataPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutDataPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.AboutData }),
    namespace: 'seo_about_data',
  })
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

import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import NewsroomContent from '@/modules/About/Newsroom/components/NewsroomContent'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

export const dynamic = 'force-static'

type AboutNewsroomPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutNewsroomPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.AboutNewsroom }),
    namespace: 'seo_about_newsroom',
  })
}

export default function AboutNewsroomPage({ params }: AboutNewsroomPageProps) {
  const { lang } = params

  return (
    <UstwAboutLayout lang={lang} currentPathname={'/about/newsroom'}>
      <Box>
        <NewsroomContent lang={lang} />
      </Box>
    </UstwAboutLayout>
  )
}

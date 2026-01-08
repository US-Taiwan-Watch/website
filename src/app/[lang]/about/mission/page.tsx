import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import MissionContent from '@/modules/About/Mission/components/MissionContent'
import MissionHighlightSection from '@/modules/About/Mission/components/MissionHighlightSection'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

export const dynamic = 'force-static'

export const revalidate = 86400

type AboutMissionPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutMissionPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.AboutMission }),
    namespace: 'seo_about_mission',
  })
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

import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import FootprintCard from '@/modules/About/Footprint/components/FootprintCard'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import ServerFootprintApi from '@/modules/About/Footprint/api/ServerFootprintApi'

type AboutFootprintsPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutFootprintsPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.AboutFootprints }),
    namespace: 'seo_about_footprints',
  })
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

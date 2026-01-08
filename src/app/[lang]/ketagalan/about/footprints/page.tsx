import { KetagalanAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import FootprintCard from '@/modules/About/Footprint/components/FootprintCard'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import ServerFootprintApi from '@/modules/About/Footprint/api/ServerFootprintApi'

export const dynamic = 'force-static'

export const revalidate = 86400

type KetagalanAboutFootprintsPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: KetagalanAboutFootprintsPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.KetagalanAboutFootprints }),
    namespace: 'seo_ketagalan_about_footprints',
  })
}

export default async function KetagalanAboutFootprintsPage({
  params,
}: KetagalanAboutFootprintsPageProps) {
  const { lang } = params

  const footprints = await ServerFootprintApi.getKetagalanFootprints(lang)

  return (
    <KetagalanAboutLayout
      lang={lang}
      currentPathname={'/ketagalan/about/footprints'}
    >
      <Stack gap={2.5}>
        {footprints.map((footprint) => (
          <FootprintCard key={footprint.id} footprint={footprint} />
        ))}
      </Stack>
    </KetagalanAboutLayout>
  )
}

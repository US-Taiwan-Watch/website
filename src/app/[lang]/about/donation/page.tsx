import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box, Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import DonationBanner from '@/modules/About/Donation/components/DonationBanner'
import DonationContent from '@/modules/About/Donation/components/DonationContent'
import {
  DonationButtonTaiwan,
  DonationButtonInternational,
} from '@/modules/About/Donation/components/DonationButton'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

type AboutDonationPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutDonationPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.AboutDonation }),
    namespace: 'seo_about_donation',
  })
}

export default function AboutDonationPage({ params }: AboutDonationPageProps) {
  const { lang } = params

  return (
    <UstwAboutLayout
      lang={lang}
      withHeaderSection={false}
      currentPathname={'/about/donation'}
    >
      <Stack
        gap={{
          xs: 2,
          md: 3,
          lg: 5,
        }}
      >
        <DonationBanner />
        <Box>
          <DonationContent lang={lang} />
        </Box>
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          gap={{
            xs: 2,
            md: 3,
          }}
          justifyContent="center"
        >
          <DonationButtonTaiwan />
          <DonationButtonInternational />
        </Stack>
      </Stack>
    </UstwAboutLayout>
  )
}

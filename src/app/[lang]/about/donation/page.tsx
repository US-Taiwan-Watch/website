import AboutLayout from '@/modules/About/components/AboutLayout'
import { Box, Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import DonationBanner from '@/modules/About/Donation/components/DonationBanner'
import DonationContent from '@/modules/About/Donation/components/DonationContent'
import {
  DonationButtonTaiwan,
  DonationButtonInternational,
} from '@/modules/About/Donation/components/DonationButton'

type AboutDonationPageProps = {
  params: {
    lang: Language
  }
}

export default function AboutDonationPage({ params }: AboutDonationPageProps) {
  const { lang } = params

  return (
    <AboutLayout withHeaderSection={false} currentPathname={'/about/donation'}>
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
    </AboutLayout>
  )
}

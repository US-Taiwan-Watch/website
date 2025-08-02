import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box, Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import DonationBanner from '@/modules/About/Donation/components/DonationBanner'
import DonationContent from '@/modules/About/Donation/components/DonationContent'
import {
  DonationButtonTaiwan,
  DonationButtonInternational,
} from '@/modules/About/Donation/components/DonationButton'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

type AboutDonationPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutDonationPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_donation')

  return {
    title: t('meta.title', { ns: 'seo_about_donation' }),
    description: t('meta.description', { ns: 'seo_about_donation' }),
  }
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

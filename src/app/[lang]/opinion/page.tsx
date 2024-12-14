'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { Language } from '@/common/lib/i18n/types'
import OpinionLandingBannerCards from '@/modules/Opinion/components/OpinionLanding/OpinionLandingBannerCards'
import OpinionPostSection from '@/modules/Opinion/components/OpinionLanding/OpinionPostSection'
import OpinionNavbar from '@/modules/Opinion/components/OpinionNavbar'
import { findAllOpinion } from '@/modules/Opinion/data'
import { Opinion as OpinionClass } from '@/modules/Opinion/classes/Opinion'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import CategoryProvider from '@/modules/Opinion/providers/CategoryProvider'

interface OpinionPageProps {
  params: {
    lang: Language
  }
}

export default function Opinion({ params }: OpinionPageProps) {
  const dtos = findAllOpinion()
  const opinions = dtos.map((dto) => OpinionClass.fromDTO(params.lang, dto))

  return (
    <CategoryProvider>
      <Container maxWidth="lg">
        <Stack>
          <UFullWidthBackgroundBox>
            <OpinionNavbar />
          </UFullWidthBackgroundBox>
          <OpinionLandingBannerCards />
          <OpinionPostSection opinions={opinions} />
        </Stack>
      </Container>
    </CategoryProvider>
  )
}

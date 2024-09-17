import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import OpinionLandingBannerCards from '@/modules/Opinion/components/OpinionLandingBannerCards'
import OpinionNavbar from '@/modules/Opinion/components/OpinionNavbar'
import { Stack } from '@mui/material'

export default function Opinion() {
  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <OpinionNavbar />
      </UFullWidthBackgroundBox>
      <OpinionLandingBannerCards />
    </Stack>
  )
}

'use client'

import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import BillCardCarousel from '@/modules/Bill/components/BillCardCarousel'
import { Stack } from '@mui/material'

const BillListSection = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[200]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack gap={theme.spacing(7.5)}>
        <SectionTitleWithLink title="Related Bills" link="/bill-list" />
        <BillCardCarousel />
      </Stack>
    </LandingSectionWrapper>
  )
}

export default BillListSection

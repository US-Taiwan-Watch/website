'use client'

import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import { Grid2 } from '@mui/material'
import BillCard from '@/modules/Bill/components/BillCard'

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
      <SectionTitleWithLink title="Latest Bills" link="#" />
      <Grid2 container spacing={2}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid2 size={4} key={index}>
            <BillCard mode="vertical" simplified />
          </Grid2>
        ))}
      </Grid2>
      <SectionTitleWithLink title="Popular Bills" link="#" />
    </LandingSectionWrapper>
  )
}

export default BillListSection

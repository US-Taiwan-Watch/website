'use client'

import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import BillCardCarousel from '@/modules/Bill/components/BillCardCarousel'
import { Stack } from '@mui/material'
import { ROUTES } from '@/routes'
import { Bill } from '@/modules/Bill/business/Bill'

interface BillListSectionProps {
  relatedBills: Bill[]
}

const BillListSection = ({ relatedBills }: BillListSectionProps) => {
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
        <SectionTitleWithLink title="Related Bills" link={ROUTES.BILL_LIST} />
        <BillCardCarousel data={relatedBills} />
      </Stack>
    </LandingSectionWrapper>
  )
}

export default BillListSection

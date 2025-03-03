'use client'

import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import BillCardCarousel from '@/modules/Bill/components/BillCardCarousel'
import { Stack } from '@mui/material'
import { ROUTES } from '@/routes'
import { BillSorterEnum } from '@/modules/Bill/components/BillFilter/enums'
import { CongressUtils } from '@/common/business/Congress'
import { useMemo } from 'react'
import { Bill } from '@/modules/Bill/business/Bill'

interface BillListSectionProps {
  latestBills: Bill[]
  popularBills: Bill[]
}

const BillListSection = ({
  latestBills,
  popularBills,
}: BillListSectionProps) => {
  const currentCongressNumber = useMemo(
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )
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
        <SectionTitleWithLink
          title="Latest Bills"
          link={{
            pathname: ROUTES.BILL_LIST,
            query: {
              congress: currentCongressNumber,
              sorter: BillSorterEnum.LatestAction,
            },
          }}
        />
        <BillCardCarousel simplified data={latestBills} />
      </Stack>

      <Stack gap={theme.spacing(7.5)}>
        <SectionTitleWithLink
          title="Popular Bills"
          link={{
            pathname: ROUTES.BILL_LIST,
            query: {
              sorter: BillSorterEnum.Popularity,
            },
          }}
        />
        <BillCardCarousel simplified data={popularBills} />
      </Stack>
    </LandingSectionWrapper>
  )
}

export default BillListSection

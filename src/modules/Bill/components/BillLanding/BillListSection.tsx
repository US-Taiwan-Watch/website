'use client'

import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import BillCardCarousel from '@/modules/Bill/components/BillCardCarousel'
import { Stack } from '@mui/material'
import { ROUTES } from '@/routes'
import { CURRENT_CONGRESS_NUMBER } from '@/common/assets/constants'
import { BillSorterEnum } from '@/modules/Bill/components/BillFilter/enums'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { getLatestBills, getPopularBills } from '@/modules/Bill/data'

const BillListSection = () => {
  const theme = useTheme<USTWTheme>()
  const { lang } = useParams<{ lang: Language }>()
  const latestBills = getLatestBills(lang)
  const popularBills = getPopularBills(lang)

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
              congress: CURRENT_CONGRESS_NUMBER,
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

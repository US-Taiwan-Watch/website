'use client'

import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import {
  BillCardCarousel,
  ScrollableBillCards,
} from '@/modules/Bill/components/BillCards'
import { Stack } from '@mui/material'
import { ROUTES } from '@/routes'
import { BillSorterEnum } from '@/modules/Bill/components/BillFilter/enums'
import { CongressUtils } from '@/common/business/Congress'
import { useMemo } from 'react'
import { Bill } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface BillListSectionProps {
  latestBills: Bill[]
  popularBills: Bill[]
}

const BillListSection = ({
  latestBills,
  popularBills,
}: BillListSectionProps) => {
  const { t } = useTranslationClient('bill')
  const { isMobile } = useResponsive()
  const currentCongressNumber = useMemo(
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[200]}
      contentWrapperSx={{
        paddingTop: {
          xs: theme.spacing(5),
          sm: theme.spacing(10),
        },
        paddingBottom: {
          xs: theme.spacing(5),
          sm: theme.spacing(15),
        },
      }}
    >
      <Stack
        gap={{
          xs: theme.spacing(5),
          sm: theme.spacing(7.5),
        }}
      >
        <SectionTitleWithLink
          title={t('landing.section.latestBills.title', { ns: 'bill' })}
          link={{
            pathname: ROUTES.BILL_LIST,
            query: {
              congress: currentCongressNumber,
              sorter: BillSorterEnum.LatestAction,
            },
          }}
        />
        {isMobile ? (
          <FullWidthScrollableListWrapper>
            <ScrollableBillCards
              visibilities={{
                trackerStatus: false,
                latestActionDescription: false,
              }}
              data={latestBills}
            />
          </FullWidthScrollableListWrapper>
        ) : (
          <BillCardCarousel
            visibilities={{
              trackerStatus: false,
              latestActionDescription: false,
            }}
            data={latestBills}
          />
        )}
      </Stack>

      <Stack
        gap={{
          xs: theme.spacing(5),
          sm: theme.spacing(7.5),
        }}
      >
        <SectionTitleWithLink
          title={t('landing.section.popularBills.title', { ns: 'bill' })}
          link={{
            pathname: ROUTES.BILL_LIST,
            query: {
              sorter: BillSorterEnum.Popularity,
            },
          }}
        />
        {isMobile ? (
          <FullWidthScrollableListWrapper>
            <ScrollableBillCards
              visibilities={{
                trackerStatus: false,
                latestActionDescription: false,
              }}
              data={popularBills}
            />
          </FullWidthScrollableListWrapper>
        ) : (
          <BillCardCarousel
            visibilities={{
              trackerStatus: false,
              latestActionDescription: false,
            }}
            data={popularBills}
          />
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default BillListSection

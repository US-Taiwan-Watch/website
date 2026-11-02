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
import { BillSorterEnum } from '@/modules/Bill/components/BillFilter/enums'
import { Bill } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

interface BillListSectionProps {
  latestBills: Bill[]
  popularBills: Bill[]
}

const BillListSection = ({
  latestBills,
  popularBills,
}: BillListSectionProps) => {
  const { resolveRouteUrl } = useURouterClient()
  const { t } = useTranslationClient('bill')
  const { isMobile } = useResponsive()
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
          link={resolveRouteUrl({
            name: RouteName.BillList,
            query: {
              sorter: BillSorterEnum.LatestAction,
            },
          })}
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
          link={resolveRouteUrl({
            name: RouteName.BillList,
            query: {
              sorter: BillSorterEnum.Popularity,
            },
          })}
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

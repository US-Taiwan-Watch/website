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
import { Bill } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface BillListSectionProps {
  relatedBills: Bill[]
}

const BillListSection = ({ relatedBills }: BillListSectionProps) => {
  const { t } = useTranslationClient('bill')
  const { isMobile } = useResponsive()
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
          title={t('page.section.relatedBills.title', {
            ns: 'bill',
          })}
          link={ROUTES.BILL_LIST}
        />
        {isMobile ? (
          <FullWidthScrollableListWrapper>
            <ScrollableBillCards
              visibilities={{
                latestActionDescription: false,
              }}
              data={relatedBills}
            />
          </FullWidthScrollableListWrapper>
        ) : (
          <BillCardCarousel data={relatedBills} />
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default BillListSection

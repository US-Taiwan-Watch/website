'use client'

import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/business/Bill'
import { Grid2, Stack } from '@mui/material'
import LeftSection from '@/modules/Bill/components/IndexBillCard/LeftSection'
import RightSection from '@/modules/Bill/components/IndexBillCard/RightSection'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { UTimelineItemProps } from '@/common/components/atoms/UTimeline'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  borderRadius: '21px',
  backgroundColor: theme.color.common.white,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.75, 2.5),
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6, 7),
  },
}))

type Props = {
  timelineVariant?: UTimelineItemProps['variant']
  bill: Bill
}

export default function IndexBillCard({ timelineVariant, bill }: Props) {
  const { isMobile } = useResponsive()

  return (
    <StyledCardContainer>
      <Grid2
        container
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 2 : 6}
        height="100%"
      >
        <Grid2
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <LeftSection timelineVariant={timelineVariant} bill={bill} />
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <RightSection bill={bill} />
        </Grid2>
      </Grid2>
    </StyledCardContainer>
  )
}

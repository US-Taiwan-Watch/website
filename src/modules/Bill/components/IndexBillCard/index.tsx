'use client'

import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/business/Bill'
import { Grid2, Stack } from '@mui/material'
import LeftSection from '@/modules/Bill/components/IndexBillCard/LeftSection'
import RightSection from '@/modules/Bill/components/IndexBillCard/RightSection'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  borderRadius: '21px',
  backgroundColor: theme.color.common.white,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6, 7),
  },
}))

type Props = {
  bill: Bill
}

export default function IndexBillCard({ bill }: Props) {
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
            sm: 12,
            md: 6,
          }}
        >
          <LeftSection bill={bill} />
        </Grid2>
        <Grid2
          size={{
            sm: 12,
            md: 6,
          }}
        >
          <RightSection bill={bill} />
        </Grid2>
      </Grid2>
    </StyledCardContainer>
  )
}

'use client'

import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { Bill } from '@/modules/Bill/business/Bill'
import BillActions from '@/modules/Bill/components/SingleBill/BillActions'
import BillCosponsors from '@/modules/Bill/components/SingleBill/BillCosponsors'
import BillTracker from '@/modules/Bill/components/SingleBill/BillTracker'
import BioByAI from '@/modules/Bill/components/SingleBill/BioByAI'
import Sponsor from '@/modules/Bill/components/SingleBill/Sponsor'
import { Box, Grid2 as Grid } from '@mui/material'
import { memo } from 'react'

interface BillContentSectionProps {
  bill: Bill
}

const BillContentSection = memo(function BillContentSection({
  bill,
}: BillContentSectionProps) {
  const { isMobile } = useResponsive()

  return (
    <Box sx={{ pb: 5 }}>
      <Grid container spacing={2}>
        {/** Row 1 */}
        <Grid
          size={{
            xs: 12,
            lg: 8.5,
          }}
        >
          {isMobile ? <BillTracker bill={bill} /> : <BioByAI bill={bill} />}
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 3.5,
          }}
        >
          {isMobile ? <BioByAI bill={bill} /> : <BillTracker bill={bill} />}
        </Grid>

        {/** Row 2 */}
        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 4,
          }}
        >
          {isMobile ? <Sponsor bill={bill} /> : <BillActions bill={bill} />}
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 4.5,
          }}
        >
          {isMobile ? <BillCosponsors bill={bill} /> : <Sponsor bill={bill} />}
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 3.5,
          }}
        >
          {isMobile ? (
            <BillActions bill={bill} />
          ) : (
            <BillCosponsors bill={bill} />
          )}
        </Grid>
      </Grid>
    </Box>
  )
})

export default BillContentSection

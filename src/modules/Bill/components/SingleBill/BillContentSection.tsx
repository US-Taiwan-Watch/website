import { USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import BillActions from '@/modules/Bill/components/SingleBill/BillActions'
import BillCosponsors from '@/modules/Bill/components/SingleBill/BillCosponsors'
import BillTracker from '@/modules/Bill/components/SingleBill/BillTracker'
import BioByAI from '@/modules/Bill/components/SingleBill/BioByAI'
import Sponsor from '@/modules/Bill/components/SingleBill/Sponsor'
import { Box, Grid2 as Grid, useTheme } from '@mui/material'
import { memo } from 'react'

interface BillContentSectionProps {
  bill: Bill
}

const BillContentSection = memo(function BillContentSection({
  bill,
}: BillContentSectionProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <Box sx={{ paddingBottom: theme.spacing(5) }}>
      <Grid container spacing={2}>
        {/** Row 1 */}
        <Grid size={8.5}>
          <BioByAI bill={bill} />
        </Grid>

        <Grid size={3.5}>
          <BillTracker bill={bill} />
        </Grid>

        {/** Row 2 */}
        <Grid size={4}>
          <BillActions bill={bill} />
        </Grid>

        <Grid size={4.5}>
          <Sponsor bill={bill} />
        </Grid>

        <Grid size={3.5}>
          <BillCosponsors bill={bill} />
        </Grid>
      </Grid>
    </Box>
  )
})

export default BillContentSection

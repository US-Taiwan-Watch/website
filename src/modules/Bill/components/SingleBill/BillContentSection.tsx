import { USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import BillTracker from '@/modules/Bill/components/SingleBill/BillTracker'
import BioByAI from '@/modules/Bill/components/SingleBill/BioByAI'
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
        <Grid size={9}>
          <BioByAI />
        </Grid>

        <Grid size={3}>
          <BillTracker bill={bill} />
        </Grid>

        {/** Row 2 */}
        <Grid size={4}>{/* <BioByAI /> */}</Grid>

        <Grid size={5}>{/* <BioByAI /> */}</Grid>

        <Grid size={3}>{/* <BioByAI /> */}</Grid>
      </Grid>
    </Box>
  )
})

export default BillContentSection

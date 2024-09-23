import BillList from '@/modules/Bill/components/BillList'
import { Stack, Typography } from '@mui/material'

export default function BillListPage() {
  return (
    <Stack gap={5}>
      <Typography variant="h3">Bills and Resolutions in Congress</Typography>
      <BillList />
    </Stack>
  )
}

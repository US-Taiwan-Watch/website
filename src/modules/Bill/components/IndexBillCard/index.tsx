'use client'
import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import { Grid2, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import LeftSection from '@/modules/Bill/components/IndexBillCard/LeftSection'
import RightSection from '@/modules/Bill/components/IndexBillCard/RightSection'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(6, 7),
  borderRadius: '21px',
  backgroundColor: theme.color.common.white,
}))

type Props = {
  bill: Bill
}

export default function IndexBillCard({ bill }: Props) {
  const router = useRouter()

  return (
    <StyledCardContainer
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => {
        router.push(bill.link)
      }}
    >
      <Grid2 container spacing={6} height="100%">
        <Grid2 size={6}>
          <LeftSection bill={bill} />
        </Grid2>
        <Grid2 size={6}>
          <RightSection bill={bill} />
        </Grid2>
      </Grid2>
    </StyledCardContainer>
  )
}

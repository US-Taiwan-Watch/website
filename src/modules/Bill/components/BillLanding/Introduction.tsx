'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import {
  BILL_TOTAL_COUNT_MOCK,
  CONGRESS_CURRENT_SESSION_MOCK,
} from '@/modules/Bill/data'
import { Stack, Typography, useTheme } from '@mui/material'

const StyledBillTotalCountCard = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '15px',
  minWidth: '160px',
  backgroundColor: theme.palette.primary.main,
}))

export default function Introduction() {
  const theme = useTheme<USTWTheme>()

  return (
    <UHStack alignItems="center" justifyContent="space-between" width="100%">
      <Stack spacing={4} maxWidth="80%">
        <Typography variant="h3">Updates from this Congress</Typography>
        <Typography variant="bodyM">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage
        </Typography>
      </Stack>

      <StyledBillTotalCountCard>
        <Typography variant="buttonXS" color={theme.color.grey[2100]} mb={1}>
          {`Congress ${CONGRESS_CURRENT_SESSION_MOCK}`}
        </Typography>
        <Typography variant="h2">{BILL_TOTAL_COUNT_MOCK}</Typography>
      </StyledBillTotalCountCard>
    </UHStack>
  )
}

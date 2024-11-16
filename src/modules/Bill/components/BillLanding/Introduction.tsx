'use client'

import { CURRENT_CONGRESS_NUMBER } from '@/common/assets/constants'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import { BILL_TOTAL_COUNT_MOCK } from '@/modules/Bill/data'
import { ROUTES } from '@/routes'
import { Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

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

      <Link
        href={{
          pathname: ROUTES.BILL_LIST,
          query: { congress: CURRENT_CONGRESS_NUMBER },
        }}
      >
        <StyledBillTotalCountCard>
          <Typography variant="buttonXS" color={theme.color.grey[2100]} mb={1}>
            {`Congress ${CURRENT_CONGRESS_NUMBER}`}
          </Typography>
          <Typography variant="h2">{BILL_TOTAL_COUNT_MOCK}</Typography>
        </StyledBillTotalCountCard>
      </Link>
    </UHStack>
  )
}

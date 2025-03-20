'use client'

import { CongressUtils } from '@/common/business/Congress'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import { useQuery } from '@apollo/client'
import { ROUTES } from '@/routes'
import { Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { CurrentCongressBillCountQuery } from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_CURRENT_CONGRESS_BILL_COUNT } from '@/modules/Bill/graphql/gql'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { memo } from 'react'

const PAGE_TITLE = 'Update from this Congress'
const PAGE_DESCRIPTION =
  'The 118th U.S. Congress has actively advanced legislation to strengthen U.S.-Taiwan relations through key bills addressing security, economic ties, and international participation. The United States-Taiwan Initiative on 21st-Century Trade First Agreement Implementation Act (H.R. 4004) enhances economic cooperation through trade agreements, while the Taiwan Conflict Deterrence Act of 2023 (H.R. 554) seeks to deter aggression by targeting financial institutions linked to Chinese officials. The Taiwan International Solidarity Act (H.R. 1176) reinforces support for Taiwan’s participation in international organizations, countering Beijing’s diplomatic pressure. Additionally, the PROTECT Taiwan Act (H.R. 803) aims to deepen U.S.-Taiwan defense cooperation. Together, these legislative efforts reflect a bipartisan commitment to bolstering Taiwan’s security, international standing, and economic partnership with the United States amidst rising geopolitical tensions in the Indo-Pacific region.'

const StyledBillTotalCountCard = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0.75),
    minWidth: '100px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 4),
    minWidth: '160px',
  },
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '15px',
  backgroundColor: theme.palette.primary.main,
}))

const BillTotalCountLink = memo(function BillTotalCountLink({
  billCount,
  currentCongressNumber,
}: {
  billCount: number
  currentCongressNumber: number
}) {
  const theme = useTheme<USTWTheme>()

  return (
    <Link
      href={{
        pathname: ROUTES.BILL_LIST,
        query: { congress: currentCongressNumber },
      }}
    >
      <StyledBillTotalCountCard>
        <Typography
          fontSize={10}
          fontWeight={600}
          color={theme.color.grey[2100]}
          mb={1}
        >
          {`Congress ${currentCongressNumber}`}
        </Typography>
        <Typography fontSize={26} fontWeight={600}>
          {billCount}
        </Typography>
      </StyledBillTotalCountCard>
    </Link>
  )
})

export default function Introduction() {
  const { isMobile } = useResponsive()

  const currentCongressNumber = CongressUtils.getCurrentCongressNumber()

  const { data } = useQuery<CurrentCongressBillCountQuery>(
    QUERY_CURRENT_CONGRESS_BILL_COUNT,
    {
      variables: {
        congress: currentCongressNumber,
      },
    }
  )

  const billCount = data?.Bills?.totalDocs ?? 0

  if (isMobile) {
    return (
      <Stack spacing={4}>
        <UHStack
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          gap={2}
        >
          <Typography variant="h3" fontWeight={600}>
            {PAGE_TITLE}
          </Typography>
          <BillTotalCountLink
            billCount={billCount}
            currentCongressNumber={currentCongressNumber}
          />
        </UHStack>

        <Typography variant="bodyM">{PAGE_DESCRIPTION}</Typography>
      </Stack>
    )
  }

  return (
    <UHStack alignItems="center" justifyContent="space-between" width="100%">
      <Stack spacing={4} maxWidth="80%">
        <Typography variant="h3">{PAGE_TITLE}</Typography>
        <Typography variant="bodyM">{PAGE_DESCRIPTION}</Typography>
      </Stack>

      <BillTotalCountLink
        billCount={billCount}
        currentCongressNumber={currentCongressNumber}
      />
    </UHStack>
  )
}

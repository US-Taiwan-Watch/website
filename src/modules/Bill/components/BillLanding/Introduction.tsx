'use client'

import { Congress } from '@/common/classes/Congress'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import { getCurrentCongressBillCount } from '@/modules/Bill/data'
import { ROUTES } from '@/routes'
import { Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { useMemo } from 'react'

const PAGE_TITLE = 'Update from this Congress'
const PAGE_DESCRIPTION =
  'The 118th U.S. Congress has actively advanced legislation to strengthen U.S.-Taiwan relations through key bills addressing security, economic ties, and international participation. The United States-Taiwan Initiative on 21st-Century Trade First Agreement Implementation Act (H.R. 4004) enhances economic cooperation through trade agreements, while the Taiwan Conflict Deterrence Act of 2023 (H.R. 554) seeks to deter aggression by targeting financial institutions linked to Chinese officials. The Taiwan International Solidarity Act (H.R. 1176) reinforces support for Taiwan’s participation in international organizations, countering Beijing’s diplomatic pressure. Additionally, the PROTECT Taiwan Act (H.R. 803) aims to deepen U.S.-Taiwan defense cooperation. Together, these legislative efforts reflect a bipartisan commitment to bolstering Taiwan’s security, international standing, and economic partnership with the United States amidst rising geopolitical tensions in the Indo-Pacific region.'

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
  const { totalDocs: billCount } = getCurrentCongressBillCount()
  const currentCongressNumber = useMemo(
    () => Congress.getCurrentCongressNumber(),
    []
  )

  return (
    <UHStack alignItems="center" justifyContent="space-between" width="100%">
      <Stack spacing={4} maxWidth="80%">
        <Typography variant="h3">{PAGE_TITLE}</Typography>
        <Typography variant="bodyM">{PAGE_DESCRIPTION}</Typography>
      </Stack>

      <Link
        href={{
          pathname: ROUTES.BILL_LIST,
          query: { congress: currentCongressNumber },
        }}
      >
        <StyledBillTotalCountCard>
          <Typography variant="buttonXS" color={theme.color.grey[2100]} mb={1}>
            {`Congress ${currentCongressNumber}`}
          </Typography>
          <Typography variant="h2">{billCount}</Typography>
        </StyledBillTotalCountCard>
      </Link>
    </UHStack>
  )
}

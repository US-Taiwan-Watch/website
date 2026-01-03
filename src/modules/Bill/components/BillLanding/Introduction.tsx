'use client'

import { CongressUtils } from '@/common/business/Congress'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import { useQuery } from '@apollo/client'
import { Stack, Typography, useTheme, Skeleton } from '@mui/material'
import Link from 'next/link'
import { CurrentCongressBillCountQuery } from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_CURRENT_CONGRESS_BILL_COUNT } from '@/modules/Bill/graphql/gql'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { memo } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

const StyledBillTotalCountCard = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0.75),
    minWidth: '100px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2.5, 3.75),
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
  const { t } = useTranslationClient('bill')
  const theme = useTheme<USTWTheme>()
  const { resolveRouteUrl } = useURouterClient()

  return (
    <Link
      href={resolveRouteUrl({
        name: RouteName.BillList,
        query: { congress: currentCongressNumber },
      })}
    >
      <StyledBillTotalCountCard>
        <Typography
          fontSize={{
            xs: 10,
            md: 14,
          }}
          fontWeight={600}
          color={theme.color.grey[2100]}
          mb={1}
        >
          {t('landing.introduction.congress.title', {
            ns: 'bill',
            congressNo: currentCongressNumber,
          })}
        </Typography>
        <Typography
          fontSize={{
            xs: 26,
            md: 55,
          }}
          fontWeight={600}
        >
          {billCount}
        </Typography>
      </StyledBillTotalCountCard>
    </Link>
  )
})

export default function Introduction() {
  const { t } = useTranslationClient('bill')
  const { isMobile } = useResponsive()

  const currentCongressNumber = CongressUtils.getCurrentCongressNumber()

  const { data, loading, error } = useQuery<CurrentCongressBillCountQuery>(
    QUERY_CURRENT_CONGRESS_BILL_COUNT,
    {
      variables: {
        congress: currentCongressNumber,
      },
    }
  )

  if (error) {
    console.error('Failed to fetch current congress bill count:', error)
  }

  const billCount = data?.Bills?.totalDocs ?? 0

  // Render bill count card or loading/error state
  const renderBillCountCard = () => {
    if (loading) {
      return (
        <StyledBillTotalCountCard>
          <Skeleton variant="text" width={80} height={20} />
          <Skeleton variant="text" width={60} height={36} />
        </StyledBillTotalCountCard>
      )
    }

    if (error) {
      // Show the card without count on error (graceful degradation)
      return null
    }

    return (
      <BillTotalCountLink
        billCount={billCount}
        currentCongressNumber={currentCongressNumber}
      />
    )
  }

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
            {t('landing.title', { ns: 'bill' })}
          </Typography>
          {renderBillCountCard()}
        </UHStack>

        <Typography variant="bodyM">
          {t('landing.description', { ns: 'bill' })}
        </Typography>
      </Stack>
    )
  }

  return (
    <UHStack
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
    >
      <Stack spacing={4} maxWidth="80%">
        <Typography variant="h3">
          {t('landing.title', { ns: 'bill' })}
        </Typography>
        <Typography variant="bodyM">
          {t('landing.description', { ns: 'bill' })}
        </Typography>
      </Stack>

      {renderBillCountCard()}
    </UHStack>
  )
}

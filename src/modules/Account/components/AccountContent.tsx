'use client'

import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import { styled } from '@/common/lib/mui/theme'
import { BackIcon } from '@/common/styles/assets/Icons'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import useAccountNavItems from '@/modules/Account/hooks/useAccountNavItems'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { type ReactNode } from 'react'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

const AccountContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: '600px',
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
  padding: theme.spacing(0),
  width: '100%',
}))

type AccountContentProps = {
  children: ReactNode
  headerChildren?: ReactNode
}

export default function AccountContent({
  children,
  headerChildren,
}: AccountContentProps) {
  const { resolveRouteUrl } = useURouterClient()
  const { isCompactView } = useAccountLayout()
  const { currentNavItem } = useAccountNavItems()

  return (
    <AccountContentWrapper
      sx={{
        ...(isCompactView && {
          backgroundColor: 'transparent',
        }),
      }}
    >
      {/** Header */}
      <Stack
        direction={isCompactView ? 'column' : 'row'}
        justifyContent="space-between"
        sx={{
          backgroundColor: isCompactView ? 'transparent' : 'grey.4300',
          px: isCompactView
            ? 0
            : {
                md: 2,
                lg: 8,
              },
          py: 2.5,
          pt: isCompactView ? 0 : 2.5,
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      >
        <UHStack
          justifyContent="space-between"
          alignItems="center"
          px={isCompactView ? 2 : 0}
        >
          <UHStack alignItems="center" gap={1}>
            {currentNavItem?.icon}
            <Typography
              fontSize={isCompactView ? '1.125rem' : '1.25rem'}
              fontWeight={isCompactView ? 600 : 700}
            >
              {currentNavItem?.label}
            </Typography>
          </UHStack>
          {isCompactView && (
            <Link href={resolveRouteUrl({ name: RouteName.Account })}>
              <UIconButton variant="text" color="inherit">
                <BackIcon
                  sx={{ width: 20, height: 20, color: 'neutral.500' }}
                />
              </UIconButton>
            </Link>
          )}
        </UHStack>
        {headerChildren}
      </Stack>

      {children}
    </AccountContentWrapper>
  )
}

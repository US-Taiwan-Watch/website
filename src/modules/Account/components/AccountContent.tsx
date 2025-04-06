'use client'

import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import { styled } from '@/common/lib/mui/theme'
import { BackIcon } from '@/common/styles/assets/Icons'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import useAccountNavItems from '@/modules/Account/hooks/useAccountNavItems'
import { ROUTES } from '@/routes'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { type ReactNode } from 'react'

const AccountContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: '600px',
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
  padding: theme.spacing(2.5, 4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
  },
}))

type AccountContentProps = {
  children: ReactNode
  headerChildren?: ReactNode
}

export default function AccountContent({
  children,
  headerChildren,
}: AccountContentProps) {
  const { isNarrow } = useAccountLayout()
  const { currentNavItem } = useAccountNavItems()

  return (
    <AccountContentWrapper>
      {/** Header */}
      <Stack
        direction={isNarrow ? 'column' : 'row'}
        justifyContent="space-between"
      >
        <UHStack justifyContent="space-between" alignItems="center">
          <UHStack alignItems="center" gap={1}>
            {currentNavItem?.icon}
            <Typography
              fontSize={isNarrow ? '1.125rem' : '1.25rem'}
              fontWeight={isNarrow ? 600 : 700}
            >
              {currentNavItem?.label}
            </Typography>
          </UHStack>
          {isNarrow && (
            <Link href={ROUTES.ACCOUNT}>
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

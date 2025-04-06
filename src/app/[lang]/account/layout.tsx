'use client'

import { Box, Container } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { ReactNode } from 'react'
import AccountSidebar from './components/AccountSidebar'

const AccountContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}))

const AccountContent = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: '600px',
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
  padding: theme.spacing(2.5, 4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}))

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <AccountContainer maxWidth="lg">
      <AccountSidebar />
      <AccountContent>{children}</AccountContent>
    </AccountContainer>
  )
}

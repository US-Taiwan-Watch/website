'use client'

import { ReactNode } from 'react'
import AccountSidebar from '@/modules/Account/components/AccountSidebar'
import { Stack } from '@mui/material'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'

export default function AccountLayout({ children }: { children: ReactNode }) {
  const { withSidebar, withContent } = useAccountLayout()

  return (
    <Stack direction="row" gap={2} pb={4}>
      {withSidebar && <AccountSidebar />}
      {withContent && <>{children}</>}
    </Stack>
  )
}

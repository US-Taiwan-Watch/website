import { Stack } from '@mui/material'
import type React from 'react'
import AboutHeaderSection from '@/modules/About/components/AboutHeaderSection'

type AboutLayoutProps = {
  /**
   * 是否顯示 Header Section
   * @default true
   */
  withHeaderSection?: boolean
  currentPathname: string
  children: React.ReactNode
}

export default function AboutLayout({
  withHeaderSection = true,
  currentPathname,
  children,
}: AboutLayoutProps) {
  return (
    <Stack
      sx={{
        maxWidth: {
          xs: '100%',
          sm: '700px',
        },
        margin: '0 auto',
        px: {
          xs: 1,
          sm: 0,
        },
        py: {
          xs: 2.75,
          sm: 5,
        },
        gap: {
          xs: 2,
          md: 3,
          lg: 5,
        },
      }}
    >
      {withHeaderSection && (
        <AboutHeaderSection currentPathname={currentPathname} />
      )}
      {children}
    </Stack>
  )
}

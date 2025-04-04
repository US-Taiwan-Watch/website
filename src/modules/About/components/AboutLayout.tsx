import { Stack, SxProps } from '@mui/material'
import type React from 'react'
import AboutHeaderSection from '@/modules/About/components/AboutHeaderSection'
import UContainer from '@/common/components/atoms/UContainer'

type AboutLayoutProps = {
  containerSx?: SxProps
  /**
   * 是否顯示 Header Section
   * @default true
   */
  withHeaderSection?: boolean
  currentPathname: string
  children: React.ReactNode
}

export default function AboutLayout({
  containerSx,
  withHeaderSection = true,
  currentPathname,
  children,
}: AboutLayoutProps) {
  return (
    <UContainer sx={containerSx}>
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
    </UContainer>
  )
}

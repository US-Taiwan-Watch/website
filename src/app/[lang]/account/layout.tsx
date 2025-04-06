'use client'

import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { Language } from '@/common/lib/i18n/types'
import { useParams } from 'next/navigation'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import UContainer from '@/common/components/atoms/UContainer'

export default function AccountLayout({ children }: { children: ReactNode }) {
  const { lang } = useParams<{ lang: Language }>()
  const { backgroundColor } = useAccountLayout()

  return (
    <ThemeProvider
      lang={lang}
      override={{
        palette: {
          background: {
            default: backgroundColor,
          },
        },
      }}
    >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <UContainer>{children}</UContainer>
    </ThemeProvider>
  )
}

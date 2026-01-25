import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'

export default function KetagalanMediaLayout({
  params,
  children,
}: {
  params: { lang: Language }
  children: React.ReactNode
}) {
  return (
    <ThemeProvider mode="ketagalan" lang={params.lang}>
      {children}
    </ThemeProvider>
  )
}

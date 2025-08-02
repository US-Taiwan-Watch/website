import React from 'react'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { Language } from '@/common/lib/i18n/types'

export default function KetagalanAboutLayout({
  children,
  params,
}: {
  params: {
    lang: Language
  }
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      mode="ketagalan"
      lang={params.lang}
      override={{
        palette: {
          background: {
            default: '#312F27',
          },
        },
      }}
    >
      {children}
    </ThemeProvider>
  )
}

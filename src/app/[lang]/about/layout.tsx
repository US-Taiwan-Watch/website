import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'

export default function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    lang: Language
  }
}) {
  return (
    <ThemeProvider
      lang={params.lang}
      override={{
        palette: {
          background: {
            default: '#E0E0E0',
          },
        },
      }}
    >
      {children}
    </ThemeProvider>
  )
}

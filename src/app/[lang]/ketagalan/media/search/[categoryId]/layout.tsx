import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import UContainer from '@/common/components/atoms/UContainer'

export const metadata: Metadata = {
  title: 'Article Search Category',
  description: 'Article Search Category',
}

export default function ArticleSearchCategoryLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: Language
  }
}>) {
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
      <UContainer>{children}</UContainer>
    </ThemeProvider>
  )
}

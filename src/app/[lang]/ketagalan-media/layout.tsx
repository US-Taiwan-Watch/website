import React from 'react'
import ArticleStoreProvider from '@/modules/Article/providers/ArticleStoreProvider'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { CssBaseline } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'

export default function ArticleLayout({
  children,
  params,
}: {
  params: {
    lang: Language
  }
  children: React.ReactNode
}) {
  return (
    <ThemeProvider mode="ketagalan" lang={params.lang}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <ArticleStoreProvider />
      {children}
    </ThemeProvider>
  )
}

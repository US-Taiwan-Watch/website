import React from 'react'
import ArticleStoreProvider from '@/modules/Article/providers/ArticleStoreProvider'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { Language } from '@/common/lib/i18n/types'
import { ArticleType } from '@/modules/Article/business/Article'

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
      <ArticleStoreProvider articleType={ArticleType.Ketagalan} />
      {children}
    </ThemeProvider>
  )
}

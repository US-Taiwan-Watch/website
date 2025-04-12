import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import CssBaseline from '@mui/material/CssBaseline'
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
            /**
             * 無法吃 theme 的 colors，因為 theme 是 client side，
             * 也不需要為的這個顏色去把 colors 把 client side 獨立出來，
             * 所以直接在這邊設定
             */
            default: '#312F27 !important',
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

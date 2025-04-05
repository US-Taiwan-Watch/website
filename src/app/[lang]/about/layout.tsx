import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import CssBaseline from '@mui/material/CssBaseline'

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
            /**
             * 無法吃 theme 的 colors，因為 theme 是 client side，
             * 也不需要為的這個顏色去把 colors 把 client side 獨立出來，
             * 所以直接在這邊設定
             */
            default: '#E0E0E0',
          },
        },
      }}
    >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

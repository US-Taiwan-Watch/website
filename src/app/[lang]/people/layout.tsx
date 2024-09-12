import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import './people.css'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { CssBaseline } from '@mui/material'

export const metadata: Metadata = {
  title: 'People',
  description: 'People',
}

export default function PeopleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: Language
  }
}>) {
  return (
    <AppRouterCacheProvider>
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
              default: '#F3F3F3',
            },
          },
        }}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

import type { Metadata } from 'next'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import Header from '@/common/components/elements/Header'
import { Container } from '@mui/material'
import Footer from '@/common/components/elements/Footer'
import './global.css'
import ScreenSizeHandler from '@/common/components/elements/UnsupportedScreenSize/ScreenSizeHandler'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: Language
  }
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider lang={params.lang}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Container>
              <Header />
              <ScreenSizeHandler>{children}</ScreenSizeHandler>
            </Container>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

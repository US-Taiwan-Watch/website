import type { Metadata } from 'next'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import Header from '@/common/components/elements/Header'
import Footer from '@/common/components/elements/Footer'
import { ClientApolloProvider } from '@/common/lib/graphql/ClientApolloProvider'
import ToastProvider from '@/common/providers/ToastProvider'
import Stack from '@mui/material/Stack'
import apiConfig from '@/modules/Common/api/ApiConfig'
import { getServerDevice } from '@/common/lib/responsive/getServerDevice'
import { ResponsiveProvider } from '@/common/lib/responsive/ResponsiveProvider'
import I18nProvider from '@/common/lib/i18n/provider/I18nProvider'

export const metadata: Metadata = {
  title: 'USTW',
  description: 'US Taiwan Watch',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: Language
  }
}>) {
  // 設定 API 語言
  apiConfig.setLang(params.lang)

  const { isMobile } = await getServerDevice()

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider lang={params.lang}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <I18nProvider>
              <ResponsiveProvider defaultValue={{ isMobile }}>
                <Stack minHeight="100dvh">
                  <Header />
                  <ToastProvider>
                    <ClientApolloProvider>
                      <Stack flexGrow={1}>{children}</Stack>
                    </ClientApolloProvider>
                  </ToastProvider>
                  <Footer />
                </Stack>
              </ResponsiveProvider>
            </I18nProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

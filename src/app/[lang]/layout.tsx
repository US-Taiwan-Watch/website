import type { Metadata } from 'next'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
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
import UAuthProvider from '@/modules/Auth/providers/UAuthProvider'
import AccountProvider from '@/modules/Account/providers/AccountProvider'
import { Auth0Provider } from '@auth0/nextjs-auth0'

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

  const { isMobile, isTablet } = await getServerDevice()

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider lang={params.lang}>
            <I18nProvider>
              <ResponsiveProvider defaultValue={{ isMobile, isTablet }}>
                <Auth0Provider>
                  <UAuthProvider>
                    <Stack minHeight="100dvh">
                      <Header />
                      <ToastProvider>
                        <ClientApolloProvider>
                          <AccountProvider>
                            <Stack flexGrow={1}>{children}</Stack>
                          </AccountProvider>
                        </ClientApolloProvider>
                      </ToastProvider>
                      <Footer />
                    </Stack>
                  </UAuthProvider>
                </Auth0Provider>
              </ResponsiveProvider>
            </I18nProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

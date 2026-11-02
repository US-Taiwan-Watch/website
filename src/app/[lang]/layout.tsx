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
import { ResponsiveProvider } from '@/common/lib/responsive/ResponsiveProvider'
import I18nProvider from '@/common/lib/i18n/provider/I18nProvider'
import UAuthProvider from '@/modules/Auth/providers/UAuthProvider'
import AccountProvider from '@/modules/Account/providers/AccountProvider'
import { Auth0Provider } from '@auth0/nextjs-auth0'
import { GoogleTagManager } from '@next/third-parties/google'
import { config } from '@/config'
import GoogleAnalyticsConsentScript from '@/common/lib/googleAnalytics/GoogleAnalyticsConsentScript'
import CookieConsentBanner from '@/common/components/elements/CookieConsentBanner'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'
import ImageLightboxProvider from '@/common/components/elements/ImageLightbox/ImageLightboxProvider'
import { redirect } from 'next/navigation'

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: {
    lang: Language
  }
}>

export const generateStaticParams = async () => {
  return I18N_SUPPORTED_LANGUAGE.map((lang) => ({ lang }))
}

export const generateMetadata = async ({
  params,
}: RootLayoutProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.Home }),
    namespace: 'seo_common',
  })
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { resolveRouteUrl } = getURouterServer()
  // 排除不支援的語言，避免 injection attack
  if (!I18N_SUPPORTED_LANGUAGE.includes(params.lang)) {
    redirect(resolveRouteUrl({ name: RouteName.NotFound }))
  }

  return (
    <html lang={params.lang}>
      {config.GOOGLE_TAG_MANAGER_ID && (
        <>
          {/** Google Tag Manager */}
          <GoogleTagManager gtmId={config.GOOGLE_TAG_MANAGER_ID} />
          {/** Google Analytics Consent Script */}
          <GoogleAnalyticsConsentScript />
        </>
      )}
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider lang={params.lang}>
            <I18nProvider>
              <ResponsiveProvider>
                <ImageLightboxProvider>
                  <Auth0Provider>
                    <UAuthProvider>
                      <ClientApolloProvider>
                        <AccountProvider>
                          <Stack minHeight="100dvh">
                            <Header />
                            <ToastProvider>
                              <Stack flexGrow={1}>{children}</Stack>
                              <CookieConsentBanner />
                            </ToastProvider>
                            <Footer />
                          </Stack>
                        </AccountProvider>
                      </ClientApolloProvider>
                    </UAuthProvider>
                  </Auth0Provider>
                </ImageLightboxProvider>
              </ResponsiveProvider>
            </I18nProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

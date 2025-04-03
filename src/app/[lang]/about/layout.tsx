import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import UContainer from '@/common/components/atoms/UContainer'

interface AboutLayoutProps {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutLayoutProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_mission')

  return {
    title: t('meta.title', { ns: 'seo_about_mission' }),
    description: t('meta.description', { ns: 'seo_about_mission' }),
  }
}

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
              default: '#E0E0E0',
            },
          },
        }}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <UContainer
          sx={{
            overflowX: 'hidden',
          }}
        >
          {children}
        </UContainer>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

import React, { Suspense } from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import UContainer from '@/common/components/atoms/UContainer'

export const dynamic = 'force-dynamic'

interface SearchLayoutProps {
  children: React.ReactNode
  params: {
    lang: Language
  }
}

export default function SearchLayout({ children, params }: SearchLayoutProps) {
  return (
    <ThemeProvider
      lang={params.lang}
      override={{
        palette: {
          background: {
            default: '#F3F3F3',
          },
        },
      }}
    >
      <UContainer>
        <Suspense>{children}</Suspense>
      </UContainer>
    </ThemeProvider>
  )
}

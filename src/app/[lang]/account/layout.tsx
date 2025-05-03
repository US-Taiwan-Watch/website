'use client'

import { ReactNode } from 'react'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { Language } from '@/common/lib/i18n/types'
import { useParams } from 'next/navigation'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import UContainer from '@/common/components/atoms/UContainer'
import AuthedProvider from '@/modules/Auth/providers/AuthedProvider'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'

export default function AccountLayout({ children }: { children: ReactNode }) {
  const { account } = useAccountStore()
  const { lang } = useParams<{ lang: Language }>()
  const { backgroundColor } = useAccountLayout()

  return (
    <ThemeProvider
      lang={lang}
      override={{
        palette: {
          background: {
            default: backgroundColor,
          },
        },
      }}
    >
      <UContainer>
        <AuthedProvider unAuthedAction="login">
          {account ? children : null}
        </AuthedProvider>
      </UContainer>
    </ThemeProvider>
  )
}

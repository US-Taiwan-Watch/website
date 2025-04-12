import UContainer from '@/common/components/atoms/UContainer'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { Stack } from '@mui/material'
import type { ReactNode } from 'react'
import { Language } from '@/common/lib/i18n/types'

export default function PodcastLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { lang: Language }
}) {
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
        <Stack
          sx={{
            maxWidth: {
              xs: '100%',
              sm: '700px',
            },
            margin: '0 auto',
            px: {
              xs: 1,
              sm: 0,
            },
            py: {
              xs: 2.75,
              sm: 5,
            },
          }}
        >
          {children}
        </Stack>
      </UContainer>
    </ThemeProvider>
  )
}

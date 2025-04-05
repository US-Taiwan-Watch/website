import UContainer from '@/common/components/atoms/UContainer'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import CssBaseline from '@mui/material/CssBaseline'
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

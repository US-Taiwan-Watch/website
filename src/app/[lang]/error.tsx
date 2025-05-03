'use client'

import UButton from '@/common/components/atoms/UButton'
import UContainer from '@/common/components/atoms/UContainer'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { Language } from '@/common/lib/i18n/types'
import { useParams } from 'next/navigation'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

export default function Error() {
  const { resolveRouteUrl } = useURouterClient()
  const { lang } = useParams<{ lang: Language }>()
  const { t } = useTranslationClient('common')

  return (
    <ThemeProvider
      lang={lang}
      override={{
        palette: {
          background: {
            default: '#F3F3F3',
          },
        },
      }}
    >
      <UContainer
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          maxWidth={{
            xs: '100%',
            sm: '680px',
          }}
          margin="0 auto"
          gap={{
            xs: 2,
            md: 3,
            lg: 5,
          }}
          textAlign={{
            xs: 'left',
            sm: 'center',
          }}
        >
          <Stack gap={1.75}>
            <Stack gap={1}>
              <Typography variant="h1">
                {t('msg.error.pageError.statusCode', { ns: 'common' })}
              </Typography>
              <Typography variant="h2">
                {t('msg.error.pageError.title', { ns: 'common' })}
              </Typography>
            </Stack>
            <Typography color="grey.3500">
              {t('msg.error.pageError.description', { ns: 'common' })}
            </Typography>
          </Stack>
          <Link href={resolveRouteUrl({ name: RouteName.Home })}>
            <UButton
              sx={{
                backgroundColor: 'common.black',
                color: 'common.white',
              }}
              rounded
              size="large"
            >
              {t('msg.error.pageError.home.btn', { ns: 'common' })}
            </UButton>
          </Link>
        </Stack>
      </UContainer>
    </ThemeProvider>
  )
}

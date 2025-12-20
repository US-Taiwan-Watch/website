'use client'

import UButton from '@/common/components/atoms/UButton'
import UContainer from '@/common/components/atoms/UContainer'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import Link from 'next/link'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

export default function BillListError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslationClient(['bill', 'common'])
  const { resolveRouteUrl } = useURouterClient()

  useEffect(() => {
    console.error('Bill list page error:', error)
  }, [error])

  return (
    <UContainer>
      <Stack
        alignItems="center"
        justifyContent="center"
        minHeight="400px"
        gap={3}
        textAlign="center"
      >
        <Stack gap={1.5}>
          <Typography variant="h3">
            {t('msg.error.pageError.title', {
              ns: 'common',
            })}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('msg.error.pageError.description', {
              ns: 'common',
            })}
          </Typography>
        </Stack>
        <Stack direction="row" gap={2}>
          <UButton
            onClick={reset}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('msg.error.pageError.retry', { ns: 'common' })}
          </UButton>
          <Link href={resolveRouteUrl({ name: RouteName.Bill })}>
            <UButton variant="outlined" color="primary" size="large">
              {t('billList.error.goToBillHome', { ns: 'bill' })}
            </UButton>
          </Link>
        </Stack>
      </Stack>
    </UContainer>
  )
}

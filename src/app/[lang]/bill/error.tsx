'use client'

import UButton from '@/common/components/atoms/UButton'
import UContainer from '@/common/components/atoms/UContainer'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Stack, Typography } from '@mui/material'
import { useEffect } from 'react'

export default function BillError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslationClient('bill')

  useEffect(() => {
    console.error('Bill page error:', error)
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
            {t('error.title', {
              ns: 'bill',
              defaultValue: 'Something went wrong',
            })}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('error.description', {
              ns: 'bill',
              defaultValue:
                'We encountered an error while loading this page. Please try again.',
            })}
          </Typography>
        </Stack>
        <UButton
          onClick={reset}
          variant="contained"
          color="primary"
          size="large"
        >
          {t('error.retry', { ns: 'bill', defaultValue: 'Try again' })}
        </UButton>
      </Stack>
    </UContainer>
  )
}

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
  const { t } = useTranslationClient(['bill', 'common'])

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
        <UButton
          onClick={reset}
          variant="contained"
          color="primary"
          size="large"
        >
          {t('msg.error.pageError.retry', { ns: 'common' })}
        </UButton>
      </Stack>
    </UContainer>
  )
}

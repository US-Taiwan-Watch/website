'use client'

import { useState, useEffect, useCallback } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { googleAnalyticsUpdateConsent } from '@/common/lib/googleAnalytics'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import CookiesKey from '@/common/enums/CookiesKey'
import UButton from '@/common/components/atoms/UButton'

enum CookieConsentValue {
  Granted = 'granted',
  Denied = 'denied',
}

export default function CookieConsentBanner() {
  const { t } = useTranslationClient('consent')
  const [isVisible, setIsVisible] = useState(false)

  const handleAccept = useCallback(() => {
    localStorage.setItem(CookiesKey.CookieConsent, CookieConsentValue.Granted)
    googleAnalyticsUpdateConsent(CookieConsentValue.Granted)
    setIsVisible(false)
  }, [])

  const handleDeny = useCallback(() => {
    localStorage.setItem(CookiesKey.CookieConsent, CookieConsentValue.Denied)
    googleAnalyticsUpdateConsent(CookieConsentValue.Denied)
    setIsVisible(false)
  }, [])

  useEffect(() => {
    const consent = localStorage.getItem(CookiesKey.CookieConsent)
    // 如果之前沒有點選過 cookie 同意聲明，則顯示同意聲明
    if (!consent) {
      setIsVisible(true)
    }
    // 如果之前點選過 cookie 同意聲明，則根據之前點選的結果，更新 cookie 同意聲明
    if (consent === CookieConsentValue.Granted) {
      handleAccept()
    }
    if (consent === CookieConsentValue.Denied) {
      handleDeny()
    }
  }, [handleAccept, handleDeny])

  if (!isVisible) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        p: 2,
        zIndex: 1300,
        boxShadow: 3,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', sm: 'center' }}
        spacing={2}
      >
        <Typography variant="body2" sx={{ flex: 1 }}>
          {t('cookieConsent.message', {
            defaultValue:
              'We use cookies to improve your experience and analyze site usage. By accepting, you agree to our use of cookies for analytics and personalization.',
          })}
        </Typography>

        <Stack direction="row" spacing={1}>
          <UButton
            variant="outlined"
            color="info"
            size="small"
            onClick={handleDeny}
          >
            {t('cookieConsent.deny', { defaultValue: 'Deny' })}
          </UButton>
          <UButton
            variant="contained"
            color="info"
            size="small"
            onClick={handleAccept}
          >
            {t('cookieConsent.accept', { defaultValue: 'Accept' })}
          </UButton>
        </Stack>
      </Stack>
    </Box>
  )
}

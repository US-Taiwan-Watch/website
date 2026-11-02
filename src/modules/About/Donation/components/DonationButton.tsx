'use client'

import UButton from '@/common/components/atoms/UButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { memo } from 'react'

export const DonationButtonTaiwan = memo(function DonationButtonTaiwan() {
  const { t } = useTranslationClient('about_donation')

  return (
    <UButton
      sx={{
        backgroundColor: 'common.black',
        color: 'common.white',
      }}
      rounded
      size="large"
    >
      {t('taiwan.btn', { ns: 'about_donation' })}
    </UButton>
  )
})

export const DonationButtonInternational = memo(
  function DonationButtonInternational() {
    const { t } = useTranslationClient('about_donation')

    return (
      <UButton
        sx={{
          backgroundColor: 'common.black',
          color: 'common.white',
        }}
        rounded
        size="large"
      >
        {t('international.btn', { ns: 'about_donation' })}
      </UButton>
    )
  }
)

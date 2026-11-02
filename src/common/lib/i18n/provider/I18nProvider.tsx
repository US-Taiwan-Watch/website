'use client'

import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { setZodI18n } from '@/common/lib/zod'
import React, { useEffect } from 'react'
import { DateUtils } from '@/modules/Common/business/Date'
import { Language } from '@/common/lib/i18n/types'
import { useParams } from 'next/navigation'

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useTranslationClient('common')

  const { t, i18n } = useTranslationClient('zod')

  // 當語言改變時，重新設定 zod i18n
  useEffect(() => {
    setZodI18n({ t })
  }, [t, i18n.resolvedLanguage])

  const { lang } = useParams<{ lang: Language }>()
  DateUtils.setDayjsLocale(lang)

  return <>{children}</>
}

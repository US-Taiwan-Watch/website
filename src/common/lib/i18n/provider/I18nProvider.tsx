'use client'

import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { setZodI18n } from '@/common/lib/zod'
import React, { useEffect } from 'react'

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

  return <>{children}</>
}

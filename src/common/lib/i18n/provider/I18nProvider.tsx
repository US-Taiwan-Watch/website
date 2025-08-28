'use client'

import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Language } from '@/common/lib/i18n/types'
import { setZodI18n } from '@/common/lib/zod'
import { useParams } from 'next/navigation'
import React from 'react'

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { lang } = useParams<{ lang: Language }>()
  useTranslationClient(lang)

  const { t } = useTranslationClient('zod')
  setZodI18n({ t })

  return <>{children}</>
}

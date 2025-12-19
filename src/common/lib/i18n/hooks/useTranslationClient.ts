'use client'

import CookiesKey from '@/common/enums/CookiesKey'
import { getOptions, I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'
import { Language } from '@/common/lib/i18n/types'
import { getZodTranslations } from '@/common/lib/zod'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import {
  initReactI18next,
  useTranslation,
  UseTranslationOptions,
} from 'react-i18next'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: Language, namespace: string) => {
      if (namespace !== 'zod')
        return import(`../locales/${language}/${namespace}.json`)
      return getZodTranslations(language)
    })
  )
  .init({
    ...getOptions(),
    lng: undefined, // 讓語言在 I18nProvider 中決定
    preload: runsOnServerSide ? I18N_SUPPORTED_LANGUAGE : [],
  })

export default function useTranslationClient(
  namespace?: string | string[],
  options?: UseTranslationOptions<string> & {
    lng?: Language
  }
) {
  const ret = useTranslation(namespace, options)

  const { lang: paramLang } = useParams<{ lang: Language }>()

  const lang = options?.lng ?? paramLang

  // 總是調用所有 hooks，在 effect 內部做條件判斷
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!lang || ret.i18n.resolvedLanguage === lang) return
    ret.i18n.changeLanguage(lang)
  }, [lang, ret.i18n])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const cookies = new Cookies()
    if (!lang) return
    if (cookies.get(CookiesKey.I18n) === lang) return
    cookies.set(CookiesKey.I18n, lang, { path: '/' })
  }, [lang])

  // Server side: 直接更改語言
  if (runsOnServerSide && lang && ret.i18n.resolvedLanguage !== lang) {
    ret.i18n.changeLanguage(lang)
  }

  return ret
}

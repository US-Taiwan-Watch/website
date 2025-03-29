'use client'

import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { useCallback } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { config } from '@/config'

export default function useLanguageSwitcher() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { lang } = useParams<{
    lang: Language
  }>()

  /**
   * 替換網址
   */
  const replaceUrl = useCallback((url: string) => {
    location.replace(url)
  }, [])

  // ----- 處理選擇項目 -----
  const { i18n } = useTranslationClient('common')

  // ----- 處理選擇事件 -----
  const handleChangeLanguage = useCallback(
    (lang: Language) => {
      i18n.changeLanguage(lang)

      const pathParts = pathname.split('/')

      // 若第一個 path 不是 lang 可能的值，則不執行動作
      if (!I18N_SUPPORTED_LANGUAGE.includes(pathParts[1] as Language)) {
        return
      }

      // 只替換第一個出現的語言代碼
      pathParts[1] = lang
      const newPath = pathParts.join('/')
      // 組合新的 URL
      const newUrl = `${config.WEB_BASE_URL}${newPath}${searchParams.toString() ? '?' + searchParams.toString() : ''}`

      replaceUrl(newUrl)
    },
    [pathname, searchParams, i18n, replaceUrl]
  )

  return {
    lang,
    handleChangeLanguage,
    replaceUrl,
  }
}

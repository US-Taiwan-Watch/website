import { InitOptions } from 'i18next'
import { Language } from '@/common/lib/i18n/types'
import CookiesKey from '@/common/enums/CookiesKey'

export const I18N_FALLBACK_LANGUAGE: Language = 'en-US'
export const I18N_SUPPORTED_LANGUAGE: Array<Language> = [
  'zh-TW',
  I18N_FALLBACK_LANGUAGE,
]
export const I18N_DEFAULT_NAMESPACE = 'common'

export function getOptions(
  lang = I18N_FALLBACK_LANGUAGE,
  ns: string | string[] = I18N_DEFAULT_NAMESPACE
): InitOptions {
  /**
   * 相關 config 參考: https://www.i18next.com/overview/configuration-options
   */
  return {
    supportedLngs: I18N_SUPPORTED_LANGUAGE,
    fallbackLng: I18N_FALLBACK_LANGUAGE,
    lng: lang,
    fallbackNS: I18N_DEFAULT_NAMESPACE,
    defaultNS: I18N_DEFAULT_NAMESPACE,
    ns,
    /**
     * Detection options for `i18next-browser-languagedetector`
     * @see {@link https://github.com/i18next/i18next-browser-languageDetector}
     * Default options
     * @see {@link https://github.com/i18next/i18next-browser-languageDetector/blob/9efebe6ca0271c3797bc09b84babf1ba2d9b4dbb/src/index.js#L11}
     */
    detection: {
      order: ['path', 'htmlTag', 'navigator'],
      caches: ['cookie'],
      lookupFromPathIndex: 0,
      lookupCookie: CookiesKey.I18n,
    },
  }
}

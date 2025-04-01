import { InitOptions } from 'i18next'
import { Language } from '@/common/lib/i18n/types'

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
  }
}

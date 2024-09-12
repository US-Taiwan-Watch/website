import { InitOptions } from 'i18next'
import { Language } from './types'

export const fallbackLang: Language = 'en-US'
export const languages: Array<Language> = [fallbackLang, 'zh-TW']
export const defaultNamespace = 'translation'
export const cookieName = 'i18next'

export function getOptions(
  lang = fallbackLang,
  ns = defaultNamespace
): InitOptions {
  /**
   * 相關 config 參考: https://www.i18next.com/overview/configuration-options
   */
  return {
    supportedLngs: languages,
    fallbackLng: fallbackLang,
    lng: lang,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns,
  }
}

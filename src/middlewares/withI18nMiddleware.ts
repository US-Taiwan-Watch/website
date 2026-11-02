import CookiesKey from '@/common/enums/CookiesKey'
import {
  I18N_FALLBACK_LANGUAGE,
  I18N_SUPPORTED_LANGUAGE,
} from '@/common/lib/i18n/settings'
import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'
import { CustomNextMiddleware } from '@/middlewares/chainMiddlewares'
import { Language } from '@/common/lib/i18n/types'

const I18N_SUPPORTED_LANGUAGE_SET = new Set(I18N_SUPPORTED_LANGUAGE)
acceptLanguage.languages(I18N_SUPPORTED_LANGUAGE)

/**
 * Get the possible locale from the locale in the pathname.
 * If the locale is not supported, return `null`.
 */
const getPossibleLocale = (localeInPathname?: string): Language | null => {
  if (!localeInPathname) return null
  const normalized = localeInPathname.toLowerCase()
  if (I18N_SUPPORTED_LANGUAGE_SET.has(normalized as Language))
    return normalized as Language

  const base = normalized.split('-')[0]
  const baseMatch = I18N_SUPPORTED_LANGUAGE.find(
    (l) => l.split('-')[0] === base
  )
  return baseMatch ?? null
}

/**
 * Get the fallback locale base on the cookies or headers.
 * If the language is not supported, return the fallback language.
 */
const getFallbackLocale = (request: NextRequest): Language => {
  // 1. Get language from cookies
  const lngFromCookies = request.cookies.get(CookiesKey.I18n)
  if (
    lngFromCookies &&
    I18N_SUPPORTED_LANGUAGE_SET.has(lngFromCookies.value as Language)
  )
    return lngFromCookies.value as Language

  // 2. Get language from headers
  const lngFromHeaders = acceptLanguage.get(
    request.headers.get('Accept-Language')
  )
  if (
    lngFromHeaders &&
    I18N_SUPPORTED_LANGUAGE_SET.has(lngFromHeaders as Language)
  )
    return lngFromHeaders as Language

  // 3. Fallback to default language
  return I18N_FALLBACK_LANGUAGE
}

export function withI18nMiddleware(
  middleware: CustomNextMiddleware
): CustomNextMiddleware {
  return (request, event, response) => {
    const { search, pathname } = request.nextUrl

    const localeInPathname = pathname.split('/')[1]

    // 1. If the locale in the pathname is supported, continue the middleware chain
    if (
      localeInPathname &&
      I18N_SUPPORTED_LANGUAGE_SET.has(localeInPathname as Language)
    ) {
      return middleware(request, event, response)
    }

    let locale = I18N_FALLBACK_LANGUAGE
    let restPathname = pathname

    // 2. If the locale in the pathname is not supported, try to find the possible locale
    const possibleLocale = getPossibleLocale(localeInPathname)
    if (possibleLocale) {
      // 去除 locale 後的 pathname，e.g. `/zh-tw/about` -> `/about`
      const pathWithoutLang = pathname.split('/').slice(2).join('/')
      restPathname = pathWithoutLang ? `/${pathWithoutLang}` : ''
      locale = possibleLocale
    } else {
      // 3. If the locale in the pathname is not supported and no possible locale is found, use the fallback language
      locale = getFallbackLocale(request)
    }

    const redirectUrl = new URL(`/${locale}${restPathname}`, request.url)
    redirectUrl.search = search
    return NextResponse.redirect(redirectUrl)
  }
}

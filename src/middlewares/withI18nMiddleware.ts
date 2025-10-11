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

const getLocale = (request: NextRequest) => {
  // 1. Get language from path
  const lngFromPath = request.nextUrl.pathname.split('/')[1]
  if (lngFromPath && I18N_SUPPORTED_LANGUAGE_SET.has(lngFromPath as Language))
    return lngFromPath

  // 2. Get language from cookies
  const lngFromCookies = request.cookies.get(CookiesKey.I18n)
  if (
    lngFromCookies &&
    I18N_SUPPORTED_LANGUAGE_SET.has(lngFromCookies.value as Language)
  )
    return lngFromCookies.value

  // 3. Get language from headers
  const lngFromHeaders = acceptLanguage.get(
    request.headers.get('Accept-Language')
  )
  if (
    lngFromHeaders &&
    I18N_SUPPORTED_LANGUAGE_SET.has(lngFromHeaders as Language)
  )
    return lngFromHeaders

  // 4. Fallback to default language
  return I18N_FALLBACK_LANGUAGE
}

export function withI18nMiddleware(
  middleware: CustomNextMiddleware
): CustomNextMiddleware {
  return (request, event, response) => {
    const { search, pathname } = request.nextUrl

    if (
      I18N_SUPPORTED_LANGUAGE.some((locale) =>
        pathname.startsWith(`/${locale}`)
      )
    ) {
      return middleware(request, event, response)
    }

    const locale = getLocale(request)
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url)
    redirectUrl.search = search
    return NextResponse.redirect(redirectUrl)
  }
}

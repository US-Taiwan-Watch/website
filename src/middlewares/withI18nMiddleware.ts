import CookiesKey from '@/common/enums/CookiesKey'
import {
  I18N_FALLBACK_LANGUAGE,
  I18N_SUPPORTED_LANGUAGE,
} from '@/common/lib/i18n/settings'
import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'
import { CustomNextMiddleware } from '@/middlewares/chainMiddlewares'

acceptLanguage.languages(I18N_SUPPORTED_LANGUAGE)

const getLocale = (request: NextRequest) => {
  // 1. Get language from cookies
  const lngFromCookies = request.cookies.get(CookiesKey.I18n)
  if (lngFromCookies) return lngFromCookies.value

  // 2. Get language from headers
  const lngFromHeaders = acceptLanguage.get(
    request.headers.get('Accept-Language')
  )
  if (lngFromHeaders) return lngFromHeaders

  // 3. Fallback to default language
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

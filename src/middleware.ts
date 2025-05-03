import acceptLanguage from 'accept-language'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'
import { chainMiddlewares } from '@/middlewares/chainMiddlewares'
import { withI18nMiddleware } from '@/middlewares/withI18nMiddleware'
import { withAuth0Middleware } from '@/middlewares/withAuth0Middleware'

acceptLanguage.languages(I18N_SUPPORTED_LANGUAGE)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - assets
     * - favicon.ico (favicon file)
     * - sw.js (service worker)
     * - site.webmanifest
     */
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
}

// middleware chain, the order of the array is the order of the middleware execution
const middlewares = [withAuth0Middleware, withI18nMiddleware]

export default chainMiddlewares(middlewares)

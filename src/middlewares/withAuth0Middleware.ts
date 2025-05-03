/**
 * Using the SDK's middleware auto-configures the following routes:

/auth/login: The route to perform login with Auth0
/auth/logout: The route to log the user out
/auth/callback: The route Auth0 will redirect the user to after a successful login
/auth/profile: The route to fetch the user profile
/auth/access-token: The route to verify the user's session and return an access token (which automatically refreshes if a refresh token is available)
/auth/backchannel-logout: The route to receive a logout_token when a configured Back-Channel Logout initiator occurs
 */

import { auth0 } from '@/common/lib/auth0/server'

import { CustomNextMiddleware } from '@/middlewares/chainMiddlewares'

export function withAuth0Middleware(
  middleware: CustomNextMiddleware
): CustomNextMiddleware {
  return async (request, event, response) => {
    // if pathname contains auth0 preserved routes, return auth0 middleware
    if (request.nextUrl.pathname.includes('/auth')) {
      return auth0.middleware(request)
    }

    // otherwise, return next middleware
    return middleware(request, event, response)
  }
}

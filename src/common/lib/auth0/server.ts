import { config } from '@/config'
import { Auth0Client } from '@auth0/nextjs-auth0/server'

export const auth0 = new Auth0Client({
  domain: config.AUTH0_DOMAIN,
  appBaseUrl: config.WEB_BASE_URL,
  clientId: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  secret: config.AUTH0_SECRET,
})

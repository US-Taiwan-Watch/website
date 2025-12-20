import { config } from '@/config'
import { Auth0Client } from '@auth0/nextjs-auth0/server'

// 驗證必要的 Auth0 環境變數
const requiredEnvVars = {
  domain: config.AUTH0_DOMAIN,
  clientId: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  secret: config.AUTH0_SECRET,
  appBaseUrl: config.WEB_BASE_URL,
} as const

Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value) {
    throw new Error(
      `Missing required Auth0 config: ${key}. Please check your environment variables.`
    )
  }
})

/**
 * Next.js App Router Auth0 Client
 * @see {@link https://github.com/auth0/nextjs-auth0 | Auth0 Next.js SDK}
 */
export const auth0 = new Auth0Client({
  domain: config.AUTH0_DOMAIN,
  appBaseUrl: config.WEB_BASE_URL,
  clientId: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  secret: config.AUTH0_SECRET,
})

import { config } from '@/config'
import { Auth0Client } from '@auth0/nextjs-auth0/server'
import { resolveAuth0AppBaseUrl } from './origin'

const configuredBaseUrl = process.env.APP_BASE_URL || config.WEB_BASE_URL

// 驗證必要的 Auth0 環境變數
const requiredEnvVars = {
  domain: config.AUTH0_DOMAIN,
  clientId: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  secret: config.AUTH0_SECRET,
  appBaseUrl: configuredBaseUrl,
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
const createClient = (appBaseUrl: string) =>
  new Auth0Client({
    domain: config.AUTH0_DOMAIN,
    appBaseUrl,
    clientId: config.AUTH0_CLIENT_ID,
    clientSecret: config.AUTH0_CLIENT_SECRET,
    secret: config.AUTH0_SECRET,
  })

// Session reads use the same encrypted, host-only cookie on each website.
export const auth0 = createClient(configuredBaseUrl!)
const clients = new Map<string, Auth0Client>()

export function auth0ForHost(requestHost: string): Auth0Client {
  const appBaseUrl = resolveAuth0AppBaseUrl(requestHost, configuredBaseUrl!)
  let client = clients.get(appBaseUrl)
  if (!client) {
    client = createClient(appBaseUrl)
    clients.set(appBaseUrl, client)
  }
  return client
}

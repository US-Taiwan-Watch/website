'use client'

import { Auth0Provider } from '@auth0/auth0-react'
import { config } from '@/config'
import type React from 'react'

export default function UAuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Auth0Provider
      domain={config.AUTH0_DOMAIN}
      clientId={config.AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: config.AUTH0_REDIRECT_URI }}
    >
      {children}
    </Auth0Provider>
  )
}

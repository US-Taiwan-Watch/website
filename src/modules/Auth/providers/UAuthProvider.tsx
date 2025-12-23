'use client'

import { useRouter } from 'next/navigation'
import type React from 'react'
import { createContext, useCallback, useContext } from 'react'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

type UAuthContextType = {
  login: (options?: { returnTo?: string }) => void
  logout: () => void
}

const UAuthContext = createContext<UAuthContextType>({
  login: () => {},
  logout: () => {},
})

export const useUAuth = () => {
  const context = useContext(UAuthContext)
  if (!context) {
    throw new Error('useUAuth must be used within a UAuthProvider')
  }
  return context
}

export default function UAuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { resolveRouteUrl } = useURouterClient()

  const login = useCallback(
    (options?: { returnTo?: string }) => {
      router.push(
        resolveRouteUrl(
          {
            name: RouteName.AuthLogin,
            query: { returnTo: options?.returnTo ?? null },
          },
          { preserveLanguage: false }
        )
      )
    },
    [router, resolveRouteUrl]
  )

  const logout = useCallback(() => {
    router.push(resolveRouteUrl({ name: RouteName.AuthLogout }))
  }, [router, resolveRouteUrl])

  return (
    <UAuthContext.Provider value={{ login, logout }}>
      {children}
    </UAuthContext.Provider>
  )
}

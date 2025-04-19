'use client'

import { ROUTES } from '@/routes'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/navigation'
import type React from 'react'
import { useEffect } from 'react'

type UnAuthedAction =
  | /** 跳轉到登入頁 */
  'login'
  /** 跳轉到首頁 */
  | 'home'

type AuthedProviderProps = {
  children: React.ReactNode
  unAuthedAction?: UnAuthedAction
}

/**
 * 只有已登入的用戶才能看到內容
 * @param param0
 * @returns
 */
export default function AuthedProvider({
  children,
  unAuthedAction = 'home',
}: AuthedProviderProps) {
  const router = useRouter()
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      switch (unAuthedAction) {
        case 'login':
          loginWithRedirect()
          break
        case 'home':
          router.push(ROUTES.HOME)
          break
      }
    }
  }, [isAuthenticated, loginWithRedirect, router, unAuthedAction, isLoading])

  if (!isAuthenticated) return null
  return <>{children}</>
}

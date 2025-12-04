'use client'

import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'
import { useRouter } from 'next/navigation'
import type React from 'react'
import { useEffect } from 'react'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'
import { Box, CircularProgress } from '@mui/material'
import { useAccount } from '@/modules/Account/providers/AccountProvider'

type UnAuthedAction =
  | /** 跳轉到登入頁 */
  'login'
  /** 跳轉到首頁 */
  | 'home'

type AuthedProviderProps = {
  children: React.ReactNode
  unAuthedAction?: UnAuthedAction
  redirectToSamePage?: boolean
}

/**
 * 只有已登入的用戶才能看到內容
 * @param param0
 * @returns
 */
export default function AuthedProvider({
  children,
  unAuthedAction = 'home',
  redirectToSamePage = false,
}: AuthedProviderProps) {
  const router = useRouter()
  const { resolveRouteUrl } = useURouterClient()
  const { login } = useUAuth()
  const { isAccountLoading, account } = useAccount()

  useEffect(() => {
    if (isAccountLoading) return
    if (account) return
    switch (unAuthedAction) {
      case 'login':
        if (!redirectToSamePage) {
          login()
          return
        }
        login({
          returnTo: window.location.pathname + window.location.search,
        })
        break
      case 'home':
        router.push(resolveRouteUrl({ name: RouteName.Home }))
        break
    }
  }, [
    account,
    isAccountLoading,
    login,
    unAuthedAction,
    redirectToSamePage,
    router,
    resolveRouteUrl,
  ])

  if (isAccountLoading)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          width: '100%',
        }}
      >
        <CircularProgress color="info" />
      </Box>
    )
  if (!account) return null
  return <>{children}</>
}

import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

/**
 * Header 的 Account 功能
 * @returns
 */
export default function useHeaderAccount() {
  const { resolveRouteUrl } = useURouterClient()
  const router = useRouter()
  const { login } = useUAuth()
  const { user, isLoading } = useUser()

  const handleAccountClick = useCallback(() => {
    if (isLoading) return

    if (!user) {
      login()
      return
    }

    router.push(resolveRouteUrl({ name: RouteName.Account }))
  }, [router, user, isLoading, login, resolveRouteUrl])

  return { handleAccountClick }
}

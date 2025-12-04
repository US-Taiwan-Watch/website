import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'
import { useAccount } from '@/modules/Account/providers/AccountProvider'

/**
 * Header 的 Account 功能
 * @returns
 */
export default function useHeaderAccount() {
  const { resolveRouteUrl } = useURouterClient()
  const router = useRouter()
  const { login } = useUAuth()
  const { isLoadingAccount, account } = useAccount()

  const handleAccountClick = useCallback(() => {
    if (isLoadingAccount) return

    if (!account) {
      login({
        returnTo: resolveRouteUrl({ name: RouteName.Account }),
      })
      return
    }

    router.push(resolveRouteUrl({ name: RouteName.Account }))
  }, [router, account, isLoadingAccount, login, resolveRouteUrl])

  return { handleAccountClick }
}

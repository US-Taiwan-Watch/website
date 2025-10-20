'use client'

import { RouteName } from '@/common/lib/router/routes'
import useURouterClient from '@/common/lib/router/useURouterClient'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AccountPage() {
  const router = useRouter()
  const { resolveRouteUrl } = useURouterClient()
  const { isCompactView } = useAccountLayout()

  useEffect(() => {
    if (!isCompactView) {
      router.push(resolveRouteUrl({ name: RouteName.AccountSubscribe }))
    }
  }, [isCompactView, router, resolveRouteUrl])

  return (
    <AccountLayout>
      <></>
    </AccountLayout>
  )
}

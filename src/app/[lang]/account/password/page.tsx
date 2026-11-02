'use client'

import AccountChangePasswordForm from '@/modules/Account/AuthSetting/components/AccountChangePasswordForm'
import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { Connection } from '@/modules/Account/business/Account'
import { redirect } from 'next/navigation'
import { RouteName } from '@/common/lib/router/routes'
import { useEffect } from 'react'

export default function PasswordPage() {
  const { resolveRouteUrl } = useURouterClient()
  const { account } = useAccount()

  useEffect(() => {
    if (account?.connection !== Connection['User-Password']) {
      redirect(resolveRouteUrl({ name: RouteName.Account }))
    }
  }, [account?.connection, resolveRouteUrl])

  return (
    <AccountLayout>
      <AccountContent>
        <AccountChangePasswordForm />
      </AccountContent>
    </AccountLayout>
  )
}

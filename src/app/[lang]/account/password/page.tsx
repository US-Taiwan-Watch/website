'use client'

import AccountChangePasswordForm from '@/modules/Account/AuthSetting/components/AccountChangePasswordForm'
import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { Connection } from '@/modules/Account/business/Account'
import { redirect } from 'next/navigation'
import { RouteName } from '@/common/lib/router/routes'
import { useEffect } from 'react'

export default function PasswordPage() {
  const { resolveRouteUrl } = useURouterClient()
  const account = useAccountStore.use.account()

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

'use client'

import AccountChangePasswordForm from '@/modules/Account/components/AccountChangePasswordForm'
import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { Connection } from '@/modules/Account/business/Account'
import { redirect } from 'next/navigation'
import { RouteName } from '@/common/lib/router/routes'

export default function PasswordPage() {
  const { resolveRouteUrl } = useURouterClient()
  const account = useAccountStore.use.account()
  if (account?.connection !== Connection['User-Password']) {
    redirect(resolveRouteUrl({ name: RouteName.Account }))
  }

  return (
    <AccountLayout>
      <AccountContent>
        <AccountChangePasswordForm />
      </AccountContent>
    </AccountLayout>
  )
}

import { getServerDevice } from '@/common/lib/responsive/getServerDevice'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import { redirect } from 'next/navigation'

export default async function AccountPage() {
  const { resolveRouteUrl } = getURouterServer()
  const { isMobile, isTablet } = await getServerDevice()

  if (!isMobile && !isTablet) {
    redirect(resolveRouteUrl({ name: RouteName.AccountSubscribe }))
  }

  return (
    <AccountLayout>
      <></>
    </AccountLayout>
  )
}

import { getServerDevice } from '@/common/lib/responsive/getServerDevice'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'

export default async function AccountPage() {
  const { isMobile, isTablet } = await getServerDevice()

  if (!isMobile && !isTablet) {
    redirect(ROUTES.ACCOUNT_SUBSCRIBE)
  }

  return (
    <AccountLayout>
      <></>
    </AccountLayout>
  )
}

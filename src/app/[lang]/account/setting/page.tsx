'use client'

import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import AccountSettingForm from '@/modules/Account/Setting/components/AccountSettingForm'

export default function SettingPage() {
  return (
    <AccountLayout>
      <AccountContent>
        <AccountSettingForm />
      </AccountContent>
    </AccountLayout>
  )
}

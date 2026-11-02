'use client'

import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import AccountSubscribeTypeTabs from '@/modules/Account/Subscribe/components/AccountSubscribeTypeTabs'
import AccountSubscribeList from '@/modules/Account/Subscribe/components/AccountSubscribeList'

export default function SubscribePage() {
  return (
    <AccountLayout>
      <AccountContent headerChildren={<AccountSubscribeTypeTabs />}>
        <AccountSubscribeList />
      </AccountContent>
    </AccountLayout>
  )
}

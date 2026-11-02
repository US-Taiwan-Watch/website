'use client'

import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import AccountTaiwanRecordStatusTabs from '@/modules/Account/TaiwanRecord/components/AccountTaiwanRecordStatusTabs'
import AccountTaiwanRecordList from '@/modules/Account/TaiwanRecord/components/AccountTaiwanRecordList'

export default function TaiwanRecordPage() {
  return (
    <AccountLayout>
      <AccountContent headerChildren={<AccountTaiwanRecordStatusTabs />}>
        <AccountTaiwanRecordList />
      </AccountContent>
    </AccountLayout>
  )
}

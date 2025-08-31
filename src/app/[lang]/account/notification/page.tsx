'use client'

import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import AccountNotificationList from '@/modules/Account/Notification/components/AccountNotificationList'
import AccountNotificationSetting from '@/modules/Account/Notification/components/AccountNotificationSetting'
import { Stack } from '@mui/material'

export default function NotificationPage() {
  return (
    <AccountLayout>
      <AccountContent>
        <Stack>
          <AccountNotificationSetting />
          <AccountNotificationList />
        </Stack>
      </AccountContent>
    </AccountLayout>
  )
}

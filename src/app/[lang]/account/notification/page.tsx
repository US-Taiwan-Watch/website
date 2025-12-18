'use client'

import AccountContent from '@/modules/Account/components/AccountContent'
import AccountLayout from '@/modules/Account/components/AccountLayout'
import AccountNotificationSetting from '@/modules/Account/Notification/components/AccountNotificationSetting'
import { Stack } from '@mui/material'

export default function NotificationPage() {
  return (
    <AccountLayout>
      <AccountContent>
        <Stack>
          <AccountNotificationSetting />
        </Stack>
      </AccountContent>
    </AccountLayout>
  )
}

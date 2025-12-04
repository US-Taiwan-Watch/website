import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { AccountNotification } from '@/modules/Account/Notification/business/AccountNotification'
import { DateUtils } from '@/modules/Common/business/Date'
import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import { memo, useMemo } from 'react'

type AccountNotificationListItemProps = {
  accountNotification: AccountNotification
}

const AccountNotificationListItem = memo(function AccountNotificationListItem({
  accountNotification,
}: AccountNotificationListItemProps) {
  return (
    <Link
      href={accountNotification.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stack
        sx={{
          px: 4,
          py: 2,
        }}
      >
        <UHeightLimitedText
          maxLine={2}
          variant="bodyS"
          fontWeight={'600 !important'}
        >
          {accountNotification.title}
        </UHeightLimitedText>
        <UHeightLimitedText maxLine={2} variant="bodyS">
          {accountNotification.content}
        </UHeightLimitedText>
        <UHeightLimitedText
          maxLine={2}
          variant="bodyS"
          color="grey.4200"
          fontWeight={'600 !important'}
        >
          {DateUtils.formatLocal(accountNotification.createdAt)}
        </UHeightLimitedText>
      </Stack>
    </Link>
  )
})

const AccountNotificationList = memo(function AccountNotificationList() {
  const { account } = useAccount()
  const notifications = useMemo(() => {
    if (!account) return []
    // TODO: 確認 notifications 是否為另外 query 而非綁在 Query.Me
    return account.notifications
  }, [account])
  const { isCompactView } = useAccountLayout()

  if (isCompactView) {
    return (
      <UFullWidthBackgroundBox>
        <Stack
          width="100%"
          sx={{
            backgroundColor: 'grey.100',
          }}
        >
          {notifications.map((notification) => (
            <Box
              key={notification.id}
              sx={{
                '&:not(:last-child)': {
                  borderBottomColor: 'grey.4600',
                  borderBottomWidth: 1,
                  borderBottomStyle: 'solid',
                },
              }}
            >
              <AccountNotificationListItem accountNotification={notification} />
            </Box>
          ))}
        </Stack>
      </UFullWidthBackgroundBox>
    )
  }

  return (
    <Stack width="100%">
      {notifications.map((notification) => (
        <Box
          key={notification.id}
          sx={{
            '&:not(:last-child)': {
              borderBottomColor: 'grey.4600',
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
            },
          }}
        >
          <AccountNotificationListItem accountNotification={notification} />
        </Box>
      ))}
    </Stack>
  )
})

export default AccountNotificationList

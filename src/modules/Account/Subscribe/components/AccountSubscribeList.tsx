'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHStack from '@/common/components/atoms/UHStack'
import useAccountLayout from '@/modules/Account/hooks/useAccountLayout'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { AccountSubscribe } from '@/modules/Account/Subscribe/business/AccountSubscribe'
import { Box, Stack } from '@mui/material'
import { memo, useEffect } from 'react'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import Link from 'next/link'
import { CloseIcon, ExternalLinkIcon } from '@/common/styles/assets/Icons'
import UIconButton from '@/common/components/atoms/UIconButton'
import useAccountSubscribeStore from '@/modules/Account/Subscribe/hooks/useAccountSubscribeStore'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import AccountUtils from '@/modules/Account/business/Account'

type AccountSubscribeListItemProps = {
  accountSubscribe: AccountSubscribe
}

const AccountSubscribeListItem = memo(function AccountSubscribeListItem({
  accountSubscribe,
}: AccountSubscribeListItemProps) {
  const { t } = useTranslationClient('account')
  const { isCompactView } = useAccountLayout()

  return (
    <UHStack
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: 4,
        py: 2,
      }}
    >
      <UHStack alignItems="center" gap={isCompactView ? 1.5 : 3.75}>
        <Box
          sx={{
            minWidth: isCompactView ? '46px' : '100px',
            textAlign: 'center',
            px: isCompactView ? 0.75 : 3.125,
            py: isCompactView ? 0.75 : 0.75,
            color: 'indigo.1000',
            fontSize: isCompactView ? '0.625rem' : '0.875rem',
            fontWeight: 600,
            borderRadius: '9.35px',
            borderColor: 'grey.1400',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: 'grey.2600',
          }}
        >
          {t(`subscribe.type.${accountSubscribe.type}`, { ns: 'account' })}
        </Box>
        <UHeightLimitedText
          maxLine={2}
          variant="bodyS"
          color="grey.4400"
          fontWeight={'600 !important'}
        >
          {accountSubscribe.title}
        </UHeightLimitedText>
      </UHStack>
      <UHStack gap={isCompactView ? 0 : 1.5}>
        <Link
          href={accountSubscribe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIconButton variant="text" color="info" size="xs">
            <ExternalLinkIcon
              sx={{
                width: 14,
                height: 14,
                color: 'grey.4500',
              }}
            />
          </UIconButton>
        </Link>
        <UIconButton variant="text" color="info" size="xs">
          <CloseIcon
            sx={{
              width: 14,
              height: 14,
              color: 'grey.4500',
            }}
          />
        </UIconButton>
      </UHStack>
    </UHStack>
  )
})

const AccountSubscribeList = memo(function AccountSubscribeList() {
  const { account } = useAccountStore()
  const setAccountSubscribeList =
    useAccountSubscribeStore.use.setAccountSubscribeList()
  useEffect(() => {
    if (!account) return
    setAccountSubscribeList(AccountUtils.getAccountSubscribeList(account))
  }, [account, setAccountSubscribeList])

  const filteredAccountSubscribeList =
    useAccountSubscribeStore.use.filteredAccountSubscribeList()
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
          {filteredAccountSubscribeList.map((accountSubscribe) => (
            <Box
              key={accountSubscribe.id}
              sx={{
                '&:not(:last-child)': {
                  borderBottomColor: 'grey.4600',
                  borderBottomWidth: 1,
                  borderBottomStyle: 'solid',
                },
              }}
            >
              <AccountSubscribeListItem accountSubscribe={accountSubscribe} />
            </Box>
          ))}
        </Stack>
      </UFullWidthBackgroundBox>
    )
  }

  return (
    <Stack width="100%">
      {filteredAccountSubscribeList.map((accountSubscribe) => (
        <Box
          key={accountSubscribe.id}
          sx={{
            '&:not(:last-child)': {
              borderBottomColor: 'grey.4600',
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
            },
          }}
        >
          <AccountSubscribeListItem accountSubscribe={accountSubscribe} />
        </Box>
      ))}
    </Stack>
  )
})

export default AccountSubscribeList

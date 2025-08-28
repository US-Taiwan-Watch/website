'use client'

import { Box, Stack, Typography, Avatar } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import Link from 'next/link'
import useAccountNavItems from '@/modules/Account/hooks/useAccountNavItems'
import { LogoutIcon } from '@/common/styles/assets/Icons'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useCallback, useEffect, useState } from 'react'
import { DateUtils } from '@/modules/Common/business/Date'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'

const JOIN_DATE_FORMAT = 'YYYY/MM/DD'

const SidebarContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const ProfileCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
  padding: theme.spacing(2, 2.5, 1.5),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
  },
}))

const ProfileInfo = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.75),
  marginBottom: theme.spacing(1.25),
}))

const JoinDate = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.color.grey[1600]}`,
  paddingTop: theme.spacing(1.25),
  '& .MuiTypography-root': {
    color: theme.color.grey[500],
    fontSize: '12px',
    lineHeight: '1.67',
  },
}))

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
  padding: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
  },
}))

const NavList = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
}))

const NavItemBase = styled('div')<{ active?: boolean }>(
  ({ theme, active }) => ({
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(0.75, 2.5),
    borderRadius: '30px',
    textDecoration: 'none',
    color: active ? theme.color.common.black : theme.color.grey[500],
    backgroundColor: active ? theme.color.grey[100] : 'transparent',
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
      color: active ? theme.color.common.black : theme.color.grey[500],
    },
    '& .MuiTypography-root': {
      fontWeight: active ? 600 : 500,
    },
    '&:hover': {
      backgroundColor: theme.color.grey[100],
      color: theme.color.common.black,
      '& .MuiSvgIcon-root': {
        color: theme.color.common.black,
      },
    },
    [theme.breakpoints.down('sm')]: {
      color: theme.color.common.black,
      backgroundColor: 'transparent',
      '& .MuiSvgIcon-root': {
        color: theme.color.common.black,
      },
      '& .MuiTypography-root': {
        fontWeight: 500,
      },
    },
  })
)

const DeleteAccount = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.color.grey[1600]}`,
  marginTop: theme.spacing(4.5),
  paddingTop: theme.spacing(1.25),
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  '& .MuiTypography-root': {
    color: theme.color.grey[500],
    fontSize: '12px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.color.common.black,
    },
  },
}))

export default function AccountSidebar() {
  const { t } = useTranslationClient('account')
  const { navItems, currentNavItem } = useAccountNavItems()
  const [joinDate, setJoinDate] = useState('')
  useEffect(() => {
    setJoinDate(DateUtils.formatLocal(undefined, JOIN_DATE_FORMAT))
  }, [])

  const { logout } = useUAuth()
  const account = useAccountStore.use.account()
  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  if (!account) return null

  return (
    <SidebarContainer>
      <ProfileCard>
        <ProfileInfo>
          <Stack
            direction={{
              xs: 'row',
              sm: 'column',
            }}
            spacing={1.75}
            alignItems={{
              xs: 'center',
              sm: 'flex-start',
            }}
          >
            <Avatar
              sx={{
                width: {
                  xs: 54,
                  sm: 64,
                },
                height: {
                  xs: 54,
                  sm: 64,
                },
                color: 'common.black',
              }}
              alt={account.fullName ?? 'User Avatar'}
              src={account.picture}
            >
              {account.fullName?.charAt(0)}
            </Avatar>
            <Stack>
              <Typography variant="subtitleM">{account.fullName}</Typography>
              <Typography variant="bodyS">{account.email}</Typography>
            </Stack>
          </Stack>
        </ProfileInfo>
        <JoinDate>
          <Typography
            sx={{
              color: 'grey.4200',
            }}
          >
            {t('account.joinDate', {
              ns: 'account',
              date: joinDate,
              interpolation: { escapeValue: false },
            })}
          </Typography>
        </JoinDate>
      </ProfileCard>

      <NavContainer flex={1}>
        <NavList flex={1}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <NavItemBase active={currentNavItem?.href === item.href}>
                {item.icon}
                <Typography>{item.label}</Typography>
              </NavItemBase>
            </Link>
          ))}
          <NavItemBase onClick={handleLogout}>
            <LogoutIcon sx={{ width: 24, height: 24 }} />
            <Typography>{t('logout.btn', { ns: 'account' })}</Typography>
          </NavItemBase>
        </NavList>

        <DeleteAccount>
          <Typography>{t('deleteAccount.btn', { ns: 'account' })}</Typography>
        </DeleteAccount>
      </NavContainer>
    </SidebarContainer>
  )
}

'use client'

import { Box, Stack, Typography, Avatar } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  SubscribeIcon,
  SettingsIcon,
  PasswordIcon,
  NotificationIcon,
  LogoutIcon,
} from './icons'

const SidebarContainer = styled(Stack)(({ theme }) => ({
  width: '298px',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

const ProfileCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
  padding: theme.spacing(2, 2.5, 1.5),
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
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
  padding: theme.spacing(2.5),
}))

const NavList = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
}))

const NavItem = styled(Link)<{ active?: boolean }>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 2.5),
  borderRadius: '30px',
  textDecoration: 'none',
  color: active ? theme.color.common.black : theme.color.grey[500],
  backgroundColor: active ? theme.color.grey[100] : 'transparent',
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
}))

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

const NAV_ITEMS = [
  { label: 'Subscribe', href: '/account/subscribe', icon: <SubscribeIcon /> },
  { label: 'Settings', href: '/account/setting', icon: <SettingsIcon /> },
  { label: 'Password', href: '/account/password', icon: <PasswordIcon /> },
  {
    label: 'Notification',
    href: '/account/notification',
    icon: <NotificationIcon />,
  },
]

export default function AccountSidebar() {
  const pathname = usePathname()

  return (
    <SidebarContainer>
      <ProfileCard>
        <ProfileInfo>
          <Stack direction="row" spacing={1.75} alignItems="center">
            <Avatar
              sx={{ width: 48, height: 48 }}
              alt="User Avatar"
              src="/path/to/avatar.jpg"
            />
            <Stack>
              <Typography variant="subtitleM">Name</Typography>
              <Typography variant="bodyS">name@gmail.com</Typography>
            </Stack>
          </Stack>
        </ProfileInfo>
        <JoinDate>
          <Typography>Since : 2024/05/28</Typography>
        </JoinDate>
      </ProfileCard>

      <NavContainer>
        <NavList>
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {item.icon}
              <Typography variant="buttonM">{item.label}</Typography>
            </NavItem>
          ))}
          <NavItem href="/logout">
            <LogoutIcon />
            <Typography variant="buttonM">Log out</Typography>
          </NavItem>
        </NavList>

        <DeleteAccount>
          <Typography>Delete account</Typography>
        </DeleteAccount>
      </NavContainer>
    </SidebarContainer>
  )
}

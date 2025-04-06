'use client'

import { Box, Stack, Typography, Switch, FormControlLabel } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'

const PageHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.8),
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
    color: theme.color.common.black,
  },
}))

const NotificationSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color.grey[100],
  borderRadius: '15px',
  padding: theme.spacing(2.5, 4),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}))

const NotificationItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 4),
  borderBottom: `1px solid ${theme.color.grey[1600]}`,
  '&:last-child': {
    borderBottom: 'none',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}))

const StyledSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: theme.color.common.black,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.color.common.black,
        opacity: 0.5,
      },
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.color.grey[400],
    opacity: 0.3,
  },
}))

export default function NotificationPage() {
  return (
    <Stack spacing={3}>
      <PageHeader>
        <Typography variant="h4" fontWeight={700}>
          Notification
        </Typography>
      </PageHeader>

      <NotificationSection>
        <Typography variant="h5" mb={3}>
          Email Notifications
        </Typography>
        <Box sx={{ backgroundColor: 'common.white', borderRadius: '15px' }}>
          <NotificationItem>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography variant="subtitleM">Newsletter</Typography>
                <Typography variant="bodyS" color="grey.500">
                  Receive our weekly newsletter with updates and news
                </Typography>
              </Stack>
              <FormControlLabel
                control={<StyledSwitch defaultChecked />}
                label=""
              />
            </Stack>
          </NotificationItem>

          <NotificationItem>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography variant="subtitleM">Account Updates</Typography>
                <Typography variant="bodyS" color="grey.500">
                  Get notified about important changes to your account
                </Typography>
              </Stack>
              <FormControlLabel
                control={<StyledSwitch defaultChecked />}
                label=""
              />
            </Stack>
          </NotificationItem>

          <NotificationItem>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography variant="subtitleM">New Features</Typography>
                <Typography variant="bodyS" color="grey.500">
                  Stay updated with new features and improvements
                </Typography>
              </Stack>
              <FormControlLabel control={<StyledSwitch />} label="" />
            </Stack>
          </NotificationItem>
        </Box>
      </NotificationSection>

      <NotificationSection>
        <Typography variant="h5" mb={3}>
          Push Notifications
        </Typography>
        <Box sx={{ backgroundColor: 'common.white', borderRadius: '15px' }}>
          <NotificationItem>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography variant="subtitleM">
                  Browser Notifications
                </Typography>
                <Typography variant="bodyS" color="grey.500">
                  Allow browser notifications for important updates
                </Typography>
              </Stack>
              <FormControlLabel control={<StyledSwitch />} label="" />
            </Stack>
          </NotificationItem>

          <NotificationItem>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack spacing={0.5}>
                <Typography variant="subtitleM">
                  Mobile Notifications
                </Typography>
                <Typography variant="bodyS" color="grey.500">
                  Receive notifications on your mobile device
                </Typography>
              </Stack>
              <FormControlLabel
                control={<StyledSwitch defaultChecked />}
                label=""
              />
            </Stack>
          </NotificationItem>
        </Box>
      </NotificationSection>
    </Stack>
  )
}

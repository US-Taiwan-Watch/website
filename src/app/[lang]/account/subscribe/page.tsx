'use client'

import { Box, Stack, Typography, Button } from '@mui/material'
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

const SubscriptionCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color.grey[100],
  borderRadius: '15px',
  padding: theme.spacing(2.5, 4),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}))

const PlanFeature = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2.5, 4),
  borderBottom: `1px solid ${theme.color.grey[1600]}`,
  '&:last-child': {
    borderBottom: 'none',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}))

export default function SubscribePage() {
  return (
    <Stack spacing={3}>
      <PageHeader>
        <Typography variant="h4" fontWeight={700}>
          Subscribe
        </Typography>
      </PageHeader>

      <SubscriptionCard>
        <Stack spacing={2}>
          <Typography variant="h5">Current Plan</Typography>
          <Typography variant="bodyM" color="grey.500">
            You are currently on the free plan. Upgrade to access premium
            features.
          </Typography>
        </Stack>
      </SubscriptionCard>

      <Box>
        <Typography variant="h5" mb={2}>
          Available Plans
        </Typography>
        <Box sx={{ backgroundColor: 'common.white', borderRadius: '15px' }}>
          <PlanFeature>
            <Stack flex={1}>
              <Typography variant="subtitleM">Basic Plan</Typography>
              <Typography variant="bodyS" color="grey.500">
                Access to basic features
              </Typography>
            </Stack>
            <Typography variant="h6">Free</Typography>
          </PlanFeature>

          <PlanFeature>
            <Stack flex={1}>
              <Typography variant="subtitleM">Premium Plan</Typography>
              <Typography variant="bodyS" color="grey.500">
                Access to all features
              </Typography>
            </Stack>
            <Stack alignItems="flex-end">
              <Typography variant="h6">$9.99</Typography>
              <Typography variant="bodyS" color="grey.500">
                /month
              </Typography>
            </Stack>
          </PlanFeature>

          <PlanFeature>
            <Stack flex={1}>
              <Typography variant="subtitleM">Enterprise Plan</Typography>
              <Typography variant="bodyS" color="grey.500">
                Custom solutions for your organization
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'grey.100',
                color: 'common.black',
                '&:hover': {
                  bgcolor: 'grey.200',
                },
              }}
            >
              Contact Us
            </Button>
          </PlanFeature>
        </Box>
      </Box>
    </Stack>
  )
}

'use client'

import { Box, Stack, Typography, TextField, Button } from '@mui/material'
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

const FormSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color.grey[100],
  borderRadius: '15px',
  padding: theme.spacing(2.5, 4),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.color.common.white,
    borderRadius: '8px',
    '& fieldset': {
      borderColor: theme.color.grey[1600],
    },
    '&:hover fieldset': {
      borderColor: theme.color.grey[500],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.color.common.black,
    },
  },
}))

export default function SettingPage() {
  return (
    <Stack spacing={3}>
      <PageHeader>
        <Typography variant="h4" fontWeight={700}>
          Settings
        </Typography>
      </PageHeader>

      <FormSection>
        <Typography variant="h5" mb={3}>
          Profile Information
        </Typography>
        <Stack spacing={3} maxWidth="600px">
          <Stack spacing={1}>
            <Typography variant="subtitleS">Display Name</Typography>
            <StyledTextField
              fullWidth
              placeholder="Enter your display name"
              defaultValue="Name"
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitleS">Email</Typography>
            <StyledTextField
              fullWidth
              type="email"
              placeholder="Enter your email"
              defaultValue="name@gmail.com"
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitleS">Bio</Typography>
            <StyledTextField
              fullWidth
              multiline
              rows={4}
              placeholder="Write something about yourself"
            />
          </Stack>

          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'common.black',
                color: 'common.white',
                '&:hover': {
                  bgcolor: 'grey.900',
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Stack>
      </FormSection>

      <FormSection>
        <Typography variant="h5" mb={3}>
          Preferences
        </Typography>
        <Stack spacing={3} maxWidth="600px">
          <Stack spacing={1}>
            <Typography variant="subtitleS">Language</Typography>
            <StyledTextField
              fullWidth
              select
              defaultValue="en"
              SelectProps={{
                native: true,
              }}
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
            </StyledTextField>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitleS">Time Zone</Typography>
            <StyledTextField
              fullWidth
              select
              defaultValue="utc8"
              SelectProps={{
                native: true,
              }}
            >
              <option value="utc8">UTC+8 (Taipei)</option>
              <option value="utc0">UTC+0 (London)</option>
              <option value="utc-8">UTC-8 (Los Angeles)</option>
            </StyledTextField>
          </Stack>

          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'common.black',
                color: 'common.white',
                '&:hover': {
                  bgcolor: 'grey.900',
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Stack>
      </FormSection>
    </Stack>
  )
}

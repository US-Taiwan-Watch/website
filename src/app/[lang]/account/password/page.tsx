'use client'

import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'

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

export default function PasswordPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <Stack spacing={3}>
      <PageHeader>
        <Typography variant="h4" fontWeight={700}>
          Password
        </Typography>
      </PageHeader>

      <FormSection>
        <Typography variant="h5" mb={3}>
          Change Password
        </Typography>
        <Stack spacing={3} maxWidth="600px">
          <Stack spacing={1}>
            <Typography variant="subtitleS">Current Password</Typography>
            <StyledTextField
              fullWidth
              type={showCurrentPassword ? 'text' : 'password'}
              placeholder="Enter your current password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                      edge="end"
                    >
                      {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitleS">New Password</Typography>
            <StyledTextField
              fullWidth
              type={showNewPassword ? 'text' : 'password'}
              placeholder="Enter your new password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      edge="end"
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="subtitleS">Confirm New Password</Typography>
            <StyledTextField
              fullWidth
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your new password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              Update Password
            </Button>
          </Box>
        </Stack>
      </FormSection>

      <FormSection>
        <Typography variant="h5" mb={3}>
          Two-Factor Authentication
        </Typography>
        <Stack spacing={2}>
          <Typography variant="bodyM" color="grey.500">
            Add an extra layer of security to your account by enabling
            two-factor authentication.
          </Typography>
          <Box>
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
              Enable 2FA
            </Button>
          </Box>
        </Stack>
      </FormSection>
    </Stack>
  )
}

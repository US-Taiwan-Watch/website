'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { styled } from '@/common/lib/mui/theme'
import { Box } from '@mui/material'

const StyledImage = styled('div')(({ theme }) => ({
  width: '100%',
  height: '300px',
  borderRadius: '20px',
  backgroundImage: 'url(/assets/follow-us-mobile.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('lg')]: {
    backgroundImage: 'url(/assets/follow-us-desktop.png)',
    height: '430px',
  },
}))

export default function DonationBanner() {
  return (
    <UFullWidthBackgroundBox>
      <UContainer>
        <Box
          px={{
            xs: 0,
            md: 2,
          }}
        >
          <StyledImage />
        </Box>
      </UContainer>
    </UFullWidthBackgroundBox>
  )
}

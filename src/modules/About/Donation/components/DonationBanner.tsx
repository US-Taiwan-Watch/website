'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { styled } from '@/common/lib/mui/theme'
import { Box } from '@mui/material'
import Image from 'next/image'

const StyledImage = styled(Image)(() => ({}))

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
          <StyledImage
            src="/assets/free-usage-section.png"
            alt="Free Usage Section"
            width={1340}
            height={464}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </Box>
      </UContainer>
    </UFullWidthBackgroundBox>
  )
}

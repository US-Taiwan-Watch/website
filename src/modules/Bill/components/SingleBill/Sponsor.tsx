'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { SponsorIcon } from '@/common/styles/assets/Icons'
import { Box, CardContent, Stack, Typography } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import UHStack from '@/common/components/atoms/UHStack'
import Image from 'next/image'

const StyledImageContainer = styled(Box)(() => ({
  position: 'relative',
  width: '104px',
  height: '118px',
  borderRadius: '10px',
  overflow: 'hidden',
}))

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

type Props = {
  bill: Bill
}

export default function Sponsor({ bill }: Props) {
  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Sponsor',
        icon: <SponsorIcon />,
        iconColor: 'primary',
      }}
    >
      <CardContent>
        <UHStack pt={2} spacing={3}>
          {bill.sponsor?.image && (
            <StyledImageContainer>
              <StyledImage
                src={bill.sponsor.image}
                alt={bill.sponsor.name ?? ''}
                fill
              />
            </StyledImageContainer>
          )}

          <Stack justifyContent="space-between">
            <Stack spacing={1}>
              <Typography variant="articleH3">{bill.sponsor?.name}</Typography>
              <Typography variant="body">{bill.sponsor?.position}</Typography>
            </Stack>

            <Typography
              variant="buttonXS"
              fontWeight={700}
              textTransform="capitalize"
            >
              {bill.sponsor?.party?.toLowerCase()}
            </Typography>
          </Stack>
        </UHStack>
      </CardContent>
    </UContentCard>
  )
}

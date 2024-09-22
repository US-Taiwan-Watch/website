'use client'

import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import { Box, Grid2, Stack, Typography } from '@mui/material'
import { SponsorIcon } from '@/common/styles/assets/Icons'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  borderRadius: '10px',
  backgroundColor: theme.color.grey[2500],
}))

const StyledIconContainer = styled(Box)(({ theme }) => ({
  color: theme.color.grey[2100],
  '& svg': {
    width: '20px',
    height: '20px',
  },
}))

type Props = {
  bill: Bill
}

export default function RightSection({ bill }: Props) {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <StyledCardContainer direction="row" alignItems="center">
          <StyledIconContainer mr={3}>
            <SponsorIcon />
          </StyledIconContainer>
          <Stack>
            <Typography variant="articleH4">{bill.sponsor?.name}</Typography>
            <Typography
              variant="buttonXS"
              fontWeight={600}
              textTransform="capitalize"
            >
              {bill.sponsor?.party?.toLowerCase()}
            </Typography>
          </Stack>
        </StyledCardContainer>
      </Grid2>

      <Grid2 size={5}>
        <StyledCardContainer direction="row"></StyledCardContainer>
      </Grid2>

      <Grid2 size={7}>
        <StyledCardContainer direction="row"></StyledCardContainer>
      </Grid2>

      <Grid2 size={12}>
        <StyledCardContainer></StyledCardContainer>
      </Grid2>
    </Grid2>
  )
}

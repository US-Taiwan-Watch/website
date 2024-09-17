'use client'

import { memo } from 'react'
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { styled } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const StyledOpinionLandingBannerCardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 2, 2, 4),
  borderRadius: '30px',
}))

const StyledTag = styled('div')(({ theme }) => ({
  borderRadius: '5px',
  border: `1px solid ${theme.color.common.black}`,
  padding: '0px 9px',
}))

const StyledImage = styled(Image)(() => ({
  objectFit: 'cover',
  borderRadius: '10px',
}))

const StyledLeftSection = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  height: '100%',
}))

const StyledMiddleSection = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(4, 0),
}))

const StyledTitleTypography = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

const StyledDescriptionTypography = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

// TODO: 確認類型
interface OpinionLandingBannerCardProps {
  tags: Array<string>
  title: string
  description: string
  image: string
  href: string
}

const OpinionLandingBannerCard = memo(function OpinionLandingBannerCard(
  props: OpinionLandingBannerCardProps
) {
  return (
    <StyledOpinionLandingBannerCardContainer>
      <Grid container spacing={2}>
        <Grid size={5}>
          <StyledLeftSection direction="column" spacing={4}>
            {/** Tags */}
            <Stack direction="row" spacing={1}>
              {props.tags.map((tag, index) => (
                <StyledTag key={index}>
                  <Typography variant="caption">{tag}</Typography>
                </StyledTag>
              ))}
            </Stack>

            {/** Middle Section */}
            <StyledMiddleSection direction="column" spacing={2} flex={1}>
              <StyledTitleTypography variant="h3" fontWeight={500}>
                {props.title}
              </StyledTitleTypography>
              <StyledDescriptionTypography variant="body1" fontWeight={500}>
                {props.description}
              </StyledDescriptionTypography>
            </StyledMiddleSection>

            {/** Learn More Button */}
            <Link
              href={props.href}
              style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}
            >
              <UButton
                variant="contained"
                color="info"
                rounded
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Learn More
              </UButton>
            </Link>
          </StyledLeftSection>
        </Grid>

        <Grid size={7}>
          <StyledImage
            src={props.image}
            alt={props.title}
            width={600}
            height={500}
            layout="responsive"
          />
        </Grid>
      </Grid>
    </StyledOpinionLandingBannerCardContainer>
  )
})

export default OpinionLandingBannerCard

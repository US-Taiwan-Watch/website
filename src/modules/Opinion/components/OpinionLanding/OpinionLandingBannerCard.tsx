'use client'

import { memo } from 'react'
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { styled } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Opinion } from '@/modules/Opinion/classes/Opinion'

const StyledOpinionLandingBannerCardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 2, 2, 4),
  borderRadius: '30px',
}))

const StyledCategory = styled(UButton)(({ theme }) => ({
  borderRadius: '5px',
  border: `1px solid ${theme.color.common.black}`,
  color: theme.color.common.black,
  padding: theme.spacing(1),
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
  opinion: Opinion
}

const OpinionLandingBannerCard = function OpinionLandingBannerCard({
  opinion,
}: OpinionLandingBannerCardProps) {
  return (
    <StyledOpinionLandingBannerCardContainer>
      <Grid container spacing={2}>
        <Grid size={5}>
          <StyledLeftSection direction="column" spacing={4}>
            {/** Tags */}
            <Stack direction="row" spacing={1}>
              {opinion.categories?.map((category) => (
                <Link href={category.link} key={category.id}>
                  <StyledCategory>
                    <Typography variant="caption" lineHeight={1}>
                      {category.label}
                    </Typography>
                  </StyledCategory>
                </Link>
              ))}
            </Stack>

            {/** Middle Section */}
            <StyledMiddleSection direction="column" spacing={2} flex={1}>
              <StyledTitleTypography variant="h3" fontWeight={500}>
                {opinion.title}
              </StyledTitleTypography>
              <StyledDescriptionTypography variant="body1" fontWeight={500}>
                {opinion.description}
              </StyledDescriptionTypography>
            </StyledMiddleSection>

            {/** Learn More Button */}
            <Link
              href={opinion.link}
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
          {opinion.image && (
            <StyledImage
              src={opinion.image}
              alt={opinion.title ?? ''}
              width={600}
              height={500}
              layout="responsive"
            />
          )}
        </Grid>
      </Grid>
    </StyledOpinionLandingBannerCardContainer>
  )
}

export default memo(OpinionLandingBannerCard)

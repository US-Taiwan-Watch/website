'use client'

import { memo } from 'react'
import { Box, Grid2 as Grid, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import withSelectable from '@/common/hooks/withSelectable'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UTagList from '@/common/components/atoms/UTagList'
import UWidthLimitedText from '@/common/components/atoms/UWidthLimitedText'

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
const StyledLeftSectionWithSelectable = withSelectable(StyledLeftSection)

const StyledMiddleSection = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(4, 0),
}))

// TODO: 確認類型
interface OpinionLandingBannerCardProps {
  opinion: Opinion
}

const OpinionLandingBannerCard = function OpinionLandingBannerCard({
  opinion,
}: OpinionLandingBannerCardProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledOpinionLandingBannerCardContainer>
      <Grid container spacing={6}>
        <Grid size={5}>
          <StyledLeftSectionWithSelectable direction="column" spacing={4}>
            {/** Tags */}
            <UTagList
              tags={(opinion.categories ?? []).map((category) => (
                <Link href={category.link} key={category.id}>
                  <StyledCategory className="category-tag">
                    <UWidthLimitedText variant="caption" lineHeight={1}>
                      {category.label}
                    </UWidthLimitedText>
                  </StyledCategory>
                </Link>
              ))}
              containerProps={{
                gap: 1,
              }}
              moreButtonProps={{
                textProps: {
                  sx: {
                    color: theme.color.neutral[500],
                  },
                },
              }}
            />

            {/** Middle Section */}
            <StyledMiddleSection direction="column" spacing={2} flex={1}>
              <UHeightLimitedText maxLine={2} variant="h3" fontWeight={500}>
                {opinion.title}
              </UHeightLimitedText>
              <UHeightLimitedText maxLine={4} variant="body1">
                {opinion.description}
              </UHeightLimitedText>
            </StyledMiddleSection>

            {/** Learn More Button */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                maxWidth: 'max-content',
              }}
            >
              <Link href={opinion.link}>
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
            </Box>
          </StyledLeftSectionWithSelectable>
        </Grid>

        <Grid size={7}>
          {opinion.thumbnailImage && (
            <StyledImage
              src={opinion.thumbnailImage.src}
              alt={opinion.thumbnailImage.caption || opinion.title || ''}
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

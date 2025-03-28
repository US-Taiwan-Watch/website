'use client'

import { memo } from 'react'
import { Box, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Article, ArticleUtils } from '@/modules/Article/business/Article'
import withSelectable from '@/common/hooks/withSelectable'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UTagList from '@/common/components/atoms/UTagList'
import UWidthLimitedText from '@/common/components/atoms/UWidthLimitedText'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

const StyledCategory = styled(UButton)(({ theme }) => ({
  borderRadius: '5px',
  border: `1px solid ${theme.color.common.black}`,
  color: theme.color.common.black,
  padding: theme.spacing(1),
}))

const StyledImage = styled(Image)(({ theme }) => ({
  objectFit: 'cover',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '250px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '600px',
    height: '500px',
  },
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
interface ArticleLandingBannerCardProps {
  article: Article
}

const ArticleLandingBannerCard = function ArticleLandingBannerCard({
  article,
}: ArticleLandingBannerCardProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()

  return (
    <Box
      sx={{
        mx: 1,
        pb: {
          sm: 2,
        },
        borderRadius: '30px',
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={{
          xs: 0,
          sm: 8,
        }}
      >
        {/** Mobile Image */}
        {isMobile && article.bannerImage && (
          <StyledImage
            src={article.bannerImage.src}
            alt={article.title ?? ''}
            width={600}
            height={500}
          />
        )}
        <StyledLeftSectionWithSelectable direction="column" spacing={4}>
          {/** Tags */}
          <UTagList
            tags={(article.categories ?? []).map((category) => (
              <Link
                href={ArticleUtils.getCategoryLink(category)}
                key={category.id}
              >
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
              {article.title}
            </UHeightLimitedText>
            <UHeightLimitedText maxLine={4} variant="body1">
              {article.description}
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
            <Link href={ArticleUtils.getLink(article)}>
              <UButton
                variant="contained"
                color="info"
                rounded
                size={isMobile ? 'medium' : 'large'}
                endIcon={<ArrowForwardIcon />}
              >
                Learn More
              </UButton>
            </Link>
          </Box>
        </StyledLeftSectionWithSelectable>
        {/** Desktop Image */}
        {!isMobile && article.bannerImage && (
          <StyledImage
            src={article.bannerImage.src}
            alt={article.title ?? ''}
            width={600}
            height={500}
          />
        )}
      </Stack>
    </Box>
  )
}

export default memo(ArticleLandingBannerCard)

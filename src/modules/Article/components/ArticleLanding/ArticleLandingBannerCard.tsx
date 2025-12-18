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
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledTag = styled(UButton)(({ theme }) => ({
  borderRadius: '5px',
  border: `1px solid ${theme.color.article.tagText}`,
  color: theme.color.article.tagText,
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
    width: '50%',
    height: '350px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '600px',
  },
}))

const StyledLeftSection = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  height: '100%',
}))
const StyledLeftSectionWithSelectable = withSelectable(StyledLeftSection)

type ArticleLandingBannerCardProps = {
  article: Article
}

const ArticleLandingBannerCard = function ArticleLandingBannerCard({
  article,
}: ArticleLandingBannerCardProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('common')

  return (
    <Box
      height="100%"
      sx={{
        mx: 1,
        pb: {
          sm: 2,
        },
        borderRadius: '30px',
      }}
    >
      <Stack
        height="100%"
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        gap={{
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
        <StyledLeftSectionWithSelectable
          direction="column"
          gap={{
            xs: 0.75,
            sm: 2,
            lg: 5,
          }}
        >
          {/** Tags */}
          <UTagList
            tags={(article.categories ?? []).map((category) => (
              <Link
                href={ArticleUtils.getCategoryLink(article.type, category)}
                key={category.id}
              >
                <StyledTag className="category-tag">
                  <UWidthLimitedText variant="caption" lineHeight={1}>
                    {category.label}
                  </UWidthLimitedText>
                </StyledTag>
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
          <Stack
            direction="column"
            gap={{
              xs: 1,
              sm: 2,
            }}
            flex={1}
          >
            <UHeightLimitedText maxLine={2} variant="h3" fontWeight={500}>
              {article.title}
            </UHeightLimitedText>
            <UHeightLimitedText maxLine={4} variant="body1">
              {article.description}
            </UHeightLimitedText>
          </Stack>

          {/** Learn More Button */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'flex-end',
              maxWidth: 'max-content',
            }}
          >
            <Link href={ArticleUtils.getLink(article.type, article.id)}>
              <UButton
                variant="contained"
                color="info"
                rounded
                size={isMobile ? 'medium' : 'large'}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: theme.color.article.cardLearnMoreButtonText,
                  backgroundColor: theme.color.article.cardLearnMoreButton,
                }}
              >
                {t('cta.learnMore', { ns: 'common' })}
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

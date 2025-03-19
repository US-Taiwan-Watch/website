'use client'

import { ComponentProps, memo } from 'react'
import { Box, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import withSelectable from '@/common/hooks/withSelectable'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UTagList from '@/common/components/atoms/UTagList'
import UWidthLimitedText from '@/common/components/atoms/UWidthLimitedText'
import { Article, ArticleUtils } from '@/modules/Article/business/Article'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

const StyledIndexArticleCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '30px',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 2, 2, 4),
    margin: theme.spacing(0, 1),
  },
}))

const StyledTag = styled(Box)(({ theme }) => ({
  borderRadius: '5px',
  border: `1px solid ${theme.color.common.black}`,
  padding: '0px 9px',
  cursor: 'default',
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

const StyledContentSection = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(2),
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 0),
  },
}))

const UTagListWithSelectable = withSelectable<ComponentProps<typeof UTagList>>(
  UTagList,
  'containerProps.onMouseDown'
)
const UHeightLimitedTextWithSelectable =
  withSelectable<ComponentProps<typeof UHeightLimitedText>>(UHeightLimitedText)
const UButtonWithSelectable =
  withSelectable<ComponentProps<typeof UButton>>(UButton)

const StyledMiddleSection = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: `${theme.spacing(2)} !important`,
  },
}))

// TODO: 確認類型
interface IndexArticleCardProps {
  article: Article
}

const IndexArticleCard = memo(function IndexArticleCard({
  article,
}: IndexArticleCardProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()

  return (
    <StyledIndexArticleCardContainer>
      <Stack direction={isMobile ? 'column' : 'row'} spacing={isMobile ? 0 : 8}>
        {/** Mobile Image */}
        {isMobile && article.bannerImage && (
          <StyledImage
            src={article.bannerImage.src}
            alt={article.title ?? ''}
            width={600}
            height={500}
          />
        )}
        <StyledContentSection direction="column" spacing={4}>
          {/** Tags */}
          {article.categories && article.categories.length > 0 && (
            <UTagListWithSelectable
              tags={article.categories.map((category, index) => (
                <StyledTag key={index} className="category-tag">
                  <UWidthLimitedText variant="buttonXS">
                    {category.label}
                  </UWidthLimitedText>
                </StyledTag>
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
          )}

          {/** Middle Section */}
          <StyledMiddleSection direction="column" spacing={2} flex={1}>
            <UHeightLimitedTextWithSelectable
              maxLine={3}
              variant={isMobile ? 'subtitleL' : 'h3'}
              fontWeight={500}
            >
              {article.title}
            </UHeightLimitedTextWithSelectable>
            <UHeightLimitedTextWithSelectable
              maxLine={isMobile ? 3 : 5}
              variant={isMobile ? 'bodyS' : 'bodyM'}
            >
              {article.description}
            </UHeightLimitedTextWithSelectable>
          </StyledMiddleSection>

          {/** Learn More Button */}
          <Link
            href={ArticleUtils.getLink(article)}
            style={{ width: 'fit-content' }}
          >
            <UButtonWithSelectable
              variant="contained"
              color="info"
              rounded
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </UButtonWithSelectable>
          </Link>
        </StyledContentSection>
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
    </StyledIndexArticleCardContainer>
  )
})

export default IndexArticleCard

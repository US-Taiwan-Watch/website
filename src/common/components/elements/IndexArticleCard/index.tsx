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
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

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
    width: '50%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '600px',
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

// TODO: 確認類型
interface IndexArticleCardProps {
  article: Article
}

const IndexArticleCard = memo(function IndexArticleCard({
  article,
}: IndexArticleCardProps) {
  const { t } = useTranslationClient('common')
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()

  return (
    <Stack
      sx={{
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        mx: 1,
        p: {
          xs: 1.5,
          sm: 2,
        },
        pl: {
          sm: 4,
        },
        borderRadius: {
          xs: '15px',
          sm: '30px',
        },
      }}
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
      <StyledContentSection
        flex={1}
        direction="column"
        gap={{
          xs: 1.5,
          sm: 4,
        }}
        px={{
          xs: 1.5,
          sm: 0,
        }}
        pb={{
          xs: 1,
          sm: 0,
        }}
      >
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
        <Stack
          direction="column"
          gap={{
            xs: 1.5,
            sm: 2,
          }}
          flex={1}
          mb={{
            xs: 2,
            sm: 0,
          }}
        >
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
        </Stack>

        {/** Learn More Button */}
        <Link
          href={ArticleUtils.getLink(article)}
          style={{ width: 'fit-content' }}
        >
          <UButtonWithSelectable
            variant="contained"
            color="info"
            rounded
            size={'large'}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  width: { xs: 16, sm: 24 },
                  height: { xs: 16, sm: 24 },
                }}
              />
            }
          >
            {t('cta.learnMore', { ns: 'common' })}
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
  )
})

export default IndexArticleCard

import UButton from '@/common/components/atoms/UButton'
import UHashTag from '@/common/components/atoms/UHashTag'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UTagList from '@/common/components/atoms/UTagList'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Article, ArticleUtils } from '@/modules/Article/business/Article'
import { Skeleton, Stack, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

const StyledImage = styled(Image)(() => ({}))

interface ArticlePostCardProps {
  article: Article
  /** 是否呈現 Category */
  showCategory?: boolean
  /** 是否強制為 Card 模式 */
  forceCard?: boolean
}

const ArticlePostCard = ({
  article,
  showCategory = true,
  forceCard = false,
}: ArticlePostCardProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack
      spacing={2}
      direction={{
        xs: forceCard ? 'column' : 'row',
        sm: 'column',
      }}
      sx={{
        py: {
          xs: forceCard ? 0 : 1.5,
          sm: 0,
        },
        borderBottom: {
          xs: forceCard ? 'none' : `1px solid ${theme.color.neutral[200]}`,
          sm: 'none',
        },
      }}
    >
      <Link href={ArticleUtils.getLink(article)}>
        <Box
          sx={{
            aspectRatio: {
              xs: forceCard ? 3 / 2 : 9 / 8,
              sm: 3 / 2,
            },
            width: {
              xs: 'auto',
              sm: 'auto',
            },
            height: {
              xs: forceCard ? 'auto' : '100px',
              sm: 'auto',
            },
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          borderRadius={theme.shape.borderRadius}
        >
          {/** Image */}
          {article.thumbnailImage && (
            <StyledImage
              src={article.thumbnailImage.src}
              alt={article.thumbnailImage.caption || article.title || ''}
              width={300}
              height={200}
              layout="responsive"
              sx={{
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
              }}
            />
          )}
        </Box>
      </Link>
      <Stack
        gap={{
          xs: forceCard ? 1.25 : 0.75,
          sm: 1.25,
        }}
      >
        {/** Categories */}
        {showCategory &&
          article.categories &&
          article.categories.length > 0 && (
            <UTagList
              tags={article.categories.map((category) => (
                <Link
                  href={ArticleUtils.getCategoryLink(category)}
                  key={category.id}
                >
                  <UButton
                    variant="outlined"
                    size="small"
                    sx={{
                      padding: theme.spacing(0.5, 1),
                      minWidth: 'fit-content',
                      lineHeight: 1,
                      borderColor: theme.color.orange[900],
                      color: theme.color.orange[900],
                    }}
                    className="category-tag"
                  >
                    {category.label}
                  </UButton>
                </Link>
              ))}
              containerProps={{
                gap: 1,
              }}
              maxTags={2}
            />
          )}
        <Link href={ArticleUtils.getLink(article)}>
          {/** Title */}
          <UHeightLimitedText variant="subtitleM" fontWeight={700} maxLine={1}>
            {article.title}
          </UHeightLimitedText>
          {/** Description */}
          <UHeightLimitedText
            variant="bodyS"
            maxLine={4}
            sx={{
              display: {
                xs: forceCard ? '-webkit-box' : 'none',
                sm: '-webkit-box',
              },
              color: theme.color.grey[1500],
            }}
          >
            {article.description}
          </UHeightLimitedText>
        </Link>
        {/** Tags */}
        {article.tags && article.tags.length > 0 && (
          <UTagList
            tags={article.tags.map((tag) => (
              <UHashTag
                key={tag.label}
                value={tag.label}
                containerProps={{
                  sx: {
                    backgroundColor: 'transparent',
                    borderColor: theme.color.neutral[500],
                  },
                }}
              />
            ))}
            containerProps={{
              gap: 1,
            }}
            maxTags={2}
          />
        )}
      </Stack>
    </Stack>
  )
}

export default memo(ArticlePostCard)

export const ArticlePostCardSkeleton = ({
  forceCard = false,
}: {
  forceCard?: boolean
}) => {
  return (
    <Stack
      spacing={2}
      direction={{
        xs: forceCard ? 'column' : 'row',
        sm: 'column',
      }}
      width="100%"
    >
      {/** Image Skeleton */}
      <Skeleton
        variant="rounded"
        sx={{
          width: {
            xs: forceCard ? '100%' : 90,
            sm: '100%',
          },
          height: {
            xs: forceCard ? 200 : 100,
            sm: 200,
          },
        }}
      />
      <Stack
        gap={{
          xs: forceCard ? 1.25 : 0.75,
          sm: 1.25,
        }}
        flex={1}
      >
        {/** Categories Skeleton */}
        <UHStack gap={1}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              sx={{
                width: forceCard ? 24 : 36,
                height: 24,
              }}
            />
          ))}
        </UHStack>
        {/** Title Skeleton */}
        <Skeleton
          variant="rounded"
          sx={{
            height: 20,
          }}
        />
        {/** Description Skeleton */}
        <Skeleton
          variant="rounded"
          sx={{
            display: {
              xs: forceCard ? 'block' : 'none',
              sm: 'block',
            },
            height: 60,
          }}
        />
      </Stack>
    </Stack>
  )
}

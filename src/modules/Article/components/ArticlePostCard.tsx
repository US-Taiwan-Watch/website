import UButton from '@/common/components/atoms/UButton'
import UHashTag from '@/common/components/atoms/UHashTag'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UTagList from '@/common/components/atoms/UTagList'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Article, ArticleUtils } from '@/modules/Article/business/Article'
import { Skeleton, Stack, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

interface ArticlePostCardProps {
  article: Article
  /** 是否呈現 Category */
  showCategory?: boolean
}

const ArticlePostCard = ({
  article,
  showCategory = true,
}: ArticlePostCardProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <>
      <Stack spacing={2}>
        <Link href={ArticleUtils.getLink(article)}>
          <Box
            sx={{
              aspectRatio: 3 / 2,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            borderRadius={theme.shape.borderRadius}
          >
            {/** Image */}
            {article.thumbnailImage && (
              <Image
                src={article.thumbnailImage.src}
                alt={article.thumbnailImage.caption || article.title || ''}
                width={300}
                height={200}
                layout="responsive"
                style={{
                  objectFit: 'cover',
                  minWidth: '100%',
                  minHeight: '100%',
                }}
              />
            )}
          </Box>
        </Link>
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
    </>
  )
}

export default memo(ArticlePostCard)

export const ArticlePostCardSkeleton = () => {
  return (
    <Stack spacing={2}>
      {/** Image Skeleton */}
      <Skeleton
        variant="rounded"
        sx={{
          width: '100%',
          height: 200,
        }}
      />
      {/** Categories Skeleton */}
      <UHStack gap={1}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            sx={{
              width: 36,
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
          height: 60,
        }}
      />
    </Stack>
  )
}

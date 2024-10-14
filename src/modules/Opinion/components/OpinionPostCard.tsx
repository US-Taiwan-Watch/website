import UButton from '@/common/components/atoms/UButton'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { Skeleton, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

interface OpinionPostCardProps {
  opinion: Opinion
}

const OpinionPostCard = ({ opinion }: OpinionPostCardProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Link href={opinion.link}>
      <Stack spacing={2}>
        {/** Image */}
        {opinion.thumbnailImage && (
          <Image
            src={opinion.thumbnailImage.src}
            alt={opinion.thumbnailImage.caption || opinion.title || ''}
            width={300}
            height={200}
            layout="responsive"
            style={{
              borderRadius: theme.shape.borderRadius * 3,
            }}
          />
        )}
        {/** Categories */}
        <UHStack gap={1}>
          {opinion.categories?.map((category) => (
            <Link href={category.link} key={category.id}>
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
              >
                {category.label}
              </UButton>
            </Link>
          ))}
        </UHStack>
        {/** Title */}
        <UHeightLimitedText variant="subtitleM" fontWeight={700} maxLine={1}>
          {opinion.title}
        </UHeightLimitedText>
        {/** Description */}
        <UHeightLimitedText
          variant="bodyS"
          maxLine={4}
          sx={{
            color: theme.color.grey[1500],
          }}
        >
          {opinion.description}
        </UHeightLimitedText>
      </Stack>
    </Link>
  )
}

export default memo(OpinionPostCard)

export const OpinionPostCardSkeleton = () => {
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

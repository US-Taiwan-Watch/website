'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import OpinionPostCards, {
  OpinionPostCardsSkeleton,
} from '@/modules/Opinion/components/OpinionPostCards'
import useOpinionSearch from '@/modules/Opinion/hooks/useOpinionSearch'
import { Box, Skeleton, Stack, Typography, useTheme } from '@mui/material'
import { notFound } from 'next/navigation'

const OpinionSearchCategorySectionSkeleton = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={8} padding={theme.spacing(10, 0, 15, 0)}>
      {/** Title */}
      <Skeleton
        variant="rounded"
        sx={{
          height: 70,
          width: 200,
        }}
      />

      {/** Result */}
      <OpinionPostCardsSkeleton />
    </Stack>
  )
}

interface OpinionSearchCategorySectionProps {
  categoryId: string
}

const OpinionSearchCategorySection = ({
  categoryId,
}: OpinionSearchCategorySectionProps) => {
  const theme = useTheme<USTWTheme>()

  const { isOpinionsLoading, category, opinions } = useOpinionSearch(categoryId)

  // TODO: 顯示 loading
  if (isOpinionsLoading) {
    return <OpinionSearchCategorySectionSkeleton />
  }

  // 沒有結果，到 404
  if (!category) {
    notFound()
  }

  return (
    <Stack spacing={8} padding={theme.spacing(10, 0, 15, 0)}>
      {/** Title */}
      <UHStack spacing={2}>
        <Typography variant="h1" lineHeight={1}>
          {category.label}
        </Typography>
        <Box
          sx={{
            backgroundColor: theme.color.common.black,
            padding: theme.spacing(1, 2),
            borderRadius: '100px',
            height: '100%',
          }}
        >
          <Typography color="primary" variant="subtitleL">
            {opinions.length}
          </Typography>
        </Box>
      </UHStack>

      {/** Result */}
      <OpinionPostCards opinions={opinions} />
    </Stack>
  )
}

export default OpinionSearchCategorySection

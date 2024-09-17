import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'

interface OpinionPostCardProps {
  opinion: Opinion
}

const OpinionPostCard = ({ opinion }: OpinionPostCardProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={2}>
      {/** Image */}
      {opinion.image && (
        <Image
          src={opinion.image}
          alt={opinion.title ?? ''}
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
          <UButton
            key={category}
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
            {category}
          </UButton>
        ))}
      </UHStack>
      {/** Title */}
      <Typography
        variant="subtitleM"
        fontWeight={700}
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {opinion.title}
      </Typography>
      {/** Description */}
      <Typography
        variant="bodyS"
        sx={{
          color: theme.color.grey[1500],
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {opinion.description}
      </Typography>
    </Stack>
  )
}

export default memo(OpinionPostCard)

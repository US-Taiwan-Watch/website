'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import { Stack, Typography } from '@mui/material'

export default function PopularTags() {
  return (
    <Stack px={2} spacing={2}>
      <Typography variant="subtitleS">Popular Tags :</Typography>
      <UHStack spacing={1}>
        {Array.from({ length: 5 }).map((_, index) => (
          <UCategoryChip
            key={index}
            label="Health"
            active={index === 0}
            size="medium"
          />
        ))}
      </UHStack>
    </Stack>
  )
}

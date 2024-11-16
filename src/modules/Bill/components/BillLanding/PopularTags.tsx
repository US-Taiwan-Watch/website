'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import { ROUTES } from '@/routes'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function PopularTags() {
  return (
    <Stack px={2} spacing={2}>
      <Typography variant="subtitleS">Popular Tags :</Typography>
      <UHStack spacing={1}>
        {Array.from({ length: 5 }).map((_, index) => (
          // TODO: 確認 tag 要帶入的 query param
          <Link href={ROUTES.BILL_LIST} key={index}>
            <UCategoryChip label="Health" active={index === 0} size="medium" />
          </Link>
        ))}
      </UHStack>
    </Stack>
  )
}

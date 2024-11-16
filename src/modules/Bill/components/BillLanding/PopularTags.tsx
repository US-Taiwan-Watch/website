'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import { BILL_TAG_MOCK } from '@/modules/Bill/data'
import { ROUTES } from '@/routes'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function PopularTags() {
  return (
    <Stack px={2} spacing={2}>
      <Typography variant="subtitleS">Popular Tags :</Typography>
      <UHStack spacing={1}>
        {BILL_TAG_MOCK.map((tag, index) => (
          <Link
            href={{
              pathname: ROUTES.BILL_LIST,
              query: {
                tag,
              },
            }}
            key={index}
          >
            <UCategoryChip label={tag} active={index === 0} size="medium" />
          </Link>
        ))}
      </UHStack>
    </Stack>
  )
}

'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import { Language } from '@/common/lib/i18n/types'
import { getBillTopTags } from '@/modules/Bill/data'
import TagUtils from '@/modules/Common/Tag.utils'
import { ROUTES } from '@/routes'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function PopularTags() {
  const { lang } = useParams<{ lang: Language }>()
  const topTags = getBillTopTags()

  return (
    <Stack px={2} spacing={2}>
      <Typography variant="subtitleS">Popular Tags :</Typography>
      <UHStack spacing={1}>
        {TagUtils.parseTagNames(
          lang,
          topTags.map(({ tag }) => tag)
        ).map((tag, index) => (
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

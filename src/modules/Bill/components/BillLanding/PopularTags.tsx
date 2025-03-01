'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import { BillTopTagsQuery } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import TagUtils from '@/modules/Common/Tag.utils'
import { useQuery } from '@apollo/client'
import { ROUTES } from '@/routes'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { QUERY_BILL_TOP_TAGS } from '@/modules/Bill/graphql/gql'
import { isNull, isUndefined } from 'lodash-es'

const POPULAR_TAGS_COUNT = 10

export default function PopularTags() {
  const { lang } = useParams<{ lang: Language }>()
  const { data } = useQuery<BillTopTagsQuery>(QUERY_BILL_TOP_TAGS, {
    variables: {
      limit: POPULAR_TAGS_COUNT,
    },
  })
  const topTags =
    data?.BillTopTags?.filter(
      (tag) => !isNull(tag) && !isNull(tag.tag) && !isUndefined(tag.tag)
    ).map((tag) => ({
      billCount: tag!.billCount ?? 0,
      tag: TagUtils.parse(lang, tag!.tag!),
    })) ?? []

  return (
    <Stack px={2} spacing={2}>
      <Typography variant="subtitleS">Popular Tags :</Typography>
      <UHStack spacing={1}>
        {topTags.map(({ tag }, index) => (
          <Link
            href={{
              pathname: ROUTES.BILL_LIST,
              query: {
                tag: tag?.id ?? '',
              },
            }}
            key={index}
          >
            <UCategoryChip label={tag.name} size="medium" />
          </Link>
        ))}
      </UHStack>
    </Stack>
  )
}

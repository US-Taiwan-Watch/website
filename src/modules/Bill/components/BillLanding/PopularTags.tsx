import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import { ROUTES } from '@/routes'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'

/** 熱門標籤呈現數量 */
const POPULAR_TAGS_COUNT = 10

export default async function PopularTags() {
  const topTags = await ServerBillApi.getPopularTags({
    limit: POPULAR_TAGS_COUNT,
  })

  return (
    <Stack
      px={{
        xs: 0,
        sm: 2,
      }}
      spacing={{
        xs: 1,
        sm: 2,
      }}
    >
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

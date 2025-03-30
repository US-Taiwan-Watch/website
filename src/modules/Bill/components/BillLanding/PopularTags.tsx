import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import { ROUTES } from '@/routes'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Language } from '@/common/lib/i18n/types'

/** 熱門標籤呈現數量 */
const POPULAR_TAGS_COUNT = 10

type PopularTagsProps = {
  lang: Language
}

export default async function PopularTags({ lang }: PopularTagsProps) {
  const { t } = await getTranslationServer(lang, 'bill')
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
      <Typography variant="subtitleS">
        {t('landing.popularTags.title', { ns: 'bill' })}:
      </Typography>
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

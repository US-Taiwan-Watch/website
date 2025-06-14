import { BillUtils } from '@/modules/Bill/business/Bill'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import {
  SearchResult,
  SearchResultType,
} from '@/modules/Search/business/SearchResult'
import { Stack, Typography } from '@mui/material'
import { memo } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import UTagList from '@/common/components/atoms/UTagList'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'

type BillSectionProps = {
  result: Extract<SearchResult, { type: SearchResultType.Bill }>
}

const BillSection = ({ result }: BillSectionProps) => {
  const { t } = useTranslationClient('bill')

  return (
    <Stack
      gap={{
        xs: 0.75,
        lg: 1.5,
      }}
    >
      <Typography variant="body" fontWeight={300} mb={1}>
        {t('card.subtitle', {
          ns: 'bill',
          prefix: BillUtils.getChamberPrefix(result.value),
          billNo: result.value.number ?? '',
          congressNo: result.value.congressNumber,
        })}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: '0.875rem',
            lg: '1.5rem',
          },
          fontWeight: 600,
          color: 'grey.3100',
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: result.highlights.title,
          }}
        />
      </Typography>
      <Stack
        sx={{
          gap: {
            xs: 0.5,
            lg: 1.5,
          },
        }}
        direction={{
          xs: 'column',
          lg: 'row',
        }}
      >
        <UHStack px={1} gap={1.5} alignItems="center">
          {result.value.sponsor?.party && (
            <UPoliticalPartyIcon
              party={result.value.sponsor.party}
              size="small"
            />
          )}
          <Typography variant="subtitleS" fontWeight={700}>
            {result.value.sponsor?.name}
          </Typography>
        </UHStack>
        <UTagList
          tags={(result.value.categories ?? []).map((category, index) => (
            <UCategoryTag key={index} value={category} />
          ))}
        />
      </Stack>
    </Stack>
  )
}

export default memo(BillSection)

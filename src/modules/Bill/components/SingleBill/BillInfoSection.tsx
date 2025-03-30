'use client'

import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import UHashTag from '@/common/components/atoms/UHashTag'
import UHStack from '@/common/components/atoms/UHStack'
import { styled } from '@/common/lib/mui/theme'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import { Stack, Typography } from '@mui/material'
import { memo } from 'react'
import TitleVersion from '@/modules/Bill/components/SingleBill/TitleVersion'
import { CongressUtils } from '@/common/business/Congress'
import SubscribeButton from '@/modules/Bill/components/SingleBill/SubscribeButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledInfoContainer = styled(Stack)(() => ({
  flex: 1,
}))

interface BillInfoSectionProps {
  bill: Bill
}

const BillInfoSection = memo(function BillInfoSection({
  bill,
}: BillInfoSectionProps) {
  const { t } = useTranslationClient('bill')

  return (
    <UHStack spacing={2} alignItems="flex-start">
      {/** Info */}
      <StyledInfoContainer
        spacing={{
          xs: 1,
          sm: 2,
        }}
      >
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={{
            xs: 1,
            sm: 2,
          }}
          alignItems={{
            xs: 'flex-start',
            sm: 'center',
          }}
        >
          {bill.categories?.[0] && (
            <UCategoryTag
              value={bill.categories[0]}
              containerProps={{
                borderRadius: '6px',
                sx: {
                  py: 0.5,
                  px: 1,
                },
              }}
            />
          )}
          <Typography variant="body" fontWeight={300} mb={1}>
            {t('page.subtitle', {
              ns: 'bill',
              prefix: BillUtils.getChamberPrefix(bill),
              billNo: bill.number ?? '',
              congressNo: bill.congressNumber,
            })}
            {bill.congressNumber &&
              (() => {
                const [startYear, endYear] =
                  CongressUtils.getCongressYearsByCongressNumber(
                    bill.congressNumber
                  )
                return ` (${startYear}-${endYear})`
              })()}
          </Typography>
        </Stack>
        <Typography variant="articleH1">{bill.title}</Typography>
        {bill.tags?.length > 0 && (
          <Stack direction="row" gap={1} flexWrap="wrap">
            {bill.tags?.map((tag) => (
              <UHashTag key={tag.id} value={tag.name} />
            ))}
          </Stack>
        )}
      </StyledInfoContainer>

      {/** Actions */}
      <UHStack spacing={2}>
        <TitleVersion bill={bill} />
        <SubscribeButton bill={bill} />
      </UHStack>
    </UHStack>
  )
})

export default BillInfoSection

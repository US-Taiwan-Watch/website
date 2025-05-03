'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UTimeline from '@/common/components/atoms/UTimeline'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import { Stack, Typography, useTheme } from '@mui/material'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import UCardInfo from '@/common/components/atoms/UCardInfo'
import Link from 'next/link'
import UTagList from '@/common/components/atoms/UTagList'
import withSelectable from '@/common/hooks/withSelectable'
import { type ComponentProps } from 'react'
import { CongressUtils } from '@/common/business/Congress'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import BillTag from '@/modules/Bill/components/BillTag'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const UTagListWithSelectable = withSelectable<ComponentProps<typeof UTagList>>(
  UTagList,
  'containerProps.onMouseDown'
)

const TypographyWithSelectable =
  withSelectable<ComponentProps<typeof Typography>>(Typography)

const UHeightLimitedTextWithSelectable =
  withSelectable<ComponentProps<typeof UHeightLimitedText>>(UHeightLimitedText)

const StackWithSelectable = withSelectable<ComponentProps<typeof Stack>>(Stack)

type Props = {
  bill: Bill
}

export default function LeftSection({ bill }: Props) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('bill')

  return (
    <Stack justifyContent="space-between" height="100%">
      <Stack>
        <UTagListWithSelectable
          tags={(bill.categories ?? []).map((category, index) => (
            <UCategoryTag key={index} value={category} />
          ))}
          containerProps={{
            gap: 0.5,
            mb: 2,
          }}
          maxTags={4}
        />

        <TypographyWithSelectable
          variant="buttonXS"
          sx={{ color: theme.color.grey[2400] }}
          mb={1}
        >
          {`${BillUtils.getChamberPrefix(bill)}${bill.number ?? ''} | ${bill.congressNumber}th Congress`}
          {bill.congressNumber &&
            (() => {
              const [startYear, endYear] =
                CongressUtils.getCongressYearsByCongressNumber(
                  bill.congressNumber
                )
              return ` (${startYear}-${endYear})`
            })()}
        </TypographyWithSelectable>

        <Link href={BillUtils.getLink(bill.id)}>
          <UHeightLimitedTextWithSelectable
            maxLine={4}
            variant="h6"
            fontWeight={700}
          >
            {bill.title}
          </UHeightLimitedTextWithSelectable>
        </Link>
      </Stack>

      {/** Tags (Only Mobile) */}
      {isMobile && (
        <UTagList
          tags={bill.tags.map((tag) => (
            <BillTag key={tag.id} value={tag.name} />
          ))}
          containerProps={{
            gap: 2,
          }}
          maxTags={2}
        />
      )}

      <StackWithSelectable gap={2}>
        <UHStack spacing={0.5} alignItems="center">
          <Typography variant="body">
            {t('card.tracker.title', { ns: 'bill' })}:
          </Typography>
          <Typography variant="articleH4">
            {t(
              `status.${bill.statusTracker?.currentStatus ?? BillStatusEnum.INTRODUCED}.label`,
              {
                ns: 'bill',
              }
            )}
          </Typography>
          <UCardInfo
            content={t(
              `status.${BillUtils.getAllBillStatuses(bill)[BillUtils.getStatusIndex(bill)]}.label`,
              {
                ns: 'bill',
              }
            )}
          />
        </UHStack>
        <UTimeline
          data={BillUtils.getAllBillStatuses(bill).map((status) => ({
            title: t(`status.${status}.label`, {
              ns: 'bill',
            }),
          }))}
          activeIndex={BillUtils.getStatusIndex(bill)}
          isHorizontal
        />
      </StackWithSelectable>
    </Stack>
  )
}

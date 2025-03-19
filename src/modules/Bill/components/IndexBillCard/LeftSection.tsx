'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UTimeline from '@/common/components/atoms/UTimeline'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import { Box, Stack, Typography, useTheme } from '@mui/material'
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

        <Link href={BillUtils.getLink(bill)}>
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
          <Typography variant="body">Tracker:</Typography>
          <Typography variant="articleH4">
            {BillUtils.getBillStatusText(
              bill.statusTracker?.currentStatus ?? BillStatusEnum.INTRODUCED
            )}
          </Typography>
          <UCardInfo
            content={BillUtils.getBillStatusText(
              BillUtils.getAllBillStatuses(bill)[BillUtils.getStatusIndex(bill)]
            )}
          />
        </UHStack>
        <Box mx={isMobile ? -3 : -6}>
          <UTimeline
            data={BillUtils.getAllBillStatuses(bill).map((status) => ({
              title: BillUtils.getBillStatusText(status),
            }))}
            activeIndex={BillUtils.getStatusIndex(bill)}
            isHorizontal
          />
        </Box>
      </StackWithSelectable>
    </Stack>
  )
}

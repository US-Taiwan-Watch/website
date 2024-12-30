'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UTimeline from '@/common/components/atoms/UTimeline'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import UCardInfo from '@/common/components/atoms/UCardInfo'
import Link from 'next/link'
import UTagList from '@/common/components/atoms/UTagList'
import withSelectable from '@/common/hooks/withSelectable'
import { useMemo, type ComponentProps } from 'react'
import { Congress } from '@/common/classes/Congress'

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
  const theme = useTheme<USTWTheme>()
  const currentCongressNumber = useMemo(
    () => Congress.getCurrentCongressNumber(),
    []
  )

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
          {`${bill.chamberPrefix} | ${currentCongressNumber}th Congress`}
        </TypographyWithSelectable>

        <Link href={bill.link}>
          <UHeightLimitedTextWithSelectable
            maxLine={4}
            variant="h6"
            fontWeight={700}
          >
            {bill.title}
          </UHeightLimitedTextWithSelectable>
        </Link>
      </Stack>

      <StackWithSelectable gap={2}>
        <UHStack spacing={0.5} alignItems="center">
          <Typography variant="body">Tracker:</Typography>
          <Typography variant="articleH4">
            {Bill.GetBillStatusText(
              bill.statusTracker?.currentStatus ?? BillStatusEnum.INTRODUCED
            )}
          </Typography>
          <UCardInfo
            content={Bill.GetBillStatusText(
              Bill.getAllBillStatuses(bill)[Bill.getStatusIndex(bill)]
            )}
          />
        </UHStack>
        <Box mx={-6}>
          <UTimeline
            data={Bill.getAllBillStatuses(bill).map((status) => ({
              title: Bill.GetBillStatusText(status),
            }))}
            activeIndex={Bill.getStatusIndex(bill)}
            isHorizontal
          />
        </Box>
      </StackWithSelectable>
    </Stack>
  )
}

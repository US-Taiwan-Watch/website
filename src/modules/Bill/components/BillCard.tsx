'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import UTimeline from '@/common/components/atoms/UTimeline'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import {
  Box,
  Divider,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import UCardInfo from '@/common/components/atoms/UCardInfo'
import Link from 'next/link'
import UTagList from '@/common/components/atoms/UTagList'

const DATE_FORMAT = 'MM/DD/YYYY-H:mmA'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3, 3.5),
  borderRadius: '10px',
  backgroundColor: theme.color.common.white,
}))

const StyledTimelineContainer = styled(UHStack)(({ theme }) => ({
  padding: theme.spacing(2.5, 2, 2.5, 3),
  backgroundColor: theme.color.grey[100],
  borderRadius: '15px',
  minWidth: 275,
  width: 275,
  height: 'max-content',
  gap: theme.spacing(1),
}))

type Props = {
  bill: Bill
  mode: 'horizontal' | 'vertical'
  simplified?: boolean
}

export default function BillCard({ mode, simplified, bill }: Props) {
  const theme = useTheme<USTWTheme>()

  const isHorizontal = useMemo(() => mode === 'horizontal', [mode])
  const latestAction = BillUtils.getLatestAction(bill)

  return (
    <StyledCardContainer
      width={isHorizontal ? '100%' : 'auto'}
      height={isHorizontal || simplified ? 'auto' : 500}
      sx={{
        border: isHorizontal ? 'none' : `1px solid ${theme.color.grey[1600]}`,
      }}
    >
      <UHStack gap={4} alignItems="start" justifyContent="space-between">
        <Stack flexGrow={1}>
          <UTagList
            tags={(bill.categories ?? []).map((category, index) => (
              <UCategoryTag key={index} value={category} />
            ))}
            containerProps={{
              gap: '6px',
              mb: 2.5,
            }}
            maxTags={isHorizontal ? 5 : 2}
          />

          <Typography variant="body" fontWeight={300} mb={1}>
            {`${BillUtils.getChamberPrefix(bill)}${bill.number ?? ''} | ${bill.congressNumber}th Congress`}
          </Typography>

          <Link href={BillUtils.getLink(bill)}>
            <UHeightLimitedText
              maxLine={4}
              variant="subtitleL"
              fontWeight={700}
              minHeight={132} // NOTE: 讓不同卡片的元件對齊
            >
              {bill.title}
            </UHeightLimitedText>
          </Link>

          {!isHorizontal && (
            <Box mx={-2} mt={4}>
              <UTimeline
                data={BillUtils.getAllBillStatuses(bill).map((status) => ({
                  title: BillUtils.getBillStatusText(status),
                }))}
                activeIndex={BillUtils.getStatusIndex(bill)}
                isHorizontal
                variant="secondary"
              />
            </Box>
          )}

          {!isHorizontal && <Divider sx={{ mt: 3 }} />}

          <UHStack px={1} gap={1.5} alignItems="center" mt={2}>
            {bill.sponsor?.party && (
              <UPoliticalPartyIcon party={bill.sponsor.party} size="small" />
            )}
            <Typography variant="subtitleS" fontWeight={700}>
              {bill.sponsor?.name}
            </Typography>
          </UHStack>

          {!simplified && (
            <>
              <Divider sx={{ my: 2 }} />

              <Stack gap={1.5}>
                <Typography
                  variant="buttonS"
                  {...(isHorizontal && { color: theme.color.grey[400] })}
                >
                  {latestAction.date && dayjs(latestAction.date).isValid()
                    ? dayjs(latestAction.date).format(DATE_FORMAT)
                    : ''}
                </Typography>
                <UHeightLimitedText maxLine={2} variant="body" fontWeight={300}>
                  {latestAction.description}
                </UHeightLimitedText>
              </Stack>
            </>
          )}
        </Stack>

        {isHorizontal && (
          <StyledTimelineContainer>
            <UTimeline
              itemMinHeight={50}
              data={BillUtils.getAllBillStatuses(bill).map((status) => ({
                title: BillUtils.getBillStatusText(status),
              }))}
              activeIndex={BillUtils.getStatusIndex(bill)}
              variant="secondary"
            />
            <Box>
              <UCardInfo
                content={BillUtils.getBillStatusText(
                  BillUtils.getAllBillStatuses(bill)[
                    BillUtils.getStatusIndex(bill)
                  ]
                )}
                iconProps={{
                  sx: { color: theme.color.neutral[300] },
                }}
              />
            </Box>
          </StyledTimelineContainer>
        )}
      </UHStack>
    </StyledCardContainer>
  )
}

export const BillCardSkeleton = ({
  mode,
}: {
  mode: 'horizontal' | 'vertical'
}) => {
  const isHorizontal = useMemo(() => mode === 'horizontal', [mode])

  return (
    <StyledCardContainer>
      <UHStack gap={4} alignItems="start">
        <Stack flexGrow={1} gap={2} height={150}>
          <Skeleton variant="rounded" height={24} width={'100%'} />
          <Skeleton
            variant="rounded"
            sx={{
              flex: 1,
            }}
            width={'100%'}
          />
          <Skeleton variant="rounded" height={24} width={'100%'} />
        </Stack>
        {isHorizontal && (
          <Skeleton variant="rounded" height={150} width={'30%'} />
        )}
      </UHStack>
    </StyledCardContainer>
  )
}

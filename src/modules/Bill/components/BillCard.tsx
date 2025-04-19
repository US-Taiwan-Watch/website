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
import { useEffect, useState, useMemo } from 'react'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import UCardInfo from '@/common/components/atoms/UCardInfo'
import Link from 'next/link'
import UTagList from '@/common/components/atoms/UTagList'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { DateUtils } from '@/modules/Common/business/Date'

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

export type BillCardProps = {
  bill: Bill
  mode: 'horizontal' | 'vertical'
  /**
   * 顯示的項目
   */
  visibilities?: {
    /**
     * 法案狀態文字
     * @default true
     */
    trackerStatus?: boolean
    /**
     * 最新動作日期與描述
     * @default true
     */
    latestActionDescription?: boolean
  }
}

export default function BillCard({ mode, bill, visibilities }: BillCardProps) {
  const { t } = useTranslationClient('bill')
  const {
    trackerStatus: showTrackerStatus = true,
    latestActionDescription: showLatestActionDescription = true,
  } = visibilities ?? {}

  const theme = useTheme<USTWTheme>()

  const isHorizontal = useMemo(() => mode === 'horizontal', [mode])
  const latestAction = BillUtils.getLatestAction(bill)
  const [latestActionDate, setLatestActionDate] = useState('')
  useEffect(() => {
    if (latestAction.date) {
      setLatestActionDate(DateUtils.formatDc(latestAction.date, DATE_FORMAT))
    }
  }, [latestAction])

  return (
    <StyledCardContainer
      height="100%"
      width={isHorizontal ? '100%' : 'auto'}
      minHeight={isHorizontal ? 'auto' : 400}
      sx={{
        border: isHorizontal ? 'none' : `1px solid ${theme.color.grey[1600]}`,
      }}
    >
      <UHStack
        flex={1}
        gap={4}
        alignItems="stretch"
        justifyContent="space-between"
      >
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
            {t('card.subtitle', {
              ns: 'bill',
              prefix: BillUtils.getChamberPrefix(bill),
              billNo: bill.number ?? '',
              congressNo: bill.congressNumber,
            })}
          </Typography>

          <Box flex={1}>
            <Link href={BillUtils.getLink(bill)}>
              <UHeightLimitedText maxLine={4} variant="articleH3">
                {bill.title}
              </UHeightLimitedText>
            </Link>
          </Box>

          {/** Timeline */}
          {!isHorizontal && (
            <>
              {showTrackerStatus && (
                <UHStack spacing={0.5} alignItems="center">
                  <Typography variant="body">
                    {t('card.tracker.title', {
                      ns: 'bill',
                    })}
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
                      `status.${
                        BillUtils.getAllBillStatuses(bill)[
                          BillUtils.getStatusIndex(bill)
                        ]
                      }.label`,
                      {
                        ns: 'bill',
                      }
                    )}
                  />
                </UHStack>
              )}
              <Box
                mt={{
                  xs: 2,
                  md: 4,
                }}
              >
                <UTimeline
                  data={BillUtils.getAllBillStatuses(bill).map((status) => ({
                    title: t(`status.${status}.label`, {
                      ns: 'bill',
                    }),
                  }))}
                  activeIndex={BillUtils.getStatusIndex(bill)}
                  isHorizontal
                  variant="secondary"
                />
              </Box>
            </>
          )}

          {/** Sponsor */}
          <>
            <Divider
              sx={{
                mt: 3,
                mb: 2,
              }}
            />
            <UHStack px={1} gap={1.5} alignItems="center">
              {bill.sponsor?.party && (
                <UPoliticalPartyIcon party={bill.sponsor.party} size="small" />
              )}
              <Typography variant="subtitleS" fontWeight={700}>
                {bill.sponsor?.name}
              </Typography>
            </UHStack>
          </>

          {/** Latest Action & Description */}
          {showLatestActionDescription && (
            <>
              <Divider sx={{ my: 2 }} />
              <Stack gap={1.5}>
                <Typography
                  variant="buttonS"
                  {...(isHorizontal && { color: theme.color.grey[400] })}
                >
                  {latestActionDate}
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
                title: t(`status.${status}.label`, {
                  ns: 'bill',
                }),
              }))}
              activeIndex={BillUtils.getStatusIndex(bill)}
              variant="secondary"
            />
            <Box>
              <UCardInfo
                content={t(
                  `status.${
                    BillUtils.getAllBillStatuses(bill)[
                      BillUtils.getStatusIndex(bill)
                    ]
                  }.label`,
                  {
                    ns: 'bill',
                  }
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
        <Stack
          flexGrow={1}
          gap={2}
          height={{
            xs: 300,
            sm: 150,
          }}
        >
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

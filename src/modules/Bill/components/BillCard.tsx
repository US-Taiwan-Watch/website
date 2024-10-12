'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import UTimeline from '@/common/components/atoms/UTimeline'
import { Party } from '@/common/enums/Party'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import { CONGRESS_CURRENT_SESSION_MOCK } from '@/modules/Bill/data'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { billStatusList } from '@/modules/Bill/constants'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import { useRouter } from 'next/navigation'
import UCardInfo from '@/common/components/atoms/UCardInfo'

const DATE_FORMAT = 'MM/DD/YYYY-hh:mmA'

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
  const router = useRouter()

  const isHorizontal = useMemo(() => mode === 'horizontal', [mode])

  return (
    <StyledCardContainer
      height={isHorizontal || simplified ? 'auto' : 500}
      sx={{
        border: isHorizontal ? 'none' : `1px solid ${theme.color.grey[1600]}`,
        cursor: 'pointer',
      }}
      onClick={() => {
        router.push(bill.link)
      }}
    >
      <UHStack gap={4} alignItems="center">
        <Stack>
          <UHStack gap="6px" mb={2.5}>
            {/* NOTE: 限制 tags 數量 */}
            {bill.tags
              ?.slice(0, isHorizontal ? 5 : 3)
              .map((tag, index) => <UCategoryTag key={index} value={tag} />)}
          </UHStack>

          <Typography variant="body" fontWeight={300} mb={1}>
            {`${bill.chamberPrefix} | ${CONGRESS_CURRENT_SESSION_MOCK}th Congress`}
          </Typography>

          <UHeightLimitedText maxLine={4} variant="subtitleL" fontWeight={700}>
            {bill.title}
          </UHeightLimitedText>

          {!isHorizontal && (
            <Box mx={-2} mt={4}>
              <UTimeline
                data={billStatusList}
                activeIndex={bill.statusIndex}
                isHorizontal
              />
            </Box>
          )}

          {!isHorizontal && <Divider sx={{ mt: 3 }} />}

          <UHStack px={1} gap={1.5} alignItems="center" mt={2}>
            <UPoliticalPartyIcon
              variant="rounded"
              party={
                bill.sponsor?.party === Party.REPUBLICAN
                  ? 'republic'
                  : bill.sponsor?.party === Party.DEMOCRATIC
                    ? 'democracy'
                    : 'other'
              }
              size="small"
            />
            <Typography variant="subtitleS" fontWeight={700}>
              {bill.sponsor?.name}
            </Typography>
          </UHStack>

          {!simplified && (
            <>
              <Divider sx={{ my: 2 }} />

              <Stack gap={1.5}>
                <UHStack
                  justifyContent={isHorizontal ? 'flex-start' : 'space-between'}
                  alignItems="center"
                  {...(isHorizontal && { gap: 3 })}
                >
                  <UCategoryTag
                    value={bill.latestAction?.chamber}
                    containerProps={{
                      sx: {
                        backgroundColor: `${theme.color.purple[100]}80`, // 50% opacity
                      },
                    }}
                    textProps={{
                      variant: 'buttonS',
                    }}
                  />
                  <Typography
                    variant="buttonS"
                    {...(isHorizontal && { color: theme.color.grey[400] })}
                  >
                    {dayjs(bill.latestAction?.date).isValid()
                      ? dayjs(bill.latestAction?.date).format(DATE_FORMAT)
                      : ''}
                  </Typography>
                </UHStack>
                <UHeightLimitedText maxLine={3} variant="body" fontWeight={300}>
                  {bill.latestAction?.description}
                </UHeightLimitedText>
              </Stack>
            </>
          )}
        </Stack>

        {isHorizontal && (
          <StyledTimelineContainer>
            <UTimeline
              itemMinHeight={50}
              data={billStatusList}
              activeIndex={bill.statusIndex}
            />
            <Box>
              <UCardInfo
                content={billStatusList[bill.statusIndex].title}
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

'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import UTimeline from '@/common/components/atoms/UTimeline'
import { Party } from '@/common/enums/Party'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import { CONGRESS_CURRENT_SESSION_MOCK } from '@/modules/Bill/data'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { billStatusList } from '@/modules/Bill/constants'

const DATE_FORMAT = 'MM/DD/YYYY-hh:mmA'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3, 3.5),
  borderRadius: '10px',
  backgroundColor: theme.color.common.white,
}))

const StyledTagContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  borderRadius: '5px',
  backgroundColor: theme.color.indigo[50],
  marginBottom: theme.spacing(2.5),
}))

const StyledTimelineContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 3),
  backgroundColor: theme.color.grey[100],
  borderRadius: '15px',
  minWidth: 275,
  height: 'max-content',
}))

type Props = {
  bill: Bill
  mode: 'horizontal' | 'vertical'
  simplified?: boolean
}

export default function BillCard({ mode, simplified, bill }: Props) {
  const theme = useTheme<USTWTheme>()

  const isHorizontal = useMemo(() => mode === 'horizontal', [mode])

  const statusIndex = useMemo(() => {
    return Object.values(BillStatusEnum).findIndex((key) => key === bill.status)
  }, [bill.status])

  return (
    <StyledCardContainer
      height={isHorizontal || simplified ? 'auto' : 500}
      sx={{
        border: isHorizontal ? 'none' : `1px solid ${theme.color.grey[1600]}`,
      }}
    >
      <UHStack gap={4} alignItems="center">
        <Stack>
          <UHStack gap="6px">
            {/* NOTE: 限制 tags 數量 */}
            {bill.tags?.slice(0, isHorizontal ? 5 : 3).map((tag, index) => (
              <StyledTagContainer key={index}>
                <Typography variant="buttonXS">{tag}</Typography>
              </StyledTagContainer>
            ))}
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
                activeIndex={statusIndex}
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
                  <StyledTagContainer
                    sx={{
                      backgroundColor: `${theme.color.purple[100]}80`, // 50% opacity
                      marginBottom: 0,
                    }}
                  >
                    <Typography variant="buttonS">
                      {bill.latestAction?.chamber}
                    </Typography>
                  </StyledTagContainer>
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
              activeIndex={statusIndex}
            />
          </StyledTimelineContainer>
        )}
      </UHStack>
    </StyledCardContainer>
  )
}

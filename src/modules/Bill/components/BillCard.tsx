'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import UTimeline from '@/common/components/atoms/UTimeline'
import { Party } from '@/common/enums/Party'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import {
  BILL_TIMELINE_DATA_MOCK,
  CONGRESS_CURRENT_SESSION_MOCK,
} from '@/modules/Bill/data'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import dayjs from 'dayjs'
import { useMemo } from 'react'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3, 3.5),
  borderRadius: '10px',
  backgroundColor: theme.color.common.white,
  border: `1px solid ${theme.color.grey[1600]}`,
}))

const StyledTagContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  borderRadius: '5px',
  backgroundColor: theme.color.indigo[50],
  marginBottom: theme.spacing(2.5),
}))

type Props = {
  bill: Bill
  mode: 'horizontal' | 'vertical'
  simplified?: boolean
}

export default function BillCard({ mode, simplified, bill }: Props) {
  const theme = useTheme<USTWTheme>()

  const chamberPrefix = useMemo(() => {
    return bill.latestAction?.chamber === ChamberEnum.HOUSE
      ? 'H.R.'
      : bill.latestAction?.chamber === ChamberEnum.SENATE
        ? 'S.'
        : ''
  }, [bill.latestAction?.chamber])

  const statusIndex = useMemo(() => {
    return Object.values(BillStatusEnum).findIndex((key) => key === bill.status)
  }, [bill.status])

  if (mode === 'horizontal') {
    return null
  }

  return (
    <StyledCardContainer height={simplified ? 'auto' : 500}>
      <UHStack gap="6px">
        {/* NOTE: 只顯示三個 tags */}
        {bill.tags?.slice(0, 3).map((tag, index) => (
          <StyledTagContainer key={index}>
            <Typography variant="buttonXS">{tag}</Typography>
          </StyledTagContainer>
        ))}
      </UHStack>

      <Typography variant="body" fontWeight={300} mb={1}>
        {`${chamberPrefix} | ${CONGRESS_CURRENT_SESSION_MOCK}th Congress`}
      </Typography>

      <UHeightLimitedText maxLine={4} variant="subtitleL" fontWeight={700}>
        {bill.title}
      </UHeightLimitedText>

      <Box mx={-2} mt={4}>
        <UTimeline
          data={BILL_TIMELINE_DATA_MOCK}
          activeIndex={statusIndex}
          isHorizontal
        />
      </Box>

      <Divider sx={{ mt: 3, mb: 2 }} />

      <UHStack px={1} gap={1.5} alignItems="center">
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
            <UHStack justifyContent="space-between" alignItems="center">
              <StyledTagContainer
                sx={{
                  backgroundColor: `${theme.color.purple[100]}80`, // 80% opacity
                  marginBottom: 0,
                }}
              >
                <Typography variant="buttonS">
                  {bill.latestAction?.chamber === ChamberEnum.HOUSE
                    ? ChamberEnum.HOUSE
                    : ChamberEnum.SENATE}
                </Typography>
              </StyledTagContainer>
              <Typography variant="buttonS">
                {dayjs(bill.latestAction?.date).isValid()
                  ? dayjs(bill.latestAction?.date).format('MM/DD/YYYY-hh:mmA')
                  : ''}
              </Typography>
            </UHStack>
            <UHeightLimitedText maxLine={3} variant="body" fontWeight={300}>
              {bill.latestAction?.description}
            </UHeightLimitedText>
          </Stack>
        </>
      )}
    </StyledCardContainer>
  )
}

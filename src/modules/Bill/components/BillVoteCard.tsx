'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import { CONGRESS_CURRENT_SESSION_MOCK } from '@/modules/Bill/data'
import { Stack, Typography, useTheme } from '@mui/material'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import Link from 'next/link'

interface VoteStatusCardProps {
  title: string
  value: string
  active: boolean
}

const VoteStatusCard = function ({
  title,
  value,
  active,
}: VoteStatusCardProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack
      sx={{
        backgroundColor: active
          ? theme.color.neutral[200]
          : theme.color.grey[100],
        padding: theme.spacing(1.5, 4),
        aspectRatio: '1/1',
        color: theme.color.grey[2100],
        borderRadius: '10px',
      }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography
        variant="bodyS"
        fontWeight={600}
        fontSize={12}
        textTransform={'capitalize'}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitleL"
        fontWeight={600}
        textTransform={'capitalize'}
      >
        {value}
      </Typography>
    </Stack>
  )
}

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3, 3.5),
  borderRadius: '10px',
  backgroundColor: theme.color.common.white,
}))

type Props = {
  bill: Bill
  vote: 'yea' | 'nay' | 'not_voting'
  status: 'passed' | 'failed' | 'unknown'
}

export default function BillVoteCard({ bill, vote, status }: Props) {
  return (
    <StyledCardContainer height="auto">
      <UHStack gap={4} alignItems="stretch">
        <Stack>
          <UHStack gap="6px" mb={2.5}>
            {/* NOTE: 限制 tags 數量 */}
            {bill.tags
              ?.slice(0, 5)
              .map((tag, index) => <UCategoryTag key={index} value={tag} />)}
          </UHStack>

          <Typography variant="body" fontWeight={300} mb={1}>
            {`${bill.chamberPrefix} | ${CONGRESS_CURRENT_SESSION_MOCK}th Congress`}
          </Typography>

          <Link href={bill.link}>
            <UHeightLimitedText
              maxLine={4}
              variant="subtitleL"
              fontWeight={700}
            >
              {bill.title}
            </UHeightLimitedText>
          </Link>
        </Stack>

        <UHStack gap={1} sx={{ minWidth: '300px' }}>
          <VoteStatusCard title="Vote" value={vote} active={vote === 'yea'} />
          <VoteStatusCard
            title="Status"
            value={status}
            active={status === 'passed'}
          />
        </UHStack>
      </UHStack>
    </StyledCardContainer>
  )
}

'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { CURRENT_CONGRESS_NUMBER } from '@/common/assets/constants'
import { Stack, Typography, useTheme } from '@mui/material'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import Link from 'next/link'
import UTagList from '@/common/components/atoms/UTagList'
import { People } from '@/modules/People/classes/People'

interface VoteStatusCardProps {
  vote: NonNullable<People['votes']>[number]
  active: boolean
}

const VoteStatusCard = function ({ vote, active }: VoteStatusCardProps) {
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
        {/** TODO: i18n */}
        {vote.stance === 'ayes'
          ? 'Yea'
          : vote.stance === 'noes'
            ? 'Nay'
            : 'Not Voting'}
      </Typography>
      <Typography
        variant="subtitleL"
        fontWeight={600}
        textTransform={'capitalize'}
      >
        {/** TODO: i18n */}
        {vote.vote?.status === 'passed' ? 'Passed' : 'Failed'}
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

type BillVoteCardProps = {
  vote: NonNullable<People['votes']>[number]
}

export default function BillVoteCard({ vote }: BillVoteCardProps) {
  return (
    <StyledCardContainer height="auto">
      <UHStack gap={4} alignItems="stretch">
        <Stack>
          <UTagList
            tags={(vote.vote?.bill?.tags ?? []).map((tag, index) => (
              <UCategoryTag key={index} value={tag} />
            ))}
            containerProps={{
              gap: '6px',
              mb: 2.5,
            }}
            maxTags={5}
          />

          <Typography variant="body" fontWeight={300} mb={1}>
            {`${vote.vote?.bill?.chamberPrefix} | ${CURRENT_CONGRESS_NUMBER}th Congress`}
          </Typography>

          <Link href={vote.vote?.bill?.link ?? ''}>
            <UHeightLimitedText
              maxLine={4}
              variant="subtitleL"
              fontWeight={700}
            >
              {vote.vote?.bill?.title}
            </UHeightLimitedText>
          </Link>
        </Stack>

        <UHStack gap={1} sx={{ minWidth: '300px' }}>
          <VoteStatusCard vote={vote} active={vote.stance === 'notVoting'} />
          <VoteStatusCard vote={vote} active={vote.vote?.status === 'failed'} />
        </UHStack>
      </UHStack>
    </StyledCardContainer>
  )
}

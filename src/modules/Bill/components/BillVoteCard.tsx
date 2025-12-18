'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Stack, Typography, useTheme } from '@mui/material'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import Link from 'next/link'
import UTagList from '@/common/components/atoms/UTagList'
import { PeopleVote } from '@/modules/People/business/PeopleVote'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { useMemo } from 'react'
import { CongressUtils } from '@/common/business/Congress'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface VoteStatusCardProps {
  vote: PeopleVote
  active: boolean
}

const VoteStatusCard = function ({ vote, active }: VoteStatusCardProps) {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('bill')

  const stanceText = useMemo(() => {
    if (vote.stance === 'ayes') return t('card.vote.stance.ayes')
    if (vote.stance === 'noes') return t('card.vote.stance.noes')
    return t('card.vote.stance.not_voting')
  }, [vote.stance, t])

  const statusText = useMemo(() => {
    if (vote.vote?.status === 'passed') return t('card.vote.status.passed')
    return t('card.vote.status.failed')
  }, [vote.vote?.status, t])

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
        {stanceText}
      </Typography>
      <Typography
        variant="subtitleL"
        fontWeight={600}
        textTransform={'capitalize'}
      >
        {statusText}
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
  vote: PeopleVote
}

export default function BillVoteCard({ vote }: BillVoteCardProps) {
  const chamberPrefix = useMemo(() => {
    if (!vote.vote?.bill) return ''
    return BillUtils.getChamberPrefix(vote.vote.bill)
  }, [vote.vote?.bill])

  return (
    <StyledCardContainer height="auto">
      <UHStack gap={4} alignItems="stretch">
        <Stack>
          <UTagList
            tags={(vote.vote?.bill?.tags ?? []).map((tag) => (
              <UCategoryTag key={tag.id} value={tag.name} />
            ))}
            containerProps={{
              gap: '6px',
              mb: 2.5,
            }}
            maxTags={5}
          />

          <Typography variant="body" fontWeight={300} mb={1}>
            {`${chamberPrefix} | ${CongressUtils.getCurrentCongressNumber()}th Congress`}
          </Typography>

          <Link
            href={vote.vote?.bill ? BillUtils.getLink(vote.vote.bill.id) : ''}
          >
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

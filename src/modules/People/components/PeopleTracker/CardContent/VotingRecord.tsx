'use client'

import { PeopleCheckIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import BillVoteCard from '@/modules/Bill/components/BillVoteCard'
import { Box } from '@mui/material'
import { People } from '@/modules/People/business/People'
import {
  PeopleVotesQueryVariables,
  PeopleVotesQuery,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_PEOPLE_VOTES } from '@/modules/People/graphql/gql'
import { useQuery } from '@apollo/client'
import { isNull } from 'lodash-es'
import { PeopleVoteUtils } from '@/modules/People/business/PeopleVote'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface VotingRecordProps {
  people: People
}

const VotingRecord = function ({ people }: VotingRecordProps) {
  const { lang } = useParams<{ lang: Language }>()
  const { t } = useTranslationClient(['people'])

  const { data } = useQuery<PeopleVotesQuery, PeopleVotesQueryVariables>(
    QUERY_PEOPLE_VOTES,
    {
      variables: { id: people.id ?? '' },
    }
  )
  const votes =
    data?.People?.votes
      ?.filter((vote) => !isNull(vote))
      .map((vote) => PeopleVoteUtils.parse(lang, vote)) ?? []

  return (
    <NumberCard
      title={t('page.card.votingRecord.title', { ns: 'people' })}
      number={votes.length}
      headerProps={{
        title: t('page.card.votingRecord.title', { ns: 'people' }),
        icon: <PeopleCheckIcon />,
        iconColor: 'primary',
      }}
    >
      {votes.map((vote, index) => (
        <Box key={index}>
          {vote.vote?.bill && vote.stance && vote.vote.status && (
            <BillVoteCard vote={vote} />
          )}
        </Box>
      ))}
    </NumberCard>
  )
}

export default VotingRecord

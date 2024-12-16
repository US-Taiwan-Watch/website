import { PeopleCheckIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import BillVoteCard from '@/modules/Bill/components/BillVoteCard'
import { Box } from '@mui/material'
import { People } from '@/modules/People/classes/People'

interface VotingRecordProps {
  people: People
}

const VotingRecord = function ({ people }: VotingRecordProps) {
  const votes = people.votes

  return (
    <NumberCard
      title="Voting Record"
      number={votes.length}
      headerProps={{
        title: 'Voting Record',
        icon: <PeopleCheckIcon />,
        iconColor: 'primary',
      }}
    >
      {votes?.map((vote, index) => (
        <Box
          key={index}
          sx={{
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          {vote.vote?.bill && vote.stance && vote.vote.status && (
            <BillVoteCard vote={vote} />
          )}
        </Box>
      ))}
    </NumberCard>
  )
}

export default VotingRecord

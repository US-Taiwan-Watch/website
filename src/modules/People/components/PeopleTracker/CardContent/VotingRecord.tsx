import { PeopleCheckIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import BillVoteCard from '@/modules/Bill/components/BillVoteCard'
import { Box } from '@mui/material'
import { People } from '@/modules/People/classes/People'

interface VotingRecordProps {
  votings: People['votings']
}

const VotingRecord = function ({ votings }: VotingRecordProps) {
  return (
    <NumberCard
      title="Voting Record"
      number={2}
      headerProps={{
        title: 'Voting Record',
        icon: <PeopleCheckIcon />,
        iconColor: 'primary',
      }}
    >
      {votings?.map((voting, index) => (
        <Box
          key={index}
          sx={{
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          {voting.vote?.bill && voting.stance && voting.vote.status && (
            <BillVoteCard
              bill={voting.vote.bill}
              vote={voting.stance}
              status={voting.vote.status}
            />
          )}
        </Box>
      ))}
    </NumberCard>
  )
}

export default VotingRecord

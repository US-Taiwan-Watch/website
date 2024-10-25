import { PeopleCheckIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillVoteCard from '@/modules/Bill/components/BillVoteCard'
import { Box } from '@mui/material'

const VotingRecord = function () {
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
      {BILL_DATA_MOCK.map((bill, index) => (
        <Box
          key={index}
          sx={{
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          <BillVoteCard bill={bill} vote="yea" status="failed" />
        </Box>
      ))}
    </NumberCard>
  )
}

export default VotingRecord

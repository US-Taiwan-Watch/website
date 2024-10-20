import { PeopleCheckIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillVoteCard from '@/modules/Bill/components/BillVoteCard'

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
        <BillVoteCard key={index} bill={bill} vote="yea" status="failed" />
      ))}
    </NumberCard>
  )
}

export default VotingRecord

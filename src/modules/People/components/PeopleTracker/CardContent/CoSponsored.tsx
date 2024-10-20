import { PeopleJoinIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillCard from '@/modules/Bill/components/BillCard'

const CoSponsored = function () {
  return (
    <NumberCard
      title="Co-Sponsored"
      number={2}
      headerProps={{
        title: 'Co-Sponsored',
        icon: <PeopleJoinIcon />,
        iconColor: 'primary',
      }}
    >
      {BILL_DATA_MOCK.map((bill, index) => (
        <BillCard key={index} mode="horizontal" bill={bill} />
      ))}
    </NumberCard>
  )
}

export default CoSponsored

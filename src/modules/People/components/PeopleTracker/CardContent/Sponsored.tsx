import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillCard from '@/modules/Bill/components/BillCard'
import { Person2Icon } from '@/common/styles/assets/Icons'

const Sponsored = function () {
  return (
    <NumberCard
      title="Sponsored"
      number={2}
      headerProps={{
        title: 'Sponsored',
        icon: <Person2Icon />,
        iconColor: 'primary',
      }}
    >
      {BILL_DATA_MOCK.map((bill, index) => (
        <BillCard key={index} mode="horizontal" bill={bill} />
      ))}
    </NumberCard>
  )
}

export default Sponsored

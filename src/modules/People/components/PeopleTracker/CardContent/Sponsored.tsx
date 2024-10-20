import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillCard from '@/modules/Bill/components/BillCard'
import { Person2Icon } from '@/common/styles/assets/Icons'
import { Box } from '@mui/material'

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
        <Box
          key={index}
          sx={{
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          <BillCard mode="horizontal" bill={bill} />
        </Box>
      ))}
    </NumberCard>
  )
}

export default Sponsored

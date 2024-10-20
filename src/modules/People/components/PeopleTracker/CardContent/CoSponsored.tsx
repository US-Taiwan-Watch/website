import { PeopleJoinIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillCard from '@/modules/Bill/components/BillCard'
import { Box } from '@mui/material'

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

export default CoSponsored

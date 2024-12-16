'use client'

import { PeopleJoinIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import BillCard from '@/modules/Bill/components/BillCard'
import { Box } from '@mui/material'
import { People } from '@/modules/People/classes/People'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'

interface CoSponsoredProps {
  people: People
}

const CoSponsored = function ({ people }: CoSponsoredProps) {
  const { lang } = useParams<{ lang: Language }>()
  const cosponsorBills = People.getCosponsorBills(lang, people)

  return (
    <NumberCard
      title="Co-Sponsored"
      number={cosponsorBills.length}
      headerProps={{
        title: 'Co-Sponsored',
        icon: <PeopleJoinIcon />,
        iconColor: 'primary',
      }}
    >
      {cosponsorBills.map((bill, index) => (
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

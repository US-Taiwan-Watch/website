'use client'

import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import BillCard from '@/modules/Bill/components/BillCard'
import { Person2Icon } from '@/common/styles/assets/Icons'
import { Box } from '@mui/material'
import { People } from '@/modules/People/classes/People'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'

interface SponsoredProps {
  people: People
}

const Sponsored = function ({ people }: SponsoredProps) {
  const { lang } = useParams<{ lang: Language }>()
  const sponsorBills = People.getSponsorBills(lang, people)

  return (
    <NumberCard
      title="Sponsored"
      number={sponsorBills.length}
      headerProps={{
        title: 'Sponsored',
        icon: <Person2Icon />,
        iconColor: 'primary',
      }}
    >
      {sponsorBills.map((bill, index) => (
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

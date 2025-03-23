'use client'

import { Grid2 as Grid } from '@mui/material'
import PeopleCard from '@/modules/People/components/PeopleCard'
import { People } from '@/modules/People/business/People'
import { memo } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

type PopularPeopleCardsProps = {
  peoples: People[]
  isPopular?: boolean
}

const PopularPeopleCards = memo(function PopularPeopleCards({
  peoples,
  isPopular = false,
}: PopularPeopleCardsProps) {
  const { isMobile } = useResponsive()

  return (
    <Grid container spacing={2}>
      {peoples.map((people) => (
        <Grid
          key={people.id}
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <PeopleCard
            people={people}
            simplified={isMobile}
            isPopular={isPopular}
          />
        </Grid>
      ))}
    </Grid>
  )
})

export default PopularPeopleCards

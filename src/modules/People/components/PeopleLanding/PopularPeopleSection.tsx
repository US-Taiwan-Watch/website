'use client'

import { Stack, Typography, Grid2 as Grid, Box } from '@mui/material'
import PeopleCard from '@/modules/People/components/PeopleCard'
import { People } from '@/modules/People/classes/People'

interface PopularPeopleSectionProps {
  peoples: People[]
}

export default function PopularPeopleSection({
  peoples,
}: PopularPeopleSectionProps) {
  return (
    <Stack spacing={6}>
      <Typography variant="h3">Popular People</Typography>
      <Box>
        <Grid container spacing={2}>
          {peoples.map((people) => (
            <Grid key={people.id} size={6}>
              <PeopleCard people={people} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}

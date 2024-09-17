'use client'

import people from '@/modules/People/data'
import { Stack, Typography, Grid2 as Grid, Box } from '@mui/material'
import PeopleCard from '@/modules/People/components/PeopleCard'

export default function PopularPeopleSection() {
  return (
    <Stack spacing={6}>
      <Typography variant="h3">Popular People</Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid size={6}>
            <PeopleCard people={people} />
          </Grid>
          <Grid size={6}>
            <PeopleCard people={people} />
          </Grid>
          <Grid size={6}>
            <PeopleCard people={people} />
          </Grid>
          <Grid size={6}>
            <PeopleCard people={people} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}

import { Stack, Typography, Grid2 as Grid, Box } from '@mui/material'
import PeopleCard from '@/modules/People/components/PeopleCard'
import ServerPeopleApi from '@/modules/People/api/ServerPeopleApi'

/**
 * 熱門議員數量
 */
const POPULAR_PEOPLE_COUNT = 4

export default async function PopularPeopleSection() {
  const peoples = await ServerPeopleApi.getPopularPeople({
    limit: POPULAR_PEOPLE_COUNT,
  })

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

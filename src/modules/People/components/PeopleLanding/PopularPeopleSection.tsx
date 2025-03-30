import { Stack, Typography, Box } from '@mui/material'
import ServerPeopleApi from '@/modules/People/api/ServerPeopleApi'
import PopularPeopleCards from '@/modules/People/components/PeopleLanding/PopularPeopleCards'
/**
 * 熱門議員數量
 */
const POPULAR_PEOPLE_COUNT = 4

type PopularPeopleSectionProps = {
  title: string
}

export default async function PopularPeopleSection({
  title,
}: PopularPeopleSectionProps) {
  const peoples = await ServerPeopleApi.getPopularPeople({
    limit: POPULAR_PEOPLE_COUNT,
  })

  return (
    <Stack
      spacing={{
        xs: 2.5,
        sm: 5,
      }}
    >
      <Typography variant="h3" fontWeight={600}>
        {title}
      </Typography>
      <Box>
        <PopularPeopleCards peoples={peoples} isPopular />
      </Box>
    </Stack>
  )
}

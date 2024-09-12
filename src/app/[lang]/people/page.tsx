import PeopleListSection from '@/modules/People/components/PeopleLanding/PeopleListSection'
import PopularPeopleSection from '@/modules/People/components/PeopleLanding/PopularPeopleSection'
import { Container, Stack } from '@mui/material'

export default function People() {
  return (
    <Container maxWidth="lg">
      <Stack gap={10}>
        {/** Popular People Section */}
        <PopularPeopleSection />
        {/** People List Section */}
        <PeopleListSection />
      </Stack>
    </Container>
  )
}

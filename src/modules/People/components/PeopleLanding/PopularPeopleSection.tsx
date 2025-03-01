import { Stack, Typography, Grid2 as Grid, Box } from '@mui/material'
import PeopleCard from '@/modules/People/components/PeopleCard'
import { Language } from '@/common/lib/i18n/types'
import {
  PeoplesQueryVariables,
  PeoplesQuery,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { QUERY_PEOPLES } from '@/modules/People/graphql/gql'
import { PeopleUtils } from '@/modules/People/business/People'
import { isNull } from 'lodash-es'

interface PopularPeopleSectionProps {
  lang: Language
}

export default async function PopularPeopleSection({
  lang,
}: PopularPeopleSectionProps) {
  const { data } = await query<PeoplesQuery, PeoplesQueryVariables>({
    query: QUERY_PEOPLES,
    variables: {
      limit: 4,
      sort: '-viewCount',
    },
  })

  const peoples =
    data?.Peoples?.docs
      ?.filter((people) => !isNull(people))
      .map((people) => PeopleUtils.parse(lang, people)) ?? []

  // TODO: loading skeleton

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

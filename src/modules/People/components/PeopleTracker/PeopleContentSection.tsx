import { People } from '@/modules/People/classes/People'
import BioByAI from '@/modules/People/components/PeopleTracker/CardContent/BioByAI'
import Committee from '@/modules/People/components/PeopleTracker/CardContent/Committee'
import Experience from '@/modules/People/components/PeopleTracker/CardContent/Experience'
import IdeologyLeadershipChart from '@/modules/People/components/PeopleTracker/CardContent/IdeologyLeadershipChart'
import NumberLink from '@/modules/People/components/PeopleTracker/CardContent/NumberLink'
import Party from '@/modules/People/components/PeopleTracker/CardContent/Party'
import Publication from '@/modules/People/components/PeopleTracker/CardContent/Publication'
import VotesWithParty from '@/modules/People/components/PeopleTracker/CardContent/VotesWithParty'
import { Box, Grid, useTheme } from '@mui/material'
import { memo } from 'react'

interface PeopleContentSectionProps {
  people: People
}

const PeopleContentSection = memo(function PeopleContentSection({
  people,
}: PeopleContentSectionProps) {
  const theme = useTheme()

  return (
    <Box sx={{ paddingBottom: theme.spacing(10) }}>
      <Grid container spacing={2}>
        {/** Row 1 */}
        {people.party && people.partyExperience && (
          <Grid item xs={6}>
            <Party
              party={people.party}
              partyExperiences={people.partyExperience}
            />
          </Grid>
        )}

        <Grid item xs={2}>
          <NumberLink title="Sponsored" number={2} />
        </Grid>

        <Grid item xs={2}>
          <NumberLink title="co-sponsored" number={3} />
        </Grid>

        <Grid item xs={2}>
          <NumberLink title="Voting Record" number={0} />
        </Grid>

        {/** Row 2 */}
        <Grid item xs={7}>
          <BioByAI />
        </Grid>

        <Grid item xs={5}>
          <Experience experience={people.experience ?? []} />
        </Grid>

        {/** Row 2 */}
        <Grid item xs={3}>
          <VotesWithParty />
        </Grid>

        <Grid item xs={4.5}>
          <Committee />
        </Grid>

        <Grid item xs={4.5}>
          <Publication />
        </Grid>

        {/** Row 3 */}
        <Grid item xs={12}>
          <IdeologyLeadershipChart />
        </Grid>
      </Grid>
    </Box>
  )
})

export default PeopleContentSection

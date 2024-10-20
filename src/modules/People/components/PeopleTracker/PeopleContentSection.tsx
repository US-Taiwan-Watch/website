import { People } from '@/modules/People/classes/People'
import BioByAI from '@/modules/People/components/PeopleTracker/CardContent/BioByAI'
import Committee from '@/modules/People/components/PeopleTracker/CardContent/Committee'
import Experience from '@/modules/People/components/PeopleTracker/CardContent/Experience'
import IdeologyLeadershipChart from '@/modules/People/components/PeopleTracker/CardContent/IdeologyLeadershipChart'
import CoSponsored from '@/modules/People/components/PeopleTracker/CardContent/CoSponsored'
import Sponsored from '@/modules/People/components/PeopleTracker/CardContent/Sponsored'
import VotingRecord from '@/modules/People/components/PeopleTracker/CardContent/VotingRecord'
import Party from '@/modules/People/components/PeopleTracker/CardContent/Party'
import Publication from '@/modules/People/components/PeopleTracker/CardContent/Publication'
import { Box, Grid2 as Grid, useTheme } from '@mui/material'
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
          <Grid size={6}>
            <Party
              party={people.party}
              partyExperiences={people.partyExperience}
            />
          </Grid>
        )}

        <Grid size={2}>
          <Sponsored />
        </Grid>

        <Grid size={2}>
          <CoSponsored />
        </Grid>

        <Grid size={2}>
          <VotingRecord />
        </Grid>

        {/** Row 2 */}
        <Grid size={7}>
          <BioByAI />
        </Grid>

        <Grid size={5}>
          <Experience experience={people.experience ?? []} />
        </Grid>

        <Grid size={4.5}>
          <Committee />
        </Grid>

        <Grid size={4.5}>
          <Publication />
        </Grid>

        {/** Row 3 */}
        <Grid size={12}>
          <IdeologyLeadershipChart />
        </Grid>
      </Grid>
    </Box>
  )
})

export default PeopleContentSection

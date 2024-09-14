import { styled } from '@/common/lib/mui/theme'
import { People } from '@/modules/People/classes/People'
import BioByAI from '@/modules/People/components/PeopleTracker/CardContent/BioByAI'
import Committee from '@/modules/People/components/PeopleTracker/CardContent/Committee'
import Experience from '@/modules/People/components/PeopleTracker/CardContent/Experience'
import IdeologyLeadershipChart from '@/modules/People/components/PeopleTracker/CardContent/IdeologyLeadershipChart'
import NumberLink from '@/modules/People/components/PeopleTracker/CardContent/NumberLink'
import Party from '@/modules/People/components/PeopleTracker/CardContent/Party'
import VotesWithParty from '@/modules/People/components/PeopleTracker/CardContent/VotesWithParty'
import { Box, Card, Grid, useTheme } from '@mui/material'
import { memo } from 'react'

const StyledContentCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: theme.shape.borderRadius * 4,
  border: `1px solid ${theme.color.grey[1600]}`,
  padding: theme.spacing(1),
  height: '100%',
  boxShadow: 'none',
}))

const StyledContentCardWithHeader = styled(StyledContentCard)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
}))

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
            <StyledContentCard>
              <Party party={people.party} />
            </StyledContentCard>
          </Grid>
        )}

        <Grid item xs={2}>
          <StyledContentCard>
            <NumberLink title="Sponsored" number={2} />
          </StyledContentCard>
        </Grid>

        <Grid item xs={2}>
          <StyledContentCard>
            <NumberLink title="co-sponsored" number={3} />
          </StyledContentCard>
        </Grid>

        <Grid item xs={2}>
          <StyledContentCard>
            <NumberLink title="Voting Record" number={0} />
          </StyledContentCard>
        </Grid>

        {/** Row 2 */}
        <Grid item xs={7}>
          <StyledContentCardWithHeader>
            <BioByAI />
          </StyledContentCardWithHeader>
        </Grid>

        <Grid item xs={5}>
          <StyledContentCardWithHeader
            sx={{
              overflow: 'hidden',
              /**
               * 如果有 overflow，在 after 加上一層 gradient 遮罩
               * 目前看起來只有 experience 會有 overflow hidden 的問題
               */
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '70px',
                background: 'linear-gradient(to top, white, transparent)',
              },
            }}
          >
            <Experience experience={people.experience ?? []} />
          </StyledContentCardWithHeader>
        </Grid>

        {/** Row 2 */}
        <Grid item xs={3.5}>
          <StyledContentCardWithHeader>
            <VotesWithParty />
          </StyledContentCardWithHeader>
        </Grid>

        <Grid item xs={8.5}>
          <StyledContentCardWithHeader>
            <Committee />
          </StyledContentCardWithHeader>
        </Grid>

        {/** Row 3 */}
        <Grid item xs={12}>
          <StyledContentCardWithHeader>
            <IdeologyLeadershipChart />
          </StyledContentCardWithHeader>
        </Grid>
      </Grid>
    </Box>
  )
})

export default PeopleContentSection

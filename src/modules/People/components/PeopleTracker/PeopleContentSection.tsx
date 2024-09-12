import { styled } from '@/common/lib/mui/theme'
import { People } from '@/modules/People/classes/People'
import NumberLink from '@/modules/People/components/PeopleTracker/CardContent/NumberLink'
import Party from '@/modules/People/components/PeopleTracker/CardContent/Party'
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
      </Grid>
    </Box>
  )
})

export default PeopleContentSection

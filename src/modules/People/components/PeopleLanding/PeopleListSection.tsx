'use client'

import { Box, Container, Grid2 as Grid, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import PeopleCard from '@/modules/People/components/PeopleCard'
import people from '@/modules/People/data'
import UPagination from '@/common/components/atoms/UPagination'
import PeopleFilter from '@/modules/People/components/PeopleFilter'

const PeopleListSection = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[200]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" justifyContent="center">
          {/** People Filter */}
          <PeopleFilter onSubmit={(e) => console.log(e)} />
          <Box>
            <Grid container spacing={2}>
              <Grid size={6}>
                <PeopleCard people={people} simplified />
              </Grid>
              <Grid size={6}>
                <PeopleCard people={people} simplified />
              </Grid>
              <Grid size={6}>
                <PeopleCard people={people} simplified />
              </Grid>
              <Grid size={6}>
                <PeopleCard people={people} simplified />
              </Grid>
            </Grid>
          </Box>
          <UPagination count={10} page={1} onChange={() => {}} />
        </Stack>
      </Container>
    </LandingSectionWrapper>
  )
}

export default PeopleListSection

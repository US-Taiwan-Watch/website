'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import PeopleCard from '@/modules/People/components/PeopleCard'
import UPagination from '@/common/components/atoms/UPagination'
import PeopleFilter from '@/modules/People/components/PeopleFilter'
import { People } from '@/modules/People/classes/People'

interface PeopleListSectionProps {
  peoples: People[]
}

const PeopleListSection = ({ peoples }: PeopleListSectionProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[200]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack spacing={6} alignItems="center" justifyContent="center">
        {/** People Filter */}
        <PeopleFilter
          onSubmit={(filter) => {
            /** 這邊呼叫 API */
            console.log(`call API with \n`, JSON.stringify(filter, null, 2))
          }}
        />
        <Box>
          <Grid container spacing={2} alignItems="stretch">
            {peoples.map((people) => (
              <Grid key={people.id} size={6}>
                <PeopleCard people={people} simplified />
              </Grid>
            ))}
          </Grid>
        </Box>
        <UPagination count={10} page={1} onChange={() => {}} />
      </Stack>
    </LandingSectionWrapper>
  )
}

export default PeopleListSection

import UPagination from '@/common/components/atoms/UPagination'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import OpinionPostCard, {
  OpinionPostCardSkeleton,
} from '@/modules/Opinion/components/OpinionPostCard'
import { Box, Grid2 as Grid, Stack } from '@mui/material'

interface OpinionPostCardsProps {
  opinions: Array<Opinion>
}

const OpinionPostCards = ({ opinions }: OpinionPostCardsProps) => {
  return (
    <Stack spacing={8}>
      {/** Posts */}
      <Grid container rowSpacing={8} columnSpacing={4}>
        {opinions.map((opinion) => (
          <Grid size={3} key={opinion.id}>
            <OpinionPostCard opinion={opinion} />
          </Grid>
        ))}
      </Grid>
      {/** Pagination */}
      <Box display="flex" alignItems="center" justifyContent="center">
        <UPagination count={10} />
      </Box>
    </Stack>
  )
}

export default OpinionPostCards

export const OpinionPostCardsSkeleton = () => {
  return (
    <Grid container rowSpacing={8} columnSpacing={4}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Grid size={3} key={index}>
          <OpinionPostCardSkeleton />
        </Grid>
      ))}
    </Grid>
  )
}

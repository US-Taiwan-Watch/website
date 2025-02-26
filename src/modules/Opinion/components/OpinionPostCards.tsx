import UPagination from '@/common/components/atoms/UPagination'
import { Opinion } from '@/modules/Opinion/business/Opinion'
import OpinionPostCard, {
  OpinionPostCardSkeleton,
} from '@/modules/Opinion/components/OpinionPostCard'
import { Box, Grid2 as Grid, Stack } from '@mui/material'

interface OpinionPostCardsProps {
  opinions: Array<Opinion>
  pagination?: boolean
  /** 是否呈現 Category */
  showCategory?: boolean
}

const OpinionPostCards = ({
  opinions,
  pagination = true,
  showCategory = true,
}: OpinionPostCardsProps) => {
  return (
    <Stack spacing={8}>
      {/** Posts */}
      <Grid container rowSpacing={8} columnSpacing={4}>
        {opinions.map((opinion) => (
          <Grid size={4} key={opinion.id}>
            <OpinionPostCard opinion={opinion} showCategory={showCategory} />
          </Grid>
        ))}
      </Grid>
      {/** Pagination */}
      {pagination && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <UPagination count={10} />
        </Box>
      )}
    </Stack>
  )
}

export default OpinionPostCards

export const OpinionPostCardsSkeleton = ({
  count = 12,
}: {
  /** 呈現的卡片數量 */
  count?: number
}) => {
  return (
    <Grid container rowSpacing={8} columnSpacing={4}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid size={3} key={index}>
          <OpinionPostCardSkeleton />
        </Grid>
      ))}
    </Grid>
  )
}

import { memo } from 'react'
import UButton from '@/common/components/atoms/UButton'

const UInfiniteScrollButton = memo(function UInfiniteScrollButton({
  loading,
  onLoadMore,
  hasMore,
}: {
  loading?: boolean
  onLoadMore: () => void
  hasMore: boolean
}) {
  if (!hasMore && !loading) return null

  return (
    <UButton
      fullWidth
      variant="contained"
      color="info"
      rounded
      onClick={onLoadMore}
      disabled={loading}
    >
      Load More
    </UButton>
  )
})

export default UInfiniteScrollButton

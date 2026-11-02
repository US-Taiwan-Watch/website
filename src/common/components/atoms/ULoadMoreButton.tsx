import { memo } from 'react'
import UButton from '@/common/components/atoms/UButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const ULoadMoreButton = memo(function ULoadMoreButton({
  loading,
  onLoadMore,
  hasMore,
}: {
  loading?: boolean
  onLoadMore: () => void
  hasMore: boolean
}) {
  const { t } = useTranslationClient('common')
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
      {t('loadMore.btn', { ns: 'common' })}
    </UButton>
  )
})

export default ULoadMoreButton

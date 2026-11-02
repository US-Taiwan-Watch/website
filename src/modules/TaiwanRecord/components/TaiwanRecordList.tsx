'use client'

import UPagination from '@/common/components/atoms/UPagination'
import ULoadMoreButton from '@/common/components/atoms/ULoadMoreButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import TaiwanRecordCard from '@/modules/TaiwanRecord/components/TaiwanRecordCard'
import TaiwanRecordCardSkeleton from '@/modules/TaiwanRecord/components/TaiwanRecordCardSkeleton'
import useTaiwanRecordList from '@/modules/TaiwanRecord/hooks/useTaiwanRecordList'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { memo } from 'react'

interface TaiwanRecordListProps {
  /** People ID to fetch records for */
  peopleId: string
}

const TaiwanRecordCardsSkeleton = memo(function TaiwanRecordCardsSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <TaiwanRecordCardSkeleton key={index} />
      ))}
    </>
  )
})

const TaiwanRecordList = ({ peopleId }: TaiwanRecordListProps) => {
  const theme = useTheme<USTWTheme>()

  const {
    records,
    loading,
    totalPages,
    page,
    handlePageChange,
    shouldAppendData,
    hasMore,
  } = useTaiwanRecordList({ peopleId })

  return (
    <Stack gap={theme.spacing(7.5)} width="100%">
      <Stack gap={theme.spacing(1.5)}>
        {loading && records.length === 0 ? (
          <TaiwanRecordCardsSkeleton />
        ) : (
          records.map((record) => (
            <TaiwanRecordCard key={record.id} taiwanRecord={record} />
          ))
        )}
      </Stack>

      {/* Infinite Scroll (Mobile) */}
      {shouldAppendData && records.length > 0 && (
        <ULoadMoreButton
          loading={loading}
          onLoadMore={() => handlePageChange(page + 1)}
          hasMore={hasMore}
        />
      )}

      {/* Pagination (Desktop) */}
      {!shouldAppendData && totalPages > 1 && (
        <UPagination
          sx={{
            margin: '0 auto',
          }}
          count={totalPages}
          page={page}
          onChange={(_, newPage) => {
            handlePageChange(newPage)
          }}
        />
      )}
    </Stack>
  )
}

export default memo(TaiwanRecordList)

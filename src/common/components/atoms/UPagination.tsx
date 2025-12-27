'use client'

import { styled } from '@/common/lib/mui/theme'
import { Pagination } from '@mui/material'
import { useCallback, useState } from 'react'

const UPagination = styled(Pagination)(({ theme }) => ({
  backgroundColor: theme.color.pagination.backgroundColor,
  borderRadius: '100px',
  padding: theme.spacing(0.5),
  '& .MuiPaginationItem-previousNext': {
    backgroundColor: theme.color.pagination.previousNextBackgroundColor,
    color: theme.color.pagination.previousNextColor,
  },
  '& .MuiPaginationItem-page': {
    color: theme.color.pagination.pageColor,
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: theme.color.pagination.selectedPageBackgroundColor,
    color: theme.color.pagination.selectedPageColor,
  },
}))

export default UPagination

export const usePagination = ({
  totalPages: externalTotalPages = 1,
}: {
  /** 總頁數 @default 1 */
  totalPages?: number
} = {}) => {
  const [totalPages, setTotalPages] = useState(externalTotalPages)
  const [page, setPage] = useState(1)

  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return
      setPage(page)
    },
    [totalPages]
  )

  const resetPagination = useCallback(() => {
    setPage(1)
    setTotalPages(totalPages)
  }, [totalPages])

  return { totalPages, setTotalPages, page, handlePageChange, resetPagination }
}

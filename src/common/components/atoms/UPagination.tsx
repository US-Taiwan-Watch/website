import { styled } from '@/common/lib/mui/theme'
import { Pagination } from '@mui/material'

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

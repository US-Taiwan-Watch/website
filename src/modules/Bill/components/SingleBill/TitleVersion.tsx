'use client'

import UButton from '@/common/components/atoms/UButton'
import { styled } from '@/common/lib/mui/theme'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'

const StyledTitleVersionButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  color: theme.color.common.black,
  height: 'max-content',
  '&:hover': {
    backgroundColor: theme.color.common.white,
  },
}))

export default function TitleVersion() {
  return (
    // TODO: link to the bill
    <a
      href="https://www.congress.gov/bill/118th-congress/house-bill/8281/all-actions"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledTitleVersionButton
        variant="contained"
        startIcon={<AccessTimeOutlinedIcon width={24} height={24} />}
        rounded
      >
        Title Version
      </StyledTitleVersionButton>
    </a>
  )
}

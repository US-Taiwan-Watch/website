'use client'

import UButton from '@/common/components/atoms/UButton'
import { styled } from '@/common/lib/mui/theme'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import { Bill } from '@/modules/Bill/classes/Bill'
import Link from 'next/link'

const StyledTitleVersionButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  color: theme.color.common.black,
  height: 'max-content',
  '&:hover': {
    backgroundColor: theme.color.common.white,
  },
}))

const StyledLink = styled(Link)({
  height: 'max-content',
})

type Props = {
  bill: Bill
}

export default function TitleVersion({ bill }: Props) {
  return (
    <StyledLink
      href={bill.congressGovUrl ?? ''}
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
    </StyledLink>
  )
}

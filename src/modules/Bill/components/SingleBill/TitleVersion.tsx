'use client'

import UButton from '@/common/components/atoms/UButton'
import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import Link from 'next/link'
import { CongressIcon } from '@/common/styles/assets/Icons'

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

// 設計稿上是 Title Version，但 phase1 改為導向到國會網站
export default function TitleVersion({ bill }: Props) {
  return (
    <StyledLink
      href={bill.congressGovUrl ?? ''}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledTitleVersionButton
        variant="contained"
        startIcon={<CongressIcon width={24} height={24} />}
        rounded
      >
        Congress.gov
      </StyledTitleVersionButton>
    </StyledLink>
  )
}

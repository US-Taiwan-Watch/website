'use client'

import UButton from '@/common/components/atoms/UButton'
import { styled } from '@/common/lib/mui/theme'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import { Bill } from '@/modules/Bill/classes/Bill'
import { useState } from 'react'
import TitleVersionDialog from '@/modules/Bill/components/SingleBill/TitleVersionDialog'

const StyledTitleVersionButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  color: theme.color.common.black,
  height: 'max-content',
  '&:hover': {
    backgroundColor: theme.color.common.white,
  },
}))

type Props = {
  bill: Bill
}

export default function TitleVersion({ bill }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <StyledTitleVersionButton
        variant="contained"
        startIcon={<AccessTimeOutlinedIcon width={24} height={24} />}
        rounded
        onClick={() => setIsModalOpen(true)}
      >
        Title Version
      </StyledTitleVersionButton>

      {isModalOpen && (
        <TitleVersionDialog
          bill={bill}
          isModalOpen={isModalOpen}
          handleCloseModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

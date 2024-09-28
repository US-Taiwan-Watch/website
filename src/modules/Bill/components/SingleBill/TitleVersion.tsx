'use client'

import UButton from '@/common/components/atoms/UButton'
import { styled } from '@/common/lib/mui/theme'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import { Bill } from '@/modules/Bill/classes/Bill'
import TitleVersionDialog from '@/modules/Bill/components/SingleBill/TitleVersionDialog'
import useModal from '@/common/lib/useModal'

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
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <StyledTitleVersionButton
        variant="contained"
        startIcon={<AccessTimeOutlinedIcon width={24} height={24} />}
        rounded
        onClick={handleOpenModal}
      >
        Title Version
      </StyledTitleVersionButton>

      {isModalOpen && (
        <TitleVersionDialog
          bill={bill}
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  )
}

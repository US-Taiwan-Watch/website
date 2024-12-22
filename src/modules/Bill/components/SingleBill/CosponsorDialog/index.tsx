'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UIconButton from '@/common/components/atoms/UIconButton'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import { Bill } from '@/modules/Bill/classes/Bill'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Grid2, useTheme } from '@mui/material'
import DialogFilter from '@/modules/Bill/components/SingleBill/CosponsorDialog/DialogFilter'
import useDialogFilter from '@/modules/Bill/components/SingleBill/CosponsorDialog/useDialogFilter'
import CosponsorTable from '@/modules/Bill/components/SingleBill/CosponsorDialog/CosponsorTable'
import { useMemo } from 'react'
import {
  createFilterCategories,
  getFilterConstituency,
} from '@/modules/Bill/components/SingleBill/CosponsorDialog/utils'
import { BillCosponsor } from '@/modules/People/classes/BillCosponsor'

type Props = {
  bill: Bill
  isModalOpen: boolean
  handleCloseModal: () => void
}

export default function CosponsorDialog({
  bill,
  isModalOpen,
  handleCloseModal,
}: Props) {
  const theme = useTheme<USTWTheme>()
  const { selectedOptionList, handleSelectOption, clearAll } = useDialogFilter()
  const filterCategories = useMemo(() => createFilterCategories(bill), [bill])

  const cosponsors = useMemo<BillCosponsor[]>(() => {
    return (bill.cosponsors ?? []).filter(({ people, constituency }) => {
      const partyMatch =
        selectedOptionList.party.length && people?.party
          ? selectedOptionList.party.includes(people.party)
          : true

      const constituencyMatch = selectedOptionList.constituency.length
        ? selectedOptionList.constituency.includes(
            getFilterConstituency(constituency ?? '')
          )
        : true

      return partyMatch && constituencyMatch
    })
  }, [bill, selectedOptionList])

  return (
    <UContentCardDialog
      open={isModalOpen}
      onClose={handleCloseModal}
      maxWidth="lg"
    >
      <UContentCard
        withHeader
        headerProps={{
          title: 'Cosponsors',
          icon: <CosponsorsIcon />,
          iconColor: 'primary',
          action: (
            <UIconButton
              variant="rounded"
              color="inherit"
              size="small"
              onClick={handleCloseModal}
            >
              <CloseIcon sx={{ color: theme.color.neutral[500] }} />
            </UIconButton>
          ),
        }}
        sx={{
          padding: 0,
          border: 'none',
          borderRadius: 0,
        }}
        contentProps={{
          sx: {
            '&.MuiCardContent-root': {
              overflowY: 'hidden',
            },
          },
        }}
      >
        {/* NOTE: 鎖一個固定高度，避免 filter 改變導致畫面跳動 */}
        <Grid2 container mt={2} spacing={2} height="500px">
          <Grid2 size={3} pl={1} pt="3px">
            <DialogFilter
              selectedOptionList={selectedOptionList}
              onSelectOption={handleSelectOption}
              clearAll={clearAll}
              categories={filterCategories}
            />
          </Grid2>
          <Grid2 size={9}>
            <CosponsorTable cosponsors={cosponsors} />
          </Grid2>
        </Grid2>
      </UContentCard>
    </UContentCardDialog>
  )
}

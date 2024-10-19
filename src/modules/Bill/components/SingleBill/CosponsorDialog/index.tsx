'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UIconButton from '@/common/components/atoms/UIconButton'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import { Bill } from '@/modules/Bill/classes/Bill'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Grid2, useTheme } from '@mui/material'
import DialogFilter, {
  FilterCategory,
} from '@/modules/Bill/components/SingleBill/DialogFilter'
import useDialogFilter from '@/modules/Bill/components/SingleBill/useDialogFilter'
import CosponsorTable from '@/modules/Bill/components/SingleBill/CosponsorDialog/CosponsorTable'

enum CosponsorFilterOptionEnum {
  DEMOCRATIC = 'democratic',
  REPUBLICAN = 'republican',
  INDEPENDENT = 'independent',
}

const FAKE_COUNT = 20

// TODO: categories 是從 all data aggregate 來的
const categories: FilterCategory<string>[] = [
  {
    id: 'party',
    name: 'Party',
    options: [
      {
        id: CosponsorFilterOptionEnum.DEMOCRATIC,
        name: 'Democratic',
        count: FAKE_COUNT,
      },
      {
        id: CosponsorFilterOptionEnum.REPUBLICAN,
        name: 'Republican',
        count: FAKE_COUNT,
      },
      {
        id: CosponsorFilterOptionEnum.INDEPENDENT,
        name: 'Independent',
        count: FAKE_COUNT,
      },
    ],
  },
  {
    id: 'territory',
    name: 'U.S. State or Territory',
    // TODO: 待釐清有哪些選項
    options: [
      {
        id: 'AL',
        name: 'Alabama',
        count: FAKE_COUNT,
      },
      {
        id: 'CT',
        name: 'Connecticut',
        count: FAKE_COUNT,
      },
    ],
  },
]

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
  const { selectedOptionIdList, handleSelectOption, clearAll } =
    useDialogFilter<string>()

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
        <Grid2 container mt={2} spacing={2}>
          <Grid2 size={3} pl={1} pt="3px">
            <DialogFilter
              selectedOptionIdList={selectedOptionIdList}
              onSelectOption={handleSelectOption}
              clearAll={clearAll}
              categories={categories}
            />
          </Grid2>
          <Grid2 size={9}>
            <CosponsorTable cosponsors={bill.cosponsors ?? []} />
          </Grid2>
        </Grid2>
      </UContentCard>
    </UContentCardDialog>
  )
}

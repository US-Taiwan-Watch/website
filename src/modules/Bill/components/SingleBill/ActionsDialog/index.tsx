'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UIconButton from '@/common/components/atoms/UIconButton'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { Bill } from '@/modules/Bill/classes/Bill'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'
import { CardContent, Grid2, useTheme } from '@mui/material'
import DialogFilter, {
  FilterCategory,
} from '@/modules/Bill/components/SingleBill/DialogFilter'
import useDialogFilter from '@/modules/Bill/components/SingleBill/useDialogFilter'
import ActionsTable from '@/modules/Bill/components/SingleBill/ActionsDialog/ActionsTable'

export enum ActionsFilterOptionEnum {
  HOUSE = 'house',
  SENATE = 'senate',
  HOUSE2 = 'house2',
  SENATE2 = 'senate2',
}

const FAKE_COUNT = 20

const categories: FilterCategory<ActionsFilterOptionEnum>[] = [
  {
    id: 'party',
    name: 'Party of Cosponsor',
    options: [
      {
        id: ActionsFilterOptionEnum.HOUSE,
        name: 'House Roll Call Vote',
        count: FAKE_COUNT,
      },
      {
        id: ActionsFilterOptionEnum.SENATE,
        name: 'Senate Roll Call Vote',
        count: FAKE_COUNT,
      },
    ],
  },
  {
    id: 'territory',
    name: 'Cosponsors by U.S. State or Territory',
    // TODO: 待釐清有哪些選項
    options: [
      {
        id: ActionsFilterOptionEnum.HOUSE2,
        name: 'House Roll Call Vote',
        count: FAKE_COUNT,
      },
      {
        id: ActionsFilterOptionEnum.SENATE2,
        name: 'Senate Roll Call Vote',
        count: FAKE_COUNT,
      },
    ],
  },
]

const allOptionId: ActionsFilterOptionEnum[] = Object.values(
  ActionsFilterOptionEnum
)

type Props = {
  bill: Bill
  isModalOpen: boolean
  handleCloseModal: () => void
}

export default function ActionsDialog({
  bill,
  isModalOpen,
  handleCloseModal,
}: Props) {
  const theme = useTheme<USTWTheme>()
  const { selectedOptionIdList, handleSelectOption, toggleSelectAllOption } =
    useDialogFilter<ActionsFilterOptionEnum>({
      allOptionId,
    })

  return (
    <UContentCardDialog
      open={isModalOpen}
      onClose={handleCloseModal}
      maxWidth="lg"
    >
      <UContentCard
        withHeader
        headerProps={{
          title: 'Actions',
          icon: <ActionsIcon />,
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
      >
        <CardContent
          sx={{
            '&.MuiCardContent-root': {
              overflowY: 'hidden',
            },
          }}
        >
          <Grid2 container mt={2} spacing={2}>
            <Grid2 size={3} pl={1} pt="3px">
              <DialogFilter
                selectedOptionIdList={selectedOptionIdList}
                onSelectOption={handleSelectOption}
                toggleSelectAllOption={toggleSelectAllOption}
                categories={categories}
              />
            </Grid2>
            <Grid2 size={9}>
              <ActionsTable actions={bill.actions ?? []} />
            </Grid2>
          </Grid2>
        </CardContent>
      </UContentCard>
    </UContentCardDialog>
  )
}

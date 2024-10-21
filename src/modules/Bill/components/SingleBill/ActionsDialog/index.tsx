'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UIconButton from '@/common/components/atoms/UIconButton'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { Bill } from '@/modules/Bill/classes/Bill'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'
import {
  Grid2,
  useTheme,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
} from '@mui/material'
import ActionsTable from '@/modules/Bill/components/SingleBill/ActionsDialog/ActionsTable'
import { useState } from 'react'

export enum ActionsTableType {
  ACTIONS_OVERVIEW = 'ACTIONS_OVERVIEW',
  ALL_ACTIONS = 'ALL_ACTIONS',
}

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
  const [selectedTableType, setSelectedTableType] = useState<ActionsTableType>(
    ActionsTableType.ACTIONS_OVERVIEW
  )

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
        contentProps={{
          sx: {
            '&.MuiCardContent-root': {
              overflowY: 'hidden',
            },
          },
        }}
      >
        <Grid2 container mt={2} spacing={2}>
          <Grid2 size={2} pl={1} pt="3px">
            <FormControl>
              <RadioGroup
                defaultValue={ActionsTableType.ACTIONS_OVERVIEW}
                name="actions-dialog-filter"
                value={selectedTableType}
                onChange={(e) =>
                  setSelectedTableType(
                    e.target.value as unknown as ActionsTableType
                  )
                }
              >
                <FormControlLabel
                  value={ActionsTableType.ACTIONS_OVERVIEW}
                  control={<Radio color="secondary" />}
                  label="Action Overview"
                />
                <FormControlLabel
                  value={ActionsTableType.ALL_ACTIONS}
                  control={<Radio color="secondary" />}
                  label="All Actions"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>
          <Grid2 size={10}>
            <ActionsTable
              actions={bill.actions ?? []}
              tableType={selectedTableType}
            />
          </Grid2>
        </Grid2>
      </UContentCard>
    </UContentCardDialog>
  )
}

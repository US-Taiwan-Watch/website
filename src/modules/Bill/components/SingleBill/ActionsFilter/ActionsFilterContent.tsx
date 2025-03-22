'use client'

import { Grid2 } from '@mui/material'
import ActionsTable from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsTable'
import { BillAction } from '@/modules/Bill/business/Bill'
import ActionsFilter, {
  ActionsType,
} from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilter'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import ActionsList from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsList'

type ActionsFilterContentProps = {
  actions: BillAction[]
  selectedActionsType: ActionsType
  onSelectActionsType: (actionsType: ActionsType) => void
}

export default function ActionsFilterContent({
  actions,
  selectedActionsType,
  onSelectActionsType,
}: ActionsFilterContentProps) {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return <ActionsList actions={actions} />
  }

  return (
    <Grid2 container mt={2} spacing={2} height="500px">
      <Grid2 size={2} pl={1} pt="3px">
        <ActionsFilter
          selectedActionsType={selectedActionsType}
          onSelectActionsType={onSelectActionsType}
        />
      </Grid2>
      <Grid2 size={10}>
        <ActionsTable actions={actions} actionsType={selectedActionsType} />
      </Grid2>
    </Grid2>
  )
}

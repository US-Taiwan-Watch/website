'use client'

import { Grid2, useTheme } from '@mui/material'
import ActionsTable from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsTable'
import { BillAction } from '@/modules/Bill/business/Bill'
import ActionsFilter, {
  ActionsType,
} from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilter'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import ActionsList from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsList'
import { USTWTheme } from '@/common/lib/mui/theme'

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
  const theme = useTheme<USTWTheme>()
  const { isMobile } = useResponsive()

  if (isMobile) {
    return <ActionsList actions={actions} />
  }

  return (
    <Grid2 container pt={2} spacing={2} maxHeight="50dvh">
      <Grid2 size={2}>
        <div style={{ position: 'sticky', top: theme.spacing(2) }}>
          <ActionsFilter
            selectedActionsType={selectedActionsType}
            onSelectActionsType={onSelectActionsType}
          />
        </div>
      </Grid2>
      <Grid2 size={10}>
        <ActionsTable actions={actions} actionsType={selectedActionsType} />
      </Grid2>
    </Grid2>
  )
}

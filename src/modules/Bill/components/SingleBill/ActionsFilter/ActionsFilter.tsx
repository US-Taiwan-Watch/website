import { memo } from 'react'
import { FormControlLabel, Radio, FormControl, RadioGroup } from '@mui/material'

export enum ActionsType {
  ACTIONS_OVERVIEW = 'ACTIONS_OVERVIEW',
  ALL_ACTIONS = 'ALL_ACTIONS',
}

type ActionsFilterProps = {
  selectedActionsType: ActionsType
  onSelectActionsType: (actionsType: ActionsType) => void
}

const ActionsFilter = memo(function ActionsFilter({
  selectedActionsType,
  onSelectActionsType,
}: ActionsFilterProps) {
  return (
    <FormControl>
      <RadioGroup
        defaultValue={ActionsType.ACTIONS_OVERVIEW}
        name="actions-dialog-filter"
        value={selectedActionsType}
        onChange={(e) =>
          onSelectActionsType(e.target.value as unknown as ActionsType)
        }
      >
        <FormControlLabel
          value={ActionsType.ACTIONS_OVERVIEW}
          control={<Radio color="secondary" />}
          label="Action Overview"
        />
        <FormControlLabel
          value={ActionsType.ALL_ACTIONS}
          control={<Radio color="secondary" />}
          label="All Actions"
        />
      </RadioGroup>
    </FormControl>
  )
})

export default ActionsFilter

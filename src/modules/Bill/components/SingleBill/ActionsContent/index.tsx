'use client'

import {
  Grid2,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
} from '@mui/material'
import ActionsTable from '@/modules/Bill/components/SingleBill/ActionsContent/ActionsTable'
import { useState } from 'react'
import { Bill } from '@/modules/Bill/business/Bill'

export enum ActionsTableType {
  ACTIONS_OVERVIEW = 'ACTIONS_OVERVIEW',
  ALL_ACTIONS = 'ALL_ACTIONS',
}

type Props = {
  bill: Bill
}

export default function ActionsContent({ bill }: Props) {
  const [selectedTableType, setSelectedTableType] = useState<ActionsTableType>(
    ActionsTableType.ACTIONS_OVERVIEW
  )

  return (
    <Grid2 container mt={2} spacing={2} height="500px">
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
        <ActionsTable bill={bill} tableType={selectedTableType} />
      </Grid2>
    </Grid2>
  )
}

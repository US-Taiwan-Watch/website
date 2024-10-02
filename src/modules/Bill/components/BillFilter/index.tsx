'use client'

import { MenuItem } from '@mui/material'
import { BillFilterState } from '@/modules/Bill/components/BillFilter/useBillFilter'
import useBillFilterOptions, {
  BillFilterOption,
} from '@/modules/Bill/components/BillFilter/useBillFilterOptions'
import Filter from '@/common/components/elements/Filter'
import USelect from '@/common/components/atoms/USelect'
import {
  BillPartyEnum,
  BillTypeEnum,
  BillStatusEnum,
} from '@/modules/Bill/components/BillFilter/enums'
import { useMemo } from 'react'

type SecondLevelSelector = {
  key: keyof BillFilterState
  placeholder: string
  options: BillFilterOption<BillPartyEnum | BillTypeEnum | BillStatusEnum>[]
}

type BillFilterProps = {
  filterState: BillFilterState
  handleFilterChange: (field: keyof BillFilterState, value: string) => void
  handleReset: () => void
}

export default function BillFilter({
  filterState,
  handleFilterChange,
  handleReset,
}: BillFilterProps) {
  const { categoryOptions, partyOptions, typeOptions, statusOptions } =
    useBillFilterOptions()

  const secondLevelSelectors = useMemo<SecondLevelSelector[]>(
    () => [
      {
        key: 'party',
        placeholder: 'Party',
        options: partyOptions,
      },
      {
        key: 'type',
        placeholder: 'Type',
        options: typeOptions,
      },
      {
        key: 'status',
        placeholder: 'Status',
        options: statusOptions,
      },
      {
        key: 'sponsors',
        placeholder: 'Sponsors',
        options: [],
      },
      {
        key: 'cosponsors',
        placeholder: 'Cosponsors',
        options: [],
      },
    ],
    [partyOptions, statusOptions, typeOptions]
  )

  return (
    <Filter
      firstLevelSelector={
        <USelect
          isFirstLevel
          value={filterState.category}
          onChange={(e) =>
            handleFilterChange('category', String(e.target.value))
          }
        >
          <MenuItem value="" disabled>
            Category
          </MenuItem>
          {categoryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </USelect>
      }
      handleReset={handleReset}
    >
      {secondLevelSelectors.map((selector) => (
        <USelect
          key={selector.key}
          value={filterState[selector.key]}
          onChange={(e) =>
            handleFilterChange(selector.key, String(e.target.value))
          }
          disabled={!filterState.category}
        >
          <MenuItem value="" disabled>
            {selector.placeholder}
          </MenuItem>
          {selector.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </USelect>
      ))}
    </Filter>
  )
}

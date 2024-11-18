'use client'

import MenuItem from '@mui/material/MenuItem'
import { Controller } from 'react-hook-form'
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
import { useMemo, useCallback } from 'react'
import useBillFilterForm from '@/modules/Bill/components/BillFilter/useBillFilterForm'
import {
  type BillFilterOutput,
  type BillFilterInputKey,
  type BillFilterInput,
} from '@/modules/Bill/components/BillFilter/schema'
import UAutocomplete from '@/common/components/atoms/UAutocomplete'

type SecondLevelSelector = {
  key: Exclude<BillFilterInputKey, 'category'>
  label: string
  /** MUI Autocomplete 必須設定 minWidth 因為底下 Label 是 absolute 因此 TextField 不會被撐開 */
  minWidth: number
  options: BillFilterOption<
    BillPartyEnum | BillTypeEnum | BillStatusEnum | number | string
  >[]
}

type BillFilterProps = {
  onSubmit?: (filter: BillFilterOutput) => void
  initialValues?: BillFilterInput
}

export default function BillFilter({
  onSubmit,
  initialValues,
}: BillFilterProps) {
  const { form, handleReset, handleSecondLevelReset } = useBillFilterForm({
    initialValues,
  })
  const {
    categoryOptions,
    partyOptions,
    typeOptions,
    statusOptions,
    congressOptions,
    sponsorsOptions,
    cosponsorsOptions,
    sorterOptions,
    tagOptions,
  } = useBillFilterOptions()

  const secondLevelSelectors = useMemo<SecondLevelSelector[]>(
    () => [
      {
        key: 'party',
        label: 'Party',
        options: partyOptions,
        minWidth: 100,
      },
      {
        key: 'type',
        label: 'Type',
        options: typeOptions,
        minWidth: 100,
      },
      {
        key: 'congress',
        label: 'Congress',
        options: congressOptions,
        minWidth: 140,
      },
      {
        key: 'status',
        label: 'Status',
        options: statusOptions,
        minWidth: 100,
      },
      {
        key: 'sponsors',
        label: 'Sponsors',
        options: sponsorsOptions,
        minWidth: 140,
      },
      {
        key: 'cosponsors',
        label: 'Cosponsors',
        options: cosponsorsOptions,
        minWidth: 160,
      },
      {
        key: 'tag',
        label: 'Tag',
        options: tagOptions,
        minWidth: 140,
      },
      {
        key: 'sorter',
        label: 'Sorter',
        options: sorterOptions,
        minWidth: 160,
      },
    ],
    [
      congressOptions,
      partyOptions,
      statusOptions,
      typeOptions,
      sponsorsOptions,
      cosponsorsOptions,
      sorterOptions,
      tagOptions,
    ]
  )

  const handleSubmit = useCallback(
    (value: BillFilterOutput) => {
      onSubmit?.(value)
    },
    [onSubmit]
  )

  return (
    <Filter
      containerProps={{
        component: 'form',
        sx: {
          width: '100%',
        },
        onSubmit: form.handleSubmit(handleSubmit, (error) => {
          console.log(error)
        }),
      }}
      firstLevelSelector={
        <Controller
          name="category"
          control={form.control}
          render={({ field }) => (
            <USelect
              {...field}
              value={field.value ?? ''}
              defaultValue={''}
              onChange={(e) => {
                field.onChange(e)
                handleSecondLevelReset()
              }}
              isFirstLevel
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
          )}
        />
      }
      handleReset={handleReset}
    >
      {secondLevelSelectors.map((selector) => (
        <Controller
          key={selector.key}
          name={selector.key}
          control={form.control}
          render={({ field }) => (
            <div style={{ minWidth: selector.minWidth }}>
              {selector.key === 'sorter' ? (
                <UAutocomplete
                  {...field}
                  options={sorterOptions}
                  getOptionLabel={(option) => option.label}
                  value={
                    selector.options.find(
                      (option) => option.value === field.value
                    ) ?? null
                  }
                  onChange={(_, value) => {
                    if (!Array.isArray(value)) {
                      field.onChange(value?.value)
                    }
                  }}
                  fullWidth
                  sx={{
                    height: '100%',
                  }}
                  label={selector.label}
                />
              ) : (
                <UAutocomplete
                  {...field}
                  multiple
                  disableClearable
                  disableCloseOnSelect
                  limitTags={1}
                  options={selector.options}
                  getOptionLabel={(option) => option.label}
                  fullWidth
                  value={selector.options.filter((option) => {
                    if (Array.isArray(field.value)) {
                      return field.value.some((val) => val === option.value)
                    }
                    return field.value === option.value
                  })}
                  onChange={(_, value) => {
                    if (Array.isArray(value)) {
                      field.onChange(value.map((v) => v.value))
                    } else {
                      field.onChange([value?.value])
                    }
                  }}
                  sx={{
                    height: '100%',
                  }}
                  label={selector.label}
                />
              )}
            </div>
          )}
        />
      ))}
    </Filter>
  )
}

'use client'
import { ChangeEvent, memo, useCallback, useMemo } from 'react'
import usePeopleFilterForm from '@/modules/People/components/PeopleFilter/usePeopleFilterForm'
import usePeopleFilterOptions, {
  PeopleFilterOption,
} from '@/modules/People/components/PeopleFilter/usePeopleFilterOptions'
import Filter from '@/common/components/elements/Filter'
import USelect from '@/common/components/atoms/USelect'
import MenuItem from '@mui/material/MenuItem'
import {
  PeopleFilterInput,
  type PeopleFilterInputKey,
  type PeopleFilterOutput,
} from '@/modules/People/components/PeopleFilter/schema'
import { Controller } from 'react-hook-form'
import {
  PeopleCategoryEnum,
  PeopleCompanyTypeEnum,
  PeopleOfficialAreaEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'
import UFilterTextField from '@/common/components/atoms/UFilterTextField'
import UAutocomplete from '@/common/components/atoms/UAutocomplete'

type SecondLevelSelector = {
  key: PeopleFilterInputKey
  label: string
  /** MUI Autocomplete 必須設定 minWidth 因為底下 Label 是 absolute 因此 TextField 不會被撐開 */
  minWidth: number
  options: PeopleFilterOption<
    | PeopleCompanyTypeEnum
    | PeopleOfficialAreaEnum
    | PeoplePartyEnum
    | number
    | string
  >[]
}

interface PeopleFilterProps {
  onSubmit?: (filter: PeopleFilterOutput) => void
  initialValues?: PeopleFilterInput
}

const PeopleFilter = ({ onSubmit, initialValues }: PeopleFilterProps) => {
  const {
    form,
    category,
    handleReset: handleFormReset,
    handleSecondLevelReset: handleFormSecondLevelReset,
  } = usePeopleFilterForm({ initialValues })
  const {
    categoryOptions,
    partyOptions,
    congressOptions,
    stateOptions,
    stateOrTerritoryOptions,
    districtOptions,
    tagOptions,
    officialAreaOptions,
    companyTypeOptions,
  } = usePeopleFilterOptions()

  const secondLevelSelectors = useMemo<SecondLevelSelector[]>(() => {
    const selectors: SecondLevelSelector[] = []

    // Congress
    if (
      [
        PeopleCategoryEnum.Senator,
        PeopleCategoryEnum.HouseRepresentative,
      ].includes(category)
    ) {
      selectors.push({
        key: 'congress',
        label: 'Congress',
        options: congressOptions,
        minWidth: 140,
      })
    }

    // Party
    if (
      [
        PeopleCategoryEnum.Senator,
        PeopleCategoryEnum.HouseRepresentative,
      ].includes(category)
    ) {
      selectors.push({
        key: 'party',
        label: 'Party',
        options: partyOptions,
        minWidth: 140,
      })
    }

    // State
    if ([PeopleCategoryEnum.Senator].includes(category)) {
      selectors.push({
        key: 'state',
        label: 'State',
        options: stateOptions,
        minWidth: 140,
      })
    }

    // State/Region
    if ([PeopleCategoryEnum.HouseRepresentative].includes(category)) {
      selectors.push({
        key: 'stateRegion',
        label: 'State/Region',
        options: stateOrTerritoryOptions,
        minWidth: 200,
      })
    }

    // District
    if ([PeopleCategoryEnum.HouseRepresentative].includes(category)) {
      selectors.push({
        key: 'district',
        label: 'District',
        options: districtOptions,
        minWidth: 140,
      })
    }

    // Tag
    if (
      [
        PeopleCategoryEnum.Senator,
        PeopleCategoryEnum.HouseRepresentative,
      ].includes(category)
    ) {
      selectors.push({
        key: 'tag',
        label: 'Tag',
        options: tagOptions,
        minWidth: 140,
      })
    }

    // Official Area
    if ([PeopleCategoryEnum.Official].includes(category)) {
      selectors.push({
        key: 'officialArea',
        label: 'Official Area',
        options: officialAreaOptions,
        minWidth: 160,
      })
    }

    // Company Type
    if ([PeopleCategoryEnum.Expert].includes(category)) {
      selectors.push({
        key: 'companyType',
        label: 'Company Type',
        options: companyTypeOptions,
        minWidth: 200,
      })
    }

    return selectors
  }, [
    category,
    partyOptions,
    congressOptions,
    stateOptions,
    stateOrTerritoryOptions,
    districtOptions,
    tagOptions,
    officialAreaOptions,
    companyTypeOptions,
  ])

  const handleSubmit = useCallback(
    (value: PeopleFilterOutput) => {
      onSubmit?.(value)
    },
    [onSubmit]
  )

  const handleReset = useCallback(() => {
    handleFormReset()
    form.handleSubmit(handleSubmit)()
  }, [form, handleFormReset, handleSubmit])

  const handleSecondLevelReset = useCallback(() => {
    handleFormSecondLevelReset()
    form.handleSubmit(handleSubmit)()
  }, [form, handleFormSecondLevelReset, handleSubmit])

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
          render={({ field }) => {
            // district filter，讓使用者輸入數字就好 (int > 0)
            if (selector.key === 'district') {
              return (
                <UFilterTextField
                  {...field}
                  size="small"
                  label={selector.label}
                  slotProps={{
                    inputLabel: {
                      color: 'info',
                    },
                    input: {
                      inputProps: {
                        min: 1,
                      },
                    },
                  }}
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '100%',
                    },
                  }}
                  type="number"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (Number.isNaN(parseInt(e.target.value, 10))) {
                      field.onChange(undefined)
                    } else {
                      field.onChange(Math.max(1, parseInt(e.target.value, 10)))
                    }
                  }}
                />
              )
            }

            return (
              <div style={{ minWidth: selector.minWidth }}>
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
              </div>
            )
          }}
        />
      ))}
    </Filter>
  )
}

export default memo(PeopleFilter)

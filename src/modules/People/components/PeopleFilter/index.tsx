'use client'
import { memo, useCallback, useMemo } from 'react'
import usePeopleFilterForm from '@/modules/People/components/PeopleFilter/usePeopleFilterForm'
import usePeopleFilterOptions, {
  PeopleFilterOption,
} from '@/modules/People/components/PeopleFilter/usePeopleFilterOptions'
import Filter from '@/common/components/elements/Filter'
import USelect from '@/common/components/atoms/USelect'
import { MenuItem } from '@mui/material'
import {
  type PeopleFilterInputKey,
  type PeopleFilterInput,
  PeopleFilterOutput,
} from '@/modules/People/components/PeopleFilter/schema'
import { Controller } from 'react-hook-form'
import {
  PeopleCategoryEnum,
  PeopleAffiliationEnum,
  PeopleAreaEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'
import UFilterInput from '@/common/components/atoms/UFilterInput'
import UAutocomplete from '@/common/components/atoms/UAutocomplete'

type SecondLevelSelector = {
  key: PeopleFilterInputKey
  placeholder: string
  options: PeopleFilterOption<
    PeopleAffiliationEnum | PeopleAreaEnum | PeoplePartyEnum | number | string
  >[]
}

interface PeopleFilterProps {
  onSubmit?: (filter: PeopleFilterInput) => void
}

const PeopleFilter = ({ onSubmit }: PeopleFilterProps) => {
  const { form, category, handleReset, handleSecondLevelReset } =
    usePeopleFilterForm()
  const {
    categoryOptions,
    partyOptions,
    congressOptions,
    stateOptions,
    stateOrTerritoryOptions,
    districtOptions,
    tagOptions,
    areaOptions,
    affiliationOptions,
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
        placeholder: 'Congress',
        options: congressOptions,
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
        placeholder: 'Party',
        options: partyOptions,
      })
    }

    // State
    if ([PeopleCategoryEnum.Senator].includes(category)) {
      selectors.push({
        key: 'state',
        placeholder: 'State',
        options: stateOptions,
      })
    }

    // State/Region
    if ([PeopleCategoryEnum.HouseRepresentative].includes(category)) {
      selectors.push({
        key: 'stateRegion',
        placeholder: 'State/Region',
        options: stateOrTerritoryOptions,
      })
    }

    // District
    if ([PeopleCategoryEnum.HouseRepresentative].includes(category)) {
      selectors.push({
        key: 'district',
        placeholder: 'District',
        options: districtOptions,
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
        placeholder: 'Tag',
        options: tagOptions,
      })
    }

    // Area
    if ([PeopleCategoryEnum.Official].includes(category)) {
      selectors.push({
        key: 'area',
        placeholder: 'Area',
        options: areaOptions,
      })
    }

    // Affiliation
    if ([PeopleCategoryEnum.Expert].includes(category)) {
      selectors.push({
        key: 'affiliation',
        placeholder: 'Affiliation',
        options: affiliationOptions,
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
    areaOptions,
    affiliationOptions,
  ])

  const handleSubmit = useCallback(
    (value: PeopleFilterOutput) => {
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
          render={({ field }) => {
            // district filter，讓使用者輸入數字就好 (int > 0)
            if (selector.key === 'district') {
              return (
                <UFilterInput
                  {...field}
                  placeholder={selector.placeholder}
                  disableUnderline
                  type="number"
                  inputProps={{
                    min: 1,
                  }}
                  onChange={(e) => {
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
              <UAutocomplete
                multiple
                disableClearable
                limitTags={1}
                options={selector.options}
                getOptionLabel={(option) => option.label}
                {...field}
                value={selector.options.find(
                  (option) => option.value === field.value
                )}
                onChange={(_, value) => {
                  if (Array.isArray(value)) {
                    field.onChange(value.map((v) => v.value))
                  } else {
                    field.onChange([value?.value])
                  }
                }}
                textFieldProps={{
                  placeholder: selector.placeholder,
                }}
              />
            )
          }}
        />
      ))}
    </Filter>
  )
}

export default memo(PeopleFilter)

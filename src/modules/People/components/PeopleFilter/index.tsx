'use client'
import { ChangeEvent, memo, useCallback, useMemo } from 'react'
import usePeopleFilterForm from '@/modules/People/components/PeopleFilter/usePeopleFilterForm'
import usePeopleFilterOptions, {
  PeopleFilterOption,
} from '@/modules/People/components/PeopleFilter/usePeopleFilterOptions'
import Filter from '@/common/components/elements/Filter'
import USelect from '@/common/components/atoms/USelect'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import {
  defaultCategory,
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
import { styled } from '@/common/lib/mui/theme'

const StyledUSelect = styled(USelect)(({ theme }) => ({
  '& .MuiSelect-select': {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    backgroundColor: theme.color.common.black,
    color: theme.color.common.white,
    '& .MuiSelect-select': {
      fontWeight: 700,
    },
    '& .MuiSelect-icon': {
      right: '22px',
    },
  },
}))

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
    tagOptions,
    officialAreaOptions,
    companyTypeOptions,
  } = usePeopleFilterOptions()

  const secondLevelSelectors = useMemo<SecondLevelSelector[]>(() => {
    const selectors: SecondLevelSelector[] = []
    if (category === defaultCategory) return selectors

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
        options: [],
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
      formId="people-filter-form"
      containerProps={{
        component: 'form',
        onSubmit: form.handleSubmit(handleSubmit, (error) => {
          console.log(error)
        }),
      }}
      firstLevelSelector={
        <Controller
          name="category"
          control={form.control}
          render={({ field }) => (
            <StyledUSelect
              {...field}
              value={field.value ?? ''}
              defaultValue={defaultCategory}
              onChange={(e) => {
                field.onChange(e)
                handleSecondLevelReset()
              }}
              isFirstLevel
              sx={{
                height: '50px',
              }}
            >
              <MenuItem value={defaultCategory} disabled>
                Category
              </MenuItem>
              {categoryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledUSelect>
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
                <Box
                  sx={{
                    width: {
                      xs: 'auto',
                      sm: '200px',
                    },
                  }}
                >
                  <UFilterTextField
                    {...field}
                    fullWidth
                    size="small"
                    label={selector.label}
                    slotProps={{
                      inputLabel: {
                        color: 'info',
                      },
                    }}
                    type="number"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      if (Number.isNaN(parseInt(e.target.value, 10))) {
                        field.onChange(undefined)
                      } else {
                        const value = parseInt(e.target.value, 10)
                        if (value > 0) {
                          field.onChange(value)
                        } else {
                          field.onChange(undefined)
                        }
                      }
                    }}
                  />
                </Box>
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

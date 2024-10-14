'use client'
import { memo, useEffect, useMemo } from 'react'
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
} from '@/modules/People/components/PeopleFilter/schema'
import { Controller } from 'react-hook-form'
import {
  PeopleCategoryEnum,
  PeopleAffiliationEnum,
  PeopleAreaEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'

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
  const { form, category, handleReset } = usePeopleFilterForm()
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

  // 沒有 Submit 按鈕，假設一變動就會敲 API
  useEffect(() => {
    const subscription = form.watch((_value, info) => {
      form.handleSubmit(
        (value) => {
          /**
           * 第一層 selector: category 變化後，重設 form
           * 但此時會連帶其他在上一個狀態的欄位一起送出
           * 會導致先觸發 onSubmit 的 callback 才重設 form
           * 會導致沒必要的觸發
           * 因此需要判斷 info.name 是否為 category
           */
          if (info.name === 'category') {
            onSubmit?.({
              category: value.category,
            })
          } else {
            onSubmit?.(value)
          }
        },
        (errors) => {
          console.log('errors', errors)
        }
      )()
    })

    return () => subscription.unsubscribe()
  }, [form, onSubmit])

  return (
    <>
      <form style={{ width: '100%' }}>
        <Filter
          firstLevelSelector={
            <Controller
              name="category"
              control={form.control}
              render={({ field }) => (
                <USelect {...field} isFirstLevel>
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
                <USelect
                  {...field}
                  // 預設值
                  value={field.value ?? ''}
                  label={selector.placeholder}
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
              )}
            />
          ))}
        </Filter>
      </form>
    </>
  )
}

export default memo(PeopleFilter)

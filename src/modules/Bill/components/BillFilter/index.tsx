'use client'

import { Controller } from 'react-hook-form'
import useBillFilterOptions, {
  BillFilterOption,
} from '@/modules/Bill/components/BillFilter/useBillFilterOptions'
import Filter from '@/common/components/elements/Filter'
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
  defaultBillFilterInput,
} from '@/modules/Bill/components/BillFilter/schema'
import UAutocomplete from '@/common/components/atoms/UAutocomplete'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type SecondLevelSelector = {
  key: BillFilterInputKey
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
  const { t } = useTranslationClient('bill')
  const { form } = useBillFilterForm({
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
        key: 'category',
        label: t('filter.category.label', {
          ns: 'bill',
        }),
        options: categoryOptions,
        minWidth: 140,
      },
      {
        key: 'party',
        label: t('filter.party.label', {
          ns: 'bill',
        }),
        options: partyOptions,
        minWidth: 100,
      },
      {
        key: 'type',
        label: t('filter.type.label', {
          ns: 'bill',
        }),
        options: typeOptions,
        minWidth: 100,
      },
      {
        key: 'congress',
        label: t('filter.congress.label', {
          ns: 'bill',
        }),
        options: congressOptions,
        minWidth: 140,
      },
      {
        key: 'status',
        label: t('filter.status.label', {
          ns: 'bill',
        }),
        options: statusOptions,
        minWidth: 100,
      },
      {
        key: 'sponsors',
        label: t('filter.sponsors.label', {
          ns: 'bill',
        }),
        options: sponsorsOptions,
        minWidth: 140,
      },
      {
        key: 'cosponsors',
        label: t('filter.cosponsors.label', {
          ns: 'bill',
        }),
        options: cosponsorsOptions,
        minWidth: 160,
      },
      {
        key: 'tag',
        label: t('filter.tag.label', {
          ns: 'bill',
        }),
        options: tagOptions,
        minWidth: 140,
      },
      {
        key: 'sorter',
        label: t('filter.sorter.label', {
          ns: 'bill',
        }),
        options: sorterOptions,
        minWidth: 160,
      },
    ],
    [
      t,
      categoryOptions,
      partyOptions,
      typeOptions,
      congressOptions,
      statusOptions,
      sponsorsOptions,
      cosponsorsOptions,
      tagOptions,
      sorterOptions,
    ]
  )

  const handleSubmit = useCallback(
    (value: BillFilterOutput) => {
      onSubmit?.(value)
    },
    [onSubmit]
  )

  const handleReset = useCallback(() => {
    form.reset(defaultBillFilterInput)
    form.handleSubmit(handleSubmit)()
  }, [form, handleSubmit])

  return (
    <Filter
      formId="bill-filter-form"
      containerProps={{
        component: 'form',
        onSubmit: form.handleSubmit(handleSubmit, (error) => {
          console.log(error)
        }),
      }}
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

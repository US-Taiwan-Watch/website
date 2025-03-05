'use client'

import { useMemo } from 'react'
import {
  PeopleCompanyTypeEnum,
  PeopleOfficialAreaEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'
import states from '@/common/assets/states'
import territoriesRegions from '@/common/assets/territories-regions'
import { CongressUtils } from '@/common/business/Congress'
import useTags from '@/modules/Common/hooks/useTags'
import { Language } from '@/common/lib/i18n/types'
import { useParams } from 'next/navigation'
import useCategoriesPeople from '@/modules/People/hooks/useCategoriesPeople'

export type PeopleFilterOption<T> = {
  value: T
  label: string
}

export default function usePeopleFilterOptions() {
  const { lang } = useParams<{ lang: Language }>()

  const { categoriesPeople } = useCategoriesPeople(lang)

  const categoryOptions = useMemo<PeopleFilterOption<string>[]>(
    () =>
      categoriesPeople.map((category) => ({
        value: category.type,
        label: category.name,
      })),
    [categoriesPeople]
  )

  const partyOptions = useMemo<PeopleFilterOption<PeoplePartyEnum>[]>(
    () => [
      { value: PeoplePartyEnum.Democratic, label: 'Democratic' },
      { value: PeoplePartyEnum.Republican, label: 'Republican' },
      { value: PeoplePartyEnum.Independent, label: 'Independent' },
    ],
    []
  )

  const currentCongressNumber = useMemo(
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )

  const congressOptions = useMemo<PeopleFilterOption<number>[]>(
    () =>
      Array.from(
        {
          length: currentCongressNumber - CongressUtils.minCongressNumber() + 1,
        },
        (_, i) => i + CongressUtils.minCongressNumber()
      ).map((congress) => ({
        value: congress,
        label: congress.toString(),
      })),
    [currentCongressNumber]
  )

  const stateOptions = useMemo<PeopleFilterOption<string>[]>(
    () =>
      Object.entries(states).map(([key, value]) => ({
        value,
        label: key,
      })),
    []
  )

  const territoryRegionOptions = useMemo<PeopleFilterOption<string>[]>(
    () =>
      Object.entries(territoriesRegions).map(([key, value]) => ({
        value,
        label: key,
      })),
    []
  )

  const stateOrTerritoryOptions = useMemo<PeopleFilterOption<string>[]>(
    () => [...stateOptions, ...territoryRegionOptions],
    [stateOptions, territoryRegionOptions]
  )

  const { tags } = useTags()
  const tagOptions = useMemo<PeopleFilterOption<string>[]>(
    () =>
      tags.map((tag) => ({
        value: tag?.id ?? '',
        label: tag?.name ?? '',
      })),
    [tags]
  )

  const officialAreaOptions = useMemo<
    PeopleFilterOption<PeopleOfficialAreaEnum>[]
  >(
    () => [
      {
        value: PeopleOfficialAreaEnum.ExecutiveAuthority,
        label: 'Executive Authority',
      },
      {
        value: PeopleOfficialAreaEnum.DefenseSecurity,
        label: 'Defense & Security',
      },
      { value: PeopleOfficialAreaEnum.Diplomacy, label: 'Diplomacy' },
      { value: PeopleOfficialAreaEnum.PublicHealth, label: 'Public Health' },
      { value: PeopleOfficialAreaEnum.Judicial, label: 'Judicial' },
    ],
    []
  )

  const companyTypeOptions = useMemo<
    PeopleFilterOption<PeopleCompanyTypeEnum>[]
  >(
    () => [
      { value: PeopleCompanyTypeEnum.ThinkTank, label: 'Think Tank' },
      { value: PeopleCompanyTypeEnum.Academic, label: 'Academic' },
      { value: PeopleCompanyTypeEnum.Media, label: 'Media' },
      { value: PeopleCompanyTypeEnum.Other, label: 'Other' },
    ],
    []
  )

  return {
    categoryOptions,
    partyOptions,
    congressOptions,
    stateOptions,
    territoryRegionOptions,
    stateOrTerritoryOptions,
    tagOptions,
    officialAreaOptions,
    companyTypeOptions,
  }
}

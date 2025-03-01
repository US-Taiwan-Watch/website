import { useMemo } from 'react'
import {
  PeopleCompanyTypeEnum,
  PeopleOfficialAreaEnum,
  PeopleCategoryEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'
import states from '@/common/assets/states'
import territoriesRegions from '@/common/assets/territories-regions'
import { CongressUtils } from '@/common/business/Congress'

export type PeopleFilterOption<T> = {
  value: T
  label: string
}

export default function usePeopleFilterOptions() {
  const categoryOptions = useMemo<PeopleFilterOption<PeopleCategoryEnum>[]>(
    () => [
      { value: PeopleCategoryEnum.Senator, label: 'Senator' },
      {
        value: PeopleCategoryEnum.HouseRepresentative,
        label: 'House Representative',
      },
      { value: PeopleCategoryEnum.Official, label: 'Official' },
      { value: PeopleCategoryEnum.Expert, label: 'Expert' },
      { value: PeopleCategoryEnum.Other, label: 'Other' },
    ],
    []
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
    () => states.map((state) => ({ value: state, label: state })),
    []
  )

  const territoryRegionOptions = useMemo<PeopleFilterOption<string>[]>(
    () =>
      territoriesRegions.map((territoryRegion) => ({
        value: territoryRegion,
        label: territoryRegion,
      })),
    []
  )

  const stateOrTerritoryOptions = useMemo<PeopleFilterOption<string>[]>(
    () => [...stateOptions, ...territoryRegionOptions],
    [stateOptions, territoryRegionOptions]
  )

  // TODO: 確認 district 怎麼來
  const districtOptions = useMemo<PeopleFilterOption<string>[]>(() => [], [])

  // TODO: 確認 tag 怎麼來
  const tagOptions = useMemo<PeopleFilterOption<string>[]>(() => [], [])

  const officialAreaOptions = useMemo<
    PeopleFilterOption<PeopleOfficialAreaEnum>[]
  >(
    () => [
      {
        value: PeopleOfficialAreaEnum.TradeEconomy,
        label: 'Trade & Economy',
      },
      {
        value: PeopleOfficialAreaEnum.DefenseSecurity,
        label: 'Defense & Security',
      },
      { value: PeopleOfficialAreaEnum.Diplomacy, label: 'Diplomacy' },
      { value: PeopleOfficialAreaEnum.PublicHealth, label: 'Public Health' },
      { value: PeopleOfficialAreaEnum.Judicial, label: 'Judicial' },
      { value: PeopleOfficialAreaEnum.Other, label: 'Other' },
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
    districtOptions,
    tagOptions,
    officialAreaOptions,
    companyTypeOptions,
  }
}

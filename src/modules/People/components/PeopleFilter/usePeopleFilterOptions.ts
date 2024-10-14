import { useMemo } from 'react'
import {
  PeopleAffiliationEnum,
  PeopleAreaEnum,
  PeopleCategoryEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'
import states from '@/modules/People/components/PeopleFilter/assets/states'
import territoriesRegions from '@/modules/People/components/PeopleFilter/assets/territories-regions'
import {
  CURRENT_CONGRESS_SESSION,
  CONGRESS_SESSION_MIN,
} from '@/modules/People/components/PeopleFilter/assets/constants'

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
      { value: PeoplePartyEnum.Democrat, label: 'Democrat' },
      { value: PeoplePartyEnum.Republican, label: 'Republican' },
      { value: PeoplePartyEnum.Independent, label: 'Independent' },
    ],
    []
  )

  const congressOptions = useMemo<PeopleFilterOption<number>[]>(
    () =>
      Array.from(
        { length: CURRENT_CONGRESS_SESSION - CONGRESS_SESSION_MIN + 1 },
        (_, i) => i + CONGRESS_SESSION_MIN
      ).map((congress) => ({
        value: congress,
        label: congress.toString(),
      })),
    []
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

  const areaOptions = useMemo<PeopleFilterOption<PeopleAreaEnum>[]>(
    () => [
      { value: PeopleAreaEnum.TradeEconomy, label: 'Trade & Economy' },
      { value: PeopleAreaEnum.DefenseSecurity, label: 'Defense & Security' },
      { value: PeopleAreaEnum.Diplomacy, label: 'Diplomacy' },
      { value: PeopleAreaEnum.PublicHealth, label: 'Public Health' },
      { value: PeopleAreaEnum.Judicial, label: 'Judicial' },
      { value: PeopleAreaEnum.Other, label: 'Other' },
    ],
    []
  )

  const affiliationOptions = useMemo<
    PeopleFilterOption<PeopleAffiliationEnum>[]
  >(
    () => [
      { value: PeopleAffiliationEnum.ThinkTank, label: 'Think Tank' },
      { value: PeopleAffiliationEnum.Academic, label: 'Academic' },
      { value: PeopleAffiliationEnum.Media, label: 'Media' },
      { value: PeopleAffiliationEnum.Other, label: 'Other' },
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
    areaOptions,
    affiliationOptions,
  }
}

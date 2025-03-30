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
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

export type PeopleFilterOption<T> = {
  value: T
  label: string
}

export default function usePeopleFilterOptions() {
  const { t } = useTranslationClient(['people', 'common'])
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
      {
        value: PeoplePartyEnum.Democratic,
        label: t('party.democratic', { ns: 'common' }),
      },
      {
        value: PeoplePartyEnum.Republican,
        label: t('party.republican', { ns: 'common' }),
      },
      {
        value: PeoplePartyEnum.Independent,
        label: t('party.independent', { ns: 'common' }),
      },
    ],
    [t]
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
        label: t('filter.officialArea.executiveAuthority.value', {
          ns: 'people',
        }),
      },
      {
        value: PeopleOfficialAreaEnum.DefenseSecurity,
        label: t('filter.officialArea.defenseSecurity.value', { ns: 'people' }),
      },
      {
        value: PeopleOfficialAreaEnum.Diplomacy,
        label: t('filter.officialArea.diplomacy.value', { ns: 'people' }),
      },
      {
        value: PeopleOfficialAreaEnum.PublicHealth,
        label: t('filter.officialArea.publicHealth.value', { ns: 'people' }),
      },
      {
        value: PeopleOfficialAreaEnum.Judicial,
        label: t('filter.officialArea.judicial.value', { ns: 'people' }),
      },
    ],
    []
  )

  const companyTypeOptions = useMemo<
    PeopleFilterOption<PeopleCompanyTypeEnum>[]
  >(
    () => [
      {
        value: PeopleCompanyTypeEnum.ThinkTank,
        label: t('filter.companyType.thinkTank.value', { ns: 'people' }),
      },
      {
        value: PeopleCompanyTypeEnum.Academic,
        label: t('filter.companyType.academic.value', { ns: 'people' }),
      },
      {
        value: PeopleCompanyTypeEnum.Media,
        label: t('filter.companyType.media.value', { ns: 'people' }),
      },
      {
        value: PeopleCompanyTypeEnum.Other,
        label: t('filter.companyType.other.value', { ns: 'people' }),
      },
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

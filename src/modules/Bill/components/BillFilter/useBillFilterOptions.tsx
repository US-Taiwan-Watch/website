'use client'

import { Language } from '@/common/lib/i18n/types'
import {
  BillPartyEnum,
  BillTypeEnum,
  BillStatusEnum,
  BillSorterEnum,
} from '@/modules/Bill/components/BillFilter/enums'
import { getAllTags, getCategoriesBills } from '@/modules/Bill/data'
import { Bill } from '@/modules/Bill/classes/Bill'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { findAllPeople } from '@/modules/People/data'
import { People } from '@/modules/People/classes/People'
import TagUtils from '@/modules/Common/Tag.utils'
import { Congress } from '@/common/classes/Congress'

export type BillFilterOption<T> = {
  value: T
  label: string
}

export default function useBillFilterOptions() {
  const { lang } = useParams<{ lang: Language }>()
  const categoriesBills = useMemo(() => getCategoriesBills(), [])
  const categoryOptions = useMemo<BillFilterOption<string>[]>(
    () =>
      Bill.parseCategoriesBills(categoriesBills, lang).map((category) => ({
        value: category.id,
        label: category.name,
      })),
    [categoriesBills, lang]
  )

  const partyOptions = useMemo<BillFilterOption<BillPartyEnum>[]>(
    () => [
      { value: BillPartyEnum.Democratic, label: 'Democratic' },
      { value: BillPartyEnum.Republican, label: 'Republican' },
      { value: BillPartyEnum.Independent, label: 'Independent' },
    ],
    []
  )

  const typeOptions = useMemo<BillFilterOption<BillTypeEnum>[]>(
    () => [
      { value: BillTypeEnum.HouseBill, label: 'H.R. - House Bill' },
      { value: BillTypeEnum.SenateBill, label: 'S. - Senate Bill' },
      {
        value: BillTypeEnum.HouseJointResolution,
        label: 'H.J. Res. - House Joint Resolution',
      },
      {
        value: BillTypeEnum.SenateJointResolution,
        label: 'S.J. Res. - Senate Joint Resolution',
      },
      {
        value: BillTypeEnum.HouseConcurrentResolution,
        label: 'H. Con. Res. - House Concurrent Resolution',
      },
      {
        value: BillTypeEnum.SenateConcurrentResolution,
        label: 'S. Con. Res. - Senate Concurrent Resolution',
      },
      {
        value: BillTypeEnum.HouseSimpleResolution,
        label: 'H. Res. - House Simple Resolution',
      },
      {
        value: BillTypeEnum.SenateSimpleResolution,
        label: 'S. Res. - Senate Simple Resolution',
      },
    ],
    []
  )

  const statusOptions = useMemo<BillFilterOption<BillStatusEnum>[]>(
    () => [
      { value: BillStatusEnum.Introduced, label: 'Introduced' },
      { value: BillStatusEnum.PassedHouse, label: 'Passed House' },
      { value: BillStatusEnum.PassedSenate, label: 'Passed Senate' },
      { value: BillStatusEnum.ToPresident, label: 'To President' },
      { value: BillStatusEnum.BecomeLaw, label: 'Become Law' },
      { value: BillStatusEnum.FailedHouse, label: 'Failed House' },
      { value: BillStatusEnum.FailedSenate, label: 'Failed Senate' },
      { value: BillStatusEnum.AgreedToInHouse, label: 'Agreed to in House' },
      { value: BillStatusEnum.AgreedToInSenate, label: 'Agreed to in Senate' },
      {
        value: BillStatusEnum.ResolvingDifferences,
        label: 'Resolving Differences',
      },
      { value: BillStatusEnum.VetoedByPresident, label: 'Vetoed by President' },
      {
        value: BillStatusEnum.FailedToPassOverVeto,
        label: 'Failed to pass over veto',
      },
      { value: BillStatusEnum.PassedOverVeto, label: 'Passed over veto' },
      {
        value: BillStatusEnum.PocketVetoedByPresident,
        label: 'Pocket vetoed by President',
      },
    ],
    []
  )

  const currentCongressNumber = useMemo(
    () => Congress.getCurrentCongressNumber(),
    []
  )
  const congressOptions = useMemo<BillFilterOption<number>[]>(
    () =>
      Array.from(
        {
          length: currentCongressNumber - Congress.minCongressNumber() + 1,
        },
        (_, i) => i + Congress.minCongressNumber()
      ).map((congress) => ({
        value: congress,
        label: congress.toString(),
      })),
    [currentCongressNumber]
  )

  const sponsorsOptions = useMemo<BillFilterOption<string>[]>(
    () =>
      findAllPeople().map((dto) => {
        const people = People.fromDTO(lang, dto)
        return {
          value: people.id ?? '',
          label: people.name ?? '',
        }
      }),
    [lang]
  )

  const cosponsorsOptions = useMemo(() => sponsorsOptions, [sponsorsOptions])

  const sorterOptions = useMemo<BillFilterOption<BillSorterEnum>[]>(
    () => [
      { value: BillSorterEnum.LatestAction, label: 'Latest Action' },
      { value: BillSorterEnum.Popularity, label: 'Popularity' },
    ],
    []
  )

  const tagOptions = useMemo<BillFilterOption<string>[]>(
    () =>
      (getAllTags()?.docs ?? []).map((tag) => ({
        value: tag?.id ?? '',
        label: TagUtils.parseTagName(lang, tag) ?? '',
      })),
    [lang]
  )

  return {
    categoryOptions,
    partyOptions,
    typeOptions,
    statusOptions,
    congressOptions,
    sponsorsOptions,
    cosponsorsOptions,
    sorterOptions,
    tagOptions,
  }
}

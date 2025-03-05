'use client'

import { Language } from '@/common/lib/i18n/types'
import {
  BillPartyEnum,
  BillTypeEnum,
  BillStatusEnum,
  BillSorterEnum,
} from '@/modules/Bill/components/BillFilter/enums'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import useCategoriesBills from '@/modules/Bill/hooks/useCategoriesBills'
import { CongressUtils } from '@/common/business/Congress'
import { useQuery } from '@apollo/client'
import { QUERY_BILL_FILTER_SPONSORS } from '@/modules/Bill/graphql/gql'
import {
  BillFilterSponsorsQuery,
  BillFilterSponsorsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import { PeopleUtils } from '@/modules/People/business/People'
import useTags from '@/modules/Common/hooks/useTags'

export type BillFilterOption<T> = {
  value: T
  label: string
}

export default function useBillFilterOptions() {
  const { lang } = useParams<{ lang: Language }>()

  const { categoriesBills } = useCategoriesBills(lang)

  const categoryOptions = useMemo<BillFilterOption<string>[]>(
    () =>
      categoriesBills.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    [categoriesBills]
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
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )
  const congressOptions = useMemo<BillFilterOption<number>[]>(
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

  // TODO: autocomplete sponsors
  const { data: sponsorsData } = useQuery<
    BillFilterSponsorsQuery,
    BillFilterSponsorsQueryVariables
  >(QUERY_BILL_FILTER_SPONSORS)

  const sponsorsOptions = useMemo<BillFilterOption<string>[]>(() => {
    if (!sponsorsData?.Peoples) return []
    return (
      sponsorsData.Peoples.docs
        ?.filter((sponsor) => !isNull(sponsor))
        .map((sponsor) => PeopleUtils.parse(lang, sponsor))
        .map((sponsor) => ({
          value: sponsor.id ?? '',
          label: sponsor.name ?? '',
        })) ?? []
    )
  }, [sponsorsData, lang])

  const cosponsorsOptions = useMemo(() => sponsorsOptions, [sponsorsOptions])

  const sorterOptions = useMemo<BillFilterOption<BillSorterEnum>[]>(
    () => [
      { value: BillSorterEnum.LatestAction, label: 'Latest Action' },
      { value: BillSorterEnum.Popularity, label: 'Popularity' },
    ],
    []
  )

  const { tags } = useTags()

  const tagOptions = useMemo<BillFilterOption<string>[]>(
    () =>
      tags.map((tag) => ({
        value: tag?.id ?? '',
        label: tag?.name ?? '',
      })),
    [tags]
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

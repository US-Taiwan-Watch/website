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
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

export type BillFilterOption<T> = {
  value: T
  label: string
}

export default function useBillFilterOptions() {
  const { t } = useTranslationClient(['bill', 'common'])
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
      {
        value: BillPartyEnum.Democratic,
        label: t('party.democratic', { ns: 'common' }),
      },
      {
        value: BillPartyEnum.Republican,
        label: t('party.republican', { ns: 'common' }),
      },
      {
        value: BillPartyEnum.Independent,
        label: t('party.independent', { ns: 'common' }),
      },
    ],
    [t]
  )

  const typeOptions = useMemo<BillFilterOption<BillTypeEnum>[]>(
    () => [
      {
        value: BillTypeEnum.HouseBill,
        label: t('filter.type.hr.value', { ns: 'bill' }),
      },
      {
        value: BillTypeEnum.SenateBill,
        label: t('filter.type.s.value', { ns: 'bill' }),
      },
      {
        value: BillTypeEnum.HouseJointResolution,
        label: t('filter.type.hjres.value', { ns: 'bill' }),
      },
      {
        value: BillTypeEnum.SenateJointResolution,
        label: t('filter.type.sjres.value', { ns: 'bill' }),
      },
      {
        value: BillTypeEnum.HouseConcurrentResolution,
        label: t('filter.type.hconres.value', { ns: 'bill' }),
      },
      {
        value: BillTypeEnum.SenateConcurrentResolution,
        label: t('filter.type.sconres.value', { ns: 'bill' }),
      },
      {
        value: BillTypeEnum.HouseSimpleResolution,
        label: t('filter.type.hres.value', { ns: 'bill' }),
      },
      {
        value: BillTypeEnum.SenateSimpleResolution,
        label: t('filter.type.sres.value', { ns: 'bill' }),
      },
    ],
    [t]
  )

  const statusOptions = useMemo<BillFilterOption<BillStatusEnum>[]>(
    () => [
      {
        value: BillStatusEnum.Introduced,
        label: t('filter.status.introduced.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.PassedHouse,
        label: t('filter.status.passedHouse.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.PassedSenate,
        label: t('filter.status.passedSenate.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.ToPresident,
        label: t('filter.status.toPresident.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.BecomeLaw,
        label: t('filter.status.becomeLaw.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.FailedHouse,
        label: t('filter.status.failedHouse.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.FailedSenate,
        label: t('filter.status.failedSenate.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.AgreedToInHouse,
        label: t('filter.status.agreedToInHouse.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.AgreedToInSenate,
        label: t('filter.status.agreedToInSenate.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.ResolvingDifferences,
        label: t('filter.status.resolvingDifferences.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.VetoedByPresident,
        label: t('filter.status.vetoedByPresident.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.FailedToPassOverVeto,
        label: t('filter.status.failedToPassOverVeto.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.PassedOverVeto,
        label: t('filter.status.passedOverVeto.value', { ns: 'bill' }),
      },
      {
        value: BillStatusEnum.PocketVetoedByPresident,
        label: t('filter.status.pocketVetoedByPresident.value', { ns: 'bill' }),
      },
    ],
    [t]
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
      {
        value: BillSorterEnum.LatestAction,
        label: t('filter.sorter.latestAction.value', { ns: 'bill' }),
      },
      {
        value: BillSorterEnum.Popularity,
        label: t('filter.sorter.popularity.value', { ns: 'bill' }),
      },
    ],
    [t]
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

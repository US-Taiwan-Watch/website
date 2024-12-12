'use client'

import {
  CONGRESS_NUMBER_MIN,
  CURRENT_CONGRESS_NUMBER,
} from '@/common/assets/constants'
import { Language } from '@/common/lib/i18n/types'
import {
  BillPartyEnum,
  BillTypeEnum,
  BillStatusEnum,
  BillSorterEnum,
} from '@/modules/Bill/components/BillFilter/enums'
import {
  BILL_SPONSOR_MOCK,
  BILL_TAG_MOCK,
  getCategoriesBills,
} from '@/modules/Bill/data'
import { Bill } from '@/modules/Bill/classes/Bill'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export type BillFilterOption<T> = {
  value: T
  label: string
}

export default function useBillFilterOptions() {
  const { lang } = useParams<{ lang: Language }>()
  const categoriesBills = getCategoriesBills()
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
      {
        value: BillStatusEnum.ProvKillVeto,
        label: 'Vetoed (No Override Attempt)',
      },
      {
        value: BillStatusEnum.FailSecondSenate,
        label: 'Passed House, Failed Senate',
      },
      {
        value: BillStatusEnum.PassedBill,
        label: 'Passed House & Senate (President next)',
      },
      {
        value: BillStatusEnum.PassedConstamend,
        label: 'Agreed To (Constitutional Amendment Proposal)',
      },
      {
        value: BillStatusEnum.PassBackSenate,
        label: 'Passed Senate with Changes (back to House)',
      },
      {
        value: BillStatusEnum.VetoedOverrideFailSecondHouse,
        label: 'Vetoed & Override Passed Senate, Failed in House',
      },
      { value: BillStatusEnum.FailOriginatingHouse, label: 'Failed House' },
      {
        value: BillStatusEnum.FailSecondHouse,
        label: 'Passed Senate, Failed House',
      },
      {
        value: BillStatusEnum.OverridePassOverHouse,
        label: 'Vetoed & House Overrides (Senate Next)',
      },
      {
        value: BillStatusEnum.OverridePassOverSenate,
        label: 'Vetoed & Senate Overrides (House Next)',
      },
      {
        value: BillStatusEnum.PassBackHouse,
        label: 'Passed House with Changes (back to Senate)',
      },
      { value: BillStatusEnum.ProvKillCloturefailed, label: 'Failed Cloture' },
      {
        value: BillStatusEnum.EnactedVetoOverride,
        label: 'Enacted — Veto Overridden',
      },
      {
        value: BillStatusEnum.PassedConcurrentres,
        label: 'Agreed To (Concurrent Resolution)',
      },
      {
        value: BillStatusEnum.ProvKillSuspensionfailed,
        label: 'Failed Under Suspension',
      },
      {
        value: BillStatusEnum.PassedSimpleres,
        label: 'Agreed To (Simple Resolution)',
      },
      { value: BillStatusEnum.VetoedPocket, label: 'Pocket Vetoed' },
      {
        value: BillStatusEnum.VetoedOverrideFailOriginatingHouse,
        label: 'Vetoed & Override Failed in House',
      },
      {
        value: BillStatusEnum.ConferencePassedSenate,
        label: 'Conference Report Agreed to by Senate (House next)',
      },
      { value: BillStatusEnum.FailOriginatingSenate, label: 'Failed Senate' },
      {
        value: BillStatusEnum.PassOverSenate,
        label: 'Passed Senate (House next)',
      },
      {
        value: BillStatusEnum.ProvKillPingpongfail,
        label: 'Failed to Resolve Differences',
      },
      {
        value: BillStatusEnum.EnactedSigned,
        label: 'Enacted — Signed by the President',
      },
      {
        value: BillStatusEnum.PassOverHouse,
        label: 'Passed House (Senate next)',
      },
      {
        value: BillStatusEnum.ConferencePassedHouse,
        label: 'Conference Report Agreed to by House (Senate next)',
      },
      { value: BillStatusEnum.Reported, label: 'Ordered Reported' },
      {
        value: BillStatusEnum.VetoedOverrideFailSecondSenate,
        label: 'Vetoed & Override Passed House, Failed in Senate',
      },
      {
        value: BillStatusEnum.VetoedOverrideFailOriginatingSenate,
        label: 'Vetoed & Override Failed in Senate',
      },
      {
        value: BillStatusEnum.EnactedTendayrule,
        label: 'Enacted — By 10 Day Rule',
      },
      { value: BillStatusEnum.Introduced, label: 'Introduced' },
      {
        value: BillStatusEnum.EnactedUnknown,
        label: 'Enacted (Unknown Final Step)',
      },
    ],
    []
  )

  const congressOptions = useMemo<BillFilterOption<number>[]>(
    () =>
      Array.from(
        { length: CURRENT_CONGRESS_NUMBER - CONGRESS_NUMBER_MIN + 1 },
        (_, i) => i + CONGRESS_NUMBER_MIN
      ).map((congress) => ({
        value: congress,
        label: congress.toString(),
      })),
    []
  )

  const sponsorsOptions = useMemo<BillFilterOption<number>[]>(
    () =>
      BILL_SPONSOR_MOCK.map((sponsor) => ({
        value: Number(sponsor.id),
        label: sponsor.name ?? '',
      })),
    []
  )

  const cosponsorsOptions = useMemo(() => sponsorsOptions, [sponsorsOptions])

  const sorterOptions = useMemo<BillFilterOption<BillSorterEnum>[]>(
    () => [
      { value: BillSorterEnum.LatestAction, label: 'Latest Action' },
      { value: BillSorterEnum.Popularity, label: 'Popularity' },
    ],
    []
  )

  // TODO: 確認 tag 怎麼來
  const tagOptions = useMemo<BillFilterOption<string>[]>(
    () =>
      BILL_TAG_MOCK.map((tag) => ({
        value: tag,
        label: tag,
      })),
    []
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

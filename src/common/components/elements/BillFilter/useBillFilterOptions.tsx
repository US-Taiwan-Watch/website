import {
  BillCategoryEnum,
  BillPartyEnum,
  BillTypeEnum,
  BillStatusEnum,
} from '@/common/components/elements/BillFilter/enums'
import { useMemo } from 'react'

export type BillFilterOption<T> = {
  value: T
  label: string
}

export default function useBillFilterOptions() {
  const categoryOptions = useMemo<BillFilterOption<BillCategoryEnum>[]>(
    () => [
      { value: BillCategoryEnum.ArmsSales, label: 'Arms Sales/Transfer' },
      { value: BillCategoryEnum.Democracy, label: 'Democracy' },
      {
        value: BillCategoryEnum.InternationalParticipation,
        label: 'International Participation',
      },
      { value: BillCategoryEnum.TaiwanDefense, label: "Taiwan's Defense" },
      {
        value: BillCategoryEnum.USTaiwanRelations,
        label: 'U.S.-Taiwan Relations',
      },
      { value: BillCategoryEnum.GlobalHealth, label: 'Global health' },
      {
        value: BillCategoryEnum.TaiwanRelationsAct,
        label: 'Taiwan Relations Act',
      },
      { value: BillCategoryEnum.TradeEconomy, label: 'Trade/Economy' },
      { value: BillCategoryEnum.Other, label: 'Other' },
    ],
    []
  )

  const partyOptions = useMemo<BillFilterOption<BillPartyEnum>[]>(
    () => [
      { value: BillPartyEnum.Democrat, label: 'Democrat' },
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

  return { categoryOptions, partyOptions, typeOptions, statusOptions }
}

export enum BillCategoryEnum {
  ArmsSales = 1,
  Democracy,
  InternationalParticipation,
  TaiwanDefense,
  USTaiwanRelations,
  GlobalHealth,
  TaiwanRelationsAct,
  TradeEconomy,
  Other,
}

/**
 * TODO: TBD 需要與 Party 的 enum 同步？
 */
export enum BillPartyEnum {
  Democrat = 1,
  Republican,
  Independent,
}

export enum BillTypeEnum {
  HouseBill = 1,
  SenateBill,
  HouseJointResolution,
  SenateJointResolution,
  HouseConcurrentResolution,
  SenateConcurrentResolution,
  HouseSimpleResolution,
  SenateSimpleResolution,
}

export enum BillStatusEnum {
  ProvKillVeto = 1,
  FailSecondSenate,
  PassedBill,
  PassedConstamend,
  PassBackSenate,
  VetoedOverrideFailSecondHouse,
  FailOriginatingHouse,
  FailSecondHouse,
  OverridePassOverHouse,
  OverridePassOverSenate,
  PassBackHouse,
  ProvKillCloturefailed,
  EnactedVetoOverride,
  PassedConcurrentres,
  ProvKillSuspensionfailed,
  PassedSimpleres,
  VetoedPocket,
  VetoedOverrideFailOriginatingHouse,
  ConferencePassedSenate,
  FailOriginatingSenate,
  PassOverSenate,
  ProvKillPingpongfail,
  EnactedSigned,
  PassOverHouse,
  ConferencePassedHouse,
  Reported,
  VetoedOverrideFailSecondSenate,
  VetoedOverrideFailOriginatingSenate,
  EnactedTendayrule,
  Introduced,
  EnactedUnknown,
}

export enum BillSorterEnum {
  LatestAction = 1,
  Popularity,
}

/**
 * TODO: TBD 需要與 Party 的 enum 同步？
 */
export enum BillPartyEnum {
  Democratic = 1,
  Republican,
  Independent,
}

export enum BillTypeEnum {
  HouseBill = 'hr',
  SenateBill = 's',
  HouseJointResolution = 'hjres',
  SenateJointResolution = 'sjres',
  HouseConcurrentResolution = 'hconres',
  SenateConcurrentResolution = 'sconres',
  HouseSimpleResolution = 'hres',
  SenateSimpleResolution = 'sres',
}

export enum BillStatusEnum {
  AgreedToInHouse = 'agreedToInHouse',
  AgreedToInSenate = 'agreedToInSenate',
  BecomeLaw = 'becomeLaw',
  FailedHouse = 'failedHouse',
  FailedSenate = 'failedSenate',
  FailedToPassOverVeto = 'failedToPassOverVeto',
  Introduced = 'introduced',
  PassedHouse = 'passedHouse',
  PassedOverVeto = 'passedOverVeto',
  PassedSenate = 'passedSenate',
  PocketVetoedByPresident = 'pocketVetoedByPresident',
  ResolvingDifferences = 'resolvingDifferences',
  ToPresident = 'toPresident',
  VetoedByPresident = 'vetoedByPresident',
}

export enum BillSorterEnum {
  LatestAction = 1,
  Popularity,
}

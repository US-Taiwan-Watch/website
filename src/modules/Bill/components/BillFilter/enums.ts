export enum BillPartyEnum {
  Democratic = 'democratic',
  Republican = 'republican',
  Independent = 'independent',
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
  BecameLaw = 'becameLaw',
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
  LatestAction = '-latestActionTime',
  Popularity = '-popularityRank',
}

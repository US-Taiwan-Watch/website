export enum PeopleCategoryEnum {
  Senator = 1,
  HouseRepresentative,
  Official,
  Expert,
  Other,
}

/**
 * TODO: TBD 需要與 Party 的 enum 同步？
 */
export enum PeoplePartyEnum {
  Democratic = 'democratic',
  Republican = 'republican',
  Independent = 'independent',
}

export enum PeopleOfficialAreaEnum {
  ExecutiveAuthority = 'executiveAuth',
  Economy = 'economy',
  DefenseSecurity = 'defenseSecurity',
  Diplomacy = 'diplomacy',
  PublicHealth = 'publicHealth',
  Judicial = 'judicial',
}

export enum PeopleCompanyTypeEnum {
  ThinkTank = 'thinktank',
  Academic = 'academic',
  Media = 'media',
  Other = 'other',
}

import { z } from 'zod'
import {
  PeopleAreaEnum,
  PeopleAffiliationEnum,
  PeopleCategoryEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'
import {
  CURRENT_CONGRESS_SESSION,
  CONGRESS_SESSION_MIN,
} from '@/common/assets/constants'
import { KeysOfUnion } from '@/common/types/common'

const congressSchema = z.union([
  // Maybe string
  z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().min(CONGRESS_SESSION_MIN).max(CURRENT_CONGRESS_SESSION))
    .optional(),
  // Maybe number
  z.number().min(CONGRESS_SESSION_MIN).max(CURRENT_CONGRESS_SESSION).optional(),
])

export const senatorSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Senator),
  congress: congressSchema,
  party: z.nativeEnum(PeoplePartyEnum).optional(),
  state: z.string().optional(),
  tag: z.string().optional(),
})

export type SenatorFilterInput = z.input<typeof senatorSchema>

export const houseRepresentativeSchema = z.object({
  category: z.literal(PeopleCategoryEnum.HouseRepresentative),
  congress: congressSchema,
  party: z.nativeEnum(PeoplePartyEnum).optional(),
  stateRegion: z.string().optional(),
  district: z.number().min(1).optional(),
  tag: z.string().optional(),
})

export type HouseRepresentativeFilterInput = z.input<
  typeof houseRepresentativeSchema
>

export const officialSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Official),
  area: z.nativeEnum(PeopleAreaEnum).optional(),
})

export type OfficialFilterInput = z.input<typeof officialSchema>

export const expertSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Expert),
  affiliation: z.nativeEnum(PeopleAffiliationEnum).optional(),
})

export type ExpertFilterInput = z.input<typeof expertSchema>

export const otherSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Other),
})

export type OtherFilterInput = z.input<typeof otherSchema>

export const peopleFilterSchema = z.discriminatedUnion('category', [
  senatorSchema,
  houseRepresentativeSchema,
  officialSchema,
  expertSchema,
  otherSchema,
])

export type PeopleFilterInput = z.input<typeof peopleFilterSchema>
export type PeopleFilterInputKey = KeysOfUnion<PeopleFilterInput>

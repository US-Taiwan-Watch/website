import { z } from 'zod'
import {
  PeopleOfficialAreaEnum,
  PeopleCompanyTypeEnum,
  PeopleCategoryEnum,
  PeoplePartyEnum,
} from '@/modules/People/components/PeopleFilter/enums'
import { KeysOfUnion } from '@/common/types/common'
import { CongressUtils } from '@/common/business/Congress'

const currentCongressNumber = CongressUtils.getCurrentCongressNumber()

const congressSchema = z.array(
  z.number().min(CongressUtils.minCongressNumber()).max(currentCongressNumber)
)

const partySchema = z.array(z.nativeEnum(PeoplePartyEnum))

export const senatorSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Senator),
  congress: congressSchema.optional(),
  party: partySchema.optional(),
  state: z.array(z.string()).optional(),
  tag: z.array(z.string()).optional(),
})

export type SenatorFilterInput = z.input<typeof senatorSchema>

export const houseRepresentativeSchema = z.object({
  category: z.literal(PeopleCategoryEnum.HouseRepresentative),
  congress: congressSchema.optional(),
  party: partySchema.optional(),
  stateRegion: z.array(z.string()).optional(),
  district: z.number().min(1).optional(),
  tag: z.array(z.string()).optional(),
})

export type HouseRepresentativeFilterInput = z.input<
  typeof houseRepresentativeSchema
>

export const officialSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Official),
  officialArea: z.array(z.nativeEnum(PeopleOfficialAreaEnum)).optional(),
})

export type OfficialFilterInput = z.input<typeof officialSchema>

export const expertSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Expert),
  companyType: z.array(z.nativeEnum(PeopleCompanyTypeEnum)).optional(),
})

export type ExpertFilterInput = z.input<typeof expertSchema>

export const otherSchema = z.object({
  category: z.literal(PeopleCategoryEnum.Other),
})

export type OtherFilterInput = z.input<typeof otherSchema>

export const defaultCategory = '-1'
export const emptySchema = z.object({
  category: z.literal(defaultCategory),
})

export const peopleFilterSchema = z.discriminatedUnion('category', [
  senatorSchema,
  houseRepresentativeSchema,
  officialSchema,
  expertSchema,
  otherSchema,
  emptySchema,
])

export type PeopleFilterInput = z.input<typeof peopleFilterSchema>
export type PeopleFilterOutput = z.output<typeof peopleFilterSchema>
export type PeopleFilterInputKey = KeysOfUnion<PeopleFilterInput>

export const defaultPeopleFilterInput: PeopleFilterInput = {
  category: defaultCategory,
}

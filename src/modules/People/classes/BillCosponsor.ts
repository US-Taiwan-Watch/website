import { People } from '@/modules/People/classes/People'
import { Bill_Cosponsors as BillCosponsorsDto } from '@/common/lib/graphql/__generated__/graphql'
import { isString, isUndefined } from 'lodash-es'
import { Language } from '@/common/lib/i18n/types'

interface BillCosponsorArgs {
  people?: People
  constituency?: string
  cosponsoredAt?: string
}

export class BillCosponsor {
  people?: People
  constituency?: string
  cosponsoredAt?: string

  constructor(private readonly billCosponsor: BillCosponsorArgs) {
    if (!isUndefined(billCosponsor.people)) {
      this.people = billCosponsor.people
    }
    if (isString(billCosponsor.constituency)) {
      this.constituency = billCosponsor.constituency
    }
    if (isString(billCosponsor.cosponsoredAt)) {
      this.cosponsoredAt = billCosponsor.cosponsoredAt
    }
  }

  static fromDto(lang: Language, dto: BillCosponsorsDto) {
    return new BillCosponsor({
      people: dto.people ? People.fromDTO(lang, dto.people) : undefined,
      constituency: dto.constituency ?? '',
      cosponsoredAt: dto.cosponsoredAt?.datetime ?? '',
    })
  }
}

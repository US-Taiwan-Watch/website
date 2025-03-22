import { Bill } from '@/modules/Bill/business/Bill'
import {
  FilterCategory,
  FilterOption,
} from '@/modules/Bill/components/SingleBill/CosponsorFilterContent/DialogFilter'
import { Party } from '@/common/enums/Party'
import CommonUtils from '@/modules/Common/Common.utils'

// NOTE: 可任意擴充文字顯示方式，例如縮寫、加入符號等
type DisplayOption = 'capitalize' | 'titlecase'

const createOptions = (
  countMap: Map<string, number>,
  displayOption?: DisplayOption
): FilterOption[] => {
  const displayMap: Record<DisplayOption, (key: string) => string> = {
    capitalize: (key) =>
      key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
    titlecase: (key) => CommonUtils.formatConstituency(key),
  }

  return Array.from(countMap.entries()).map(([key, count]) => ({
    id: key,
    name: displayOption ? displayMap[displayOption](key) : key,
    count,
  }))
}

export const createFilterCategories = (bill: Bill): FilterCategory[] => {
  const partyCountMap: Map<Party, number> = new Map()
  const constituencyCountMap: Map<string, number> = new Map()

  bill.cosponsors?.forEach((cosponsor) => {
    const party = cosponsor.people?.party ?? Party.INDEPENDENT
    const count = partyCountMap.get(party) ?? 0
    partyCountMap.set(party, count + 1)

    if (cosponsor.constituency) {
      const count = constituencyCountMap.get(cosponsor.constituency) ?? 0
      constituencyCountMap.set(cosponsor.constituency, count + 1)
    }
  })

  return [
    {
      id: 'party',
      name: 'Party',
      options: createOptions(partyCountMap, 'capitalize'),
    },
    {
      id: 'constituency',
      name: 'U.S. State or Territory',
      options: createOptions(constituencyCountMap, 'titlecase'),
    },
  ]
}

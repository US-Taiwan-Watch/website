import { Bill } from '@/modules/Bill/classes/Bill'
import {
  FilterCategory,
  FilterOption,
} from '@/modules/Bill/components/SingleBill/CosponsorDialog/DialogFilter'
import { Party } from '@/common/enums/Party'

// NOTE: 可任意擴充文字顯示方式，例如縮寫、加入符號等，目前以三個 cases 示意
type DisplayOption = 'uppercase' | 'lowercase' | 'capitalize'

const createOptions = (
  countMap: Map<string, number>,
  displayOption?: DisplayOption
): FilterOption[] => {
  const displayMap: Record<DisplayOption, (key: string) => string> = {
    uppercase: (key) => key.toUpperCase(),
    lowercase: (key) => key.toLowerCase(),
    capitalize: (key) =>
      key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
  }

  return Array.from(countMap.entries()).map(([key, count]) => ({
    id: key,
    name: displayOption ? displayMap[displayOption](key) : key,
    count,
  }))
}

export const getFilterConstituency = (constituency: string): string => {
  return constituency.toUpperCase()
}

export const createFilterCategories = (bill: Bill): FilterCategory[] => {
  const partyCountMap: Map<Party, number> = new Map()
  const constituencyCountMap: Map<string, number> = new Map()

  bill.cosponsors?.forEach((cosponsor) => {
    const party = cosponsor.party ?? Party.INDEPENDENT
    const count = partyCountMap.get(party) ?? 0
    partyCountMap.set(party, count + 1)

    if (cosponsor.constituency) {
      const constituency = getFilterConstituency(cosponsor.constituency)
      const count = constituencyCountMap.get(constituency) ?? 0
      constituencyCountMap.set(constituency, count + 1)
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
      options: createOptions(constituencyCountMap),
    },
  ]
}

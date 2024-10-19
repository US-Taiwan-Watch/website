import { Bill } from '@/modules/Bill/classes/Bill'
import {
  FilterCategory,
  FilterOption,
} from '@/modules/Bill/components/SingleBill/DialogFilter'

enum FilterParty {
  DEMOCRATIC = 'DEMOCRATIC',
  REPUBLICAN = 'REPUBLICAN',
  INDEPENDENT = 'INDEPENDENT',
}

type DisplayOption = 'uppercase' | 'lowercase' | 'capitalize'

const createOptions = (
  countMap: Map<string, number>,
  displayOption?: DisplayOption
): FilterOption<string>[] => {
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

export const createFilterCategories = (
  bill: Bill
): FilterCategory<string>[] => {
  const partyCountMap: Map<FilterParty, number> = new Map()
  const constituencyCountMap: Map<string, number> = new Map()

  bill.cosponsors?.forEach((cosponsor) => {
    if (cosponsor.party) {
      const party: FilterParty = (() => {
        const _party = cosponsor.party.toUpperCase()
        return _party === FilterParty.DEMOCRATIC ||
          _party === FilterParty.REPUBLICAN
          ? _party
          : FilterParty.INDEPENDENT
      })()
      const count = partyCountMap.get(party) ?? 0
      partyCountMap.set(party, count + 1)
    }

    if (cosponsor.constituency) {
      const constituency = cosponsor.constituency.toUpperCase()
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

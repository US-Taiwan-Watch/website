'use client'

import { Bill } from '@/modules/Bill/business/Bill'
import { Grid2 } from '@mui/material'
import DialogFilter from '@/modules/Bill/components/SingleBill/CosponsorFilterContent/DialogFilter'
import useDialogFilter from '@/modules/Bill/components/SingleBill/CosponsorFilterContent/useDialogFilter'
import CosponsorTable from '@/modules/Bill/components/SingleBill/CosponsorFilterContent/CosponsorTable'
import { useMemo } from 'react'
import { createFilterCategories } from '@/modules/Bill/components/SingleBill/CosponsorFilterContent/utils'
import { BillCosponsor } from '@/modules/People/business/BillCosponsor'

type Props = {
  bill: Bill
}

export default function CosponsorFilterContent({ bill }: Props) {
  const { selectedOptionList, handleSelectOption, clearAll } = useDialogFilter()
  const filterCategories = useMemo(() => createFilterCategories(bill), [bill])

  const cosponsors = useMemo<BillCosponsor[]>(() => {
    return bill.cosponsors.filter(({ people, constituency }) => {
      const partyMatch =
        selectedOptionList.party.length && people?.party
          ? selectedOptionList.party.includes(people.party)
          : true

      const constituencyMatch = selectedOptionList.constituency.length
        ? selectedOptionList.constituency.includes(constituency ?? '')
        : true

      return partyMatch && constituencyMatch
    })
  }, [bill, selectedOptionList])

  return (
    /* NOTE: 鎖一個固定高度，避免 filter 改變導致畫面跳動 */
    <Grid2 container mt={2} spacing={2} height="500px">
      <Grid2 size={3} pl={1} pt="3px">
        <DialogFilter
          selectedOptionList={selectedOptionList}
          onSelectOption={handleSelectOption}
          clearAll={clearAll}
          categories={filterCategories}
        />
      </Grid2>
      <Grid2 size={9}>
        <CosponsorTable cosponsors={cosponsors} />
      </Grid2>
    </Grid2>
  )
}

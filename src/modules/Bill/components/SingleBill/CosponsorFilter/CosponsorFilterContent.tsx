'use client'

import { Grid2 } from '@mui/material'
import CosponsorFilter, {
  FilterCategory,
  FilterOption,
} from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorFilter'
import { SelectedOption } from '@/modules/Bill/components/SingleBill/CosponsorFilter/useCosponsorFilter'
import CosponsorTable from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorTable'
import { BillCosponsor } from '@/modules/People/business/BillCosponsor'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import CosponsorList from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorList'

type Props = {
  cosponsors: BillCosponsor[]
  selectedOptionList: SelectedOption
  handleSelectOption: (
    categoryId: FilterCategory['id'],
    optionId: FilterOption['id']
  ) => void
  clearAll: () => void
  filterCategories: FilterCategory[]
}

export default function CosponsorFilterContent({
  cosponsors,
  selectedOptionList,
  handleSelectOption,
  clearAll,
  filterCategories,
}: Props) {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return <CosponsorList cosponsors={cosponsors} />
  }

  return (
    /* NOTE: 鎖一個固定高度，避免 filter 改變導致畫面跳動 */
    <Grid2 container mt={2} spacing={2} height="500px">
      <Grid2 size={3} pl={1} pt="3px">
        <CosponsorFilter
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

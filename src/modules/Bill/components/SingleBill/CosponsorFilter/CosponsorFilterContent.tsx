'use client'

import { Grid2, useTheme } from '@mui/material'
import CosponsorFilter, {
  FilterCategory,
  FilterOption,
} from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorFilter'
import { SelectedOption } from '@/modules/Bill/components/SingleBill/CosponsorFilter/useCosponsorFilter'
import CosponsorTable from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorTable'
import { BillCosponsor } from '@/modules/People/business/BillCosponsor'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import CosponsorList from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorList'
import { USTWTheme } from '@/common/lib/mui/theme'

type CosponsorFilterContentProps = {
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
}: CosponsorFilterContentProps) {
  const theme = useTheme<USTWTheme>()
  const { isMobile } = useResponsive()

  if (isMobile) {
    return <CosponsorList cosponsors={cosponsors} />
  }

  return (
    <Grid2 container pt={2} spacing={2} maxHeight="50dvh">
      <Grid2 size={3}>
        <div style={{ position: 'sticky', top: theme.spacing(2) }}>
          <CosponsorFilter
            selectedOptionList={selectedOptionList}
            onSelectOption={handleSelectOption}
            clearAll={clearAll}
            categories={filterCategories}
          />
        </div>
      </Grid2>
      <Grid2 size={9}>
        <CosponsorTable cosponsors={cosponsors} />
      </Grid2>
    </Grid2>
  )
}

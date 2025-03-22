'use client'

import CosponsorFilter, {
  FilterCategory,
  FilterOption,
} from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorFilter'
import UContentCard from '@/common/components/atoms/UContentCard'
import UIconButton from '@/common/components/atoms/UIconButton'
import { FilterIcon, CloseIcon } from '@/common/styles/assets/Icons'
import { SelectedOption } from '@/modules/Bill/components/SingleBill/CosponsorFilter/useCosponsorFilter'
import UContentCardDrawer from '@/common/components/atoms/UContentCardDrawer'
import { memo } from 'react'
import useModal from '@/common/hooks/useModal'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'

interface DrawerFilterProps {
  selectedOptionList: SelectedOption
  handleSelectOption: (
    categoryId: FilterCategory['id'],
    optionId: FilterOption['id']
  ) => void
  clearAll: () => void
  filterCategories: FilterCategory[]
}

const DrawerFilter = memo(function DrawerFilter({
  selectedOptionList,
  handleSelectOption,
  clearAll,
  filterCategories,
}: DrawerFilterProps) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <UIconButton
        variant="text"
        color="inherit"
        size="small"
        onClick={handleOpenModal}
      >
        <FilterIcon />
      </UIconButton>
      <UContentCardDrawer
        anchor="bottom"
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{
          zIndex: 1500,
        }}
        cardProps={{
          sx: {
            backgroundColor: theme.color.neutral[100],
          },
        }}
      >
        <UContentCard
          withHeader
          headerProps={{
            title: 'Filter',
            icon: <FilterIcon />,
            action: (
              <UIconButton
                variant="rounded"
                color="inherit"
                size="small"
                onClick={handleCloseModal}
              >
                <CloseIcon sx={{ color: theme.color.common.black }} />
              </UIconButton>
            ),
            sx: {
              borderBottom: `1px solid ${theme.color.neutral[300]}`,
            },
          }}
          popupProps={{
            isPopup: true,
          }}
          sx={{
            padding: `0 !important`,
            border: 'none',
            borderRadius: 0,
            backgroundColor: theme.color.neutral[100],
          }}
        >
          <CosponsorFilter
            selectedOptionList={selectedOptionList}
            onSelectOption={handleSelectOption}
            clearAll={clearAll}
            categories={filterCategories}
          />
        </UContentCard>
      </UContentCardDrawer>
    </>
  )
})

export default DrawerFilter

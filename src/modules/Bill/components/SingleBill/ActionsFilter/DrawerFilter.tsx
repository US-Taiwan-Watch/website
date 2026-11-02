'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardHeader from '@/common/components/atoms/UContentCardHeader'
import UContentCardContent from '@/common/components/atoms/UContentCardContent'
import UIconButton from '@/common/components/atoms/UIconButton'
import { FilterIcon, CloseIcon } from '@/common/styles/assets/Icons'
import UContentCardDrawer from '@/common/components/atoms/UContentCardDrawer'
import { memo } from 'react'
import useModal from '@/common/hooks/useModal'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import ActionsFilter, {
  ActionsType,
} from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilter'

interface DrawerFilterProps {
  selectedActionsType: ActionsType
  onSelectActionsType: (actionsType: ActionsType) => void
}

const DrawerFilter = memo(function DrawerFilter({
  selectedActionsType,
  onSelectActionsType,
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
          '& .MuiPaper-root': {
            backgroundColor: theme.color.neutral[100],
          },
        }}
      >
        <UContentCard
          sx={{
            padding: 0,
            border: 'none',
            borderRadius: 0,
            backgroundColor: theme.color.neutral[100],
          }}
        >
          <UContentCardHeader
            variant="drawer"
            title="Filter"
            icon={<FilterIcon />}
            action={
              <UIconButton
                variant="rounded"
                color="inherit"
                size="small"
                onClick={handleCloseModal}
              >
                <CloseIcon sx={{ color: theme.color.common.black }} />
              </UIconButton>
            }
            sx={{
              borderBottom: `1px solid ${theme.color.neutral[300]}`,
            }}
          />
          <UContentCardContent variant="drawer">
            <ActionsFilter
              selectedActionsType={selectedActionsType}
              onSelectActionsType={onSelectActionsType}
            />
          </UContentCardContent>
        </UContentCard>
      </UContentCardDrawer>
    </>
  )
})

export default DrawerFilter

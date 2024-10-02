'use client'

import { Select, MenuItem, useTheme, Divider } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import UButton from '@/common/components/atoms/UButton'
import { BillFilterState } from '@/common/components/elements/BillFilter/useBillFilter'
import useBillFilterOptions from '@/common/components/elements/BillFilter/useBillFilterOptions'

const StyledFilterContainer = styled(UHStack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  justifyContent: 'space-between',
  alignItems: 'center',
  spacing: 1,
  width: '100%',
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
}))

const StyledSelect = styled(Select)(({ theme }) => ({
  width: 140,
  borderRadius: '9px',
  border: `1px solid ${theme.color.grey[1400]}`,
  backgroundColor: theme.color.grey[2600],
  padding: theme.spacing(1, 1.75),
  '& .MuiInputBase-input': {
    padding: 0,
    fontSize: 14,
    fontWeight: 500,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-icon': {
    color: theme.color.grey[2700],
  },
}))

type BillFilterProps = {
  filterState: BillFilterState
  handleFilterChange: (field: keyof BillFilterState, value: string) => void
  handleReset: () => void
}

export default function BillFilter({
  filterState,
  handleFilterChange,
  handleReset,
}: BillFilterProps) {
  const theme = useTheme<USTWTheme>()
  const { categoryOptions, partyOptions, typeOptions, statusOptions } =
    useBillFilterOptions()

  return (
    <StyledFilterContainer>
      <UHStack spacing={1.5}>
        <StyledSelect
          value={filterState.category}
          onChange={(e) =>
            handleFilterChange('category', String(e.target.value))
          }
          displayEmpty
          IconComponent={KeyboardArrowDownOutlinedIcon}
          sx={{
            backgroundColor: theme.color.purple[100],
            borderColor: theme.color.purple[200],
            '& .MuiSelect-icon': {
              color: theme.color.neutral[500],
            },
          }}
        >
          <MenuItem value="" disabled>
            Category
          </MenuItem>
          {categoryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: theme.color.neutral[200],
          }}
        />

        <StyledSelect
          value={filterState.party}
          onChange={(e) => handleFilterChange('party', String(e.target.value))}
          displayEmpty
          disabled={!filterState.category}
          IconComponent={KeyboardArrowDownOutlinedIcon}
        >
          <MenuItem value="" disabled>
            Party
          </MenuItem>
          {partyOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>

        <StyledSelect
          value={filterState.type}
          onChange={(e) => handleFilterChange('type', String(e.target.value))}
          displayEmpty
          disabled={!filterState.category}
          IconComponent={KeyboardArrowDownOutlinedIcon}
        >
          <MenuItem value="" disabled>
            Type
          </MenuItem>
          {typeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>

        <StyledSelect
          value={filterState.status}
          onChange={(e) => handleFilterChange('status', String(e.target.value))}
          displayEmpty
          disabled={!filterState.category}
          IconComponent={KeyboardArrowDownOutlinedIcon}
        >
          <MenuItem value="" disabled>
            Status
          </MenuItem>
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>

        <StyledSelect
          value={filterState.sponsors}
          onChange={(e) =>
            handleFilterChange('sponsors', String(e.target.value))
          }
          displayEmpty
          disabled={!filterState.category}
          IconComponent={KeyboardArrowDownOutlinedIcon}
        >
          <MenuItem value="" disabled>
            Sponsors
          </MenuItem>
        </StyledSelect>

        <StyledSelect
          value={filterState.cosponsors}
          onChange={(e) =>
            handleFilterChange('cosponsors', String(e.target.value))
          }
          displayEmpty
          disabled={!filterState.category}
          IconComponent={KeyboardArrowDownOutlinedIcon}
        >
          <MenuItem value="" disabled>
            Cosponsors
          </MenuItem>
        </StyledSelect>
      </UHStack>

      <UButton
        variant="contained"
        color="info"
        rounded
        size="large"
        onClick={handleReset}
      >
        Reset
      </UButton>
    </StyledFilterContainer>
  )
}

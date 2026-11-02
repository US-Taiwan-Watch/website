'use client'

import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Fragment, useState } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import UButton from '@/common/components/atoms/UButton'
import { SelectedOption } from '@/modules/Bill/components/SingleBill/CosponsorFilter/useCosponsorFilter'
import CloseIcon from '@mui/icons-material/Close'

const StyledOptionContainer = styled(FormGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    borderTop: `1px solid ${theme.color.neutral[300]}`,
  },
  [theme.breakpoints.up('sm')]: {
    borderTop: `1px solid ${theme.color.grey[1400]}`,
  },
}))

const StyledCategoryContainer = styled(UHStack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    borderTop: `1px solid ${theme.color.neutral[300]}`,
  },
  [theme.breakpoints.up('sm')]: {
    borderTop: `1px solid ${theme.color.grey[500]}`,
  },
}))

const StyledExpandButton = styled(UIconButton)(({ theme }) => ({
  borderRadius: '6px',
  width: '24px',
  height: '24px',
  marginLeft: theme.spacing(1),
}))

const StyledOptionText = styled(Typography)(({ theme }) => ({
  ...theme.typography.buttonXXS,
  [theme.breakpoints.down('sm')]: {
    color: theme.color.common.black,
  },
  [theme.breakpoints.up('sm')]: {
    color: theme.color.neutral[500],
  },
}))

const StyledBadge = styled(Stack)(({ theme }) => ({
  color: theme.color.common.white,
  borderRadius: '32px',
  padding: '2px 6px',
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: theme.color.neutral[400],
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: theme.color.grey[400],
  },
}))

export type FilterOption = {
  id: string
  name: string
  count: number
}

export type FilterCategory = {
  id: 'party' | 'constituency'
  name: string
  options: FilterOption[]
}

type CosponsorFilterProps = {
  categories: FilterCategory[]
  selectedOptionList?: SelectedOption
  onSelectOption?: (
    categoryId: FilterCategory['id'],
    optionId: FilterOption['id']
  ) => void
  clearAll?: () => void
}

export default function CosponsorFilter({
  categories,
  selectedOptionList,
  onSelectOption,
  clearAll,
}: CosponsorFilterProps) {
  const theme = useTheme<USTWTheme>()
  const [expandedCategories, setExpandedCategories] = useState<{
    [key in FilterCategory['id']]: boolean
  }>({
    party: true,
    constituency: true,
  })

  const handleExpandCategory = (categoryId: FilterCategory['id']) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  return (
    <FormGroup>
      <Box>
        <UButton
          variant="text"
          onClick={clearAll}
          sx={{
            height: 42, // 對齊表格
            padding: 0,
            color: {
              xs: theme.color.common.black,
              sm: theme.color.neutral[500],
            },
          }}
          startIcon={<CloseIcon fontSize="small" />}
        >
          Clear All
        </UButton>
      </Box>

      {categories.map((category) => (
        <Fragment key={category.id}>
          <StyledCategoryContainer>
            <Typography variant="buttonXS" fontWeight={700}>
              {category.name}
            </Typography>

            <StyledExpandButton
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleExpandCategory(category.id)}
            >
              {expandedCategories[category.id] ? <RemoveIcon /> : <AddIcon />}
            </StyledExpandButton>
          </StyledCategoryContainer>

          <Collapse in={expandedCategories[category.id]}>
            {category.options.map((option) => (
              <StyledOptionContainer key={option.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      size="small"
                      checked={selectedOptionList?.[category.id]?.includes(
                        option.id
                      )}
                      onChange={() => onSelectOption?.(category.id, option.id)}
                    />
                  }
                  label={<StyledOptionText>{option.name}</StyledOptionText>}
                />
                <StyledBadge>
                  <Typography variant="buttonXXS">{option.count}</Typography>
                </StyledBadge>
              </StyledOptionContainer>
            ))}
          </Collapse>
        </Fragment>
      ))}
    </FormGroup>
  )
}

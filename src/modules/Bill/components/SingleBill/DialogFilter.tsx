'use client'

import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
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
import { Fragment, useMemo, useState } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'

const StyledOptionContainer = styled(FormGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  borderTop: `1px solid ${theme.color.grey[1400]}`,
}))

const StyledCategoryContainer = styled(UHStack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.color.grey[1400]}`,
  marginTop: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))

const StyledExpandButton = styled(UIconButton)(() => ({
  borderRadius: '6px',
  width: '24px',
  height: '24px',
}))

const StyledOptionText = styled(Typography)(({ theme }) => ({
  ...theme.typography.buttonXXS,
  color: theme.color.neutral[500],
}))

const StyledBadge = styled(Stack)(({ theme }) => ({
  color: theme.color.common.white,
  backgroundColor: theme.color.grey[400],
  borderRadius: '32px',
  padding: '2px 6px',
  marginLeft: theme.spacing(1),
}))

export type FilterOption<T extends string> = {
  id: T
  name: string
  count: number
}

export type FilterCategory<T extends string> = {
  id: string
  name: string
  options: FilterOption<T>[]
}

type DialogFilterProps<T extends string> = {
  categories: FilterCategory<T>[]
  selectedOptionIdList?: FilterOption<T>['id'][]
  onSelectOption?: (optionId: FilterOption<T>['id']) => void
  toggleSelectAllOption?: () => void
}

export default function DialogFilter<T extends string>({
  categories,
  selectedOptionIdList,
  onSelectOption,
  toggleSelectAllOption,
}: DialogFilterProps<T>) {
  const theme = useTheme<USTWTheme>()
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: FilterCategory<T>['id']]: boolean
  }>(() => {
    const initialState: { [key: string]: boolean } = {}
    categories.forEach((category) => {
      initialState[category.id] = true
    })
    return initialState
  })

  const handleExpandCategory = (categoryId: FilterCategory<T>['id']) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  const selectedOptionIdSet = useMemo(
    () => new Set(selectedOptionIdList ?? []),
    [selectedOptionIdList]
  )

  const totalCount = useMemo(
    () => categories.flatMap((category) => category.options).length,
    [categories]
  )

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            color="secondary"
            checked={selectedOptionIdSet.size === totalCount}
            onChange={toggleSelectAllOption}
          />
        }
        label={
          <Typography
            variant="buttonXS"
            fontWeight={600}
            sx={{
              color: theme.color.neutral[500],
            }}
          >
            Select all
          </Typography>
        }
      />

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
                      checked={selectedOptionIdSet.has(option.id)}
                      onChange={() => onSelectOption?.(option.id)}
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

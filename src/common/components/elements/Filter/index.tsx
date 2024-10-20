'use client'

import { useTheme, Divider } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

const StyledFilterContainer = styled(UHStack)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  justifyContent: 'space-between',
  alignItems: 'center',
  spacing: 1,
  width: '100%',
  backgroundColor: theme.color.common.white,
  borderRadius: '15px',
}))

type FilterProps = {
  containerProps?: ComponentPropsWithoutRef<typeof StyledFilterContainer>
  firstLevelSelector: ReactNode
  children?: ReactNode
  handleReset?: () => void
}

export default function Filter({
  containerProps,
  firstLevelSelector,
  children,
  handleReset,
}: FilterProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledFilterContainer {...containerProps}>
      <UHStack spacing={1.5}>
        {firstLevelSelector}

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: theme.color.neutral[200],
          }}
        />

        {children}
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

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
  handleSubmit?: () => void
}

export default function Filter({
  containerProps,
  firstLevelSelector,
  children,
  handleReset,
  handleSubmit,
}: FilterProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledFilterContainer flexWrap="wrap" gap={2} {...containerProps}>
      <UHStack gap={1.5}>
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

      <UHStack gap={1}>
        <UButton
          type="button"
          variant="contained"
          color="info"
          rounded
          size="large"
          onClick={handleReset}
        >
          Reset
        </UButton>

        <UButton
          type="submit"
          variant="contained"
          rounded
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </UButton>
      </UHStack>
    </StyledFilterContainer>
  )
}

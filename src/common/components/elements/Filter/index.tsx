'use client'

import {
  useTheme,
  Divider,
  Drawer,
  Stack,
  Typography,
  Box,
} from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import { useState, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UIconButton from '@/common/components/atoms/UIconButton'
import { CloseIcon, FilterIcon } from '@/common/styles/assets/Icons'

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
  formId?: string
  containerProps?: ComponentPropsWithoutRef<typeof StyledFilterContainer>
  firstLevelSelector?: ReactNode
  children?: ReactNode
  handleReset?: () => void
}

export default function Filter({
  formId,
  containerProps,
  firstLevelSelector,
  children,
  handleReset,
}: FilterProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (isMobile) {
    return (
      <Box {...containerProps} id={formId}>
        <UIconButton
          variant="contained"
          color="secondary"
          onClick={() => setDrawerOpen(true)}
        >
          <FilterIcon />
        </UIconButton>
        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              py: 1.75,
              px: 2,
              backgroundColor: theme.color.purple[100],
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px',
            },
          }}
        >
          <Stack gap={2}>
            <UHStack alignItems="center" gap={0.5}>
              <FilterIcon sx={{ width: 20, height: 20 }} />
              <Typography variant="h6" fontWeight={600}>
                Filter
              </Typography>
              <UIconButton
                variant="outlined"
                color="black"
                size="small"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  border: 'none',
                  ml: 'auto',
                }}
              >
                <CloseIcon />
              </UIconButton>
            </UHStack>

            <Stack gap={2}>
              {firstLevelSelector}

              {firstLevelSelector && (
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{
                    borderColor: theme.color.neutral[200],
                  }}
                />
              )}

              {children}

              <UHStack gap={1}>
                <UButton
                  type="button"
                  variant="contained"
                  color="info"
                  rounded
                  size="medium"
                  onClick={handleReset}
                  sx={{
                    width: '100%',
                  }}
                >
                  Reset
                </UButton>

                <UButton
                  type="submit"
                  variant="contained"
                  rounded
                  color="primary"
                  size="medium"
                  onClick={() => {
                    setDrawerOpen(false)
                  }}
                  sx={{
                    width: '100%',
                  }}
                  form={formId}
                >
                  Submit
                </UButton>
              </UHStack>
            </Stack>
          </Stack>
        </Drawer>
      </Box>
    )
  }

  return (
    <StyledFilterContainer
      flexWrap="wrap"
      gap={2}
      width="100%"
      {...containerProps}
      id={formId}
    >
      <UHStack gap={1.5} flexWrap="wrap">
        {firstLevelSelector}

        {firstLevelSelector && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: theme.color.neutral[200],
            }}
          />
        )}

        {children}

        <UHStack gap={1} marginLeft="auto">
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
            form={formId}
          >
            Submit
          </UButton>
        </UHStack>
      </UHStack>
    </StyledFilterContainer>
  )
}

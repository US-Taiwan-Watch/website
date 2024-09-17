'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import UTimeline from '@/common/components/atoms/UTimeline'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { BILL_TIMELINE_DATA_MOCK } from '@/modules/Bill/components/data'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3, 3.5),
  borderRadius: '10px',
  backgroundColor: theme.color.common.white,
  border: `1px solid ${theme.color.grey[1600]}`,
}))

const StyledTagContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  borderRadius: '5px',
  backgroundColor: theme.color.indigo[50],
  marginBottom: theme.spacing(2.5),
}))

type Props = {
  mode: 'horizontal' | 'vertical'
  simplified?: boolean
}

export default function BillCard({ mode, simplified }: Props) {
  const theme = useTheme<USTWTheme>()

  if (mode === 'horizontal') {
    return null
  }

  return (
    <StyledCardContainer>
      <UHStack gap="6px">
        {/* NOTE: 只顯示三個 tags */}
        {Array.from({ length: 3 }).map((_, index) => (
          <StyledTagContainer key={index}>
            <Typography variant="buttonXS">Category</Typography>
          </StyledTagContainer>
        ))}
      </UHStack>

      <Typography variant="body" fontWeight={300} mb={1}>
        H.R.4004 | 118th Congress
      </Typography>

      <UHeightLimitedText maxLine={4} variant="subtitleL" fontWeight={700}>
        Deterring Communist Chinese Aggression Against Taiwan Through Financial
        Sanctions Act of 2023
      </UHeightLimitedText>

      <Box mx={-2} mt={4}>
        <UTimeline
          data={BILL_TIMELINE_DATA_MOCK}
          activeIndex={2}
          isHorizontal
        />
      </Box>

      <Divider sx={{ mt: 3, mb: 2 }} />

      <UHStack px={1} gap={1.5} alignItems="center">
        <UPoliticalPartyIcon variant="rounded" party="democracy" size="small" />
        <Typography variant="subtitleS" fontWeight={700}>
          Hakeem Sekou Jeffries
        </Typography>
      </UHStack>

      {!simplified && (
        <>
          <Divider sx={{ my: 2 }} />

          <Stack gap={1.5}>
            <UHStack justifyContent="space-between" alignItems="center">
              <StyledTagContainer
                sx={{
                  backgroundColor: `${theme.color.purple[100]}80`, // 80% opacity
                  marginBottom: 0,
                }}
              >
                <Typography variant="buttonS">House</Typography>
              </StyledTagContainer>
              <Typography variant="buttonS">01/31/2024-8:33pm</Typography>
            </UHStack>
            <UHeightLimitedText maxLine={3} variant="body" fontWeight={300}>
              Read the second time. Placed on Senate Legislative Calendar under
              General Orders. Calendar No. 349.
            </UHeightLimitedText>
          </Stack>
        </>
      )}
    </StyledCardContainer>
  )
}

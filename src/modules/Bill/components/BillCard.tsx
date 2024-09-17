'use client'

import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import { styled } from '@/common/lib/mui/theme'
import { Stack, Typography } from '@mui/material'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BillCard({ mode, simplified }: Props) {
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
    </StyledCardContainer>
  )
}

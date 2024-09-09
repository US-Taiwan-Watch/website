'use client'

import { Container, Stack, StackProps } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { ReactNode } from 'react'

type Props = {
  backgroundColor?: string
  children: ReactNode
  contentWrapperSx?: StackProps['sx']
}

const LandingSectionWrapper = ({ backgroundColor, contentWrapperSx, children }: Props) => {
  const theme = useTheme<USTWTheme>()

  return (
    <UFullWidthBackgroundBox
      backgroundColor={backgroundColor ?? theme.color.neutral[100]}
      containerSx={{
        borderRadius: '30px 30px 0 0',
      }}>
      <Container>
        <Stack
          sx={{
            padding: '80px 0',
            gap: '80px',
            ...contentWrapperSx,
          }}>
          {children}
        </Stack>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

export default LandingSectionWrapper

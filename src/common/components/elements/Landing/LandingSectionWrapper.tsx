'use client'

import { BoxProps, Container, Stack, StackProps } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { ReactNode } from 'react'

type Props = {
  backgroundColor?: string
  children: ReactNode
  containerSx?: BoxProps['sx']
  contentWrapperSx?: StackProps['sx']
  /**
   * 是否與 Header 同寬
   * @default false
   */
  isHeaderWidth?: boolean
}

const LandingSectionWrapper = ({
  backgroundColor,
  containerSx,
  contentWrapperSx,
  isHeaderWidth = false,
  children,
}: Props) => {
  const theme = useTheme<USTWTheme>()

  return (
    <UFullWidthBackgroundBox
      backgroundColor={backgroundColor ?? theme.color.neutral[100]}
      containerSx={{
        borderRadius: '30px 30px 0 0',
        ...containerSx,
      }}
    >
      <Container maxWidth={isHeaderWidth ? 'xl' : 'lg'}>
        <Stack
          pt={{
            xs: 8,
            sm: 10,
          }}
          pb={10}
          gap={{
            xs: 4,
            sm: 7.5,
          }}
          sx={{
            ...contentWrapperSx,
          }}
        >
          {children}
        </Stack>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

export default LandingSectionWrapper

'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
import { Button, type ButtonProps, type SxProps, useTheme } from '@mui/material'
import { useMemo } from 'react'

interface UButtonProps extends ButtonProps {
  rounded?: boolean
}

const UButton = ({ children, rounded, ...props }: UButtonProps) => {
  const theme = useTheme<USTWTheme>()
  const defaultSx = useMemo<SxProps<USTWTheme>>(() => {
    const sx: SxProps<USTWTheme> = {
      textTransform: 'none',
    }

    if (props.color === 'primary' && props.disabled) {
      sx.backgroundColor = `${theme.palette.primary.main} !important`
    }

    switch (props.size) {
      case 'large':
        sx.padding = {
          xs: `${theme.spacing(1)} ${theme.spacing(1.25)}`,
          sm: `${theme.spacing(1.25)} ${theme.spacing(1.5)}`,
          md: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
          lg: `${theme.spacing(1.75)} ${theme.spacing(3)}`,
        }
        sx.fontSize = {
          xs: theme.typography.buttonXXS.fontSize,
          sm: theme.typography.buttonXS.fontSize,
          md: theme.typography.buttonS.fontSize,
          lg: theme.typography.buttonM.fontSize,
        }
        sx.fontWeight = {
          xs: theme.typography.buttonXXS.fontWeight,
          sm: theme.typography.buttonXS.fontWeight,
          md: theme.typography.buttonS.fontWeight,
          lg: theme.typography.buttonM.fontWeight,
        }
        break
      case 'medium':
        sx.padding = {
          xs: `${theme.spacing(1)} ${theme.spacing(1.25)}`,
          sm: `${theme.spacing(1.125)} ${theme.spacing(1.5)}`,
          md: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
          lg: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
        }
        sx.fontSize = {
          xs: theme.typography.buttonXXS.fontSize,
          sm: theme.typography.buttonXXS.fontSize,
          md: theme.typography.buttonXS.fontSize,
          lg: theme.typography.buttonS.fontSize,
        }
        sx.fontWeight = {
          xs: theme.typography.buttonXXS.fontWeight,
          sm: theme.typography.buttonXXS.fontWeight,
          md: theme.typography.buttonXS.fontWeight,
          lg: theme.typography.buttonS.fontWeight,
        }
        break
      case 'small':
        sx.padding = {
          xs: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
          sm: `${theme.spacing(0.75)} ${theme.spacing(1.5)}`,
          md: `${theme.spacing(1)} ${theme.spacing(2)}`,
          lg: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
        }
        sx.fontSize = {
          xs: theme.typography.buttonXXS.fontSize,
          sm: theme.typography.buttonXXS.fontSize,
          md: theme.typography.buttonXXS.fontSize,
          lg: theme.typography.buttonXXS.fontSize,
        }
        sx.fontWeight = {
          xs: theme.typography.buttonXXS.fontWeight,
          sm: theme.typography.buttonXXS.fontWeight,
          md: theme.typography.buttonXXS.fontWeight,
          lg: theme.typography.buttonXXS.fontWeight,
        }
        break
      default:
        break
    }

    if (rounded) {
      sx.borderRadius = '50px'
    }

    return sx
  }, [props.size, theme, props.color, props.disabled, rounded])

  return (
    <Button
      {...props}
      sx={
        {
          ...defaultSx,
          ...props.sx,
        } as ButtonProps['sx']
      }
    >
      {children}
    </Button>
  )
}

export default UButton

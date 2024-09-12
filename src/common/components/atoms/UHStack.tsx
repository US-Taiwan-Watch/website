'use client'

import { Stack, StackProps } from '@mui/material'
import { forwardRef } from 'react'

const UHStack = forwardRef<HTMLDivElement, StackProps>(
  function UHStack(props, ref) {
    return <Stack {...props} direction="row" ref={ref} />
  }
)

export default UHStack

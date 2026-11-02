'use client'

import { styled } from '@/common/lib/mui/theme'
import { Card, CardProps } from '@mui/material'
import React from 'react'

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: theme.shape.borderRadius * 4,
  border: `1px solid ${theme.color.grey[1600]}`,
  padding: 0, // Remove default padding - let children handle their own padding
  height: '100%',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}))

export interface UContentCardProps extends CardProps {
  children?: React.ReactNode
}

/**
 * UContentCard - Base card container component
 *
 * This is a simple, composable container. Use with UContentCardHeader and UContentCardContent.
 *
 * @example
 * ```tsx
 * <UContentCard>
 *   <UContentCardHeader title="Title" icon={<Icon />} />
 *   <UContentCardContent>
 *     Content here
 *   </UContentCardContent>
 * </UContentCard>
 * ```
 */
const UContentCard = function UContentCard({
  children,
  ...props
}: UContentCardProps) {
  return <StyledCard {...props}>{children}</StyledCard>
}

export default UContentCard

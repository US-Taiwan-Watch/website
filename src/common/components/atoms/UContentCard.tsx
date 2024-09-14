'use client'

import { styled } from '@/common/lib/mui/theme'
import { Card, CardProps } from '@mui/material'

const StyledContentCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: theme.shape.borderRadius * 4,
  border: `1px solid ${theme.color.grey[1600]}`,
  padding: theme.spacing(1),
  height: '100%',
  boxShadow: 'none',
}))

const StyledContentCardWithHeader = styled(StyledContentCard)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  '& .MuiCardContent-root:last-child': {
    padding: 0,
  },
}))

export function UContentCard(props: CardProps) {
  return <StyledContentCard {...props} />
}

export function UContentCardWithHeader(props: CardProps) {
  return <StyledContentCardWithHeader {...props} />
}

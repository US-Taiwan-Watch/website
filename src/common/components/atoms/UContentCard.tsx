import UCardHeader, {
  type UCardHeaderProps,
} from '@/common/components/atoms/UCardHeader'
import { styled } from '@/common/lib/mui/theme'
import { Card, CardProps } from '@mui/material'
import type React from 'react'

interface UContentCardProps extends CardProps {
  /** 是否顯示 header */
  withHeader?: boolean
  /** header 的 props */
  headerProps?: UCardHeaderProps
  /** 是否隱藏超出的內容 */
  overflowHidden?: boolean
  children: React.ReactNode
}

const StyledContentCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: theme.shape.borderRadius * 4,
  border: `1px solid ${theme.color.grey[1600]}`,
  padding: theme.spacing(1),
  height: '100%',
  boxShadow: 'none',
}))

const StyledContentCardWithHeader = styled(
  StyledContentCard
)<UContentCardProps>(({ theme, overflowHidden }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  '& .MuiCardContent-root:last-child': {
    padding: 0,
  },
  ...(overflowHidden && {
    overflow: 'hidden',
    /**
     * 如果有 overflow，在 after 加上一層 gradient 遮罩
     * 目前看起來只有 experience 會有 overflow hidden 的問題
     */
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '70px',
      background: 'linear-gradient(to top, white, transparent)',
    },
    '& .MuiCardContent-root': {
      position: overflowHidden ? 'absolute' : 'relative',
      width: overflowHidden ? `calc(100% - ${theme.spacing(6)})` : '100%',
    },
  }),
}))

const UContentCard = function UContentCard({
  withHeader = false,
  headerProps,
  children,
  ...rest
}: UContentCardProps) {
  if (!withHeader) {
    return <StyledContentCard {...rest}>{children}</StyledContentCard>
  }

  return (
    <StyledContentCardWithHeader {...rest}>
      <UCardHeader {...headerProps} />
      {children}
    </StyledContentCardWithHeader>
  )
}

export default UContentCard

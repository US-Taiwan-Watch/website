'use client'

import UCardHeader, {
  type UCardHeaderProps,
} from '@/common/components/atoms/UCardHeader'
import UIconButton from '@/common/components/atoms/UIconButton'
import useModal from '@/common/hooks/useModal'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  Card,
  CardContent,
  CardContentProps,
  CardProps,
  useTheme,
} from '@mui/material'
import React, { cloneElement } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UCardInfo, { UCardInfoProps } from '@/common/components/atoms/UCardInfo'

type HeaderIconAction = 'tooltip' | 'modal'

interface UContentCardProps extends CardProps {
  children?: React.ReactNode
  /** 是否顯示 header */
  withHeader?: boolean
  /** header 的 props */
  headerProps?: UCardHeaderProps
  /** 是否隱藏超出的內容 */
  overflowHidden?: boolean
  contentProps?: CardContentProps
  /** header icon 的 action */
  headerIconAction?: HeaderIconAction
  /** modal content */
  modalContent?: React.ReactNode
  /**
   * 是否是彈窗
   */
  isModal?: boolean
  /**
   * 點擊事件
   */
  onActionClick?: () => void
  /** Tooltip 相關參數 */
  tooltipProps?: UCardInfoProps
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
    minHeight: '400px',
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
  children,
  withHeader = false,
  headerProps,
  contentProps,
  headerIconAction,
  modalContent,
  isModal,
  onActionClick,
  tooltipProps,
  ...rest
}: UContentCardProps) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  const handleActionClick = () => {
    if (!isModal) {
      handleOpenModal()
    } else {
      onActionClick?.()
    }
  }

  if (!withHeader) {
    return <StyledContentCard {...rest}>{children}</StyledContentCard>
  }

  return (
    <StyledContentCardWithHeader {...rest}>
      <UCardHeader
        {...headerProps}
        action={
          headerIconAction === 'modal' ? (
            headerProps?.action ? (
              cloneElement(headerProps.action as React.ReactElement, {
                onClick: handleActionClick,
              })
            ) : (
              <UIconButton
                variant="rounded"
                color="inherit"
                size="small"
                onClick={handleActionClick}
              >
                {isModal ? (
                  <CloseIcon sx={{ color: theme.color.neutral[500] }} />
                ) : (
                  <ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />
                )}
              </UIconButton>
            )
          ) : headerIconAction === 'tooltip' && tooltipProps ? (
            <UCardInfo {...tooltipProps} />
          ) : (
            headerProps?.action
          )
        }
      />
      <CardContent
        sx={{
          padding: 0,
        }}
        {...contentProps}
      >
        {children}
      </CardContent>
      {headerIconAction === 'modal' && isModalOpen && (
        <UContentCardDialog open={isModalOpen} onClose={handleCloseModal}>
          <UContentCard
            withHeader={true}
            headerProps={{
              ...headerProps,
              action: (
                <UIconButton
                  variant="rounded"
                  color="inherit"
                  size="small"
                  onClick={handleCloseModal}
                >
                  <CloseIcon sx={{ color: theme.color.neutral[500] }} />
                </UIconButton>
              ),
            }}
            sx={{
              padding: 0,
              border: 'none',
              borderRadius: 0,
            }}
          >
            {modalContent || children}
          </UContentCard>
        </UContentCardDialog>
      )}
    </StyledContentCardWithHeader>
  )
}

export default UContentCard

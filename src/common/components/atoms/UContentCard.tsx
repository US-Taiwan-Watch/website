'use client'

import UCardHeader, {
  type UCardHeaderProps,
} from '@/common/components/atoms/UCardHeader'
import UIconButton from '@/common/components/atoms/UIconButton'
import useModal from '@/common/hooks/useModal'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  Box,
  Card,
  CardContent,
  CardContentProps,
  CardProps,
  DialogProps,
  useTheme,
} from '@mui/material'
import React, { cloneElement, useCallback, useMemo } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UContentCardDrawer from '@/common/components/atoms/UContentCardDrawer'
import UCardInfo, { UCardInfoProps } from '@/common/components/atoms/UCardInfo'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UHStack from '@/common/components/atoms/UHStack'

const hasNoContent = (node: React.ReactNode) => {
  return !node || (Array.isArray(node) && node.length === 0)
}

const NoContentPlaceholder = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}

type HeaderIconAction = 'tooltip' | 'modal'

interface UContentCardProps extends CardProps {
  children?: React.ReactNode
  /** 是否顯示 header */
  withHeader?: boolean
  /** header 的 props */
  headerProps?: UCardHeaderProps & {
    /** header icon 的 action */
    headerIconAction?: HeaderIconAction
    /** Header 的 action icon */
    actionIcon?: React.ReactNode
    /** Header 的副動作 */
    subAction?: React.ReactNode
  }
  /** 是否隱藏超出的內容 */
  overflowHidden?: boolean
  contentProps?: CardContentProps
  /** Popup 的 props */
  popupProps?: {
    /**
     * 是否是彈窗內的 `UContentCard`
     */
    isPopup?: boolean
    /** Popup content */
    popupContent?: React.ReactNode
    /** Max width of Dialog */
    popupDialogMaxWidth?: DialogProps['maxWidth']
    /** Popup Header 的副動作 */
    popupSubAction?: React.ReactNode
  }
  /** Tooltip 相關參數 */
  tooltipProps?: UCardInfoProps
  /** 沒有內容時的顯示文字 */
  noContentPlaceholder?: React.ReactNode
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
  [theme.breakpoints.down('sm')]: {
    ...(overflowHidden && {
      height: '345px',
    }),
  },
  [theme.breakpoints.up('sm')]: {
    ...(overflowHidden && {
      minHeight: '400px',
    }),
  },
}))

const UContentCard = function UContentCard({
  children,
  withHeader = false,
  headerProps,
  contentProps,
  popupProps,
  tooltipProps,
  noContentPlaceholder,
  ...rest
}: UContentCardProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  const handleActionClick = useCallback(() => {
    if (!popupProps?.isPopup) {
      handleOpenModal()
    }
  }, [popupProps?.isPopup, handleOpenModal])

  const action = useMemo(() => {
    if (headerProps?.headerIconAction === 'modal') {
      if (headerProps?.action && React.isValidElement(headerProps.action)) {
        return cloneElement(headerProps.action, {
          onClick: handleActionClick,
        })
      } else {
        return (
          <UHStack gap={1.75}>
            {headerProps?.subAction}
            <UIconButton
              variant="rounded"
              color="inherit"
              size="xs"
              onClick={handleActionClick}
              sx={{
                p: 0,
              }}
            >
              {popupProps?.isPopup ? (
                <CloseIcon sx={{ color: theme.color.neutral[500] }} />
              ) : (
                headerProps?.actionIcon || (
                  <ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />
                )
              )}
            </UIconButton>
          </UHStack>
        )
      }
    } else if (headerProps?.headerIconAction === 'tooltip' && tooltipProps) {
      return <UCardInfo {...tooltipProps} />
    } else {
      return headerProps?.action
    }
  }, [
    theme,
    headerProps?.headerIconAction,
    popupProps?.isPopup,
    headerProps?.actionIcon,
    headerProps?.subAction,
    headerProps?.action,
    tooltipProps,
    handleActionClick,
  ])

  const modalComponent = useMemo(() => {
    return (
      <UContentCard
        withHeader
        headerProps={{
          ...headerProps,
          headerIconAction: undefined,
          action: (
            <UHStack gap={1.75}>
              {popupProps?.popupSubAction}
              <UIconButton
                variant="rounded"
                color="inherit"
                size="small"
                onClick={handleCloseModal}
              >
                <CloseIcon sx={{ color: theme.color.common.black }} />
              </UIconButton>
            </UHStack>
          ),
        }}
        sx={{
          padding: `0 !important`,
          border: 'none',
          borderRadius: 0,
        }}
      >
        {hasNoContent(popupProps?.popupContent) && hasNoContent(children) ? (
          <NoContentPlaceholder>{noContentPlaceholder}</NoContentPlaceholder>
        ) : (
          popupProps?.popupContent || children
        )}
      </UContentCard>
    )
  }, [
    headerProps,
    handleCloseModal,
    theme.color.common.black,
    popupProps?.popupContent,
    popupProps?.popupSubAction,
    children,
    noContentPlaceholder,
  ])

  if (!withHeader) {
    return <StyledContentCard {...rest}>{children}</StyledContentCard>
  }

  return (
    <StyledContentCardWithHeader {...rest}>
      <UCardHeader
        {...headerProps}
        action={action}
        sx={{
          paddingBottom: {
            xs: 1,
            sm: 2,
          },
          minHeight: '50px',
        }}
      />
      <CardContent
        {...contentProps}
        sx={{
          padding: 0,
          overflow: 'auto',
          ...contentProps?.sx,
        }}
      >
        {hasNoContent(children) ? (
          <NoContentPlaceholder>{noContentPlaceholder}</NoContentPlaceholder>
        ) : (
          children
        )}
      </CardContent>
      {headerProps?.headerIconAction === 'modal' &&
        isModalOpen &&
        (isMobile ? (
          <UContentCardDrawer open={isModalOpen} onClose={handleCloseModal}>
            {modalComponent}
          </UContentCardDrawer>
        ) : (
          <UContentCardDialog
            open={isModalOpen}
            onClose={handleCloseModal}
            maxWidth={popupProps?.popupDialogMaxWidth}
          >
            {modalComponent}
          </UContentCardDialog>
        ))}
    </StyledContentCardWithHeader>
  )
}

export default UContentCard

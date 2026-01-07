'use client'

import React, { useCallback, useMemo } from 'react'
import { Box, DialogProps, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardHeader, {
  UContentCardHeaderProps,
} from '@/common/components/atoms/UContentCardHeader'
import UContentCardContent from '@/common/components/atoms/UContentCardContent'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UContentCardDrawer from '@/common/components/atoms/UContentCardDrawer'
import UIconButton from '@/common/components/atoms/UIconButton'
import UHStack from '@/common/components/atoms/UHStack'
import UCardInfo, { UCardInfoProps } from '@/common/components/atoms/UCardInfo'
import useContentCardModal from '@/common/hooks/useContentCardModal'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CloseIcon from '@mui/icons-material/Close'

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

type ActionType = 'tooltip' | 'modal' | 'none'

export interface UContentCardWithModalProps {
  /** Card preview content */
  children?: React.ReactNode
  /** Header configuration */
  header: UContentCardHeaderProps & {
    /** Type of action for the header icon */
    actionType?: ActionType
    /** Custom action icon (for modal type) */
    actionIcon?: React.ReactNode
    /** Sub-action element (shown before main action) */
    subAction?: React.ReactNode
  }
  /** Modal configuration (required if actionType is 'modal') */
  modal?: {
    /** Content to show in the modal */
    content?: React.ReactNode
    /** Max width of desktop dialog */
    maxWidth?: DialogProps['maxWidth']
    /** Sub-action for mobile drawer header */
    drawerSubAction?: React.ReactNode
  }
  /** Tooltip configuration (required if actionType is 'tooltip') */
  tooltip?: UCardInfoProps
  /** Placeholder when no content */
  noContentPlaceholder?: React.ReactNode
  /** Enable overflow hidden with gradient */
  overflowHidden?: boolean
  /** Custom sx for card */
  sx?: React.ComponentProps<typeof UContentCard>['sx']
}

/**
 * UContentCardWithModal - Card component with built-in modal/drawer functionality
 *
 * This component provides a convenient wrapper for cards that need modal/drawer expansion.
 *
 * @example
 * ```tsx
 * <UContentCardWithModal
 *   header={{
 *     title: "Actions",
 *     icon: <ActionsIcon />,
 *     iconColor: "primary",
 *     actionType: "modal"
 *   }}
 *   modal={{
 *     content: <FullActionsContent />
 *   }}
 * >
 *   <PreviewContent />
 * </UContentCardWithModal>
 * ```
 */
const UContentCardWithModal = function UContentCardWithModal({
  children,
  header,
  modal,
  tooltip,
  noContentPlaceholder,
  overflowHidden,
  sx,
}: UContentCardWithModalProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const { isOpen, open, close } = useContentCardModal()

  const { actionType = 'none', actionIcon, subAction, ...headerProps } = header

  const handleActionClick = useCallback(() => {
    open()
  }, [open])

  const headerAction = useMemo(() => {
    if (actionType === 'modal') {
      return (
        <UHStack gap={1.75}>
          {subAction}
          <UIconButton
            variant="rounded"
            color="inherit"
            size="xs"
            onClick={handleActionClick}
            sx={{ p: 0 }}
          >
            {actionIcon || (
              <ArrowOutwardIcon sx={{ color: theme.color.neutral[500] }} />
            )}
          </UIconButton>
        </UHStack>
      )
    } else if (actionType === 'tooltip' && tooltip) {
      return <UCardInfo {...tooltip} />
    } else {
      return headerProps.action
    }
  }, [
    actionType,
    subAction,
    actionIcon,
    tooltip,
    headerProps.action,
    handleActionClick,
    theme.color.neutral,
  ])

  const modalContent = useMemo(() => {
    const content = hasNoContent(modal?.content) ? children : modal?.content

    return (
      <UContentCard
        sx={{
          padding: 0,
          border: 'none',
          borderRadius: 0,
        }}
      >
        <UContentCardHeader
          variant={isMobile ? 'drawer' : 'dialog'}
          {...headerProps}
          action={
            <UHStack gap={1.75}>
              {isMobile && modal?.drawerSubAction}
              <UIconButton
                variant="rounded"
                color="inherit"
                size="small"
                onClick={close}
              >
                <CloseIcon sx={{ color: theme.color.common.black }} />
              </UIconButton>
            </UHStack>
          }
        />
        <UContentCardContent variant={isMobile ? 'drawer' : 'dialog'}>
          {hasNoContent(content) ? (
            <NoContentPlaceholder>{noContentPlaceholder}</NoContentPlaceholder>
          ) : (
            content
          )}
        </UContentCardContent>
      </UContentCard>
    )
  }, [
    modal,
    children,
    headerProps,
    isMobile,
    close,
    theme,
    noContentPlaceholder,
  ])

  const cardSx = useMemo(() => {
    const baseSx = { ...sx }

    if (overflowHidden) {
      return {
        ...baseSx,
        overflow: 'hidden',
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
          overflow: 'hidden',
        },
        height: { xs: '345px', sm: 'auto' },
        minHeight: { sm: '400px' },
      }
    }

    return baseSx
  }, [sx, overflowHidden])

  return (
    <>
      <UContentCard sx={cardSx}>
        <UContentCardHeader {...headerProps} action={headerAction} />
        <UContentCardContent>
          {hasNoContent(children) ? (
            <NoContentPlaceholder>{noContentPlaceholder}</NoContentPlaceholder>
          ) : (
            children
          )}
        </UContentCardContent>
      </UContentCard>

      {actionType === 'modal' && (
        <>
          {isMobile ? (
            <UContentCardDrawer open={isOpen} onClose={close}>
              {modalContent}
            </UContentCardDrawer>
          ) : (
            <UContentCardDialog
              open={isOpen}
              onClose={close}
              maxWidth={modal?.maxWidth}
            >
              {modalContent}
            </UContentCardDialog>
          )}
        </>
      )}
    </>
  )
}

export default UContentCardWithModal

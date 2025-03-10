import { styled } from '@/common/lib/mui/theme'
import Popper from '@mui/material/Popper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import type React from 'react'
import { useCallback, useMemo } from 'react'

const StyledPopper = styled(Popper)(({ theme }) => ({
  display: 'flex',
  zIndex: theme.constants.zIndex.headerPopper,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    marginTop: `-${theme.constants.headerHeight.sm}px !important`,
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: `-${theme.constants.headerHeight.md}px !important`,
  },
}))

interface HeaderPopperProps {
  headerAnchorEl: HTMLElement | null
  children: React.ReactNode
  /**
   * 點擊其他區域不會觸發 onClickAway
   * 例如：點擊 Menu 按鈕不會觸發 onClickAway
   */
  clickAwayClassNameWhiteList?: string[]
  onClose?: () => void
}

const HeaderPopper = ({
  headerAnchorEl,
  children,
  clickAwayClassNameWhiteList,
  onClose,
}: HeaderPopperProps) => {
  const clickAwayClassNameWhiteListSet = useMemo(
    () => new Set(clickAwayClassNameWhiteList),
    [clickAwayClassNameWhiteList]
  )

  const handleClickAway = useCallback(
    (event: MouseEvent | TouchEvent) => {
      /**
       * 從 event.target 往上找，直到找到 clickAwayClassNameWhiteList 中的 class name
       * 如果找到，則不觸發 onClickAway
       */
      let parent = event.target as HTMLElement
      while (parent) {
        if (
          Array.from(parent.classList).some((className) =>
            clickAwayClassNameWhiteListSet.has(className)
          )
        ) {
          return
        }
        parent = parent.parentElement as HTMLElement
      }
      if (!parent) {
        onClose?.()
      }
    },
    [clickAwayClassNameWhiteListSet, onClose]
  )

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <StyledPopper anchorEl={headerAnchorEl} open container={headerAnchorEl}>
        {children}
      </StyledPopper>
    </ClickAwayListener>
  )
}

export default HeaderPopper

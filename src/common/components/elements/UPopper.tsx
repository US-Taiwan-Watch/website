import { styled } from '@/common/lib/mui/theme'
import Popper from '@mui/material/Popper'
import type React from 'react'
import HeaderPopperOverlay from '@/common/components/elements/Header/HeaderPopperOverlay'
import UClickAwayListener from '@/common/components/elements/UClickAwayListener'

const StyledPopper = styled(Popper)(() => ({
  display: 'flex',
  width: '100%',
}))

interface UPopperProps {
  className?: string
  anchorEl: HTMLElement | null
  children: React.ReactNode
  /**
   * 點擊其他區域不會觸發 onClickAway
   * 例如：點擊 Menu 按鈕不會觸發 onClickAway
   */
  clickAwayClassNameWhiteList?: string[]
  onClose?: () => void
}

const UPopper = ({
  className,
  anchorEl,
  children,
  clickAwayClassNameWhiteList,
  onClose,
}: UPopperProps) => {
  return (
    <>
      <UClickAwayListener
        clickAwayClassNameWhiteList={clickAwayClassNameWhiteList}
        onClickAway={onClose}
      >
        <StyledPopper
          className={className}
          anchorEl={anchorEl}
          open
          container={anchorEl}
        >
          {children}
        </StyledPopper>
      </UClickAwayListener>
      <HeaderPopperOverlay open />
    </>
  )
}

export default UPopper

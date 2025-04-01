import { USTWTheme } from '@/common/lib/mui/theme'
import { useTheme } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom'

interface HeaderPopperOverlayProps {
  open: boolean
}

export default function HeaderPopperOverlay({
  open,
}: HeaderPopperOverlayProps) {
  const theme = useTheme<USTWTheme>()
  // 當 overlay 打開時禁止背景滾動
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色背景
        zIndex: theme.constants.zIndex.headerPopper - 1, // 確保在 Popper 下方，但在其他內容上方
      }}
    />,
    document.body
  )
}

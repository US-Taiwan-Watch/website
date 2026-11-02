import ClickAwayListener from '@mui/material/ClickAwayListener'
import type React from 'react'
import { useCallback, useMemo } from 'react'

interface UClickAwayListenerProps {
  children: React.ReactElement
  /**
   * 點擊其他區域不會觸發 onClickAway
   * 例如：點擊 Menu 按鈕不會觸發 onClickAway
   */
  clickAwayClassNameWhiteList?: string[]
  onClickAway?: () => void
}

const UClickAwayListener = ({
  children,
  clickAwayClassNameWhiteList,
  onClickAway,
}: UClickAwayListenerProps) => {
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
        onClickAway?.()
      }
    },
    [clickAwayClassNameWhiteListSet, onClickAway]
  )

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      {children}
    </ClickAwayListener>
  )
}

export default UClickAwayListener

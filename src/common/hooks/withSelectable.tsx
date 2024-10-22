import type React from 'react'
import { set } from 'lodash-es'

/**
 * 為元件添加可選擇的行為，並在選擇時阻止 MouseDown 事件冒泡
 * @param Component 要添加可選擇行為的元件
 * @param callbackPlacement 置放阻止 MouseDown 事件冒泡的位置，預設為 'onMouseDown'
 * @returns
 */
export default function withSelectable<T extends object>(
  Component: React.ComponentType<T>,
  callbackPlacement: string = 'onMouseDown'
) {
  return function WithSelectable(props: T) {
    // 使用 lodash 的 set 函數來動態設置 onMouseDown
    const updatedProps = { ...props }
    set(updatedProps, callbackPlacement, (e: React.MouseEvent) =>
      e.stopPropagation()
    )

    return <Component {...updatedProps} />
  }
}

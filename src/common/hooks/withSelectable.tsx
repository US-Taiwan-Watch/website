import type React from 'react'

export default function withSelectable<T extends object>(
  Component: React.ComponentType<T>
) {
  return function WithSelectable(props: T) {
    return (
      <Component
        {...props}
        onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
      />
    )
  }
}

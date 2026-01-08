'use client'

import { useState, useCallback } from 'react'

export interface UseContentCardModalReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

/**
 * Hook for managing UContentCard modal state
 * @param defaultOpen - Initial open state (default: false)
 * @returns Modal state and control functions
 */
export default function useContentCardModal(
  defaultOpen = false
): UseContentCardModalReturn {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}

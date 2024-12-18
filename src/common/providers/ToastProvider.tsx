'use client'

import React, { useCallback, useContext, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Grow from '@mui/material/Grow'
import { styled } from '@/common/lib/mui/theme'

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.color.common.white,
    color: theme.color.common.black,
  },
}))

const TOAST_DURATION = 3000

type ToastType = 'success' | 'error' | 'info'

type Toast = {
  type: ToastType
  message: string
  open: boolean
}

const defaultToast: Toast = {
  type: 'success',
  message: '',
  open: false,
}

type ToastProviderContextType = {
  toast: (type: ToastType, message: string) => void
}

export const ToastProviderContext =
  React.createContext<ToastProviderContextType>({
    toast: () => {},
  })

export const useToast = () => {
  const context = useContext(ToastProviderContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: React.ReactNode
}

/**
 * ToastProvider
 * TODO: 根據不同的 toast 類型，顯示不同的 style
 * TODO: 若需要堆疊則不能使用 MUI Snackbar，需要考慮其他做法
 * @description 提供 toast 功能
 * @example
 * const { toast } = useToast()
 * toast('success', 'Copied')
 */
export default function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<Toast>(defaultToast)

  const handleToast = useCallback((type: ToastType, message: string) => {
    setToast({
      type,
      message,
      open: true,
    })
  }, [])

  const handleClose = useCallback(() => {
    setToast(defaultToast)
  }, [])

  return (
    <ToastProviderContext.Provider value={{ toast: handleToast }}>
      {toast && (
        <StyledSnackbar
          open={toast.open}
          onClose={handleClose}
          message={toast.message}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={TOAST_DURATION}
          ClickAwayListenerProps={{
            mouseEvent: false,
            touchEvent: false,
          }}
          TransitionComponent={Grow}
        />
      )}
      {children}
    </ToastProviderContext.Provider>
  )
}

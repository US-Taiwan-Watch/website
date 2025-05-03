'use client'

import type React from 'react'
import { createContext, useCallback, useContext, useState } from 'react'
import { Snackbar, Alert, AlertColor } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import InfoIcon from '@mui/icons-material/Info'

type ToastContextType = {
  toast: (type: AlertColor, message: string) => void
}

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
})

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    padding: 0,
    minWidth: 'auto',
    boxShadow: theme.shadows[3],
  },
}))

const StyledAlert = styled(Alert)<{ type: AlertColor }>(({ theme, type }) => {
  const toastColors = theme.color.toast[type]
  return {
    backgroundColor: toastColors.background,
    color: toastColors.text,
    '& .MuiAlert-icon': {
      color: toastColors.icon,
    },
    '& .MuiAlert-message': {
      padding: '8px 0',
    },
    borderRadius: '8px',
    boxShadow: 'none',
  }
})

const getIcon = (type: AlertColor) => {
  switch (type) {
    case 'success':
      return <CheckCircleIcon />
    case 'error':
      return <ErrorIcon />
    case 'warning':
      return <WarningIcon />
    case 'info':
      return <InfoIcon />
    default:
      return <InfoIcon />
  }
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
export default function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<AlertColor>('info')

  const toast = useCallback((type: AlertColor, message: string) => {
    setType(type)
    setMessage(message)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <StyledSnackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <StyledAlert
          type={type}
          icon={getIcon(type)}
          onClose={handleClose}
          severity={type}
        >
          {message}
        </StyledAlert>
      </StyledSnackbar>
    </ToastContext.Provider>
  )
}

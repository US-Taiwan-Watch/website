import { ToastProviderContext } from '@/common/providers/ToastProvider'
import { useContext, useState } from 'react'

export default function useClipboard() {
  const { toast } = useContext(ToastProviderContext)
  const [isCopied, setIsCopied] = useState(false)

  const copyCurrentUrl = () => {
    if (!navigator.clipboard) return

    // TODO: make it more robust, maybe router utils to handle all routes composition
    const urlWithoutSearchParams = window.location.href.split('?')[0]
    navigator.clipboard.writeText(urlWithoutSearchParams)
    setIsCopied(true)

    toast('success', 'Copied')
  }

  return { isCopied, copyCurrentUrl }
}

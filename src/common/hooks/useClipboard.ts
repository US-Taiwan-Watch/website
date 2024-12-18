import { useToast } from '@/common/providers/ToastProvider'
import { useState } from 'react'

export default function useClipboard() {
  const { toast } = useToast()
  const [isCopied, setIsCopied] = useState(false)

  /**
   * 複製當前頁面 URL
   * @param url - 複製的 URL，預設為當前頁面 URL
   * @returns 複製結果
   */
  const copyCurrentUrl = (url?: string) => {
    if (!navigator.clipboard) return

    // TODO: make it more robust, maybe router utils to handle all routes composition
    const urlWithoutSearchParams = url ?? window.location.href
    navigator.clipboard.writeText(urlWithoutSearchParams)
    setIsCopied(true)

    toast('success', 'Copied')
  }

  return { isCopied, copyCurrentUrl }
}

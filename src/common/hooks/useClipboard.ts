import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useToast } from '@/common/providers/ToastProvider'
import { useState } from 'react'

export default function useClipboard() {
  const { t } = useTranslationClient('common')
  const { toast } = useToast()
  const [isCopied, setIsCopied] = useState(false)

  /**
   * 複製當前頁面 URL
   * @param url - 複製的 URL，預設為當前頁面 URL
   * @returns 複製結果
   */
  const copyUrl = async (url?: string) => {
    if (!navigator.clipboard) {
      toast('error', t('msg.error.copy.unsupported', { ns: 'common' }))
      return
    }

    const urlWithoutSearchParams = url ?? window.location.href

    try {
      await navigator.clipboard.writeText(urlWithoutSearchParams)
      setIsCopied(true)
      toast('success', t('msg.success.copied', { ns: 'common' }))
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      toast('error', t('msg.error.copy.error', { ns: 'common' }))
      setIsCopied(false)
    }
  }

  return { isCopied, copyUrl }
}

import { useCallback } from 'react'

export default function useFreezeScreen() {
  const freezeScreen = useCallback(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const unfreezeScreen = useCallback(() => {
    document.body.style.overflow = ''
  }, [])

  return { freezeScreen, unfreezeScreen }
}

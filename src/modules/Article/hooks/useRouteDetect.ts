import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const useRouteDetect = () => {
  const pathname = usePathname()

  const isKetagalanMedia = useMemo(
    () => pathname.includes('/ketagalan-media'),
    [pathname]
  )

  return {
    isKetagalanMedia,
  }
}

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const useRouteDetect = () => {
  const pathname = usePathname()

  const isKetagalan = useMemo(() => pathname.includes('/ketagalan'), [pathname])

  return {
    isKetagalan,
  }
}

import { useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Language } from '@/common/lib/i18n/types'

export default function useAccountPathname() {
  const { lang } = useParams<{ lang: Language }>()
  const pathname = usePathname()
  const pathnameWithoutLang = useMemo(() => {
    const regex = new RegExp(`^/${lang}`)
    return pathname.replace(regex, '')
  }, [lang, pathname])
  return { pathnameWithoutLang }
}

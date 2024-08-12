'use client'

import { useTranslation } from '@/common/lib/i18n/clientHooks'
import { languages } from '@/common/lib/i18n/settings'
import { Language } from '@/common/lib/i18n/types'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { memo } from 'react'

export const LanguageSwitcher = memo(function LanguageSwitcher () {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { lang } = useParams<{
    lang: Language
  }>()

  const handleClick = (lang: Language) => {
    changeLanguage(lang)
  }

  const changeLanguage = (newLang: string) => {
    const pathParts = pathname.split('/')

    // 只替換第一個出現的語言代碼
    if (pathParts[1] === lang) {
      pathParts[1] = newLang
    }

    const newPath = pathParts.join('/')

    // 構建新的 search params
    const newSearchParams = new URLSearchParams(searchParams.toString())

    // 組合新的 URL
    const newUrl = `${newPath}${newSearchParams.toString() ? '?' + newSearchParams.toString() : ''}`

    router.push(newUrl)
  }

  const { t } = useTranslation(lang)

  return (
    <div>
      {/** 切換語言 */}
      {languages.filter((l) => lang !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <button onClick={() => handleClick(l)}>
              {l}
            </button>
          </span>
        )
      })}

      {/** 測試 client hook */}
      <p>
        {t('sampleArg', {
          0: '123',
        })}
      </p>
    </div>
  )
})

export default LanguageSwitcher

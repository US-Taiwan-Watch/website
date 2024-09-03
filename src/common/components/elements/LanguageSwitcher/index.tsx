'use client'

import UButton from '@/common/components/atoms/UButton'
import { languages } from '@/common/lib/i18n/settings'
import { Language } from '@/common/lib/i18n/types'
import { styled } from '@/common/lib/mui/theme'
import { Stack } from '@mui/material'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { memo } from 'react'

const StyledButton = styled(UButton)(({ theme }) => {
  return {
    padding: 0,
    paddingRight: theme.spacing(1),
    ':not(:last-child)': {
      borderRight: `1px solid ${theme.color.grey[1100]}`,
    },
    color: 'inherit',
  }
})

export const LanguageSwitcher = memo(function LanguageSwitcher () {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { lang } = useParams<{
    lang: Language;
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
    const newUrl = `${newPath}${
      newSearchParams.toString() ? '?' + newSearchParams.toString() : ''
    }`

    router.push(newUrl)
  }

  return (
    <div>
      {/** 切換語言 */}
      <Stack direction="row" spacing={1}>
        {languages.map((l) => {
          return (
            <StyledButton
              key={l}
              onClick={() => handleClick(l)}
              variant="text"
              disabled={l === lang}
            >
              {/** TODO: i18n 語言 */}
              {l}
            </StyledButton>
          )
        })}
      </Stack>
    </div>
  )
})

export default LanguageSwitcher

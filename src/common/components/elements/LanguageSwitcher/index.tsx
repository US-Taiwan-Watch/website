'use client'

import UButton from '@/common/components/atoms/UButton'
import useI18n from '@/common/lib/i18n/clientHooks'
import { languages } from '@/common/lib/i18n/settings'
import { Language } from '@/common/lib/i18n/types'
import { styled } from '@/common/lib/mui/theme'
import { Stack } from '@mui/material'
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

export const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { changeLanguage, language } = useI18n()

  const handleClick = (lang: Language) => {
    changeLanguage(lang)
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
              disabled={l === language}
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

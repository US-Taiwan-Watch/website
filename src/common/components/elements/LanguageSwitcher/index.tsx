'use client'

import UButton from '@/common/components/atoms/UButton'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'
import { Language } from '@/common/lib/i18n/types'
import { styled } from '@/common/lib/mui/theme'
import { Stack } from '@mui/material'
import { memo } from 'react'
import useLanguageSwitcher from '@/common/components/elements/LanguageSwitcher/useLanguageSwitcher'

const StyledButton = styled(UButton)(({ theme }) => {
  return {
    padding: 0,
    paddingRight: theme.spacing(1),
    ':not(:last-child)': {
      borderRight: `1px solid ${theme.color.grey[1100]}`,
    },
    borderRadius: '0',
    color: theme.color.common.white,
    '&.Mui-disabled': {
      color: theme.color.common.white,
    },
  }
})

export const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { lang, handleChangeLanguage } = useLanguageSwitcher()

  const handleClick = (lang: Language) => {
    handleChangeLanguage(lang)
  }

  return (
    <div>
      {/** 切換語言 */}
      <Stack direction="row" spacing={1}>
        {I18N_SUPPORTED_LANGUAGE.map((l) => {
          return (
            <StyledButton
              key={l}
              onClick={() => handleClick(l)}
              variant="text"
              disabled={l === lang}
              sx={{
                fontWeight: l === lang ? 700 : 400,
              }}
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

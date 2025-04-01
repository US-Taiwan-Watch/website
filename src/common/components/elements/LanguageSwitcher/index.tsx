'use client'

import UButton from '@/common/components/atoms/UButton'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'
import { Language } from '@/common/lib/i18n/types'
import { styled } from '@/common/lib/mui/theme'
import { Divider, Stack } from '@mui/material'
import { memo, Fragment } from 'react'
import useLanguageSwitcher from '@/common/components/elements/LanguageSwitcher/useLanguageSwitcher'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledButton = styled(UButton)(({ theme }) => {
  return {
    borderRadius: '0',
    color: theme.color.common.white,
    '&.Mui-disabled': {
      color: theme.color.common.white,
    },
    lineHeight: 1,
  }
})

const StyledDivider = styled(Divider)(({ theme }) => {
  return {
    borderRight: `1px solid ${theme.color.grey[1100]}`,
  }
})

export const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { t } = useTranslationClient('common')
  const { lang, handleChangeLanguage } = useLanguageSwitcher()

  const handleClick = (lang: Language) => {
    handleChangeLanguage(lang)
  }

  return (
    <div>
      {/** 切換語言 */}
      <Stack direction="row" gap={1}>
        {I18N_SUPPORTED_LANGUAGE.map((l, index) => {
          return (
            <Fragment key={l}>
              <StyledButton
                onClick={() => handleClick(l)}
                variant="text"
                disabled={l === lang}
                sx={{
                  fontWeight: l === lang ? 700 : 400,
                  p: 0,
                  minWidth: 'fit-content',
                }}
              >
                {/** TODO: i18n 語言 */}
                {t(`language.${l.replace('-', '')}`, { ns: 'common' })}
              </StyledButton>
              {index !== I18N_SUPPORTED_LANGUAGE.length - 1 && (
                <StyledDivider orientation="vertical" flexItem />
              )}
            </Fragment>
          )
        })}
      </Stack>
    </div>
  )
})

export default LanguageSwitcher

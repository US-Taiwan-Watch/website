'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { ReactNode } from 'react'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useTheme } from '@mui/material/styles'
import type { UrlObject } from 'url'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type Props = {
  link: UrlObject | string
  text?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
}

const ULinkText = ({ link, text, startIcon, endIcon }: Props) => {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('common')

  return (
    <Link href={link}>
      <Button
        sx={{
          '&:hover': {
            color: theme.palette.text.secondary,
            backgroundColor: 'transparent',
          },
          color: {
            xs: theme.color.learMore.mobileText,
            sm: theme.color.learMore.text,
          },
          fontSize: {
            xs: '14px',
            sm: '20px',
          },
        }}
        startIcon={startIcon}
        endIcon={endIcon ?? <ArrowForwardIcon />}
      >
        <UHStack gap={1} alignItems="center">
          <Typography
            className="ULinkText"
            variant="body1"
            fontWeight={500}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            {text ?? t('cta.learnMore', { ns: 'common' })}
          </Typography>
        </UHStack>
      </Button>
    </Link>
  )
}

export default ULinkText

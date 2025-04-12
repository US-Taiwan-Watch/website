'use client'

import { styled } from '@/common/lib/mui/theme'
import { Stack } from '@mui/material'
import {
  Descendant,
  serializeSlateNode,
} from '@/modules/Article/utils/slateSerializer'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { useMemo } from 'react'

const StyledContent = styled(Stack)(({ theme }) => ({
  '& h1': {
    fontSize: theme.typography.articleH2.fontSize,
    fontWeight: 700,
  },
  '& h2': {
    fontSize: theme.typography.subtitleXL.fontSize,
    fontWeight: 700,
  },
  '& h3': {
    fontSize: theme.typography.articleH3.fontSize,
    fontWeight: 700,
  },
  '& h4': {
    fontSize: theme.typography.articleH4.fontSize,
    fontWeight: 700,
  },
  '& h5': {
    fontSize: theme.typography.articleH5.fontSize,
    fontWeight: 700,
  },
  '& blockquote': {
    position: 'relative',
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)} !important`,
    marginTop: `${theme.spacing(6)} !important`,
    border: `2px solid ${theme.color.article.postContentQuoteBorder}`,
    borderRadius: theme.shape.borderRadius * 2,
    '&::before': {
      content: '""',
      color: theme.color.article.postContentQuoteBorder,
      backgroundImage: `url(${'/assets/icon/quote.svg'})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '30px',
      height: '30px',
      position: 'absolute',
      top: 0,
      left: 20,
      transform: 'translateY(-50%)',
    },
  },
  fontSize: theme.typography.body.fontSize,
  fontWeight: 400,
}))

interface ArticlePostContentProps {
  content: Descendant[]
}

const ArticlePostContent = function ArticlePostContent({
  content,
}: ArticlePostContentProps) {
  const { lang } = useParams<{ lang: Language }>()
  const nodes = useMemo(
    () => content.map((node) => serializeSlateNode(lang, node)),
    [content, lang]
  )

  return (
    <Stack spacing={2}>
      <StyledContent gap={2}>{nodes}</StyledContent>
    </Stack>
  )
}

export default ArticlePostContent

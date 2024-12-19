'use client'

import DOMPurify from 'dompurify'
import { styled } from '@/common/lib/mui/theme'
import HyperLinkTooltip from '@/modules/Opinion/components/OpinionPost/Content/HyperLinkTooltip'
import { Stack } from '@mui/material'
import { useState, useEffect } from 'react'

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
    border: `2px solid ${theme.color.purple[300]}`,
    borderRadius: theme.shape.borderRadius * 2,
    '&::before': {
      content: '""',
      color: theme.color.purple[300],
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
  '& [data-link-type="internal"]': {
    color: theme.color.orange[900],
    fontSize: theme.typography.body.fontSize,
    fontWeight: 400,
    width: 'fit-content',
  },
  fontSize: theme.typography.body.fontSize,
  fontWeight: 400,
}))

interface OpinionPostContentProps {
  contentHtml: string
}

const OpinionPostContent = function OpinionPostContent({
  contentHtml,
}: OpinionPostContentProps) {
  const [hoveredInternalLinkElem, setHoveredInternalLinkElem] =
    useState<HTMLLinkElement | null>(null)

  /**
   * 在滑鼠進入內部連結時，設定 hover 的內部連結元素
   */
  const handleInternalLinkHover = (e: Event) => {
    setHoveredInternalLinkElem(e.target as HTMLLinkElement)
  }

  /**
   * 在滑鼠離開內部連結時，清除 hover 的內部連結元素
   */
  const handleInternalLinkLeave = () => {
    setHoveredInternalLinkElem(null)
  }

  /**
   * 監聽內部連結的 hover 事件
   */
  useEffect(() => {
    const internalLinkElems = document.querySelectorAll(
      '[data-link-type="internal"]'
    )
    internalLinkElems.forEach((elem) => {
      console.log(elem)
      elem.addEventListener('mouseenter', handleInternalLinkHover)
      elem.addEventListener('mouseleave', handleInternalLinkLeave)
    })
    return () => {
      internalLinkElems.forEach((elem) => {
        elem.removeEventListener('mouseenter', handleInternalLinkHover)
        elem.removeEventListener('mouseleave', handleInternalLinkLeave)
      })
    }
  }, [hoveredInternalLinkElem])

  return (
    <Stack spacing={2}>
      <StyledContent
        spacing={2}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(contentHtml),
        }}
      />
      {/** 顯示 hover 的內部連結元素的 tooltip */}
      {hoveredInternalLinkElem && (
        <HyperLinkTooltip anchorEl={hoveredInternalLinkElem} />
      )}
    </Stack>
  )
}

export default OpinionPostContent

'use client'

import DOMPurify from 'dompurify'
import { styled } from '@/common/lib/mui/theme'
import ContentImage from '@/modules/Opinion/components/OpinionPost/Content/ContentImage'
import HyperLinkTooltip from '@/modules/Opinion/components/OpinionPost/Content/HyperLinkTooltip'
import { Stack } from '@mui/material'

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
  fontSize: theme.typography.body.fontSize,
  fontWeight: 400,
}))

interface OpinionPostContentProps {
  contentHtml: string
}

const OpinionPostContent = function OpinionPostContent({
  contentHtml,
}: OpinionPostContentProps) {
  return (
    <Stack spacing={2}>
      <StyledContent
        spacing={2}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(contentHtml),
        }}
      />
      <HyperLinkTooltip text="超連結" />
      <ContentImage
        image={'/assets/category1.jpg'}
        caption={
          '1967年，中國共產黨主席毛澤東掀起文化大革命，當時在北京市中心展示了他的巨大畫像與標語。（攝影／JEAN VINCENT／AFP）'
        }
      />
    </Stack>
  )
}

export default OpinionPostContent

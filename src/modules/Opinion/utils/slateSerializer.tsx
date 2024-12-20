import escapeHtml from 'escape-html'
import { Text } from 'slate'
import { ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import { Bill as BillDTO } from '@/common/lib/graphql/__generated__/graphql'
import HyperLinkTooltip from '@/modules/Opinion/components/OpinionPost/Content/HyperLinkTooltip'
import Link from 'next/link'
import { payloadSlateToHtmlConfig, slateToHtml } from '@slate-serializers/html'
import { Bill } from '@/modules/Bill/classes/Bill'
import { Language } from '@/common/lib/i18n/types'
import { HyperLinkTooltipCardProps } from '@/common/components/elements/HyperLinkTooltipCard'

// 定義客製化 Slate element type
type CustomElementType =
  | 'link'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'quote'
  | 'paragraph'
  | 'text'

type BaseText = {
  text: string
}

export type LinkDoc = {
  relationTo: 'bills'
  value: BillDTO
}
const getHyperLinkTooltipCardProps = (
  lang: Language,
  doc: LinkDoc
): HyperLinkTooltipCardProps => {
  if (doc.relationTo === 'bills') {
    const bill = Bill.fromDTO(lang, doc.value)
    return {
      title: bill.title ?? '',
      description: bill.summary ?? '',
      link: bill.link ?? '',
    }
  }

  return {
    title: '',
    description: '',
    link: '',
  }
}
type LinkElement = {
  children: BaseText[]
  doc?: LinkDoc
  linkType: 'internal'
  type: 'link'
}

type HeadingElement = {
  children: BaseText[]
  type: Exclude<CustomElementType, 'link' | 'paragraph' | 'quote'>
}
type CustomElement = LinkElement | HeadingElement
export type Descendant =
  | CustomElement
  | BaseText
  | {
      children: CustomElement[]
    }

// 定義 Slate element type 對應的 MUI Component
const h1 = (children: ReactNode) => (
  <Typography variant="h1">{children}</Typography>
)
const h2 = (children: ReactNode) => (
  <Typography variant="h2">{children}</Typography>
)
const h3 = (children: ReactNode) => (
  <Typography variant="h3">{children}</Typography>
)
const h4 = (children: ReactNode) => (
  <Typography variant="h4">{children}</Typography>
)
const h5 = (children: ReactNode) => (
  <Typography variant="h5">{children}</Typography>
)
const h6 = (children: ReactNode) => (
  <Typography variant="h6">{children}</Typography>
)
const quote = (children: ReactNode) => <blockquote>{children}</blockquote>
const link = (lang: Language, node: LinkElement) => {
  if (!node.doc) return null
  if (node.linkType === 'internal') {
    return (
      <HyperLinkTooltip
        text={node.children[0].text}
        hyperLinkTooltipCardProps={getHyperLinkTooltipCardProps(lang, node.doc)}
      />
    )
  }
  return <Link href="">{node.children[0].text}</Link>
}
// Slate Text 格式的渲染
const text = (html: string) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
)
// 非 Slate Text 且未指定 type 的 Descendant 皆會被渲染成 paragraph
const paragraph = (children: ReactNode) => <Typography>{children}</Typography>

const MUI_COMPONENT_MAP = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  link,
  quote,
  text,
  paragraph,
}

/**
 * Opinion 的 content 為 slate 的 json 格式，
 * 並且後端有些格式非 Slate 原生格式，因此需要定義客製化 Slate 格式，
 * 該 Serializer 負責將 Slate 的 json 格式轉換成 React Node
 * @see {@link https://docs.slatejs.org/concepts/10-serializing}
 * @see {@link https://docs.slatejs.org/concepts/12-typescript}
 * @param lang 語言
 * @param node 節點
 * @returns React Node
 */
export const serializeSlateNode = (
  lang: Language,
  node: Descendant
): ReactNode => {
  if (Text.isText(node)) {
    const html = slateToHtml([node], {
      ...payloadSlateToHtmlConfig,
      convertLineBreakToBr: true,
    })
    return MUI_COMPONENT_MAP.text(escapeHtml(html))
  }

  const type = ((node as CustomElement).type || 'paragraph') as Exclude<
    CustomElementType,
    'text'
  >
  // Link handler
  if (type === 'link') {
    return MUI_COMPONENT_MAP.link(lang, node as LinkElement)
  }

  const children = node.children.map((n) => serializeSlateNode(lang, n))
  return MUI_COMPONENT_MAP[type](children)
}

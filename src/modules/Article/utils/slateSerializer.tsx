import { Text } from 'slate'
import { ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import {
  UstwArticle as ApiUstwArticle,
  Bill as ApiBill,
} from '@/common/lib/graphql/__generated__/graphql'
import HyperLinkTooltip from '@/modules/Article/components/ArticlePost/Content/HyperLinkTooltip'
import { payloadSlateToHtmlConfig, slateToHtml } from '@slate-serializers/html'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { Language } from '@/common/lib/i18n/types'
import { HyperLinkTooltipCardProps } from '@/common/components/elements/HyperLinkTooltipCard'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'

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

export type LinkDoc =
  | {
      relationTo: 'bills'
      value: ApiBill
    }
  | {
      relationTo: 'articles'
      value: ApiUstwArticle
    }
const getHyperLinkTooltipCardProps = (
  lang: Language,
  doc: LinkDoc
): HyperLinkTooltipCardProps => {
  if (doc.relationTo === 'bills') {
    const bill = BillUtils.parse(lang, doc.value)
    return {
      title: bill.title ?? '',
      description: bill.summary ?? '',
      link: BillUtils.getLink(bill.id),
    }
  }

  if (doc.relationTo === 'articles') {
    const article = ArticleUtils.parse(lang, doc.value, ArticleType.Article)
    return {
      title: article.title ?? '',
      description: article.description ?? '',
      link: ArticleUtils.getLink(ArticleType.Article, article.id) ?? '',
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
  return (
    <HyperLinkTooltip
      text={node.children?.[0]?.text ?? ''}
      hyperLinkTooltipCardProps={getHyperLinkTooltipCardProps(lang, node.doc)}
    />
  )
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
 * Article 的 content 為 slate 的 json 格式，
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
    return MUI_COMPONENT_MAP.text(html)
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

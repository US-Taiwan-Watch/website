import { Text } from 'slate'
import { ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import {
  UstwArticle as ApiUstwArticle,
  Bill as ApiBill,
  People as ApiPeople,
} from '@/common/lib/graphql/__generated__/graphql'
import HyperLinkTooltip from '@/modules/Article/components/ArticlePost/Content/HyperLinkTooltip'
import { payloadSlateToHtmlConfig, slateToHtml } from '@slate-serializers/html'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { Language } from '@/common/lib/i18n/types'
import { HyperLinkTooltipCardProps } from '@/common/components/elements/HyperLinkTooltipCard'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'
import { PeopleUtils } from '@/modules/People/business/People'
import { PeopleAvatarWithPartyBadge } from '@/modules/People/components/PeopleAvatarWithPartyBadge'

// 定義客製化 Slate element type
type CustomElementType =
  | 'link'
  | 'relationship'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'quote'
  | 'ul'
  | 'ol'
  | 'li'
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
  | {
      relationTo: 'peoples'
      value: ApiPeople
    }
const getHyperLinkTooltipCardProps = (
  lang: Language,
  doc: LinkDoc
): HyperLinkTooltipCardProps | null => {
  try {
    if (doc.relationTo === 'bills') {
      const bill = BillUtils.parse(lang, doc.value)
      return {
        value: {
          type: 'bill',
          value: bill,
        },
      }
    }

    if (doc.relationTo === 'articles') {
      const article = ArticleUtils.parse(lang, doc.value, ArticleType.Article)
      return {
        value: {
          type: 'article',
          value: article,
        },
      }
    }

    if (doc.relationTo === 'peoples') {
      const people = PeopleUtils.parse(lang, doc.value)
      return {
        value: {
          type: 'people',
          value: people,
        },
        ...(people.party && {
          HeaderComponent: (
            <PeopleAvatarWithPartyBadge
              party={people.party}
              people={people}
              size="large"
            />
          ),
        }),
      }
    }
  } catch (error) {
    console.error('Failed to parse hyperlink tooltip data:', error, doc)
  }

  return null
}
type LinkElement = {
  children: BaseText[]
  doc?: LinkDoc
  linkType: 'internal'
  type: 'link'
}

type RelationshipElement = {
  children: BaseText[]
  relationTo: 'bills' | 'articles' | 'peoples'
  value: ApiBill | ApiUstwArticle | ApiPeople
  type: 'relationship'
}

type HeadingElement = {
  children: BaseText[]
  type: Exclude<CustomElementType, 'link' | 'paragraph' | 'quote'>
}
type CustomElement = LinkElement | RelationshipElement | HeadingElement
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
const ul = (children: ReactNode) => <ul>{children}</ul>
const ol = (children: ReactNode) => <ol>{children}</ol>
const li = (children: ReactNode) => <li>{children}</li>
const link = (lang: Language, node: LinkElement) => {
  if (!node.doc) return null
  const text = node.children?.[0]?.text
  if (!text) return null
  const hyperLinkTooltipCardProps = getHyperLinkTooltipCardProps(lang, node.doc)
  if (!hyperLinkTooltipCardProps) return null
  return (
    <HyperLinkTooltip
      text={text}
      hyperLinkTooltipCardProps={hyperLinkTooltipCardProps}
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
  ul,
  ol,
  li,
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
  node: Descendant,
  errorMessage?: string
): ReactNode => {
  try {
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

    // Relationship handler (similar to link but with different structure)
    if (type === 'relationship') {
      const relationshipNode = node as RelationshipElement
      const doc: LinkDoc = {
        relationTo: relationshipNode.relationTo,
        value: relationshipNode.value,
      } as LinkDoc
      const text = relationshipNode.children?.[0]?.text
      if (!text) return null
      const hyperLinkTooltipCardProps = getHyperLinkTooltipCardProps(lang, doc)
      if (!hyperLinkTooltipCardProps) return null
      return (
        <HyperLinkTooltip
          text={text}
          hyperLinkTooltipCardProps={hyperLinkTooltipCardProps}
        />
      )
    }

    const children = node.children.map((n) =>
      serializeSlateNode(lang, n, errorMessage)
    )
    return MUI_COMPONENT_MAP[type](children)
  } catch (error) {
    console.error('Failed to serialize slate node:', error, node)
    if (!errorMessage) return null
    // Return a fallback paragraph to prevent complete rendering failure
    return <Typography color="error">{errorMessage}</Typography>
  }
}

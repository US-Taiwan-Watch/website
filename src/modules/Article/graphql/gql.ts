import { gql } from '@apollo/client'
import { TAG_FRAGMENT } from '@/modules/Common/graphql/gql'

export const CATEGORIES_ARTICLE_FRAGMENT = gql`
  fragment CategoriesArticle on CategoriesArticle {
    id
    i18n {
      en {
        name
      }
      zh {
        name
      }
    }
  }
`

export const ARTICLE_MEDIA_FRAGMENT = gql`
  fragment ArticleMedia on Article_Media {
    photo {
      id
      alt
      url
      sizes {
        desktop {
          url
        }
        tablet {
          url
        }
        mobile {
          url
        }
        thumbnail {
          url
        }
      }
    }
    caption
  }
`

export const FULL_ARTICLE_FRAGMENT = gql`
  fragment FullArticle on Article {
    id
    title
    subtitle
    excerpt
    content
    sources {
      id
      link
      text
    }
    podcast
    media {
      ...ArticleMedia
    }
    isFeatured
    releaseTime
    authors {
      id
      name
      bio
    }
    categories {
      ...CategoriesArticle
    }
    tags {
      ...Tag
    }
    updatedAt
    createdAt
  }

  ${ARTICLE_MEDIA_FRAGMENT}
  ${CATEGORIES_ARTICLE_FRAGMENT}
  ${TAG_FRAGMENT}
`

export const QUERY_ARTICLE = gql`
  query Article($id: String!) {
    Article(id: $id) {
      ...FullArticle
    }
  }

  ${FULL_ARTICLE_FRAGMENT}
`

export const QUERY_ARTICLES = gql`
  query Articles(
    $where: Article_where
    $limit: Int
    $page: Int
    $sort: String
  ) {
    Articles(where: $where, limit: $limit, page: $page, sort: $sort) {
      hasNextPage
      hasPrevPage
      limit
      nextPage
      offset
      page
      pagingCounter
      prevPage
      totalDocs
      totalPages
      docs {
        id
        title
        subtitle
        excerpt
        categories {
          ...CategoriesArticle
        }
        tags {
          ...Tag
        }
        media {
          ...ArticleMedia
        }
      }
    }
  }

  ${CATEGORIES_ARTICLE_FRAGMENT}
  ${TAG_FRAGMENT}
  ${ARTICLE_MEDIA_FRAGMENT}
`

export const QUERY_CATEGORIES_ARTICLES = gql`
  query CategoriesArticles(
    $where: CategoriesArticle_where
    $limit: Int
    $page: Int
    $sort: String
  ) {
    CategoriesArticles(where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        id
        i18n {
          en {
            name # Category英文名稱
          }
          zh {
            name # Category中文名稱
          }
        }
      }
    }
  }
`

export const QUERY_ARTICLE_METADATA = gql`
  query ArticleMetadata($id: String!) {
    Article(id: $id) {
      title
      subtitle
      excerpt
    }
  }
`

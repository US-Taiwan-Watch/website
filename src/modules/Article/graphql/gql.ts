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

export const USTW_ARTICLE_MEDIA_FRAGMENT = gql`
  fragment UstwArticleMedia on UstwArticle_Media {
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

export const FULL_USTW_ARTICLE_FRAGMENT = gql`
  fragment FullUstwArticle on UstwArticle {
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
      ...UstwArticleMedia
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

  ${USTW_ARTICLE_MEDIA_FRAGMENT}
  ${CATEGORIES_ARTICLE_FRAGMENT}
  ${TAG_FRAGMENT}
`

export const QUERY_USTW_ARTICLE = gql`
  query UstwArticle($id: String!) {
    UstwArticle(id: $id) {
      ...FullUstwArticle
    }
  }

  ${FULL_USTW_ARTICLE_FRAGMENT}
`

export const QUERY_USTW_ARTICLES = gql`
  query UstwArticles(
    $where: UstwArticle_where
    $limit: Int
    $page: Int
    $sort: String
  ) {
    UstwArticles(where: $where, limit: $limit, page: $page, sort: $sort) {
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
          ...UstwArticleMedia
        }
      }
    }
  }

  ${CATEGORIES_ARTICLE_FRAGMENT}
  ${TAG_FRAGMENT}
  ${USTW_ARTICLE_MEDIA_FRAGMENT}
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
        ...CategoriesArticle
      }
    }
  }

  ${CATEGORIES_ARTICLE_FRAGMENT}
`

export const QUERY_CATEGORIES_ARTICLE = gql`
  query CategoriesArticle($id: String!) {
    CategoriesArticle(id: $id) {
      ...CategoriesArticle
    }
  }

  ${CATEGORIES_ARTICLE_FRAGMENT}
`

export const QUERY_USTW_ARTICLE_METADATA = gql`
  query UstwArticleMetadata($id: String!) {
    UstwArticle(id: $id) {
      title
      subtitle
      excerpt
    }
  }
`

export const QUERY_USTW_ARTICLE_IDS = gql`
  query UstwArticleIds {
    UstwArticles {
      docs {
        id
        updatedAt
      }
    }
  }
`

// ----- Ketagalan -----

export const CATEGORIES_KETAGALAN_FRAGMENT = gql`
  fragment CategoriesKetagalan on CategoriesKetagalan {
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

export const KETAGALAN_ARTICLE_MEDIA_FRAGMENT = gql`
  fragment KetagalanArticleMedia on KetagalanArticle_Media {
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

export const FULL_KETAGALAN_ARTICLE_FRAGMENT = gql`
  fragment FullKetagalanArticle on KetagalanArticle {
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
      ...KetagalanArticleMedia
    }
    isFeatured
    releaseTime
    authors {
      id
      name
      bio
    }
    categories {
      ...CategoriesKetagalan
    }
    tags {
      ...Tag
    }
    updatedAt
    createdAt
  }

  ${KETAGALAN_ARTICLE_MEDIA_FRAGMENT}
  ${CATEGORIES_KETAGALAN_FRAGMENT}
  ${TAG_FRAGMENT}
`

export const QUERY_KETAGALAN_ARTICLE = gql`
  query KetagalanArticle($id: String!) {
    KetagalanArticle(id: $id) {
      ...FullKetagalanArticle
    }
  }

  ${FULL_KETAGALAN_ARTICLE_FRAGMENT}
`

export const QUERY_KETAGALAN_ARTICLES = gql`
  query KetagalanArticles(
    $where: KetagalanArticle_where
    $limit: Int
    $page: Int
    $sort: String
  ) {
    KetagalanArticles(where: $where, limit: $limit, page: $page, sort: $sort) {
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
          ...CategoriesKetagalan
        }
        tags {
          ...Tag
        }
        media {
          ...KetagalanArticleMedia
        }
      }
    }
  }

  ${CATEGORIES_KETAGALAN_FRAGMENT}
  ${TAG_FRAGMENT}
  ${KETAGALAN_ARTICLE_MEDIA_FRAGMENT}
`

export const QUERY_CATEGORIES_KETAGALANS = gql`
  query CategoriesKetagalans(
    $where: CategoriesKetagalan_where
    $limit: Int
    $page: Int
    $sort: String
  ) {
    CategoriesKetagalans(
      where: $where
      limit: $limit
      page: $page
      sort: $sort
    ) {
      docs {
        ...CategoriesKetagalan
      }
    }
  }

  ${CATEGORIES_KETAGALAN_FRAGMENT}
`

export const QUERY_CATEGORIES_KETAGALAN = gql`
  query CategoriesKetagalan($id: String!) {
    CategoriesKetagalan(id: $id) {
      ...CategoriesKetagalan
    }
  }

  ${CATEGORIES_KETAGALAN_FRAGMENT}
`

export const QUERY_KETAGALAN_ARTICLE_METADATA = gql`
  query KetagalanArticleMetadata($id: String!) {
    KetagalanArticle(id: $id) {
      title
      subtitle
      excerpt
    }
  }
`

export const QUERY_KETAGALAN_ARTICLE_IDS = gql`
  query KetagalanArticleIds {
    KetagalanArticles(limit: 2147483647) {
      docs {
        id
        updatedAt
      }
    }
  }
`

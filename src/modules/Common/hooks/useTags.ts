import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { useQuery } from '@apollo/client'
import {
  TagsQuery,
  TagsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_TAGS } from '@/modules/Common/graphql/gql'
import TagUtils from '@/modules/Common/Tag.utils'
import { isNull, isUndefined } from 'lodash-es'

export default function useTags() {
  const { lang } = useParams<{ lang: Language }>()

  const { data } = useQuery<TagsQuery, TagsQueryVariables>(QUERY_TAGS)

  return {
    tags:
      data?.Tags?.docs
        ?.filter((tag) => !isNull(tag))
        .map((tag) => TagUtils.parse(lang, tag))
        .filter((tag) => !isUndefined(tag.id) && !isUndefined(tag.name)) ?? [],
  }
}

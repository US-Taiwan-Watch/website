import UHashTag from '@/common/components/atoms/UHashTag'
import { Article } from '@/modules/Article/business/Article'

interface ArticlePostTagProps {
  tag: NonNullable<Article['tags']>[number]
}

const ArticlePostTag = function ArticlePostTag({ tag }: ArticlePostTagProps) {
  return <UHashTag value={tag.label} />
}

export default ArticlePostTag

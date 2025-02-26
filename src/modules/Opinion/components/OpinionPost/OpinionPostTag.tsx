import UHashTag from '@/common/components/atoms/UHashTag'
import { Opinion } from '@/modules/Opinion/business/Opinion'

interface OpinionPostTagProps {
  tag: NonNullable<Opinion['tags']>[number]
}

const OpinionPostTag = function OpinionPostTag({ tag }: OpinionPostTagProps) {
  return <UHashTag value={tag.label} />
}

export default OpinionPostTag

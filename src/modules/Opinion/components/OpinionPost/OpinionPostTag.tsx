import UHashTag from '@/common/components/atoms/UHashTag'
import { OpinionTag } from '@/modules/Opinion/classes/Opinion'

interface OpinionPostTagProps {
  tag: OpinionTag
}

const OpinionPostTag = function OpinionPostTag({ tag }: OpinionPostTagProps) {
  return <UHashTag value={tag.label} />
}

export default OpinionPostTag

import { CategoriesArticle } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { ROUTES } from '@/routes'
import { isString } from 'lodash-es'

export interface OpinionCategoryArgs {
  id?: string
  label?: string
  image?: string
}

export default class OpinionCategory {
  id?: string
  label?: string
  image?: string

  constructor(args: OpinionCategoryArgs) {
    if (isString(args.id)) {
      this.id = args.id
    }
    if (isString(args.label)) {
      this.label = args.label
    }
    if (isString(args.image)) {
      this.image = args.image
    }
  }

  get link() {
    return `${ROUTES.OPINION}/search/${this.id}`
  }

  static fromDTO(lang: Language, dto: CategoriesArticle) {
    return new OpinionCategory({
      id: dto.id ?? undefined,
      label: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined,
    })
  }
}

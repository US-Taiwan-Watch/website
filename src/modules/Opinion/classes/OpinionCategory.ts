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
}

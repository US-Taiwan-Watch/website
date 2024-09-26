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
    // FIXME: 暫時隱藏 opinion 的連結
    // return `${ROUTES.OPINION}/search/${this.id}`
    return '#'
  }
}

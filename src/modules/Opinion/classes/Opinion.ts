import { OpinionCategory } from '@/modules/Opinion/types/OpinionCategory'
import { isArray, isString } from 'lodash-es'

interface OpinionArgs {
  id: string
  title: string
  image: string
  description: string
  categories: Array<OpinionCategory>
}

export class Opinion {
  id?: string
  title?: string
  image?: string
  description?: string
  categories?: Array<OpinionCategory>

  constructor(args: OpinionArgs) {
    if (isString(args.id)) {
      this.id = args.id
    }
    if (isString(args.title)) {
      this.title = args.title
    }
    if (isString(args.image)) {
      this.image = args.image
    }
    if (isString(args.description)) {
      this.description = args.description
    }
    if (isArray(args.categories)) {
      this.categories = args.categories
    }
  }

  get link() {
    return `/opinion/${this.id}`
  }

  static getCategoryUrl(category: OpinionCategory) {
    return `/opinion/search/${category.id}`
  }
}

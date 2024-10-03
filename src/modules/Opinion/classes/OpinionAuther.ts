import { isString } from 'lodash-es'

export interface OpinionAuthorArgs {
  name: string
  descriptionHtml?: string
}

export class OpinionAuthor {
  name?: string
  descriptionHtml?: string

  constructor(args: OpinionAuthorArgs) {
    if (isString(args.name)) {
      this.name = args.name
    }
    if (isString(args.descriptionHtml)) {
      this.descriptionHtml = args.descriptionHtml
    }
  }
}

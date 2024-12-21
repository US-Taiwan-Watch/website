import { isString } from 'lodash-es'

export interface OpinionAuthorArgs {
  name: string
  description?: string
}

export class OpinionAuthor {
  name?: string
  description?: string

  constructor(args: OpinionAuthorArgs) {
    if (isString(args.name)) {
      this.name = args.name
    }
    if (isString(args.description)) {
      this.description = args.description
    }
  }
}

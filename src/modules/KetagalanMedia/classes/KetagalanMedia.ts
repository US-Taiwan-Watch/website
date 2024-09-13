import { isArray, isString } from 'lodash-es'

interface KetagalanMediaArgs {
  id: string
  title: string
  image: string
  description: string
  tags: Array<string>
}

export class KetagalanMedia {
  // ID
  id?: string
  // 文章標題
  title?: string
  // 圖片
  image?: string
  // 描述
  description?: string
  // 標籤
  tags?: Array<string>

  constructor(private readonly ketagalanMedia: KetagalanMediaArgs) {
    if (isString(ketagalanMedia.id)) {
      this.id = ketagalanMedia.id
    }
    if (isString(ketagalanMedia.title)) {
      this.title = ketagalanMedia.title
    }
    if (isString(ketagalanMedia.image)) {
      this.image = ketagalanMedia.image
    }
    if (isString(ketagalanMedia.description)) {
      this.description = ketagalanMedia.description
    }
    if (isArray(ketagalanMedia.tags)) {
      this.tags = ketagalanMedia.tags
    }
  }

  get link() {
    return `/ketagalan-media/${this.id}`
  }
}

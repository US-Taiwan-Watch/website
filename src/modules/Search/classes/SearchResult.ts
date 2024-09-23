import { isString } from 'lodash-es'
import { SearchResultResponse } from '../types/SearchResultResponse'
import { ROUTES } from '@/routes'

export default class SearchResult {
  /** 搜尋結果 */
  value: string = ''

  constructor(private readonly response: SearchResultResponse) {
    if (isString(response.value)) {
      this.value = response.value
    }
  }

  get href() {
    return `${ROUTES.SEARCH}/${this.value}`
  }
}

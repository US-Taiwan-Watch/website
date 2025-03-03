import { Language } from '@/common/lib/i18n/types'

export class ApiConfig {
  /**
   * Api 語言，
   * @default en-US
   */
  lang: Language = 'en-US'

  /**
   * 設定 API 語言
   * @param lang 語言
   */
  setLang(lang: Language) {
    this.lang = lang
  }
}

const apiConfig = new ApiConfig()

export default apiConfig

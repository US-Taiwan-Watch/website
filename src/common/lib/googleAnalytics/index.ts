import { sendGTMEvent } from '@next/third-parties/google'

/**
 * 更新 GA 同意聲明
 * @param value 同意聲明值，"denied" 或 "granted"
 * @example
 * googleAnalyticsUpdateConsent("denied")
 */
export const googleAnalyticsUpdateConsent = (value: 'denied' | 'granted') => {
  if (!window.gtag) return
  window.gtag('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
    functionality_storage: value,
    personalization_storage: value,
    security_storage: value,
  })
}

/**
 * 記錄 GA 搜尋建議事件
 */
export const googleAnalyticsSearchSuggestionEvent = (value: {
  keyword: string
}) => {
  sendGTMEvent({
    event: 'search_suggestion',
    keyword: value.keyword,
  })
}

/**
 * 記錄 GA 搜尋事件
 */
export const googleAnalyticsSearchEvent = (value: { keyword: string }) => {
  sendGTMEvent({
    event: 'search',
    keyword: value.keyword,
  })
}

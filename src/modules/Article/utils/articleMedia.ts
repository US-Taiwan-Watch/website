import { config } from '@/config'

// Public article images served by Payload need a same-origin URL for both
// browser rendering and the server-side image optimizer.
export function articleMediaUrl(value: string, apiBase = config.API_BASE_URL) {
  if (!value || !apiBase) return value
  try {
    const source = new URL(value)
    const cms = new URL(apiBase)
    const match = source.pathname.match(
      /^\/api\/(media-article|media-ketagalan)\/file\/([^/]+)$/
    )
    if (
      source.origin === cms.origin &&
      !source.username &&
      !source.password &&
      match
    ) {
      return `/api/article-media/${match[1]}/${match[2]}`
    }
  } catch {
    return value
  }
  return value
}

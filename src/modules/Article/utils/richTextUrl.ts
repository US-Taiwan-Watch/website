export function safeRichTextUrl(value: unknown, image = false): string | null {
  if (
    typeof value !== 'string' ||
    Array.from(value).some(
      (character) =>
        character.charCodeAt(0) < 32 ||
        character.charCodeAt(0) === 127 ||
        character === '\\'
    )
  )
    return null
  const url = value.trim()
  if (!url || url.startsWith('//')) return null
  if (url.startsWith('/') || (!image && url.startsWith('#'))) return url
  try {
    const parsed = new URL(url)
    const protocols = image
      ? ['https:', 'http:']
      : ['https:', 'http:', 'mailto:', 'tel:']
    if (
      !protocols.includes(parsed.protocol) ||
      parsed.username ||
      parsed.password
    )
      return null
    return url
  } catch {
    return null
  }
}

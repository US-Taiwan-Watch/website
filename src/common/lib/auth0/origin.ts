const websiteHosts = new Set(['ustw.watch', 'www.ustw.watch', 'dev.ustw.watch'])

/** Keep the OAuth transaction and callback on the same trusted website. */
export function resolveAuth0AppBaseUrl(
  requestHost: string,
  configuredBaseUrl: string
): string {
  // The Host header may be untrusted: it must match an exact owned hostname.
  // Avoid nextUrl.origin, which can contain the internal Azure container address.
  const host = requestHost.toLowerCase()
  if (websiteHosts.has(host)) return `https://${host}`

  const configured = new URL(configuredBaseUrl)
  const localHosts = new Set(['localhost', '127.0.0.1', '[::1]'])
  if (
    localHosts.has(configured.hostname) &&
    ['http:', 'https:'].includes(configured.protocol) &&
    host === configured.host
  ) {
    return configured.origin
  }

  throw new Error('Unrecognized application origin')
}

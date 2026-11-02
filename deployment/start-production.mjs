// Keep server-rendered CMS requests off stale pooled connections to App Service.
// The browser bundle and other providers retain their normal behavior.
const nativeFetch = globalThis.fetch.bind(globalThis)
const cmsOrigin = 'https://ustw-cms-backend-hbd9avfxadfneybh.westus2-01.azurewebsites.net'
globalThis.fetch = function fetchCmsWithFreshConnection(input, init) {
  let url
  try { url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url) } catch { return nativeFetch(input, init) }
  if (url.origin !== cmsOrigin || url.pathname !== '/api/graphql') return nativeFetch(input, init)
  const headers = new Headers(init?.headers || (input instanceof Request ? input.headers : undefined))
  headers.set('connection', 'close')
  return nativeFetch(input, { ...init, headers })
}
await import('./server.js')

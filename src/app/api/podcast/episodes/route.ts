export const dynamic = 'force-dynamic'

const podcastId = '6cdfccc6-7c47-4c35-8352-7f634b1b6f71'
const cache = new Map<string, { until: number; body: string }>()

export async function GET(request: Request) {
  const url = new URL(request.url)
  const episodeId = url.searchParams.get('episodeId') || ''
  if (episodeId && !/^[a-f0-9-]{36}$/i.test(episodeId)) {
    return Response.json({ error: 'Invalid episode.' }, { status: 400 })
  }
  const headers = {
    'content-type': 'application/json',
    'cache-control': 'public, max-age=60',
  }
  const cached = cache.get(episodeId)
  if (cached && cached.until > Date.now()) {
    return new Response(cached.body, { headers })
  }
  try {
    const token = process.env.SOUNDON_API_TOKEN
    if (!token) throw new Error('Unavailable')
    const response = await fetch(
      `https://api.soundon.fm/v2/client/podcasts/${podcastId}/episodes${episodeId ? `/${episodeId}` : ''}`,
      {
        headers: { 'Api-Token': token },
        cache: 'no-store',
        redirect: 'error',
        signal: AbortSignal.timeout(20000),
      }
    )
    if (response.status === 404)
      return Response.json({ error: 'Episode not found.' }, { status: 404 })
    if (!response.ok || !response.body) throw new Error('Unavailable')
    const reader = response.body.getReader()
    const chunks: Uint8Array[] = []
    let length = 0
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        length += value.length
        if (length > 8 * 1024 * 1024) throw new Error('Too large')
        chunks.push(value)
      }
    } finally {
      await reader.cancel().catch(() => {})
    }
    const body = Buffer.concat(chunks).toString('utf8')
    const data: unknown = JSON.parse(body)
    if (!data || typeof data !== 'object' || !('data' in data))
      throw new Error('Invalid response')
    if (cache.size >= 16) cache.clear()
    cache.set(episodeId, { until: Date.now() + 60000, body })
    return new Response(body, { headers })
  } catch {
    return Response.json(
      { error: 'Podcast service unavailable.' },
      { status: 502, headers: { 'cache-control': 'no-store' } }
    )
  }
}

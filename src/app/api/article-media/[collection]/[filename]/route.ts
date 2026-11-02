import { config } from '@/config'

export const dynamic = 'force-dynamic'

export async function GET(
  _request: Request,
  { params }: { params: { collection: string; filename: string } }
) {
  if (!['media-article', 'media-ketagalan'].includes(params.collection)) {
    return Response.json({ error: 'Article image not found.' }, { status: 404 })
  }
  const filename = params.filename
  if (
    !filename ||
    ['.', '..'].includes(filename) ||
    /[/\\]/.test(filename) ||
    Array.from(filename).some(
      (c) => c.charCodeAt(0) < 32 || c.charCodeAt(0) === 127
    )
  ) {
    return Response.json({ error: 'Invalid article image.' }, { status: 400 })
  }
  try {
    const base = new URL(
      process.env.CMS_SERVER_API_BASE_URL || config.API_BASE_URL || ''
    )
    if (
      base.username ||
      base.password ||
      base.search ||
      base.hash ||
      base.pathname.replace(/\/$/, '') !== '/api' ||
      !['https:', 'http:'].includes(base.protocol) ||
      (base.protocol === 'http:' &&
        !['localhost', '127.0.0.1', 'ustw-payload3-app'].includes(
          base.hostname
        ))
    ) {
      throw new Error('Invalid server media destination')
    }
    const url = `${base.origin}/api/${params.collection}/file/${encodeURIComponent(filename)}`
    const response = await fetch(url, {
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(20000),
    })
    if (response.status === 404)
      return Response.json(
        { error: 'Article image not found.' },
        { status: 404 }
      )
    if (!response.ok) throw new Error('Unavailable')
    const contentType = response.headers.get('content-type')?.split(';')[0]
    if (
      !contentType ||
      ![
        'image/png',
        'image/jpeg',
        'image/webp',
        'image/gif',
        'image/avif',
        'image/bmp',
        'image/tiff',
      ].includes(contentType)
    ) {
      return Response.json(
        { error: 'Unsupported article image.' },
        { status: 415 }
      )
    }
    const limit = 8 * 1024 * 1024
    if (Number(response.headers.get('content-length')) > limit)
      throw new Error('Too large')
    const reader = response.body?.getReader()
    if (!reader) throw new Error('Unavailable')
    const chunks: Uint8Array[] = []
    let length = 0
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        length += value.length
        if (length > limit) throw new Error('Too large')
        chunks.push(value)
      }
    } finally {
      await reader.cancel().catch(() => {})
    }
    if (!length) throw new Error('Unavailable')
    return new Response(Buffer.concat(chunks), {
      headers: {
        'content-type': contentType,
        'cache-control': 'public, max-age=0, must-revalidate',
        'x-content-type-options': 'nosniff',
        'content-security-policy': "default-src 'none'; sandbox",
      },
    })
  } catch {
    return Response.json(
      { error: 'Article image is temporarily unavailable.' },
      { status: 502, headers: { 'cache-control': 'no-store' } }
    )
  }
}

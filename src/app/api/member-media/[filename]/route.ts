import { auth0 } from '@/common/lib/auth0/server'
import { config } from '@/config'

export const GET = async (
  _request: Request,
  { params }: { params: { filename: string } }
) => {
  const session = await auth0.getSession()
  if (!session?.tokenSet.idToken) {
    return new Response(null, {
      status: 401,
      headers: { 'cache-control': 'private, no-store' },
    })
  }
  const { filename } = params
  if (!/^[\w-][\w.-]{0,240}$/.test(filename) || filename.includes('..')) {
    return new Response(null, { status: 400 })
  }
  const base = process.env.CMS_SERVER_API_BASE_URL || config.API_BASE_URL
  try {
    const response = await fetch(
      `${base}/media-taiwan-record/file/${encodeURIComponent(filename)}`,
      {
        headers: { authorization: `Bearer ${session.tokenSet.idToken}` },
        cache: 'no-store',
        redirect: 'error',
        signal: AbortSignal.timeout(20000),
      }
    )
    const headers = { 'cache-control': 'private, no-store' }
    if (!response.ok) {
      return new Response(null, {
        status: [401, 403, 404].includes(response.status)
          ? response.status
          : 502,
        headers,
      })
    }
    const contentType = response.headers.get('content-type') || ''
    if (!/^image\/(png|jpeg|gif|webp)(;|$)/i.test(contentType)) {
      return new Response(null, { status: 502, headers })
    }
    return new Response(response.body, {
      headers: {
        ...headers,
        'content-type': contentType,
        'x-content-type-options': 'nosniff',
      },
    })
  } catch {
    return new Response(null, {
      status: 502,
      headers: { 'cache-control': 'private, no-store' },
    })
  }
}

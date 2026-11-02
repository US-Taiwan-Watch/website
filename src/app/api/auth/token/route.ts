import { auth0 } from '@/common/lib/auth0/server'

export const GET = async function GET() {
  const session = await auth0.getSession()
  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }

  // 獲取 ID Token
  const idToken = session.tokenSet.idToken

  return Response.json({ idToken })
}

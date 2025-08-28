import { auth0 } from '@/common/lib/auth0/server'
import { config } from '@/config'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const session = await auth0.getSession()

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { newPassword } = await request.json()

    if (!newPassword) {
      return NextResponse.json(
        { message: 'New password is required' },
        { status: 400 }
      )
    }

    // 獲取 Management API Access Token
    const token = await getManagementApiAccessToken()

    // 更新用戶密碼
    const response = await fetch(
      `https://${config.AUTH0_DOMAIN}/api/v2/users/${session.user.sub}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: newPassword,
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Failed to update password')
    }

    return NextResponse.json({ message: 'Password updated successfully' })
  } catch (error) {
    console.error('Error updating password:', (error as Error).message)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function getManagementApiAccessToken() {
  const response = await fetch(`https://${config.AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: config.AUTH0_M2M_CLIENT_ID,
      client_secret: config.AUTH0_M2M_CLIENT_SECRET,
      audience: `https://${config.AUTH0_DOMAIN}/api/v2/`,
      grant_type: 'client_credentials',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to get management API token')
  }

  const data = await response.json()
  return data.access_token
}

import { config } from '@/config'

export const changePassword = async (newPassword: string) => {
  const response = await fetch(
    `${config.WEB_BASE_URL}/api/auth/change-password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword }),
    }
  )

  return response
}

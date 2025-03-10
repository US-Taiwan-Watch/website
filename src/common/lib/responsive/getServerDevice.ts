'use server'

import { headers } from 'next/headers'
import { userAgentFromString } from 'next/server'

/**
 * 取得伺服器端的裝置資訊
 * @see {@link https://github.com/vercel/next.js/discussions/58863#discussioncomment-10220003}
 */
export async function getServerDevice() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')
  const { device, os } = userAgentFromString(userAgent || undefined)

  return {
    isMobile: device.type === 'mobile',
    isIOS: os?.name === 'iOS',
    isAndroid: os?.name === 'Android',
  }
}

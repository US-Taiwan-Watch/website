import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectUrl = new URL('/404', request.url)
  return NextResponse.redirect(redirectUrl)
}

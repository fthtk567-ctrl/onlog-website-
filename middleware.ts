import { NextRequest, NextResponse } from 'next/server'
import { appStoreUrl, googlePlayUrl } from '@/lib/appLinks'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() ?? ''

  if (userAgent.includes('android')) {
    return NextResponse.redirect(googlePlayUrl, 302)
  }

  if (/iphone|ipad|ipod/.test(userAgent)) {
    return NextResponse.redirect(appStoreUrl, 302)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/indir',
}

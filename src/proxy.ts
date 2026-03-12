import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['sq', 'it']
const defaultLocale = 'sq'

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip if accessing public files or api
  if (
    pathname.includes('.') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

import { NextRequest, NextResponse } from 'next/server'

const SIGNIN_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(SIGNIN_URL, {
      headers: {
        'set-cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=10;`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}

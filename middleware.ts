import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  
  // reject any /dashboard/:path access if didn't have token cookie
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = await getCookie('token', { cookies })
    if(!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  // reject to /login if has any token
  if (request.nextUrl.pathname.startsWith('/login')) {
    const token = await getCookie('token', { cookies })
    if(token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }
}
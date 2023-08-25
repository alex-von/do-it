import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import withAuth from 'next-auth/middleware'

export default withAuth(
    async function middleware(req) {
        // Get token
        const token = await getToken({ req })
        const isAuth = !!token
        const isAuthPage =
            req.nextUrl.pathname.startsWith("/login") ||
            req.nextUrl.pathname.startsWith("/register")
        // Redirect to /home if user is authenticated and on an auth page
        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL("/home", req.url))
            }
    
            return null
        }
    
        if (!isAuth) {
            let from = req.nextUrl.pathname;
            if (req.nextUrl.search) {
                from += req.nextUrl.search;
            }
    
            return NextResponse.redirect(
                new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
            );
        }
    },
    {
        callbacks: {
            async authorized() {
            // This is a work-around for handling redirect on auth pages.
            // We return true here so that the middleware function above
            // is always called.
            return true
            },
        },
    }
  )

// Protect routes
export const config = { matcher: [
        '/home',
        '/tasks/:path*',
        '/projects/:path*',
        '/today',
        '/myaccount',
        '/login',
        '/register',
    ]
}
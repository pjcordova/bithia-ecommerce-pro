import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE_NAME, verificarTokenSesion } from '@/lib/session-core'

// Ninguna de estas dos usa cookie de sesión: las llama bithia-web (otro
// servidor, sin usuario logueado) con su propia autenticación por Bearer
// token, verificada dentro de cada endpoint.
const PUBLIC_ROUTES = ['/login', '/api/pedidos/descontar-stock', '/api/productos/stock']

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

  const secret = process.env.SESSION_SECRET
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value
  const userId = secret ? verificarTokenSesion(token, secret) : null
  const sesionValida = Boolean(userId)

  if (!isPublicRoute && !sesionValida) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isPublicRoute && sesionValida) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Deja pasar assets estáticos sin pasar por la verificación de sesión
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

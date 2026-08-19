import 'server-only'
import { cookies } from 'next/headers'
import { SESSION_COOKIE_NAME, crearTokenSesion, verificarTokenSesion } from './session-core'

function obtenerSecreto(): string {
  const secret = process.env.SESSION_SECRET
  if (!secret) {
    throw new Error('SESSION_SECRET no está configurado en las variables de entorno')
  }
  return secret
}

export async function crearSesion(userId: string) {
  const { token, expiresAt } = crearTokenSesion(userId, obtenerSecreto())
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  })
}

export async function obtenerUserIdDeSesion(): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value
  return verificarTokenSesion(token, obtenerSecreto())
}

export async function eliminarSesion() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

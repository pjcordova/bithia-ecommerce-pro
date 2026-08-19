import { createHmac, timingSafeEqual } from 'crypto'

// Sin 'server-only': lo usan tanto Server Actions (src/lib/session.ts) como proxy.ts,
// que corre fuera del contexto de Server Components.

export const SESSION_COOKIE_NAME = 'bithia_session'
export const SESSION_DURATION_MS = 8 * 60 * 60 * 1000 // 8 horas: dura una jornada laboral

function firmar(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('hex')
}

export function crearTokenSesion(userId: string, secret: string): { token: string; expiresAt: Date } {
  const expiresAt = Date.now() + SESSION_DURATION_MS
  const payload = `${userId}.${expiresAt}`
  const firma = firmar(payload, secret)
  return { token: `${payload}.${firma}`, expiresAt: new Date(expiresAt) }
}

export function verificarTokenSesion(token: string | undefined, secret: string): string | null {
  if (!token) return null

  const partes = token.split('.')
  if (partes.length !== 3) return null
  const [userId, expiresAtStr, firma] = partes
  const payload = `${userId}.${expiresAtStr}`
  const firmaEsperada = firmar(payload, secret)

  const firmaBuffer = Buffer.from(firma)
  const firmaEsperadaBuffer = Buffer.from(firmaEsperada)
  if (firmaBuffer.length !== firmaEsperadaBuffer.length) return null
  if (!timingSafeEqual(firmaBuffer, firmaEsperadaBuffer)) return null

  const expiresAt = Number(expiresAtStr)
  if (Number.isNaN(expiresAt) || Date.now() > expiresAt) return null

  return userId
}

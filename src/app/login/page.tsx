"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react'

const Login: React.FC = () => {
  const { login } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = (await login(email, password)) as { success: boolean; error?: string }
    setLoading(false)
    if (result.success) {
      // admin goes to /dashboard, staff goes to /pos
      const found = email.toLowerCase().trim()
      router.replace(found === 'ceo@bithia.com' ? '/dashboard' : '/pos')
    } else {
      setError(result.error || 'Error desconocido')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bithia-bg px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/25">
            <span className="text-2xl font-black text-white">B</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground">BITHIA BRAND</h1>
          <p className="mt-1 text-sm text-bithia-silver">ERP &amp; Punto de Venta</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-xl shadow-black/5 border border-border/50">
          <h2 className="mb-6 text-lg font-bold text-foreground">Iniciar Sesión</h2>

          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-destructive animate-fade-in">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-bithia-silver">Correo electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ceo@bithia.com"
                required
                className="w-full rounded-xl bg-muted px-4 py-3 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-bithia-silver">Contraseña</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl bg-muted px-4 py-3 pr-12 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-bithia-silver hover:text-foreground transition-colors"
                >
                  {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              id="login-btn"
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl active:scale-[0.97] disabled:opacity-60"
            >
              {loading ? (
                <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                <>
                  <LogIn className="h-4 w-4" />
                  Ingresar
                </>
              )}
            </button>
          </div>

          {/* Demo credentials */}
          <div className="mt-6 rounded-xl bg-muted p-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-bithia-silver">Credenciales Demo</p>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-bithia-silver">CEO (Admin):</span>
                <span className="font-mono font-bold text-foreground">ceo@bithia.com / admin123</span>
              </div>
              <div className="flex justify-between">
                <span className="text-bithia-silver">Staff:</span>
                <span className="font-mono font-bold text-foreground">staff@bithia.com / staff123</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
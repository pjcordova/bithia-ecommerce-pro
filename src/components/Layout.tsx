"use client";
import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Sidebar } from './Sidebar'
import { Menu, LogOut } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/dashboard': 'Dashboard',
  '/inventario': 'Inventario',
  '/pos': 'Punto de Venta',
  '/ventas': 'Historial de Ventas',
  '/clientes': 'Clientes (CRM)',
  '/finanzas': 'Finanzas',
  '/cierre-turno': 'Cuadre de Caja',
  '/configuracion': 'Configuración',
}

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // 1. Cambiamos isAuthenticated por user, que es lo que realmente exporta nuestro AuthContext
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  // 2. Envolvemos la redirección en un useEffect para que espere a que React termine de renderizar
  useEffect(() => {
    if (!user) {
      router.replace('/login')
    }
  }, [user, router])

  // 3. Mientras el router hace su trabajo, devolvemos null para no mostrar parpadeos extraños
  if (!user) {
    return null
  }

  const title = PAGE_TITLES[pathname] || 'Bithia'

  return (
    <div className="flex min-h-screen bg-bithia-bg">
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[272px] transform bg-white shadow-2xl shadow-black/5 transition-transform duration-300 ease-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-border/60 bg-white/80 px-4 backdrop-blur-md lg:px-8">
          <div className="flex items-center gap-4">
            <button className="rounded-xl p-2.5 hover:bg-muted active:scale-95 transition-all lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5 text-foreground" />
            </button>
            <h2 className="text-lg font-bold text-foreground">{title}</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              {/* Cambiamos user?.nombre por user?.name según nuestro AuthContext */}
              <p className="text-sm font-semibold text-foreground">{user?.name}</p>
              <p className="text-[11px] font-medium capitalize text-bithia-silver">{user?.role}</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-md shadow-primary/20">
              {user?.name.charAt(0)}
            </div>
            <button onClick={logout} className="ml-1 rounded-lg p-2 text-bithia-silver hover:bg-red-50 hover:text-destructive transition-all active:scale-90" title="Cerrar sesión">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
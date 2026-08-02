"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, ShoppingCart, Users, Wallet, X, ClipboardCheck, Settings } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

interface SidebarProps { onClose?: () => void }

const allNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', adminOnly: true },
  { icon: Package, label: 'Inventario', path: '/inventario', adminOnly: false },
  { icon: ShoppingCart, label: 'Punto de Venta', path: '/pos', adminOnly: false },
  { icon: Users, label: 'Clientes (CRM)', path: '/clientes', adminOnly: true },
  { icon: Wallet, label: 'Finanzas', path: '/finanzas', adminOnly: true },
  { icon: ClipboardCheck, label: 'Cuadre de Caja', path: '/cierre-turno', adminOnly: false },
  { icon: Settings, label: 'Configuración', path: '/configuracion', adminOnly: true },
]

export const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  // 1. Sacamos solo 'user' del contexto y calculamos si es admin
  const { user } = useAuth()
  const isAdmin = user?.role === 'ADMIN'
  const pathname = usePathname()

  const navItems = allNavItems.filter(item => isAdmin || !item.adminOnly)

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between p-6 pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
            <span className="text-lg font-black text-white">B</span>
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-tight text-foreground">BITHIA</h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bithia-silver">Brand ERP</p>
          </div>
        </div>
        {onClose && <button onClick={onClose} className="rounded-lg p-2 hover:bg-muted lg:hidden"><X className="h-5 w-5 text-foreground" /></button>}
      </div>

      <nav className="mt-6 flex-1 space-y-1 px-4">
        {navItems.map(item => {
          const isActive = pathname === item.path
          return (
            <Link key={item.path} href={item.path} onClick={onClose}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${isActive ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20' : 'text-bithia-silver hover:bg-muted hover:text-foreground'
                }`}>
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border/60 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
            {/* 2. Cambiamos nombre por name y agregamos un comodín (?) de seguridad */}
            {user?.name?.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            {/* 3. Cambiamos nombre por name y rol por role */}
            <p className="truncate text-sm font-bold text-foreground">{user?.name}</p>
            <p className="text-[11px] font-medium text-bithia-silver capitalize">{user?.role === 'ADMIN' ? 'CEO · Administradora' : 'Vendedora'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
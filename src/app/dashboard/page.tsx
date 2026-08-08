"use client";
import React, { useMemo } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, ShoppingBag, Users, AlertTriangle, ArrowUpRight, ArrowDownRight, CheckCircle2 } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/context/AuthContext'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'

export default function DashboardPage() {
  const { ventas, clientes, inventario, cuadres } = useApp()
  const { user } = useAuth()

  // Lógica de datos
  const now = new Date()
  const todayStr = now.toISOString().split('T')[0]
  const ventasHoy = ventas.filter(v => v.fecha_hora.startsWith(todayStr))
  const totalHoy = ventasHoy.reduce((s, v) => s + v.total, 0)
  const utilidadHoy = ventasHoy.reduce((s, v) => s + v.utilidad_neta_venta, 0)
  const stockTotal = inventario.reduce((s, i) => s + (Number(i.cantidad) || 0), 0)

  const chartData = useMemo(() => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now); d.setDate(d.getDate() - (6 - i))
      const key = d.toISOString().split('T')[0]
      const ventasDelDia = ventas.filter(v => v.fecha_hora.startsWith(key))
      return {
        name: days[d.getDay()],
        retorno: ventasDelDia.reduce((s, v) => s + v.total, 0),
        inversion: ventasDelDia.reduce((s, v) => s + (v.total - v.utilidad_neta_venta), 0),
      }
    })
  }, [ventas])

  const recentSales = [...ventas].sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime()).slice(0, 5)
  const recentCuadres = [...cuadres].sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime()).slice(0, 5)

  const stats = [
    { title: 'Ventas Hoy', value: `S/ ${totalHoy.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, icon: ShoppingBag, color: 'text-primary', trend: `${ventasHoy.length} ventas`, up: true },
    { title: 'Utilidad Neta', value: `S/ ${utilidadHoy.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, icon: TrendingUp, color: 'text-emerald-500', trend: 'Margen', up: true },
    { title: 'Clientas', value: String(clientes.length), icon: Users, color: 'text-violet-500', trend: `${clientes.filter(c => c.total_prendas_compradas > 10).length} VIP`, up: true },
    { title: 'Stock Bajo', value: String(inventario.filter(i => i.cantidad <= 3).length), icon: AlertTriangle, color: 'text-amber-500', trend: 'Revisar', up: false },
  ]

  return (
    <AdminRoute>
      <Layout>
        <div className="space-y-8 animate-fade-in pb-10">
          {/* Saludo */}
          <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-8 text-white shadow-xl">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Bienvenida, {user?.name?.split(' ')[0]} 👋</h1>
            <p className="mt-2 text-white/80 font-medium">Bithia Brand · {new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(s => (
              <div key={s.title} className="rounded-2xl bg-card p-6 shadow-sm border border-border flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-xl bg-secondary/50 ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${s.up ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {s.trend}
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{s.title}</p>
                  <p className="text-2xl font-extrabold text-foreground mt-1">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Gráfico */}
            <div className="lg:col-span-2 rounded-2xl bg-card p-6 shadow-sm border border-border">
              <h3 className="mb-6 font-bold text-foreground">Rendimiento Semanal</h3>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="gI" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10b981" stopOpacity={0.2} /><stop offset="95%" stopColor="#10b981" stopOpacity={0} /></linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="retorno" stroke="#10b981" strokeWidth={3} fill="url(#gI)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Ventas Recientes */}
            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <h3 className="mb-6 font-bold text-foreground">Ventas Recientes</h3>
              <div className="space-y-6">
                {recentSales.map(v => (
                  <div key={v.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">C</div>
                      <div>
                        <p className="text-sm font-bold text-foreground">S/ {v.total.toFixed(2)}</p>
                        <p className="text-[11px] text-muted-foreground uppercase">{v.metodo_pago}</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-medium">{new Date(v.fecha_hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </AdminRoute>
  )
}
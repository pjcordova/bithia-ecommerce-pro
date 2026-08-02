"use client";
import React, { useMemo } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, ShoppingBag, Users, DollarSign, ArrowUpRight, ArrowDownRight, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { useAuth } from '@/context/AuthContext'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'

const DashboardContent: React.FC = () => {
  const { ventas, gastos, clientes, inventario, cuadres } = useApp()
  const { user } = useAuth()

  const now = new Date()
  const todayStr = now.toISOString().split('T')[0]
  const ventasHoy = ventas.filter(v => v.fecha_hora.startsWith(todayStr))
  const totalHoy = ventasHoy.reduce((s, v) => s + v.total, 0)
  const utilidadHoy = ventasHoy.reduce((s, v) => s + v.utilidad_neta_venta, 0)

  const stockTotal = inventario.reduce((s, i) => s + i.cantidad, 0)

  const chartData = useMemo(() => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now); d.setDate(d.getDate() - (6 - i))
      const key = d.toISOString().split('T')[0]
      return {
        name: days[d.getDay()],
        retorno: ventas.filter(v => v.fecha_hora.startsWith(key)).reduce((s, v) => s + v.total, 0),
        inversion: ventas.filter(v => v.fecha_hora.startsWith(key)).reduce((s, v) => s + (v.total - v.utilidad_neta_venta), 0),
      }
    })
  }, [ventas, gastos])

  const recentSales = useMemo(() =>
    [...ventas].sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime()).slice(0, 6),
    [ventas])

  const recentCuadres = useMemo(() =>
    [...cuadres].sort((a, b) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime()).slice(0, 5),
    [cuadres])

  const formatTime = (iso: string) => {
    const diff = now.getTime() - new Date(iso).getTime()
    if (diff < 60000) return 'ahora'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}min`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h`
    return `${Math.floor(diff / 86400000)}d`
  }

  const stats = [
    { title: 'Ventas Hoy', value: `S/ ${totalHoy.toFixed(0)}`, icon: ShoppingBag, color: 'from-primary to-accent', trend: `${ventasHoy.length} ventas`, up: true },
    { title: 'Utilidad Neta (Hoy)', value: `S/ ${utilidadHoy.toFixed(0)}`, icon: TrendingUp, color: 'from-bithia-terracotta to-bithia-rose', trend: 'Margen', up: true },
    { title: 'Clientas', value: String(clientes.length), icon: Users, color: 'from-bithia-rose to-primary', trend: `${clientes.filter(c => c.total_prendas_compradas > 10).length} VIP`, up: true },
    { title: 'Stock Global', value: `${stockTotal}`, icon: DollarSign, color: 'from-bithia-silver to-foreground', trend: `${inventario.filter(i => i.cantidad <= 3).length} bajo`, up: false },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Saludo Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-6 text-white shadow-lg shadow-primary/20">
        <h1 className="text-2xl font-extrabold text-white">Bienvenida, {user?.name?.split(' ')[0]} 👋</h1>
        <p className="mt-1 text-sm text-white/90">Aquí tienes el resumen de tu boutique hoy, {new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long' })}.</p>
      </div>

      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(s => (
          <div key={s.title} className="rounded-2xl bg-card p-5 shadow-sm border border-border hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-lg`}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${s.up ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}{s.trend}
              </span>
            </div>
            <p className="text-xs font-semibold text-muted-foreground">{s.title}</p>
            <p className="text-2xl font-extrabold text-foreground mt-0.5">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Gráfica Inversión vs Retorno */}
        <div className="lg:col-span-2 rounded-2xl bg-card p-6 shadow-sm border border-border">
          <h3 className="mb-6 text-base font-bold text-foreground">Inversión vs Retorno (Semana)</h3>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="gI" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--success)" stopOpacity={0.2} /><stop offset="95%" stopColor="var(--success)" stopOpacity={0} /></linearGradient>
                  <linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2} /><stop offset="95%" stopColor="var(--primary)" stopOpacity={0} /></linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-border opacity-40" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'currentColor' }} className="text-muted-foreground" dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'currentColor' }} className="text-muted-foreground" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '14px',
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    fontSize: '12px'
                  }}
                />
                <Area type="monotone" dataKey="retorno" stroke="var(--success)" strokeWidth={2.5} fillOpacity={1} fill="url(#gI)" />
                <Area type="monotone" dataKey="inversion" stroke="var(--primary)" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#gG)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ventas Recientes */}
        <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
          <h3 className="mb-5 text-base font-bold text-foreground">Ventas Recientes</h3>
          <div className="space-y-3.5">
            {recentSales.map(v => {
              const cl = clientes.find(c => c.id === v.cliente_id)
              return (
                <div key={v.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">{cl ? cl.nombre.charAt(0) : '?'}</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{cl?.nombre || 'Walk-in'}</p>
                      <p className="text-[11px] text-muted-foreground">{v.metodo_pago} · {formatTime(v.fecha_hora)}</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-foreground">S/ {v.total.toFixed(2)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Cuadres de Caja del Staff */}
      <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
        <h3 className="mb-4 text-base font-bold text-foreground">Cuadres de Caja del Staff</h3>
        {recentCuadres.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sin cuadres registrados</p>
        ) : (
          <div className="space-y-3">
            {recentCuadres.map(cq => (
              <div key={cq.id} className="flex items-center justify-between rounded-xl bg-muted/40 p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  {cq.estado === 'aprobado' ? <CheckCircle2 className="h-5 w-5 text-success" /> : <AlertTriangle className="h-5 w-5 text-destructive" />}
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {cq.estado === 'aprobado' ? 'Cuadre OK' : `Descuadre: S/ ${Math.abs(cq.diferencia).toFixed(2)}`}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Declarado: S/ {cq.monto_declarado.toFixed(2)} vs Sistema: S/ {cq.monto_sistema.toFixed(2)} — {new Date(cq.fecha_hora).toLocaleDateString('es-PE')}
                    </p>
                  </div>
                </div>
                <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${cq.estado === 'aprobado' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                  {cq.estado}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <AdminRoute>
      <Layout>
        <DashboardContent />
      </Layout>
    </AdminRoute>
  )
}
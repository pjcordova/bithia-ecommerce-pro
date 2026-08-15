"use client";
import React, { useMemo, useState, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import { TrendingUp, ShoppingBag, Users, AlertTriangle, ArrowUpRight, ArrowDownRight, CheckCircle2, Package, Receipt, Store } from 'lucide-react'
import { obtenerDatosDashboard } from '@/app/actions/dashboard'
import { useAuth } from '@/context/AuthContext'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'
import { toast } from 'sonner'

const CANAL_COLORS = ['#c9a48d', '#d4a59a']
const METODO_COLORS = ['#c9a48d', '#d4a59a', '#a78bfa', '#f59e0b', '#60a5fa']

export default function DashboardPage() {
  const { user } = useAuth()
  const [ventas, setVentas] = useState<any[]>([])
  const [clientes, setClientes] = useState<any[]>([])
  const [inventario, setInventario] = useState<any[]>([])
  const [productos, setProductos] = useState<any[]>([])
  const [detalleVentas, setDetalleVentas] = useState<any[]>([])
  const [gastos, setGastos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      setLoading(true)
      const res = await obtenerDatosDashboard()
      if (res.success) {
        setVentas(res.ventas)
        setClientes(res.clientes)
        setInventario(res.inventario)
        setProductos(res.productos)
        setDetalleVentas(res.detalleVentas)
        setGastos(res.gastos)
      } else {
        toast.error('Error al cargar el dashboard desde Railway')
      }
      setLoading(false)
    }
    cargar()
  }, [])

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

  const topProductos = useMemo(() => {
    const map = new Map<string, { nombre: string; categoria: string; unidades: number; utilidad: number }>()
    detalleVentas.forEach(d => {
      const prod = productos.find(p => p.id === d.producto_id)
      if (!prod) return
      const entry = map.get(prod.id) || { nombre: prod.nombre, categoria: prod.categoria, unidades: 0, utilidad: 0 }
      entry.unidades += d.cantidad
      entry.utilidad += d.utilidad_subtotal
      map.set(prod.id, entry)
    })
    return Array.from(map.values()).sort((a, b) => b.unidades - a.unidades).slice(0, 5)
  }, [detalleVentas, productos])
  const maxUnidades = Math.max(1, ...topProductos.map(p => p.unidades))

  const ventasPorCanal = useMemo(() => {
    const stand = ventas.filter(v => v.canal_venta === 'stand').reduce((s, v) => s + v.total, 0)
    const instagram = ventas.filter(v => v.canal_venta === 'instagram').reduce((s, v) => s + v.total, 0)
    return [
      { name: 'Stand', value: stand },
      { name: 'Instagram', value: instagram },
    ].filter(c => c.value > 0)
  }, [ventas])

  const metodosPago = useMemo(() => {
    const map = new Map<string, number>()
    ventas.forEach(v => map.set(v.metodo_pago, (map.get(v.metodo_pago) || 0) + v.total))
    return Array.from(map.entries()).map(([name, value]) => ({ name, value }))
  }, [ventas])

  const gastosPorCategoria = useMemo(() => {
    const map = new Map<string, number>()
    gastos.forEach(g => map.set(g.categoria, (map.get(g.categoria) || 0) + g.monto))
    return Array.from(map.entries()).map(([categoria, monto]) => ({ categoria, monto })).sort((a, b) => b.monto - a.monto)
  }, [gastos])
  const totalGastos = gastosPorCategoria.reduce((s, g) => s + g.monto, 0)

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

          {loading ? (
            <div className="rounded-2xl bg-card p-12 text-center text-muted-foreground border border-border">
              Sincronizando dashboard con la nube...
            </div>
          ) : (
          <>
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Top Productos */}
            <div className="lg:col-span-2 rounded-2xl bg-card p-6 shadow-sm border border-border">
              <h3 className="mb-6 font-bold text-foreground flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" /> Top Productos
              </h3>
              {topProductos.length === 0 ? (
                <p className="text-sm text-muted-foreground">Aún no hay ventas registradas.</p>
              ) : (
                <div className="space-y-5">
                  {topProductos.map((p, i) => (
                    <div key={p.nombre}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-muted-foreground w-4">{i + 1}.</span>
                          <span className="text-sm font-bold text-foreground">{p.nombre}</span>
                          <span className="text-[10px] font-semibold text-muted-foreground uppercase bg-secondary/50 px-2 py-0.5 rounded-full">{p.categoria}</span>
                        </div>
                        <span className="text-xs font-bold text-foreground">{p.unidades} uds · S/ {p.utilidad.toFixed(0)}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary/50 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${(p.unidades / maxUnidades) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ventas por Canal */}
            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <h3 className="mb-2 font-bold text-foreground flex items-center gap-2">
                <Store className="h-4 w-4 text-primary" /> Ventas por Canal
              </h3>
              {ventasPorCanal.length === 0 ? (
                <p className="text-sm text-muted-foreground">Sin datos aún.</p>
              ) : (
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={ventasPorCanal} dataKey="value" nameKey="name" innerRadius={55} outerRadius={80} paddingAngle={3}>
                        {ventasPorCanal.map((_, i) => <Cell key={i} fill={CANAL_COLORS[i % CANAL_COLORS.length]} />)}
                      </Pie>
                      <Tooltip formatter={(v: any) => `S/ ${Number(v).toFixed(2)}`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                      <Legend verticalAlign="bottom" height={24} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Métodos de Pago */}
            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <h3 className="mb-2 font-bold text-foreground flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4 text-primary" /> Métodos de Pago
              </h3>
              {metodosPago.length === 0 ? (
                <p className="text-sm text-muted-foreground">Sin datos aún.</p>
              ) : (
                <div className="h-[220px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={metodosPago} dataKey="value" nameKey="name" innerRadius={55} outerRadius={80} paddingAngle={3}>
                        {metodosPago.map((_, i) => <Cell key={i} fill={METODO_COLORS[i % METODO_COLORS.length]} />)}
                      </Pie>
                      <Tooltip formatter={(v: any) => `S/ ${Number(v).toFixed(2)}`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                      <Legend verticalAlign="bottom" height={24} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', fontWeight: 600, textTransform: 'capitalize' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

            {/* Gastos por Categoría */}
            <div className="lg:col-span-2 rounded-2xl bg-card p-6 shadow-sm border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-primary" /> Gastos por Categoría
                </h3>
                <span className="text-sm font-extrabold text-foreground">S/ {totalGastos.toFixed(2)}</span>
              </div>
              {gastosPorCategoria.length === 0 ? (
                <p className="text-sm text-muted-foreground">Aún no hay gastos registrados.</p>
              ) : (
                <div className="space-y-5">
                  {gastosPorCategoria.map(g => (
                    <div key={g.categoria}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-foreground">{g.categoria}</span>
                        <span className="text-xs font-bold text-muted-foreground">S/ {g.monto.toFixed(2)}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary/50 overflow-hidden">
                        <div className="h-full rounded-full bg-amber-500" style={{ width: `${(g.monto / totalGastos) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          </>
          )}
        </div>
      </Layout>
    </AdminRoute>
  )
}
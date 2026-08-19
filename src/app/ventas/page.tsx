"use client";
import React, { useState, useEffect, useMemo } from 'react'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'
import { useAuth } from '@/context/AuthContext'
import { obtenerVentas, anularVenta } from '@/app/actions/ventas'
import { obtenerColorHex } from '@/lib/colores'
import { Search, Receipt, Ban, X, User, Calendar, TrendingUp, ShoppingBag, AlertTriangle, Tag } from 'lucide-react'
import { toast } from 'sonner'

function VentasContent() {
  const { user } = useAuth()
  const [ventas, setVentas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [mostrarAnuladas, setMostrarAnuladas] = useState(false)

  const [ventaAAnular, setVentaAAnular] = useState<any>(null)
  const [motivo, setMotivo] = useState('')
  const [anulando, setAnulando] = useState(false)

  const cargarVentas = async () => {
    setLoading(true)
    const res = await obtenerVentas({ incluirAnuladas: true })
    if (res.success) {
      setVentas(res.ventas)
    } else {
      toast.error('Error al cargar las ventas desde Railway')
    }
    setLoading(false)
  }

  useEffect(() => {
    cargarVentas()
  }, [])

  const ventasFiltradas = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    return ventas.filter(v => {
      if (!mostrarAnuladas && v.anulada) return false
      if (!q) return true
      return (
        v.clienteNombre?.toLowerCase().includes(q) ||
        v.metodo_pago.toLowerCase().includes(q) ||
        v.canal_venta.toLowerCase().includes(q) ||
        v.items.some((i: any) => i.nombre.toLowerCase().includes(q))
      )
    })
  }, [ventas, busqueda, mostrarAnuladas])

  const kpis = useMemo(() => {
    const activas = ventas.filter(v => !v.anulada)
    return {
      cantidad: activas.length,
      total: activas.reduce((s, v) => s + v.total, 0),
      utilidad: activas.reduce((s, v) => s + v.utilidad_neta_venta, 0),
      anuladas: ventas.filter(v => v.anulada).length,
    }
  }, [ventas])

  const handleAnular = async () => {
    if (!motivo.trim()) {
      toast.error('Explica el motivo de la anulación')
      return
    }
    setAnulando(true)
    const res = await anularVenta({
      venta_id: ventaAAnular.id,
      motivo,
      usuario_id: user?.id,
      usuarioNombre: user?.name,
    })
    setAnulando(false)

    if (res.success) {
      toast.success(res.message)
      setVentaAAnular(null)
      setMotivo('')
      cargarVentas()
    } else {
      toast.error(res.error)
    }
  }

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Historial de Ventas</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Consulta las ventas registradas y anula las que se hayan cobrado por error.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><ShoppingBag className="h-3.5 w-3.5 text-primary" /> Ventas</p>
          <p className="text-xl font-extrabold text-foreground mt-1">{kpis.cantidad}</p>
        </div>
        <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Ingresos</p>
          <p className="text-xl font-extrabold text-foreground mt-1">S/ {kpis.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-emerald-600" /> Utilidad</p>
          <p className="text-xl font-extrabold text-emerald-600 mt-1">S/ {kpis.utilidad.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><Ban className="h-3.5 w-3.5 text-destructive" /> Anuladas</p>
          <p className="text-xl font-extrabold text-foreground mt-1">{kpis.anuladas}</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar por clienta, prenda o método de pago..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          />
        </div>
        <label className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm cursor-pointer select-none whitespace-nowrap">
          <input
            type="checkbox"
            checked={mostrarAnuladas}
            onChange={e => setMostrarAnuladas(e.target.checked)}
            className="rounded accent-primary h-4 w-4"
          />
          Mostrar anuladas
        </label>
      </div>

      {/* Listado */}
      {loading ? (
        <div className="rounded-2xl bg-card p-12 text-center text-muted-foreground border border-border">
          Sincronizando ventas con la nube...
        </div>
      ) : ventasFiltradas.length === 0 ? (
        <div className="rounded-2xl bg-card p-12 text-center text-muted-foreground border border-border">
          No se encontraron ventas.
        </div>
      ) : (
        <div className="space-y-3">
          {ventasFiltradas.map(v => (
            <div
              key={v.id}
              className={`rounded-2xl bg-card p-5 border shadow-sm transition-all ${v.anulada ? 'border-destructive/30 opacity-70' : 'border-border'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className="text-base font-extrabold text-foreground">S/ {v.total.toFixed(2)}</span>
                    {v.descuento > 0 && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700" title={`Precio de lista: S/ ${(v.total + v.descuento).toFixed(2)}`}>
                        <Tag className="h-2.5 w-2.5" /> Rebaja S/ {v.descuento.toFixed(2)}
                      </span>
                    )}
                    {v.anulada && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">Anulada</span>
                    )}
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-secondary text-foreground">{v.metodo_pago}</span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-secondary text-foreground">{v.canal_venta}</span>
                  </div>

                  <p className="text-xs text-muted-foreground flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(v.fecha_hora).toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {v.clienteNombre || 'Cliente general'}
                    </span>
                    {v.vendedoraNombre && <span>Atendió: {v.vendedoraNombre}</span>}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {v.items.map((item: any, i: number) => (
                      <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-muted/60 border border-border/60 px-2 py-1 rounded-lg text-foreground">
                        <span
                          className="h-2.5 w-2.5 rounded-full border border-black/10 flex-shrink-0"
                          style={{ backgroundColor: obtenerColorHex(item.color) }}
                        />
                        {item.nombre} · {item.talla} × {item.cantidad}
                      </span>
                    ))}
                  </div>

                  {v.anulada && v.motivo_anulacion && (
                    <p className="text-[11px] text-destructive mt-2.5 italic">
                      Motivo: "{v.motivo_anulacion}"
                      {v.fecha_anulacion && ` · ${new Date(v.fecha_anulacion).toLocaleDateString('es-PE')}`}
                    </p>
                  )}
                </div>

                {!v.anulada && (
                  <button
                    onClick={() => { setVentaAAnular(v); setMotivo('') }}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-secondary px-3 py-2 text-xs font-bold text-foreground hover:bg-destructive hover:text-white transition-all flex-shrink-0 self-start"
                  >
                    <Ban className="h-3.5 w-3.5" /> Anular
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de anulación */}
      {ventaAAnular && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-3xl bg-background border border-border p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                  <Ban className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground">Anular esta venta</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">S/ {ventaAAnular.total.toFixed(2)} · {new Date(ventaAAnular.fecha_hora).toLocaleDateString('es-PE')}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setVentaAAnular(null)}
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-xl bg-muted/50 border border-border p-3 mb-4">
              <p className="text-[11px] font-bold text-muted-foreground uppercase mb-1.5 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" /> Qué va a pasar
              </p>
              <ul className="text-[11px] text-foreground space-y-1">
                <li>· Las prendas vuelven al inventario</li>
                <li>· Deja de sumar en Dashboard, Finanzas y Cuadre de Caja</li>
                <li>· La venta queda registrada como anulada, no se borra</li>
              </ul>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Motivo *</label>
              <textarea
                autoFocus
                rows={2}
                placeholder="Ej. La clienta devolvió la prenda, se cobró el monto equivocado..."
                value={motivo}
                onChange={e => setMotivo(e.target.value)}
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setVentaAAnular(null)}
                className="flex-1 rounded-xl bg-secondary py-3 text-xs font-bold text-foreground hover:opacity-90 transition-all"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleAnular}
                disabled={anulando || !motivo.trim()}
                className="flex-1 rounded-xl bg-destructive py-3 text-xs font-extrabold text-white shadow-md hover:opacity-90 transition-all disabled:opacity-50"
              >
                {anulando ? 'Anulando...' : 'Anular Venta'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function VentasPage() {
  return (
    <AdminRoute>
      <Layout>
        <VentasContent />
      </Layout>
    </AdminRoute>
  )
}

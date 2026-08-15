"use client";
import React, { useState, useEffect, useMemo } from 'react'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'
import { useAuth } from '@/context/AuthContext'
import { obtenerDatosFinanzas, agregarGasto, actualizarGasto, eliminarGasto } from '@/app/actions/finanzas'
import { Wallet, TrendingUp, TrendingDown, Plus, ArrowDownRight, ArrowUpRight, X, FileText, Receipt, Settings, Truck, Megaphone, MoreHorizontal, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

const CATEGORIAS_GASTO = [
  { value: 'Operativo', icon: Settings },
  { value: 'Logística', icon: Truck },
  { value: 'Marketing', icon: Megaphone },
  { value: 'Otros', icon: MoreHorizontal },
] as const

function FinanzasContent() {
  const { user } = useAuth()
  const [ventas, setVentas] = useState<any[]>([])
  const [gastos, setGastos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const [categoria, setCategoria] = useState('Operativo')
  const [guardando, setGuardando] = useState(false)
  const [gastoEditandoId, setGastoEditandoId] = useState<string | null>(null)
  const [confirmEliminarId, setConfirmEliminarId] = useState<string | null>(null)
  const [eliminando, setEliminando] = useState(false)

  const cargarDatos = async () => {
    setLoading(true)
    const res = await obtenerDatosFinanzas()
    if (res.success) {
      setVentas(res.ventas)
      setGastos(res.gastos)
    } else {
      toast.error('Error al cargar finanzas desde Railway')
    }
    setLoading(false)
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  const { totalVentas, totalGastos, utilidadNeta } = useMemo(() => {
    const totalVentas = ventas.reduce((acc, v) => acc + v.total, 0)
    const margenVentas = ventas.reduce((acc, v) => acc + v.utilidad_neta_venta, 0)
    const totalGastos = gastos.reduce((acc, g) => acc + g.monto, 0)
    // Utilidad neta real = margen de las ventas (ya descuenta costo de mercadería) - gastos operativos.
    // No usar el ingreso bruto (totalVentas) aquí, porque sobreestimaría la ganancia.
    return { totalVentas, totalGastos, utilidadNeta: margenVentas - totalGastos }
  }, [ventas, gastos])

  const handleAbrirNuevoGasto = () => {
    setGastoEditandoId(null)
    setDescripcion('')
    setMonto('')
    setCategoria('Operativo')
    setIsModalOpen(true)
  }

  const handleAbrirEdicionGasto = (gasto: any) => {
    setGastoEditandoId(gasto.id)
    setDescripcion(gasto.concepto)
    setMonto(String(gasto.monto))
    setCategoria(gasto.categoria)
    setIsModalOpen(true)
  }

  const handleGuardarGasto = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!descripcion || !monto) {
      toast.error('Completa los campos obligatorios')
      return
    }
    setGuardando(true)
    const datos = { concepto: descripcion, monto: parseFloat(monto), categoria }
    const res = gastoEditandoId
      ? await actualizarGasto(gastoEditandoId, datos)
      : await agregarGasto({ ...datos, usuario_id: user?.id })
    setGuardando(false)

    if (res.success) {
      toast.success(res.message)
      setIsModalOpen(false)
      setGastoEditandoId(null)
      setDescripcion('')
      setMonto('')
      cargarDatos()
    } else {
      toast.error(res.error)
    }
  }

  const handleConfirmarEliminarGasto = async () => {
    if (!confirmEliminarId) return
    setEliminando(true)
    const res = await eliminarGasto(confirmEliminarId)
    setEliminando(false)
    setConfirmEliminarId(null)

    if (res.success) {
      toast.success(res.message)
      cargarDatos()
    } else {
      toast.error(res.error)
    }
  }

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Finanzas y Caja</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Control de ingresos, egresos y utilidad neta de la boutique.</p>
        </div>
        <button
          onClick={handleAbrirNuevoGasto}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
        >
          <Plus className="h-4 w-4" /> Registrar Gasto
        </button>
      </div>

      {loading ? (
        <div className="rounded-2xl bg-card p-12 text-center text-muted-foreground border border-border">
          Sincronizando finanzas con la nube...
        </div>
      ) : (
      <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-card p-5 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
              <TrendingUp className="h-5 w-5" />
            </div>
            <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold bg-success/10 text-success">
              <ArrowUpRight className="h-3 w-3" /> Ingresos
            </span>
          </div>
          <p className="text-xs font-semibold text-muted-foreground">Ventas Totales</p>
          <p className="text-2xl font-extrabold text-foreground mt-0.5">S/ {totalVentas.toFixed(2)}</p>
        </div>

        <div className="rounded-2xl bg-card p-5 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <TrendingDown className="h-5 w-5" />
            </div>
            <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold bg-destructive/10 text-destructive">
              <ArrowDownRight className="h-3 w-3" /> Egresos
            </span>
          </div>
          <p className="text-xs font-semibold text-muted-foreground">Gastos Registrados</p>
          <p className="text-2xl font-extrabold text-foreground mt-0.5">S/ {totalGastos.toFixed(2)}</p>
        </div>

        <div className="rounded-2xl bg-card p-5 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Wallet className="h-5 w-5" />
            </div>
            <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold bg-primary/10 text-primary">
              Balance
            </span>
          </div>
          <p className="text-xs font-semibold text-muted-foreground">Utilidad Neta</p>
          <p className="text-2xl font-extrabold text-foreground mt-0.5">S/ {utilidadNeta.toFixed(2)}</p>
        </div>
      </div>

      <div className="rounded-2xl bg-card p-6 border border-border shadow-sm">
        <h3 className="mb-4 text-base font-bold text-foreground">Historial de Gastos</h3>
        {gastos.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">No hay gastos registrados en el periodo.</p>
        ) : (
          <div className="space-y-3">
            {gastos.map((g: any) => (
              <div key={g.id} className="flex items-center justify-between gap-3 rounded-xl bg-muted/40 p-4 border border-border/50">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground truncate">{g.concepto}</p>
                  <p className="text-xs text-muted-foreground">{g.categoria} · {new Date(g.fecha_hora).toLocaleDateString('es-PE')}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-sm font-extrabold text-destructive">- S/ {g.monto.toFixed(2)}</span>
                  <button
                    type="button"
                    onClick={() => handleAbrirEdicionGasto(g)}
                    title="Editar gasto"
                    className="p-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmEliminarId(g.id)}
                    title="Eliminar gasto"
                    className="p-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-destructive hover:bg-red-50 transition-all"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-background border border-border p-8 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive flex-shrink-0">
                  <Receipt className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground">{gastoEditandoId ? 'Editar Gasto' : 'Registrar Nuevo Gasto'}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Se descuenta de la utilidad neta al instante.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setIsModalOpen(false); setGastoEditandoId(null) }}
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleGuardarGasto} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Descripción *</label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Alquiler de local, Envases..."
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    className="w-full rounded-2xl border border-border bg-card pl-10 pr-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Monto *</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-bold text-muted-foreground">S/</span>
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    required
                    placeholder="150.00"
                    value={monto}
                    onChange={e => setMonto(e.target.value)}
                    className="w-full rounded-2xl border border-border bg-card pl-10 pr-4 py-3 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Categoría</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {CATEGORIAS_GASTO.map(cat => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => setCategoria(cat.value)}
                      className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border px-3 py-3 text-xs font-bold transition-all ${categoria === cat.value ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:bg-muted'}`}
                    >
                      <cat.icon className="h-4 w-4" />
                      {cat.value}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-border mt-6">
                <button
                  type="button"
                  onClick={() => { setIsModalOpen(false); setGastoEditandoId(null) }}
                  className="rounded-2xl px-5 py-3 text-sm font-bold text-muted-foreground hover:bg-muted transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={guardando}
                  className="rounded-2xl bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {guardando ? 'Guardando...' : gastoEditandoId ? 'Guardar Cambios' : 'Guardar Gasto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Confirmación Eliminar Gasto */}
      {confirmEliminarId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-background border border-border p-6 shadow-2xl text-center">
            <div className="h-12 w-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-destructive/10 text-destructive">
              <Trash2 className="h-6 w-6" />
            </div>
            <h4 className="text-base font-extrabold text-foreground mb-1">¿Eliminar este gasto?</h4>
            <p className="text-xs text-muted-foreground mb-6">
              Esta acción no se puede deshacer y afectará la utilidad neta calculada.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmEliminarId(null)}
                className="flex-1 rounded-xl bg-secondary py-2.5 text-xs font-bold text-foreground hover:opacity-90 transition-all"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmarEliminarGasto}
                disabled={eliminando}
                className="flex-1 rounded-xl bg-destructive py-2.5 text-xs font-extrabold text-white shadow-md hover:opacity-90 transition-all disabled:opacity-50"
              >
                {eliminando ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FinanzasPage() {
  return (
    <AdminRoute>
      <Layout>
        <FinanzasContent />
      </Layout>
    </AdminRoute>
  )
}

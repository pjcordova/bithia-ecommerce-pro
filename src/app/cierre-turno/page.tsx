"use client";
import React, { useState, useEffect, useMemo } from 'react'
import { Layout } from '@/components/Layout'
import { useAuth } from '@/context/AuthContext'
import { obtenerVentasHoyUsuario, obtenerHistorialCuadres, registrarCuadre } from '@/app/actions/cuadre'
import { ClipboardCheck, AlertTriangle, CheckCircle2, Banknote, Smartphone, QrCode, ArrowRightLeft, CreditCard, MessageSquare, Clock } from 'lucide-react'
import { toast } from 'sonner'

const METODOS = [
  { key: 'efectivo', label: 'Efectivo', icon: Banknote },
  { key: 'yape', label: 'Yape', icon: Smartphone },
  { key: 'plin', label: 'Plin', icon: QrCode },
  { key: 'transferencia', label: 'Transferencia', icon: ArrowRightLeft },
  { key: 'tarjeta', label: 'Tarjeta', icon: CreditCard },
] as const

export default function CierreTurnoPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [cuadres, setCuadres] = useState<any[]>([])
  const [totalSistema, setTotalSistema] = useState(0)
  const [porMetodo, setPorMetodo] = useState<Record<string, number>>({})
  const [cantidadVentas, setCantidadVentas] = useState(0)

  const [montos, setMontos] = useState<Record<string, string>>({
    efectivo: '', yape: '', plin: '', transferencia: '', tarjeta: '',
  })
  const [observaciones, setObservaciones] = useState('')
  const [enviando, setEnviando] = useState(false)

  const cargarDatos = async () => {
    if (!user) return
    setLoading(true)
    const [ventasRes, historialRes] = await Promise.all([
      obtenerVentasHoyUsuario(user.id),
      obtenerHistorialCuadres(),
    ])
    if (ventasRes.success) {
      setTotalSistema(ventasRes.totalSistema)
      setPorMetodo(ventasRes.porMetodo)
      setCantidadVentas(ventasRes.cantidadVentas)
    }
    if (historialRes.success) {
      setCuadres(historialRes.cuadres)
    }
    setLoading(false)
  }

  useEffect(() => {
    cargarDatos()
  }, [user])

  const montoDeclarado = useMemo(() => {
    return METODOS.reduce((s, m) => s + (parseFloat(montos[m.key]) || 0), 0)
  }, [montos])

  const diferencia = montoDeclarado - totalSistema

  const handleSubmitCuadre = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      toast.error('Sesión no válida, vuelve a iniciar sesión')
      return
    }
    setEnviando(true)
    const res = await registrarCuadre({
      usuario_staff_id: user.id,
      monto_efectivo: parseFloat(montos.efectivo) || 0,
      monto_yape: parseFloat(montos.yape) || 0,
      monto_plin: parseFloat(montos.plin) || 0,
      monto_transferencia: parseFloat(montos.transferencia) || 0,
      monto_tarjeta: parseFloat(montos.tarjeta) || 0,
      observaciones: observaciones || undefined,
    })
    setEnviando(false)

    if (res.success) {
      toast[res.estado === 'aprobado' ? 'success' : 'warning'](res.message)
      setMontos({ efectivo: '', yape: '', plin: '', transferencia: '', tarjeta: '' })
      setObservaciones('')
      cargarDatos()
    } else {
      toast.error(res.error)
    }
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-10">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Cuadre de Caja (Cierre de Turno)</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Declara lo que recibiste hoy en cada método de pago y compáralo con el sistema.</p>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-card p-12 text-center text-muted-foreground border border-border">
            Sincronizando ventas del día con la nube...
          </div>
        ) : (
        <>
        <div className="rounded-2xl bg-card p-6 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">Arqueo del Día — {user?.name}</h3>
              <p className="text-xs text-muted-foreground">
                {cantidadVentas} venta{cantidadVentas !== 1 ? 's' : ''} registrada{cantidadVentas !== 1 ? 's' : ''} hoy en el sistema · {new Date().toLocaleDateString('es-PE', { dateStyle: 'long' })}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmitCuadre} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {METODOS.map(m => (
                <div key={m.key}>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      <m.icon className="h-3.5 w-3.5" /> {m.label}
                    </label>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      Sistema: S/ {(porMetodo[m.key] || 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-sm font-bold text-muted-foreground">S/</span>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="0.00"
                      value={montos[m.key]}
                      onChange={e => setMontos(prev => ({ ...prev, [m.key]: e.target.value }))}
                      className="w-full rounded-2xl border border-border bg-background pl-10 pr-4 py-3 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                <MessageSquare className="h-3.5 w-3.5" /> Observaciones (Opcional)
              </label>
              <textarea
                placeholder="Notas sobre algún descuadre, billete falso, promoción aplicada, etc."
                value={observaciones}
                onChange={e => setObservaciones(e.target.value)}
                rows={2}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-muted/40 border border-border">
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase">Declarado</p>
                <p className="text-base font-extrabold text-foreground mt-0.5">S/ {montoDeclarado.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase">Sistema</p>
                <p className="text-base font-extrabold text-foreground mt-0.5">S/ {totalSistema.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase">Diferencia</p>
                <p className={`text-base font-extrabold mt-0.5 ${Math.abs(diferencia) < 1 ? 'text-success' : 'text-destructive'}`}>
                  S/ {diferencia.toFixed(2)}
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
            >
              <ClipboardCheck className="h-4 w-4" /> {enviando ? 'Registrando...' : 'Registrar Cuadre de Caja'}
            </button>
          </form>
        </div>

        <div className="rounded-2xl bg-card p-6 border border-border shadow-sm">
          <h3 className="mb-4 text-base font-bold text-foreground">Historial de Cuadres</h3>
          {cuadres.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">Sin cuadres registrados recientemente</p>
          ) : (
            <div className="space-y-3">
              {cuadres.map((cq: any) => (
                <div key={cq.id} className="rounded-xl bg-muted/40 p-4 border border-border/50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {cq.estado === 'aprobado' ? <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" /> : <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />}
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground truncate">
                          {cq.staffNombre} — {cq.estado === 'aprobado' ? 'Cuadre OK' : `Descuadre: S/ ${Math.abs(cq.diferencia).toFixed(2)}`}
                        </p>
                        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Declarado: S/ {cq.monto_declarado.toFixed(2)} vs Sistema: S/ {cq.monto_sistema.toFixed(2)} — {new Date(cq.fecha_hora).toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' })}
                        </p>
                      </div>
                    </div>
                    <span className={`flex-shrink-0 rounded-full px-3 py-1 text-[11px] font-bold ${cq.estado === 'aprobado' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                      {cq.estado}
                    </span>
                  </div>
                  {cq.observaciones && (
                    <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border/60 italic">"{cq.observaciones}"</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        </>
        )}
      </div>
    </Layout>
  )
}

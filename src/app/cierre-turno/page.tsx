"use client";
import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import { useApp } from '@/context/AppContext'
import { ClipboardCheck, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

export default function CierreTurnoPage() {
  const { cuadres, registrarCuadre } = useApp()
  const [montoDeclarado, setMontoDeclarado] = useState('')

  const montoSistema = 934.00

  const handleSubmitCuadre = (e: React.FormEvent) => {
    e.preventDefault()
    const declarado = parseFloat(montoDeclarado)
    if (isNaN(declarado)) {
      toast.error('Ingresa un monto válido')
      return
    }
    const diferencia = declarado - montoSistema
    const estado = Math.abs(diferencia) < 1 ? 'aprobado' : 'descuadre'

    registrarCuadre({
      monto_declarado: declarado,
      monto_sistema: montoSistema,
      diferencia,
      estado,
      fecha_hora: new Date().toISOString()
    })

    toast.success(estado === 'aprobado' ? '¡Cuadre de caja OK!' : 'Cuadre registrado con diferencia')
    setMontoDeclarado('')
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-10">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Cuadre de Caja (Cierre de Turno)</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Declaración y arqueo de efectivo al finalizar la jornada laboral.</p>
        </div>

        <div className="rounded-2xl bg-card p-6 border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">Arqueo Diario de Caja</h3>
              <p className="text-xs text-muted-foreground">Ingresa el efectivo físico contado en caja.</p>
            </div>
          </div>

          <form onSubmit={handleSubmitCuadre} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-muted/40 border border-border">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Efectivo en Sistema</p>
                <p className="text-2xl font-extrabold text-foreground mt-1">S/ {montoSistema.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Fecha Actual</p>
                <p className="text-sm font-bold text-foreground mt-2">{new Date().toLocaleDateString('es-PE', { dateStyle: 'long' })}</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Monto Efectivo Declarado (S/) *</label>
              <input
                type="number"
                step="0.1"
                required
                placeholder="Ej. 934.00"
                value={montoDeclarado}
                onChange={e => setMontoDeclarado(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
            >
              <ClipboardCheck className="h-4 w-4" /> Registrar Cuadre de Caja
            </button>
          </form>
        </div>

        <div className="rounded-2xl bg-card p-6 border border-border shadow-sm">
          <h3 className="mb-4 text-base font-bold text-foreground">Historial de Cuadres</h3>
          {(!cuadres || cuadres.length === 0) ? (
            <p className="text-sm text-muted-foreground text-center py-6">Sin cuadres registrados recientemente</p>
          ) : (
            <div className="space-y-3">
              {cuadres.map((cq: any) => (
                <div key={cq.id} className="flex items-center justify-between rounded-xl bg-muted/40 p-4 border border-border/50">
                  <div className="flex items-center gap-3">
                    {cq.estado === 'aprobado' ? <CheckCircle2 className="h-5 w-5 text-success" /> : <AlertTriangle className="h-5 w-5 text-destructive" />}
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {cq.estado === 'aprobado' ? 'Cuadre OK' : `Descuadre: S/ ${Math.abs(cq.diferencia).toFixed(2)}`}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Declarado: S/ {Number(cq.monto_declarado || 0).toFixed(2)} vs Sistema: S/ {Number(cq.monto_sistema || 0).toFixed(2)} — {new Date(cq.fecha_hora).toLocaleDateString('es-PE')}
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
    </Layout>
  )
}
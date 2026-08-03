"use client";
import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'
import { useApp } from '@/context/AppContext'
import { Wallet, TrendingUp, TrendingDown, Plus, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { toast } from 'sonner'

function FinanzasContent() {
  const { ventas, gastos, agregarGasto } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const [categoria, setCategoria] = useState('Operativo')

  const totalVentas = (ventas || []).reduce((acc: number, v: any) => acc + Number(v.total || 0), 0)
  const totalGastos = (gastos || []).reduce((acc: number, g: any) => acc + Number(g.monto || 0), 0)
  const utilidadNeta = totalVentas - totalGastos

  const handleCrearGasto = (e: React.FormEvent) => {
    e.preventDefault()
    if (!descripcion || !monto) {
      toast.error('Completa los campos obligatorios')
      return
    }
    agregarGasto(
      descripcion,
      parseFloat(monto),
      categoria,
      'usr-ceo-001' // ID predeterminado del admin para registrar el gasto
    )
    toast.success('Gasto registrado con éxito')
    setIsModalOpen(false)
    setDescripcion('')
    setMonto('')
  }

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Finanzas y Caja</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Control de ingresos, egresos y utilidad neta de la boutique.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
        >
          <Plus className="h-4 w-4" /> Registrar Gasto
        </button>
      </div>

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
        {(!gastos || gastos.length === 0) ? (
          <p className="text-sm text-muted-foreground text-center py-8">No hay gastos registrados en el periodo.</p>
        ) : (
          <div className="space-y-3">
            {gastos.map((g: any) => (
              <div key={g.id} className="flex items-center justify-between rounded-xl bg-muted/40 p-4 border border-border/50">
                <div>
                  <p className="text-sm font-bold text-foreground">{g.descripcion}</p>
                  <p className="text-xs text-muted-foreground">{g.categoria} · {new Date(g.fecha).toLocaleDateString('es-PE')}</p>
                </div>
                <span className="text-sm font-extrabold text-destructive">- S/ {Number(g.monto || 0).toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl border border-border animate-scale-in">
            <h3 className="text-lg font-bold text-foreground mb-4">Registrar Nuevo Gasto</h3>
            <form onSubmit={handleCrearGasto} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Descripción *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Alquiler de local, Envases..."
                  value={descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Monto S/ *</label>
                <input
                  type="number"
                  step="0.1"
                  required
                  placeholder="150.00"
                  value={monto}
                  onChange={e => setMonto(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Categoría</label>
                <select
                  value={categoria}
                  onChange={e => setCategoria(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Operativo">Operativo</option>
                  <option value="Logística">Logística</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
                >
                  Guardar Gasto
                </button>
              </div>
            </form>
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
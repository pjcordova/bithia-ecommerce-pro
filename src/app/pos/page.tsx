"use client";
import React, { useState, useMemo } from 'react'
import { Layout } from '@/components/Layout'
import { useApp } from '@/context/AppContext'
import { ShoppingCart, Search, Plus, Minus, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

export default function PosPage() {
  const { inventario, clientes, registrarVenta } = ((useApp() as any) as any)
  const [busqueda, setBusqueda] = useState('')
  const [carrito, setCarrito] = useState<Array<{ productoId: string; nombre: string; precio: number; cantidad: number; stockMax: number }>>([])
  const [clienteId, setClienteId] = useState('')
  const [metodoPago, setMetodoPago] = useState('Efectivo')

  const productosDisponibles = useMemo(() => {
    return inventario.filter(item => {
      const nombre = item.nombre?.toLowerCase() || ''
      const sku = item.sku?.toLowerCase() || ''
      return (nombre.includes(busqueda.toLowerCase()) || sku.includes(busqueda.toLowerCase())) && Number(item.cantidad || 0) > 0
    })
  }, [inventario, busqueda])

  const agregarAlCarrito = (prod: any) => {
    const stockMax = Number(prod.cantidad || 0)
    setCarrito(prev => {
      const existe = prev.find(p => p.productoId === prod.id)
      if (existe) {
        if (existe.cantidad >= stockMax) {
          toast.error('Stock máximo alcanzado')
          return prev
        }
        return prev.map(p => p.productoId === prod.id ? { ...p, cantidad: p.cantidad + 1 } : p)
      }
      return [...prev, { productoId: prod.id, nombre: prod.nombre || 'Prenda', precio: Number(prod.precio || 0), cantidad: 1, stockMax }]
    })
  }

  const cambiarCantidad = (productoId: string, delta: number) => {
    setCarrito(prev => prev.map(p => {
      if (p.productoId === productoId) {
        const nuevaCant = p.cantidad + delta
        if (nuevaCant <= 0) return null
        if (nuevaCant > p.stockMax) {
          toast.error('Stock insuficiente')
          return p
        }
        return { ...p, cantidad: nuevaCant }
      }
      return p
    }).filter(Boolean) as any)
  }

  const totalCarrito = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

  const handleCompletarVenta = () => {
    if (carrito.length === 0) {
      toast.error('El carrito está vacío')
      return
    }
    registrarVenta({
      clienteId: clienteId || null,
      metodoPago,
      items: carrito.map(c => ({ productoId: c.productoId, cantidad: c.cantidad, precioUnitario: c.precio })),
      total: totalCarrito
    })
    toast.success('¡Venta registrada con éxito!')
    setCarrito([])
    setClienteId('')
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in pb-10">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">Punto de Venta (POS)</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Selecciona las prendas para registrar una nueva venta en mostrador.</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar prenda por nombre o código..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {productosDisponibles.length === 0 ? (
              <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
                No hay productos disponibles en stock.
              </div>
            ) : (
              productosDisponibles.map(prod => {
                const precio = Number(prod.precio || 0)
                const stock = Number(prod.cantidad || 0)
                return (
                  <div key={prod.id} onClick={() => agregarAlCarrito(prod)} className="rounded-2xl bg-card p-4 border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-secondary text-foreground">
                          {prod.talla || 'Única'}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">Stock: {stock}</span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground line-clamp-2">{prod.nombre || 'Prenda'}</h3>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                      <span className="text-base font-extrabold text-foreground">S/ {precio.toFixed(2)}</span>
                      <span className="p-2 rounded-xl bg-primary/10 text-primary font-bold text-xs flex items-center gap-1">
                        <Plus className="h-3.5 w-3.5" /> Agregar
                      </span>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        <div className="rounded-2xl bg-card p-6 border border-border shadow-sm flex flex-col justify-between h-fit lg:sticky lg:top-6">
          <div>
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">Resumen de Venta</h3>
            </div>

            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 mb-4">
              {carrito.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">El carrito está vacío</p>
              ) : (
                carrito.map(item => (
                  <div key={item.productoId} className="flex items-center justify-between gap-2 p-3 rounded-xl bg-muted/40 border border-border/50">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground truncate">{item.nombre}</p>
                      <p className="text-xs text-muted-foreground">S/ {item.precio.toFixed(2)} c/u</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => cambiarCantidad(item.productoId, -1)} className="p-1 rounded-lg bg-background border border-border text-foreground hover:bg-muted">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs font-bold text-foreground w-4 text-center">{item.cantidad}</span>
                      <button onClick={() => cambiarCantidad(item.productoId, 1)} className="p-1 rounded-lg bg-background border border-border text-foreground hover:bg-muted">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Cliente (Opcional)</label>
                <select
                  value={clienteId}
                  onChange={e => setClienteId(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Cliente General (Walk-in)</option>
                  {clientes && clientes.map((c: any) => (
                    <option key={c.id} value={c.id}>{c.nombre || 'Cliente'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Método de Pago</label>
                <select
                  value={metodoPago}
                  onChange={e => setMetodoPago(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Efectivo">Efectivo</option>
                  <option value="Yape / Plin">Yape / Plin</option>
                  <option value="Tarjeta">Tarjeta</option>
                  <option value="Transferencia">Transferencia</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-muted-foreground">Total a Pagar</span>
              <span className="text-2xl font-extrabold text-foreground">S/ {totalCarrito.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCompletarVenta}
              disabled={carrito.length === 0}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
            >
              <CheckCircle2 className="h-4 w-4" /> Cobrar y Registrar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
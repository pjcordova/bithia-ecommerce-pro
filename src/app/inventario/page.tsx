"use client";
import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { useApp } from '@/context/AppContext'
import { Package, Search, Plus, AlertTriangle, Tag, ScanLine } from 'lucide-react'
import { toast } from 'sonner'

export default function InventarioPage() {
  const { inventario, agregarProducto } = useApp()
  const [busqueda, setBusqueda] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('TODAS')

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [sku, setSku] = useState('')
  const [categoria, setCategoria] = useState('Blusas')
  const [talla, setTalla] = useState('M')
  const [precio, setPrecio] = useState('')
  const [costo, setCosto] = useState('')
  const [cantidad, setCantidad] = useState('')

  const productosFiltrados = useMemo(() => {
    return inventario.filter(item => {
      const itemObj = item as any
      const itemNombre = itemObj.nombre?.toLowerCase() || ''
      const itemSku = itemObj.sku?.toLowerCase() || ''
      const matchText = itemNombre.includes(busqueda.toLowerCase()) || itemSku.includes(busqueda.toLowerCase())
      const matchCat = filtroCategoria === 'TODAS' || itemObj.categoria === filtroCategoria
      return matchText && matchCat
    })
  }, [inventario, busqueda, filtroCategoria])

  const handleCrearProducto = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nombre || !precio || !cantidad) {
      toast.error('Por favor completa los campos obligatorios')
      return
    }

    agregarProducto({
      nombre,
      sku: sku || `SKU-${Math.floor(Math.random() * 90000 + 10000)}`,
      categoria,
      talla,
      precio_venta: parseFloat(precio),
      costo_inversion: parseFloat(costo) || 0,
      cantidad: parseInt(cantidad)
    })

    toast.success('Producto agregado al inventario con éxito')
    setIsModalOpen(false)
    setNombre('')
    setSku('')
    setPrecio('')
    setCosto('')
    setCantidad('')
  }

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">Inventario y Stock</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Control global de prendas, tallas, costos y existencias en boutique.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/inventario/recepcion"
              className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-foreground shadow-sm hover:opacity-95 transition-all"
            >
              <ScanLine className="h-4 w-4" /> Escáner Rápido
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
            >
              <Plus className="h-4 w-4" /> Carga Manual
            </button>
          </div>
        </div>

        {/* Filtros y Buscador */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre o SKU..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
          <select
            value={filtroCategoria}
            onChange={e => setFiltroCategoria(e.target.value)}
            className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          >
            <option value="TODAS">Todas las Categorías</option>
            <option value="Blusas">Blusas</option>
            <option value="Pantalones">Pantalones</option>
            <option value="Vestidos">Vestidos</option>
            <option value="Accesorios">Accesorios</option>
          </select>
        </div>

        {/* Tabla de Inventario */}
        <div className="rounded-2xl bg-card shadow-sm border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 px-6">Producto</th>
                  <th className="py-3 px-4">SKU</th>
                  <th className="py-3 px-4">Categoría</th>
                  <th className="py-3 px-4">Talla</th>
                  <th className="py-3 px-4 text-right">Precio Venta</th>
                  <th className="py-3 px-4 text-right">Stock</th>
                  <th className="py-3 px-6 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {productosFiltrados.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-muted-foreground">
                      No se encontraron prendas registradas en el inventario.
                    </td>
                  </tr>
                ) : (
                  productosFiltrados.map(item => {
                    const itemObj = item as any
                    const precioSeguro = Number(itemObj.precio || itemObj.precio_venta || 0)
                    const cantidadSegura = Number(itemObj.cantidad || 0)

                    return (
                      <tr key={itemObj.id} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-6 font-semibold text-foreground flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Package className="h-4 w-4" />
                          </div>
                          {itemObj.nombre || 'Sin nombre'}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground font-mono text-xs">{itemObj.sku || 'N/A'}</td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-foreground">
                            <Tag className="h-3 w-3" /> {itemObj.categoria || 'General'}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-foreground">{itemObj.talla || 'Única'}</td>
                        <td className="py-4 px-4 text-right font-bold text-foreground">S/ {precioSeguro.toFixed(2)}</td>
                        <td className="py-4 px-4 text-right font-extrabold text-foreground">{cantidadSegura}</td>
                        <td className="py-4 px-6 text-center">
                          {cantidadSegura <= 3 ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-destructive/10 text-destructive">
                              <AlertTriangle className="h-3 w-3" /> Bajo Stock
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-success/10 text-success">
                              Disponible
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Nuevo Producto */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl border border-border animate-scale-in">
              <h3 className="text-lg font-bold text-foreground mb-4">Registrar Nueva Prenda</h3>
              <form onSubmit={handleCrearProducto} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Nombre del Producto *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Vestido Elegante Nude"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">SKU / Código</label>
                    <input
                      type="text"
                      placeholder="Ej. VEST-001"
                      value={sku}
                      onChange={e => setSku(e.target.value)}
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
                      <option value="Blusas">Blusas</option>
                      <option value="Pantalones">Pantalones</option>
                      <option value="Vestidos">Vestidos</option>
                      <option value="Accesorios">Accesorios</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Talla</label>
                    <select
                      value={talla}
                      onChange={e => setTalla(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="Única">Única</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Precio S/ *</label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      placeholder="49.90"
                      value={precio}
                      onChange={e => setPrecio(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Stock Inicial *</label>
                    <input
                      type="number"
                      required
                      placeholder="10"
                      value={cantidad}
                      onChange={e => setCantidad(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
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
                    Guardar Prenda
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
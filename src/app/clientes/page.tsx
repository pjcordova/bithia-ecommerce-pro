"use client";
import React, { useState, useMemo } from 'react'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'
import { useApp } from '@/context/AppContext'
import { Search, Plus, Phone, ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'

function ClientesContent() {
  const { clientes, agregarCliente } = useApp()
  const [busqueda, setBusqueda] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')

  const clientesFiltrados = useMemo(() => {
    return (clientes || []).filter((c: any) => {
      const n = c.nombre?.toLowerCase() || ''
      const t = c.telefono || ''
      return n.includes(busqueda.toLowerCase()) || t.includes(busqueda)
    })
  }, [clientes, busqueda])

  const handleCrearCliente = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nombre) {
      toast.error('El nombre es obligatorio')
      return
    }
    agregarCliente({
      nombre,
      telefono: telefono || 'N/A',
      email: email || 'N/A'
    })
    toast.success('Cliente registrado con éxito')
    setIsModalOpen(false)
    setNombre('')
    setTelefono('')
    setEmail('')
  }

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Gestión de Clientes (CRM)</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Directorio de clientas frecuentes y historial de compras en Bithia.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
        >
          <Plus className="h-4 w-4" /> Nueva Clienta
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar por nombre o teléfono..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientesFiltrados.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
            No se encontraron clientas registradas.
          </div>
        ) : (
          clientesFiltrados.map((c: any) => (
            <div key={c.id} className="rounded-2xl bg-card p-5 border border-border shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-base">
                  {c.nombre?.charAt(0) || 'C'}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{c.nombre}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Phone className="h-3 w-3" /> {c.telefono || 'Sin teléfono'}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShoppingBag className="h-3.5 w-3.5 text-primary" /> {c.total_prendas_compradas || 0} prendas compradas
                </span>
                <span className="font-bold text-foreground">VIP Bithia</span>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl border border-border animate-scale-in">
            <h3 className="text-lg font-bold text-foreground mb-4">Registrar Nueva Clienta</h3>
            <form onSubmit={handleCrearCliente} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Lucía Torres"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Teléfono / WhatsApp</label>
                <input
                  type="text"
                  placeholder="987654321"
                  value={telefono}
                  onChange={e => setTelefono(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="correo@gmail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
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
                  Guardar Clienta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ClientesPage() {
  return (
    <AdminRoute>
      <Layout>
        <ClientesContent />
      </Layout>
    </AdminRoute>
  )
}
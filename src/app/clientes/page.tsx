"use client";
import React, { useState, useMemo, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'
import { obtenerClientes, crearCliente, actualizarCliente, obtenerHistorialCompras, eliminarCliente } from '@/app/actions/clientes'
import { Search, Plus, Phone, ShoppingBag, Cake, Wallet, Pencil, History, X, Users, Star, UserPlus, FileText, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

const VIP_THRESHOLD = 10

function ClientesContent() {
  const [clientes, setClientes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')

  // Modal Nueva Clienta
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [notas, setNotas] = useState('')
  const [guardando, setGuardando] = useState(false)

  // Modal Detalle / Edición / Historial
  const [detalleModalOpen, setDetalleModalOpen] = useState(false)
  const [clienteSeleccionado, setClienteSeleccionado] = useState<any>(null)
  const [modoEdicion, setModoEdicion] = useState(false)
  const [editNombre, setEditNombre] = useState('')
  const [editWhatsapp, setEditWhatsapp] = useState('')
  const [editFechaNacimiento, setEditFechaNacimiento] = useState('')
  const [editNotas, setEditNotas] = useState('')
  const [guardandoEdicion, setGuardandoEdicion] = useState(false)
  const [historial, setHistorial] = useState<any[]>([])
  const [loadingHistorial, setLoadingHistorial] = useState(false)
  const [confirmEliminarOpen, setConfirmEliminarOpen] = useState(false)
  const [eliminando, setEliminando] = useState(false)

  const cargarClientes = async () => {
    setLoading(true)
    const res = await obtenerClientes()
    if (res.success) {
      setClientes(res.clientes)
    } else {
      toast.error('Error al cargar clientas desde Railway')
    }
    setLoading(false)
    return res.clientes || []
  }

  useEffect(() => {
    cargarClientes()
  }, [])

  const clientesFiltrados = useMemo(() => {
    const q = busqueda.toLowerCase()
    return clientes.filter((c: any) => {
      const n = c.nombre?.toLowerCase() || ''
      const w = c.whatsapp || ''
      return n.includes(q) || w.includes(busqueda)
    })
  }, [clientes, busqueda])

  const kpis = useMemo(() => {
    const totalVip = clientes.filter(c => (c.total_prendas_compradas || 0) > VIP_THRESHOLD).length
    const valorCartera = clientes.reduce((s, c) => s + (c.valor_total_vida || 0), 0)
    return { total: clientes.length, totalVip, valorCartera }
  }, [clientes])

  // Aviso en vivo si el celular ya pertenece a otra clienta registrada
  const clienteDuplicado = useMemo(() => {
    if (!whatsapp) return null
    return clientes.find(c => c.whatsapp === whatsapp) || null
  }, [whatsapp, clientes])

  const handleCrearCliente = async (e: React.FormEvent) => {
    e.preventDefault()
    if (clienteDuplicado) {
      toast.error(`Ya existe una clienta con este número: "${clienteDuplicado.nombre}"`)
      return
    }
    if (!nombre.trim()) {
      toast.error('El nombre es obligatorio')
      return
    }
    setGuardando(true)
    const res = await crearCliente({
      nombre,
      whatsapp: whatsapp || undefined,
      fecha_nacimiento: fechaNacimiento || undefined,
      notas: notas || undefined,
    })
    setGuardando(false)

    if (res.success) {
      toast.success(res.message)
      setIsModalOpen(false)
      setNombre('')
      setWhatsapp('')
      setFechaNacimiento('')
      setNotas('')
      cargarClientes()
    } else {
      toast.error(res.error)
    }
  }

  const handleAbrirDetalle = (cliente: any) => {
    setClienteSeleccionado(cliente)
    setModoEdicion(false)
    setDetalleModalOpen(true)
    setHistorial([])
    cargarHistorial(cliente.id)
  }

  const cargarHistorial = async (clienteId: string) => {
    setLoadingHistorial(true)
    const res = await obtenerHistorialCompras(clienteId)
    setHistorial(res.historial || [])
    setLoadingHistorial(false)
  }

  const handleAbrirEdicion = () => {
    setEditNombre(clienteSeleccionado.nombre || '')
    setEditWhatsapp(clienteSeleccionado.whatsapp || '')
    setEditFechaNacimiento(clienteSeleccionado.fecha_nacimiento || '')
    setEditNotas(clienteSeleccionado.notas || '')
    setModoEdicion(true)
  }

  const handleGuardarEdicion = async () => {
    if (!editNombre.trim()) {
      toast.error('El nombre es obligatorio')
      return
    }
    setGuardandoEdicion(true)
    const res = await actualizarCliente(clienteSeleccionado.id, {
      nombre: editNombre,
      whatsapp: editWhatsapp || undefined,
      fecha_nacimiento: editFechaNacimiento || undefined,
      notas: editNotas || undefined,
    })
    setGuardandoEdicion(false)

    if (res.success) {
      toast.success(res.message)
      const actualizados = await cargarClientes()
      const actualizado = actualizados.find((c: any) => c.id === clienteSeleccionado.id)
      if (actualizado) setClienteSeleccionado(actualizado)
      setModoEdicion(false)
    } else {
      toast.error(res.error)
    }
  }

  const handleConfirmarEliminar = async () => {
    setEliminando(true)
    const res = await eliminarCliente(clienteSeleccionado.id)
    setEliminando(false)
    setConfirmEliminarOpen(false)

    if (res.success) {
      toast.success(res.message)
      setDetalleModalOpen(false)
      cargarClientes()
    } else {
      toast.error(res.error)
    }
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

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-primary" /> Clientas Registradas</p>
          <p className="text-xl font-extrabold text-foreground mt-1">{kpis.total}</p>
        </div>
        <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-amber-500" /> Clientas VIP</p>
          <p className="text-xl font-extrabold text-foreground mt-1">{kpis.totalVip}</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">Más de {VIP_THRESHOLD} prendas compradas</p>
        </div>
        <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"><Wallet className="h-3.5 w-3.5 text-primary" /> Valor de Cartera</p>
          <p className="text-xl font-extrabold text-foreground mt-1">S/ {kpis.valorCartera.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar por nombre o celular..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
            Sincronizando clientas con la nube...
          </div>
        ) : clientesFiltrados.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
            No se encontraron clientas registradas.
          </div>
        ) : (
          clientesFiltrados.map((c: any) => {
            const esVip = (c.total_prendas_compradas || 0) > VIP_THRESHOLD
            return (
              <div
                key={c.id}
                onClick={() => handleAbrirDetalle(c)}
                className="rounded-2xl bg-card p-5 border border-border shadow-sm hover:border-primary hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-base flex-shrink-0">
                    {c.nombre?.charAt(0) || 'C'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-foreground truncate">{c.nombre}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Phone className="h-3 w-3" /> {c.whatsapp || 'Sin celular'}
                    </p>
                  </div>
                  {esVip && (
                    <span className="text-[9px] font-extrabold uppercase px-2 py-1 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">VIP</span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ShoppingBag className="h-3.5 w-3.5 text-primary" /> {c.total_prendas_compradas || 0} prendas
                  </span>
                  <span className="font-bold text-foreground">S/ {(c.valor_total_vida || 0).toFixed(2)}</span>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Modal Nueva Clienta */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-background border border-border p-8 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg shadow-md shadow-primary/20 flex-shrink-0">
                  {nombre.trim() ? nombre.trim().charAt(0).toUpperCase() : <UserPlus className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground">Registrar Nueva Clienta</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Súmala al directorio para ofertas y seguimiento.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCrearCliente} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Nombre Completo *</label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Lucía Torres"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="w-full rounded-2xl border border-border bg-card pl-10 pr-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Celular / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="987654321"
                      value={whatsapp}
                      onChange={e => setWhatsapp(e.target.value.replace(/\D/g, '').slice(0, 9))}
                      className={`w-full rounded-2xl border bg-card pl-10 pr-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 shadow-sm ${clienteDuplicado ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'}`}
                    />
                  </div>
                  {clienteDuplicado ? (
                    <p className="text-[11px] text-destructive font-semibold mt-1.5">
                      Ya existe: "{clienteDuplicado.nombre}"
                    </p>
                  ) : whatsapp.length > 0 && whatsapp.length < 9 ? (
                    <p className="text-[11px] text-muted-foreground mt-1.5">Faltan {9 - whatsapp.length} dígitos.</p>
                  ) : (
                    <p className="text-[11px] text-muted-foreground mt-1.5">Opcional, 9 dígitos.</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Cumpleaños</label>
                  <div className="relative">
                    <Cake className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="date"
                      value={fechaNacimiento}
                      onChange={e => setFechaNacimiento(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-card pl-10 pr-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1.5">Opcional, para saludos y ofertas.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Notas (Opcional)</label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                  <textarea
                    placeholder="Preferencias, tallas habituales, etc."
                    value={notas}
                    onChange={e => setNotas(e.target.value)}
                    rows={2}
                    className="w-full rounded-2xl border border-border bg-card pl-10 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-border mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-2xl px-5 py-3 text-sm font-bold text-muted-foreground hover:bg-muted transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={guardando || !!clienteDuplicado}
                  className="rounded-2xl bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {guardando ? 'Guardando...' : 'Guardar Clienta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Detalle / Editar / Historial */}
      {detalleModalOpen && clienteSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-xl rounded-3xl bg-background border border-border p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                  {clienteSeleccionado.nombre?.charAt(0) || 'C'}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground">{clienteSeleccionado.nombre}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Phone className="h-3 w-3" /> {clienteSeleccionado.whatsapp || 'Sin celular'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {!modoEdicion && (
                  <>
                    <button
                      type="button"
                      onClick={handleAbrirEdicion}
                      title="Editar clienta"
                      className="h-8 w-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-foreground transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmEliminarOpen(true)}
                      title="Eliminar clienta"
                      className="h-8 w-8 rounded-full bg-secondary hover:bg-destructive hover:text-white flex items-center justify-center text-foreground transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setDetalleModalOpen(false)}
                  className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground font-bold transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {modoEdicion ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Nombre *</label>
                  <input
                    type="text"
                    value={editNombre}
                    onChange={e => setEditNombre(e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Celular / WhatsApp</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={editWhatsapp}
                      onChange={e => setEditWhatsapp(e.target.value.replace(/\D/g, '').slice(0, 9))}
                      className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Cumpleaños</label>
                    <input
                      type="date"
                      value={editFechaNacimiento}
                      onChange={e => setEditFechaNacimiento(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Notas</label>
                  <textarea
                    value={editNotas}
                    onChange={e => setEditNotas(e.target.value)}
                    rows={2}
                    className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-border">
                  <button
                    type="button"
                    onClick={() => setModoEdicion(false)}
                    className="rounded-2xl px-5 py-2.5 text-sm font-bold text-muted-foreground hover:bg-muted transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleGuardarEdicion}
                    disabled={guardandoEdicion}
                    className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {guardandoEdicion ? 'Guardando...' : 'Guardar Cambios'}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <ShoppingBag className="h-4 w-4 text-primary mx-auto mb-1" />
                    <p className="text-base font-extrabold text-foreground">{clienteSeleccionado.total_prendas_compradas || 0}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Prendas</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <Wallet className="h-4 w-4 text-primary mx-auto mb-1" />
                    <p className="text-base font-extrabold text-foreground">S/ {(clienteSeleccionado.valor_total_vida || 0).toFixed(0)}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Valor de Vida</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <Cake className="h-4 w-4 text-primary mx-auto mb-1" />
                    <p className="text-sm font-extrabold text-foreground">
                      {clienteSeleccionado.fecha_nacimiento
                        ? new Date(clienteSeleccionado.fecha_nacimiento + 'T00:00:00').toLocaleDateString('es-PE', { day: '2-digit', month: 'short' })
                        : '—'}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Cumpleaños</p>
                  </div>
                </div>

                {clienteSeleccionado.notas && (
                  <div className="mb-6 p-3 rounded-xl bg-muted/30 border border-border/60">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Notas</p>
                    <p className="text-sm text-foreground">{clienteSeleccionado.notas}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-extrabold text-foreground flex items-center gap-2 mb-3">
                    <History className="h-4 w-4 text-primary" /> Historial de Compras
                  </h4>
                  <div className="max-h-[260px] overflow-y-auto space-y-3 pr-1">
                    {loadingHistorial ? (
                      <p className="text-xs text-muted-foreground text-center py-4">Cargando historial...</p>
                    ) : historial.length === 0 ? (
                      <p className="text-xs text-muted-foreground text-center py-4">Todavía no registra compras.</p>
                    ) : (
                      historial.map((v: any) => (
                        <div key={v.id} className="p-3 rounded-xl bg-muted/30 border border-border/60">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-foreground">
                              {new Date(v.fecha_hora).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </span>
                            <span className="text-sm font-extrabold text-primary">S/ {v.total.toFixed(2)}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground uppercase mb-1.5">{v.canal_venta} · {v.metodo_pago}</p>
                          <div className="flex flex-wrap gap-1">
                            {v.items.map((item: any, i: number) => (
                              <span key={i} className="text-[10px] font-medium bg-secondary px-2 py-0.5 rounded text-foreground">
                                {item.nombre} ({item.color} · {item.talla}) x{item.cantidad}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-6 border-t border-border mt-6">
                  <button
                    type="button"
                    onClick={() => setDetalleModalOpen(false)}
                    className="rounded-2xl bg-secondary px-6 py-2.5 text-xs font-bold text-foreground hover:opacity-90 transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal Confirmación Eliminar */}
      {confirmEliminarOpen && clienteSeleccionado && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-background border border-border p-6 shadow-2xl text-center">
            <div className="h-12 w-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-destructive/10 text-destructive">
              <Trash2 className="h-6 w-6" />
            </div>
            <h4 className="text-base font-extrabold text-foreground mb-1">¿Eliminar esta clienta?</h4>
            <p className="text-xs text-muted-foreground mb-6">
              "{clienteSeleccionado.nombre}" se eliminará permanentemente del directorio. Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmEliminarOpen(false)}
                className="flex-1 rounded-xl bg-secondary py-2.5 text-xs font-bold text-foreground hover:opacity-90 transition-all"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmarEliminar}
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

export default function ClientesPage() {
  return (
    <AdminRoute>
      <Layout>
        <ClientesContent />
      </Layout>
    </AdminRoute>
  )
}

"use client";
import React, { useState, useMemo, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { useAuth } from '@/context/AuthContext'
import { obtenerDatosPOS, confirmarVentaPOS } from '@/app/actions/pos'
import { obtenerColorHex } from '@/lib/colores'
import { ShoppingCart, Search, Plus, Minus, CheckCircle2, Trash2, Package, X, UserPlus, Tag, AlertTriangle } from 'lucide-react'
import { toast } from 'sonner'

const METODOS_PAGO = [
  { value: 'efectivo', label: 'Efectivo' },
  { value: 'yape', label: 'Yape' },
  { value: 'plin', label: 'Plin' },
  { value: 'transferencia', label: 'Transferencia' },
  { value: 'tarjeta', label: 'Tarjeta' },
] as const

type MetodoPago = typeof METODOS_PAGO[number]['value']
// imagenColor guarda la foto del color elegido, para que el resumen muestre
// exactamente la prenda que se está vendiendo y no la foto general.
// precioUnitario arranca en el precio de catálogo y se puede rebajar por prenda
type CartItem = { producto: any; talla: string; color: string; cantidad: number; imagenColor: string | null; precioUnitario: number }

export default function PosPage() {
  const { user } = useAuth()

  const [productos, setProductos] = useState<any[]>([])
  const [clientes, setClientes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<CartItem[]>([])
  const [procesandoVenta, setProcesandoVenta] = useState(false)
  const [cartSheetOpen, setCartSheetOpen] = useState(false)

  const [busqueda, setBusqueda] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('TODAS')
  const [clienteId, setClienteId] = useState('')
  const [metodoPago, setMetodoPago] = useState<MetodoPago>('efectivo')
  const [canalVenta, setCanalVenta] = useState<'stand' | 'instagram'>('stand')
  const [descuento, setDescuento] = useState('')

  // Registro rápido de cliente nuevo (nombre + celular) para conectar la venta con el CRM
  const [modoNuevoCliente, setModoNuevoCliente] = useState(false)
  const [nuevoClienteNombre, setNuevoClienteNombre] = useState('')
  const [nuevoClienteWhatsapp, setNuevoClienteWhatsapp] = useState('')

  // mostrarCargando=false es el refresco silencioso de fondo: no vuelve a
  // mostrar el spinner de carga ni un toast de error puntual, solo
  // actualiza los datos si la consulta salió bien.
  const cargarDatos = async (mostrarCargando = true) => {
    if (mostrarCargando) setLoading(true)
    const res = await obtenerDatosPOS()
    if (res.success) {
      setProductos(res.productos)
      setClientes(res.clientes)
    } else if (mostrarCargando) {
      toast.error('Error al cargar productos desde Railway')
    }
    if (mostrarCargando) setLoading(false)
  }

  useEffect(() => {
    cargarDatos()

    // Refresco silencioso cada segundo: si el stock cambió (otra venta en
    // este mismo POS, en el POS de otra caja, o un pedido de bithia-web que
    // ya se confirmó), la vendedora lo ve casi al instante sin recargar la
    // página a mano — evita que intente vender algo que ya no hay. Se pausa
    // cuando la pestaña no está a la vista, para no gastar de más.
    const intervalo = setInterval(() => {
      if (document.visibilityState === "visible") cargarDatos(false)
    }, 1000)
    return () => clearInterval(intervalo)
  }, [])

  // Categorías presentes en el catálogo actual, para las pestañas de filtro
  const categoriasDisponibles = useMemo(() => {
    const set = new Set(productos.map(p => p.categoria).filter(Boolean))
    return Array.from(set).sort()
  }, [productos])

  // Una tarjeta por prenda, con sus colores agrupados y las tallas de cada color.
  // La foto sale de producto_colores; si ese color no tiene, cae a la del producto.
  const itemsDisponibles = useMemo(() => {
    const q = busqueda.trim().toLowerCase()

    const tarjetas = productos
      .filter(producto => filtroCategoria === 'TODAS' || producto.categoria === filtroCategoria)
      .map(producto => {
        const porColor = new Map<string, any[]>()
        producto.inventario_tallas?.forEach((fila: any) => {
          if (fila.cantidad <= 0) return
          const lista = porColor.get(fila.color) || []
          lista.push(fila)
          porColor.set(fila.color, lista)
        })

        const colores = Array.from(porColor.entries())
          .map(([color, tallas]) => ({
            color,
            imagen_url: producto.producto_colores?.find((c: any) => c.color === color)?.imagen_url || producto.imagen_url || null,
            tallas: tallas.sort((a, b) => a.talla.localeCompare(b.talla)),
          }))
          .sort((a, b) => a.color.localeCompare(b.color))

        return { producto, colores }
      })
      .filter(t => t.colores.length > 0)

    if (!q) return tarjetas
    return tarjetas.filter(({ producto, colores }) =>
      producto.nombre.toLowerCase().includes(q) ||
      producto.categoria.toLowerCase().includes(q) ||
      producto.codigo_barras?.toLowerCase().includes(q) ||
      colores.some(c => c.color.toLowerCase().includes(q))
    )
  }, [productos, busqueda, filtroCategoria])

  // Color elegido en cada tarjeta (por id de producto); por defecto el primero
  const [colorElegido, setColorElegido] = useState<Record<string, string>>({})

  // Cada línea del carrito es una combinación única de producto + color + talla
  const cantidadEnCarrito = (productoId: string, talla: string, color: string) =>
    cart.find(c => c.producto.id === productoId && c.talla === talla && c.color === color)?.cantidad || 0

  const addToCart = (producto: any, talla: string, color: string, imagenColor: string | null) => {
    setCart(prev => {
      const existe = prev.find(c => c.producto.id === producto.id && c.talla === talla && c.color === color)
      if (existe) return prev.map(c => c.producto.id === producto.id && c.talla === talla && c.color === color ? { ...c, cantidad: c.cantidad + 1 } : c)
      return [...prev, { producto, talla, color, cantidad: 1, imagenColor, precioUnitario: producto.precio_venta }]
    })
  }

  // Rebaja el precio de una línea puntual del carrito (no puede ser negativo)
  const cambiarPrecioLinea = (productoId: string, talla: string, color: string, nuevoPrecio: number) => {
    setCart(prev => prev.map(c =>
      c.producto.id === productoId && c.talla === talla && c.color === color
        ? { ...c, precioUnitario: Math.max(0, nuevoPrecio) }
        : c
    ))
  }

  const updateCartQty = (productoId: string, talla: string, color: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(c => !(c.producto.id === productoId && c.talla === talla && c.color === color)))
      return
    }
    setCart(prev => prev.map(c => c.producto.id === productoId && c.talla === talla && c.color === color ? { ...c, cantidad: qty } : c))
  }

  const removeFromCart = (productoId: string, talla: string, color: string) => {
    setCart(prev => prev.filter(c => !(c.producto.id === productoId && c.talla === talla && c.color === color)))
  }

  const handleAgregar = (producto: any, talla: string, color: string, stockDisponible: number, imagenColor: string | null) => {
    if (cantidadEnCarrito(producto.id, talla, color) >= stockDisponible) {
      toast.error('Stock máximo alcanzado')
      return
    }
    addToCart(producto, talla, color, imagenColor)
  }

  const handleCambiarCantidad = (productoId: string, talla: string, color: string, delta: number, stockDisponible: number) => {
    const nueva = cantidadEnCarrito(productoId, talla, color) + delta
    if (nueva > stockDisponible) {
      toast.error('Stock insuficiente')
      return
    }
    updateCartQty(productoId, talla, color, nueva)
  }

  // Subtotal con los precios ya rebajados por prenda
  const subtotalCarrito = cart.reduce((sum, item) => sum + item.precioUnitario * item.cantidad, 0)
  // Cuánto se rebajó prenda por prenda (respecto al precio de catálogo)
  const rebajaPorPrenda = cart.reduce((sum, item) => sum + (item.producto.precio_venta - item.precioUnitario) * item.cantidad, 0)
  // La rebaja final no puede pasar del subtotal, para no dejar un total negativo
  const descuentoAplicado = Math.min(Math.max(0, parseFloat(descuento) || 0), subtotalCarrito)
  const totalCarrito = subtotalCarrito - descuentoAplicado

  // Ganancia real: precios ya rebajados menos costo, menos la rebaja final
  const margenBruto = cart.reduce((sum, item) => sum + (item.precioUnitario - item.producto.costo_inversion) * item.cantidad, 0)
  const utilidadFinal = margenBruto - descuentoAplicado
  const unidadesCarrito = cart.reduce((sum, item) => sum + item.cantidad, 0)

  const handleCompletarVenta = async () => {
    if (cart.length === 0) {
      toast.error('El carrito está vacío')
      return
    }
    if (!user) {
      toast.error('Sesión no válida, vuelve a iniciar sesión')
      return
    }

    setProcesandoVenta(true)
    const res = await confirmarVentaPOS({
      items: cart.map(c => ({
        producto_id: c.producto.id,
        talla: c.talla,
        color: c.color,
        cantidad: c.cantidad,
        precio_venta_unitario: c.precioUnitario,
        precio_lista: c.producto.precio_venta,
        costo_inversion_unitario: c.producto.costo_inversion,
      })),
      canal_venta: canalVenta,
      metodo_pago: metodoPago,
      cliente_id: clienteId || undefined,
      cliente_nuevo: modoNuevoCliente && nuevoClienteWhatsapp.trim()
        ? { nombre: nuevoClienteNombre.trim(), whatsapp: nuevoClienteWhatsapp.trim() }
        : undefined,
      usuario_id: user.id,
      descuento: descuentoAplicado,
    })
    setProcesandoVenta(false)

    if (res.success) {
      toast.success(res.message)
      setCart([])
      setClienteId('')
      setModoNuevoCliente(false)
      setNuevoClienteNombre('')
      setNuevoClienteWhatsapp('')
      setDescuento('')
      setCartSheetOpen(false)
      cargarDatos()
    } else {
      toast.error(res.error)
    }
  }

  const cartVacio = cart.length === 0

  const renderClienteYPago = () => (
    <div className="space-y-3 pt-4 border-t border-border">
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-xs font-semibold text-muted-foreground uppercase">Cliente (Opcional)</label>
          <button
            type="button"
            onClick={() => { setModoNuevoCliente(v => !v); setClienteId('') }}
            className="flex items-center gap-1 text-[11px] font-bold text-primary hover:underline"
          >
            <UserPlus className="h-3 w-3" /> {modoNuevoCliente ? 'Elegir existente' : 'Nuevo cliente'}
          </button>
        </div>
        {modoNuevoCliente ? (
          <div className="space-y-2 p-3 rounded-xl bg-muted/30 border border-border">
            <input
              type="text"
              placeholder="Nombre (opcional)"
              value={nuevoClienteNombre}
              onChange={e => setNuevoClienteNombre(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Celular / WhatsApp"
              value={nuevoClienteWhatsapp}
              onChange={e => setNuevoClienteWhatsapp(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-[10px] text-muted-foreground">Se guarda en Clientes (CRM) para futuras ofertas y descuentos.</p>
          </div>
        ) : (
          <select
            value={clienteId}
            onChange={e => setClienteId(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Cliente General (Walk-in)</option>
            {clientes.map(c => (
              <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Canal de Venta</label>
        <div className="grid grid-cols-2 gap-2">
          {(['stand', 'instagram'] as const).map(canal => (
            <button
              key={canal}
              type="button"
              onClick={() => setCanalVenta(canal)}
              className={`rounded-xl border px-3 py-2.5 text-xs font-bold uppercase tracking-wide transition-all ${canalVenta === canal ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:bg-muted'}`}
            >
              {canal === 'stand' ? 'Stand' : 'Instagram'}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Método de Pago</label>
        <select
          value={metodoPago}
          onChange={e => setMetodoPago(e.target.value as MetodoPago)}
          className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {METODOS_PAGO.map(m => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>
    </div>
  )

  const renderListaCarrito = () => (
    <div className="space-y-3 max-h-[260px] sm:max-h-[300px] overflow-y-auto pr-1 mb-4">
      {cartVacio ? (
        <p className="text-sm text-muted-foreground text-center py-8">El carrito está vacío</p>
      ) : (
        cart.map(item => {
          const invItem = item.producto.inventario_tallas?.find((t: any) => t.talla === item.talla && t.color === item.color)
          const stockDisponible = invItem?.cantidad || 0
          const subtotal = item.precioUnitario * item.cantidad
          const rebajado = item.precioUnitario < item.producto.precio_venta
          // La foto del color elegido; si ese color no tiene, la general de la prenda
          const foto = item.imagenColor || item.producto.imagen_url
          return (
            <div key={`${item.producto.id}-${item.talla}-${item.color}`} className="p-3 rounded-xl bg-muted/40 border border-border/50">
              {/* Fila 1: foto + datos de la prenda + quitar */}
              <div className="flex items-start gap-3">
                {foto ? (
                  <img src={foto} alt={`${item.producto.nombre} ${item.color}`} className="h-14 w-14 rounded-lg object-cover border border-border flex-shrink-0" />
                ) : (
                  <div className="h-14 w-14 rounded-lg bg-secondary/60 flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground leading-snug line-clamp-2">{item.producto.nombre}</p>
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground bg-background border border-border rounded-md px-1.5 py-0.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full border border-black/10 flex-shrink-0"
                        style={{ backgroundColor: obtenerColorHex(item.color) }}
                      />
                      {item.color}
                    </span>
                    <span className="text-[11px] font-bold text-foreground bg-background border border-border rounded-md px-1.5 py-0.5">
                      Talla {item.talla}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.producto.id, item.talla, item.color)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-red-50 active:scale-95 transition-all flex-shrink-0"
                  title="Quitar del carrito"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Fila 2: cantidad a la izquierda, subtotal a la derecha */}
              <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-border/60">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCambiarCantidad(item.producto.id, item.talla, item.color, -1, stockDisponible)}
                    className="p-1.5 rounded-lg bg-background border border-border text-foreground hover:bg-muted active:scale-95 transition-all"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-bold text-foreground w-7 text-center">{item.cantidad}</span>
                  <button
                    onClick={() => handleCambiarCantidad(item.producto.id, item.talla, item.color, 1, stockDisponible)}
                    className="p-1.5 rounded-lg bg-background border border-border text-foreground hover:bg-muted active:scale-95 transition-all"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                  {/* Precio editable: acá se rebaja esta prenda en particular */}
                  <div className="flex items-center gap-1 ml-1.5">
                    <span className="text-[11px] text-muted-foreground">× S/</span>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={item.precioUnitario}
                      onChange={e => cambiarPrecioLinea(item.producto.id, item.talla, item.color, parseFloat(e.target.value) || 0)}
                      title="Puedes rebajar el precio de esta prenda"
                      className={`w-14 rounded-md border px-1 py-0.5 text-[11px] font-bold text-right focus:outline-none focus:ring-1 focus:ring-primary ${
                        rebajado ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-border bg-background text-foreground'
                      }`}
                    />
                  </div>
                </div>
                <div className="text-right">
                  {rebajado && (
                    <p className="text-[10px] text-muted-foreground line-through leading-none">
                      S/ {(item.producto.precio_venta * item.cantidad).toFixed(2)}
                    </p>
                  )}
                  <span className={`text-sm font-extrabold ${rebajado ? 'text-amber-700' : 'text-foreground'}`}>
                    S/ {subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )
        })
      )}
    </div>
  )

  const renderBotonCobrar = () => (
    <div className="mt-6 pt-4 border-t border-border">
      {/* Rebaja negociada con la clienta, sobre el total */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
          <Tag className="h-3.5 w-3.5" /> Rebaja
        </label>
        <div className="relative w-28">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">S/</span>
          <input
            type="number"
            min="0"
            step="0.5"
            placeholder="0.00"
            value={descuento}
            onChange={e => setDescuento(e.target.value)}
            disabled={cartVacio}
            className="w-full rounded-xl border border-border bg-background pl-8 pr-2 py-2 text-sm font-bold text-foreground text-right focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
        </div>
      </div>

      {(descuentoAplicado > 0 || rebajaPorPrenda > 0) && (
        <div className="space-y-1 mb-3 text-xs">
          {rebajaPorPrenda > 0 && (
            <div className="flex items-center justify-between text-amber-700 font-semibold">
              <span>Rebajas por prenda</span>
              <span>− S/ {rebajaPorPrenda.toFixed(2)}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>S/ {subtotalCarrito.toFixed(2)}</span>
          </div>
          {descuentoAplicado > 0 && (
            <div className="flex items-center justify-between text-destructive font-semibold">
              <span>Rebaja al total</span>
              <span>− S/ {descuentoAplicado.toFixed(2)}</span>
            </div>
          )}
        </div>
      )}

      {/* Si la rebaja se come la ganancia, se avisa pero se puede cobrar igual */}
      {!cartVacio && utilidadFinal < 0 && (
        <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-300 p-2.5 mb-3">
          <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-800 leading-snug">
            Con esta rebaja <span className="font-bold">pierdes S/ {Math.abs(utilidadFinal).toFixed(2)}</span>: estás cobrando por debajo de lo que te costó la mercadería.
          </p>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-muted-foreground">Total a Pagar</span>
        <span className="text-2xl font-extrabold text-foreground">S/ {totalCarrito.toFixed(2)}</span>
      </div>

      <button
        onClick={handleCompletarVenta}
        disabled={cartVacio || procesandoVenta}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
      >
        <CheckCircle2 className="h-4 w-4" /> {procesandoVenta ? 'Procesando...' : 'Cobrar y Registrar'}
      </button>
    </div>
  )

  return (
    <Layout>
      <div className="pb-24 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h1 className="text-2xl font-extrabold text-foreground">Punto de Venta (POS)</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Selecciona las prendas para registrar una nueva venta en mostrador.</p>
            </div>

            <div className="relative">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar prenda por nombre o categoría..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              <button
                type="button"
                onClick={() => setFiltroCategoria('TODAS')}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all ${filtroCategoria === 'TODAS' ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}
              >
                Todas
              </button>
              {categoriasDisponibles.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFiltroCategoria(cat)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all ${filtroCategoria === cat ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-card border border-border text-muted-foreground hover:bg-muted'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {loading ? (
                <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
                  Sincronizando productos con la nube...
                </div>
              ) : itemsDisponibles.length === 0 ? (
                <div className="col-span-full py-12 text-center text-muted-foreground bg-card rounded-2xl border border-border">
                  No hay productos disponibles en stock.
                </div>
              ) : (
                itemsDisponibles.map(({ producto, colores }) => {
                  const colorActivo = colores.find(c => c.color === colorElegido[producto.id]) || colores[0]
                  const stockDelColor = colorActivo.tallas.reduce(
                    (s: number, t: any) => s + (t.cantidad - cantidadEnCarrito(producto.id, t.talla, t.color)), 0
                  )
                  return (
                    <div
                      key={producto.id}
                      className="rounded-2xl bg-card border border-border hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
                    >
                      <div className="relative aspect-[4/5] w-full bg-muted/40 flex items-center justify-center p-3">
                        {colorActivo.imagen_url ? (
                          <img src={colorActivo.imagen_url} alt={`${producto.nombre} ${colorActivo.color}`} className="h-full w-full object-contain" />
                        ) : (
                          <Package className="h-10 w-10 text-muted-foreground/40" />
                        )}
                        {colores.length > 1 && (
                          <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-secondary/95 text-foreground shadow-sm">
                            {colores.length} colores
                          </span>
                        )}
                        <span className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-sm ${stockDelColor <= 3 ? 'bg-amber-100 text-amber-700' : 'bg-card/95 text-muted-foreground'}`}>
                          {stockDelColor}
                        </span>
                      </div>

                      <div className="p-2.5 sm:p-3.5 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="text-[13px] sm:text-sm font-bold text-foreground line-clamp-2 leading-tight">{producto.nombre}</h3>
                          <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5">{producto.categoria}</p>

                          {/* Selector de color: cambia la foto y las tallas disponibles */}
                          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                            {colores.map(c => (
                              <button
                                key={c.color}
                                type="button"
                                onClick={() => setColorElegido(prev => ({ ...prev, [producto.id]: c.color }))}
                                title={c.color}
                                className={`h-5 w-5 rounded-full border-2 shadow-sm transition-all ${
                                  c.color === colorActivo.color ? 'border-primary scale-110' : 'border-black/10 hover:border-muted-foreground'
                                }`}
                                style={{ backgroundColor: obtenerColorHex(c.color) }}
                              />
                            ))}
                            <span className="text-[10px] text-muted-foreground truncate ml-0.5">{colorActivo.color}</span>
                          </div>

                          {/* Tallas del color elegido */}
                          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                            {colorActivo.tallas.map((t: any) => {
                              const restante = t.cantidad - cantidadEnCarrito(producto.id, t.talla, t.color)
                              const agotado = restante <= 0
                              return (
                                <button
                                  key={t.id}
                                  type="button"
                                  disabled={agotado}
                                  onClick={() => handleAgregar(producto, t.talla, t.color, t.cantidad, colorActivo.imagen_url)}
                                  title={agotado ? 'Sin stock' : `Agregar ${colorActivo.color} talla ${t.talla}`}
                                  className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                                    agotado
                                      ? 'border-border text-muted-foreground/40 line-through cursor-not-allowed'
                                      : 'border-border text-foreground hover:border-primary hover:bg-primary/10 active:scale-95'
                                  }`}
                                >
                                  {t.talla} <span className="font-normal opacity-70">({restante})</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-border">
                          <span className="text-sm sm:text-base font-extrabold text-foreground">S/ {producto.precio_venta.toFixed(2)}</span>
                          <span className="text-[10px] text-muted-foreground">Toca una talla</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>

          {/* Resumen de Venta - fijo en pantallas grandes (PC / tablet horizontal) */}
          <div className="hidden lg:flex rounded-2xl bg-card p-6 border border-border shadow-sm flex-col justify-between h-fit lg:sticky lg:top-6">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Resumen de Venta{unidadesCarrito > 0 && <span className="ml-1.5 text-xs font-semibold text-muted-foreground">({unidadesCarrito})</span>}</h3>
              </div>
              {renderListaCarrito()}
              {renderClienteYPago()}
            </div>
            {renderBotonCobrar()}
          </div>
        </div>
      </div>

      {/* Barra inferior fija - solo en tablet vertical / celular */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card border-t border-border shadow-2xl shadow-black/10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => setCartSheetOpen(true)} className="flex items-center gap-3 flex-1 min-w-0 text-left">
          <div className="relative flex-shrink-0">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <ShoppingCart className="h-5 w-5" />
            </div>
            {unidadesCarrito > 0 && (
              <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center font-bold">
                {unidadesCarrito}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p className="text-[11px] text-muted-foreground font-semibold">Total</p>
            <p className="text-lg font-extrabold text-foreground truncate">S/ {totalCarrito.toFixed(2)}</p>
          </div>
        </button>
        <button
          onClick={() => setCartSheetOpen(true)}
          disabled={cartVacio}
          className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 disabled:opacity-50 transition-all"
        >
          Ver Carrito
        </button>
      </div>

      {/* Hoja deslizable del carrito - solo en tablet vertical / celular */}
      {cartSheetOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end animate-fade-in">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setCartSheetOpen(false)} />
          <div className="relative w-full max-h-[88vh] overflow-y-auto rounded-t-3xl bg-background border-t border-border shadow-2xl p-6 pb-8">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Resumen de Venta{unidadesCarrito > 0 && <span className="ml-1.5 text-xs font-semibold text-muted-foreground">({unidadesCarrito})</span>}</h3>
              </div>
              <button
                type="button"
                onClick={() => setCartSheetOpen(false)}
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {renderListaCarrito()}
            {renderClienteYPago()}
            {renderBotonCobrar()}
          </div>
        </div>
      )}
    </Layout>
  )
}

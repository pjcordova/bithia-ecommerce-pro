"use client";
import React, { createContext, useContext, useState, useCallback } from 'react'
import type {
  Producto, InventarioTalla, Cliente, Venta, DetalleVenta,
  MovimientoInventario, GastoOperativo, CuadreCaja, CartItem,
  ConfiguracionEmpresa, Usuario
} from '@/types'

// ============================================================
// MOCK DATA
// ============================================================
const now = new Date()
const todayISO = now.toISOString()
const yesterdayISO = new Date(now.getTime() - 86400000).toISOString()
const twoDaysAgoISO = new Date(now.getTime() - 172800000).toISOString()

const PRODUCTOS: Producto[] = [
  { id: 'p1', nombre: 'Vestido Lino Siena', categoria: 'Vestidos', color_principal: 'Beige', costo_inversion: 80, precio_venta: 189, margen_neto: 109, activo: true },
  { id: 'p2', nombre: 'Blusa Organza Milano', categoria: 'Blusas', color_principal: 'Rosa Pastel', costo_inversion: 50, precio_venta: 129, margen_neto: 79, activo: true },
  { id: 'p3', nombre: 'Pantalón Wide Leg Noir', categoria: 'Pantalones', color_principal: 'Negro', costo_inversion: 70, precio_venta: 159, margen_neto: 89, activo: true },
  { id: 'p4', nombre: 'Falda Midi Terracotta', categoria: 'Faldas', color_principal: 'Terracotta', costo_inversion: 60, precio_venta: 139, margen_neto: 79, activo: true },
  { id: 'p5', nombre: 'Blazer Oversize Camel', categoria: 'Abrigos', color_principal: 'Camel', costo_inversion: 100, precio_venta: 219, margen_neto: 119, activo: true },
  { id: 'p6', nombre: 'Top Crop Seda Luna', categoria: 'Tops', color_principal: 'Blanco Perla', costo_inversion: 35, precio_venta: 89, margen_neto: 54, activo: true },
]

const INVENTARIO: InventarioTalla[] = [
  { id: 'i1', producto_id: 'p1', talla: 'S', cantidad: 8 },
  { id: 'i2', producto_id: 'p1', talla: 'M', cantidad: 12 },
  { id: 'i3', producto_id: 'p1', talla: 'L', cantidad: 5 },
  { id: 'i4', producto_id: 'p2', talla: 'S', cantidad: 15 },
  { id: 'i5', producto_id: 'p2', talla: 'M', cantidad: 10 },
  { id: 'i6', producto_id: 'p2', talla: 'L', cantidad: 7 },
  { id: 'i7', producto_id: 'p3', talla: 'S', cantidad: 6 },
  { id: 'i8', producto_id: 'p3', talla: 'M', cantidad: 14 },
  { id: 'i9', producto_id: 'p3', talla: 'L', cantidad: 9 },
  { id: 'i10', producto_id: 'p4', talla: 'S', cantidad: 11 },
  { id: 'i11', producto_id: 'p4', talla: 'M', cantidad: 8 },
  { id: 'i12', producto_id: 'p4', talla: 'L', cantidad: 4 },
  { id: 'i13', producto_id: 'p5', talla: 'S', cantidad: 3 },
  { id: 'i14', producto_id: 'p5', talla: 'M', cantidad: 7 },
  { id: 'i15', producto_id: 'p5', talla: 'L', cantidad: 5 },
  { id: 'i16', producto_id: 'p6', talla: 'S', cantidad: 20 },
  { id: 'i17', producto_id: 'p6', talla: 'M', cantidad: 18 },
  { id: 'i18', producto_id: 'p6', talla: 'L', cantidad: 12 },
]

const CLIENTES: Cliente[] = [
  { id: 'c1', nombre: 'Lucía Méndez', whatsapp: '987654321', fecha_nacimiento: '1995-05-15', total_prendas_compradas: 15, valor_total_vida: 2450, notas: 'Clienta VIP', created_at: '2024-01-10T10:00:00Z' },
  { id: 'c2', nombre: 'Carla Ruiz', whatsapp: '912345678', fecha_nacimiento: '1998-08-22', total_prendas_compradas: 8, valor_total_vida: 1200, created_at: '2024-02-15T10:00:00Z' },
  { id: 'c3', nombre: 'Andrea Paz', whatsapp: '933445566', fecha_nacimiento: '2000-12-03', total_prendas_compradas: 3, valor_total_vida: 450, created_at: '2024-03-20T10:00:00Z' },
  { id: 'c4', nombre: 'María Rojas', whatsapp: '999888777', fecha_nacimiento: '1992-02-14', total_prendas_compradas: 22, valor_total_vida: 3800, notas: 'Compra cada mes', created_at: '2024-01-05T10:00:00Z' },
  { id: 'c5', nombre: 'Daniela Torres', whatsapp: '944556677', fecha_nacimiento: '1997-05-02', total_prendas_compradas: 6, valor_total_vida: 980, created_at: '2024-04-01T10:00:00Z' },
]

const VENTAS: Venta[] = [
  { id: 'v1', usuario_id: 'usr-ceo-001', cliente_id: 'c1', fecha_hora: todayISO, canal_venta: 'stand', metodo_pago: 'yape', total: 189, utilidad_neta_venta: 109 },
  { id: 'v2', usuario_id: 'usr-staff-001', cliente_id: 'c2', fecha_hora: todayISO, canal_venta: 'instagram', metodo_pago: 'transferencia', total: 258, utilidad_neta_venta: 158 },
  { id: 'v3', usuario_id: 'usr-ceo-001', cliente_id: 'c4', fecha_hora: yesterdayISO, canal_venta: 'stand', metodo_pago: 'efectivo', total: 348, utilidad_neta_venta: 198 },
  { id: 'v4', usuario_id: 'usr-staff-001', fecha_hora: yesterdayISO, canal_venta: 'stand', metodo_pago: 'plin', total: 139, utilidad_neta_venta: 79 },
  { id: 'v5', usuario_id: 'usr-ceo-001', cliente_id: 'c3', fecha_hora: twoDaysAgoISO, canal_venta: 'instagram', metodo_pago: 'yape', total: 89, utilidad_neta_venta: 54 },
]

const DETALLE_VENTAS: DetalleVenta[] = [
  { id: 'd1', venta_id: 'v1', producto_id: 'p1', talla: 'M', cantidad: 1, costo_inversion_unitario: 80, precio_venta_unitario: 189, subtotal: 189, utilidad_subtotal: 109 },
  { id: 'd2', venta_id: 'v2', producto_id: 'p2', talla: 'S', cantidad: 1, costo_inversion_unitario: 50, precio_venta_unitario: 129, subtotal: 129, utilidad_subtotal: 79 },
  { id: 'd3', venta_id: 'v2', producto_id: 'p2', talla: 'M', cantidad: 1, costo_inversion_unitario: 50, precio_venta_unitario: 129, subtotal: 129, utilidad_subtotal: 79 },
  { id: 'd4', venta_id: 'v3', producto_id: 'p1', talla: 'L', cantidad: 1, costo_inversion_unitario: 80, precio_venta_unitario: 189, subtotal: 189, utilidad_subtotal: 109 },
  { id: 'd5', venta_id: 'v3', producto_id: 'p3', talla: 'M', cantidad: 1, costo_inversion_unitario: 70, precio_venta_unitario: 159, subtotal: 159, utilidad_subtotal: 89 },
  { id: 'd6', venta_id: 'v4', producto_id: 'p4', talla: 'S', cantidad: 1, costo_inversion_unitario: 60, precio_venta_unitario: 139, subtotal: 139, utilidad_subtotal: 79 },
  { id: 'd7', venta_id: 'v5', producto_id: 'p6', talla: 'M', cantidad: 1, costo_inversion_unitario: 35, precio_venta_unitario: 89, subtotal: 89, utilidad_subtotal: 54 },
]

const MOVIMIENTOS: MovimientoInventario[] = [
  { id: 'm1', producto_id: 'p1', talla: 'M', tipo: 'salida', cantidad: 1, motivo: 'Venta #v1', usuario_id: 'usr-ceo-001', fecha_hora: todayISO },
  { id: 'm2', producto_id: 'p2', talla: 'S', tipo: 'salida', cantidad: 1, motivo: 'Venta #v2', usuario_id: 'usr-staff-001', fecha_hora: todayISO },
  { id: 'm3', producto_id: 'p1', talla: 'S', tipo: 'ingreso', cantidad: 20, motivo: 'Restock proveedor', usuario_id: 'usr-ceo-001', fecha_hora: yesterdayISO },
]

const GASTOS: GastoOperativo[] = [
  { id: 'g1', concepto: 'Alquiler Stand Mall', monto: 800, categoria: 'Alquiler', fecha_hora: todayISO, usuario_id: 'usr-ceo-001' },
  { id: 'g2', concepto: 'Packaging y bolsas', monto: 120, categoria: 'Materiales', fecha_hora: yesterdayISO, usuario_id: 'usr-ceo-001' },
  { id: 'g3', concepto: 'Publicidad Instagram', monto: 250, categoria: 'Marketing', fecha_hora: twoDaysAgoISO, usuario_id: 'usr-ceo-001' },
]

const CUADRES: CuadreCaja[] = [
  {
    id: 'cq1', usuario_staff_id: 'usr-staff-001', fecha_hora: yesterdayISO,
    monto_efectivo: 348, monto_yape: 189, monto_plin: 139, monto_transferencia: 258, monto_tarjeta: 0,
    monto_declarado: 934, monto_sistema: 934, diferencia: 0,
    observaciones: 'Todo cuadra correctamente', estado: 'aprobado',
  },
]

const CONFIGURACION: ConfiguracionEmpresa = {
  id: 'conf-1',
  nombre_empresa: 'Bithia Brand',
  tema_activo: 'light',
  whatsapp_corporativo: '+51 942 275 208',
}

const STAFF_USERS: Usuario[] = [
  { id: 'usr-staff-001', nombre: 'Tania Cerna', email: 'staff@bithia.com', rol: 'staff' },
]

// ============================================================
// Context Type
// ============================================================
interface AppContextType {
  productos: Producto[]
  inventario: InventarioTalla[]
  clientes: Cliente[]
  ventas: Venta[]
  detalleVentas: DetalleVenta[]
  movimientos: MovimientoInventario[]
  gastos: GastoOperativo[]
  cuadres: CuadreCaja[]
  cart: CartItem[]
  configuracion: ConfiguracionEmpresa
  staffList: Usuario[]
  addToCart: (producto: Producto, talla: 'S' | 'M' | 'L') => void
  removeFromCart: (productoId: string, talla: string) => void
  updateCartQty: (productoId: string, talla: string, qty: number) => void
  clearCart: () => void
  confirmarVenta: (canal: 'stand' | 'instagram', metodo: 'efectivo' | 'yape' | 'plin' | 'transferencia' | 'tarjeta', userId: string, clienteId?: string) => string
  ajustarStock: (productoId: string, talla: 'S' | 'M' | 'L', cantidad: number, tipo: 'ingreso' | 'salida', userId: string) => void
  agregarGasto: (concepto: string, monto: number, categoria: string, userId: string) => void
  agregarCliente: (nombre: string, whatsapp: string, fechaNac: string) => void
  enviarCuadre: (staffId: string, efectivo: number, yape: number, plin: number, transferencia: number, tarjeta: number, obs: string) => CuadreCaja
  updateConfiguracion: (config: Partial<ConfiguracionEmpresa>) => void
  agregarStaff: (nombre: string, email: string) => void
  eliminarStaff: (id: string) => void
  getStockForProduct: (productoId: string) => InventarioTalla[]
  getTotalStock: (productoId: string) => number
  getVentasStaff: (staffId: string, fecha?: string) => Venta[]
  registrarCuadre: (cuadre: any) => void
  agregarProducto: (producto: any) => void
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productos, setProductos] = useState<Producto[]>(PRODUCTOS)
  const [inventario, setInventario] = useState<InventarioTalla[]>(INVENTARIO)
  const [clientes, setClientes] = useState<Cliente[]>(CLIENTES)
  const [ventas, setVentas] = useState<Venta[]>(VENTAS)
  const [detalleVentas, setDetalleVentas] = useState<DetalleVenta[]>(DETALLE_VENTAS)
  const [movimientos, setMovimientos] = useState<MovimientoInventario[]>(MOVIMIENTOS)
  const [gastos, setGastos] = useState<GastoOperativo[]>(GASTOS)
  const [cuadres, setCuadres] = useState<CuadreCaja[]>(CUADRES)
  const [cart, setCart] = useState<CartItem[]>([])
  const [configuracion, setConfiguracion] = useState<ConfiguracionEmpresa>(CONFIGURACION)
  const [staffList, setStaffList] = useState<Usuario[]>(STAFF_USERS)

  const getStockForProduct = useCallback((pid: string) => inventario.filter(i => i.producto_id === pid), [inventario])
  const getTotalStock = useCallback((pid: string) => inventario.filter(i => i.producto_id === pid).reduce((s, i) => s + i.cantidad, 0), [inventario])

  const getVentasStaff = useCallback((staffId: string, fecha?: string) => {
    return ventas.filter(v => {
      const matchUser = v.usuario_id === staffId
      if (fecha) return matchUser && v.fecha_hora.startsWith(fecha)
      return matchUser
    })
  }, [ventas])

  const addToCart = useCallback((producto: Producto, talla: 'S' | 'M' | 'L') => {
    setCart(prev => {
      const existing = prev.find(c => c.producto.id === producto.id && c.talla === talla)
      if (existing) return prev.map(c => c.producto.id === producto.id && c.talla === talla ? { ...c, cantidad: c.cantidad + 1 } : c)
      return [...prev, { producto, talla, cantidad: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((pid: string, talla: string) => {
    setCart(prev => prev.filter(c => !(c.producto.id === pid && c.talla === talla)))
  }, [])

  const updateCartQty = useCallback((pid: string, talla: string, qty: number) => {
    if (qty <= 0) { setCart(prev => prev.filter(c => !(c.producto.id === pid && c.talla === talla))); return }
    setCart(prev => prev.map(c => c.producto.id === pid && c.talla === talla ? { ...c, cantidad: qty } : c))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const confirmarVenta = useCallback((canal: 'stand' | 'instagram', metodo: 'efectivo' | 'yape' | 'plin' | 'transferencia' | 'tarjeta', userId: string, clienteId?: string): string => {
    const ventaId = 'v' + Date.now()
    const total = cart.reduce((s, c) => s + c.producto.precio_venta * c.cantidad, 0)
    const utilidadNeta = cart.reduce((s, c) => s + c.producto.margen_neto * c.cantidad, 0)
    const fechaHora = new Date().toISOString()

    const newVenta: Venta = { id: ventaId, usuario_id: userId, cliente_id: clienteId, fecha_hora: fechaHora, canal_venta: canal, metodo_pago: metodo, total, utilidad_neta_venta: utilidadNeta }
    setVentas(prev => [newVenta, ...prev])

    const newDetalles: DetalleVenta[] = cart.map((c, i) => ({
      id: `d${Date.now()}-${i}`, venta_id: ventaId, producto_id: c.producto.id,
      talla: c.talla, cantidad: c.cantidad, costo_inversion_unitario: c.producto.costo_inversion, precio_venta_unitario: c.producto.precio_venta, subtotal: c.producto.precio_venta * c.cantidad,
      utilidad_subtotal: c.producto.margen_neto * c.cantidad,
    }))
    setDetalleVentas(prev => [...newDetalles, ...prev])

    if (clienteId) {
      setClientes(prev => prev.map(c => {
        if (c.id === clienteId) {
          const newPrendas = c.total_prendas_compradas + cart.reduce((s, item) => s + item.cantidad, 0)
          return { ...c, total_prendas_compradas: newPrendas, valor_total_vida: c.valor_total_vida + total }
        }
        return c
      }))
    }

    const newMovs: MovimientoInventario[] = []
    setInventario(prev => {
      const updated = [...prev]
      cart.forEach((c, i) => {
        const idx = updated.findIndex(inv => inv.producto_id === c.producto.id && inv.talla === c.talla)
        if (idx !== -1) updated[idx] = { ...updated[idx], cantidad: Math.max(0, updated[idx].cantidad - c.cantidad) }
        newMovs.push({ id: `m${Date.now()}-${i}`, producto_id: c.producto.id, talla: c.talla, tipo: 'salida', cantidad: c.cantidad, motivo: `Venta #${ventaId}`, usuario_id: userId, fecha_hora: fechaHora })
      })
      return updated
    })
    setMovimientos(prev => [...newMovs, ...prev])
    setCart([])
    return ventaId
  }, [cart])

  const ajustarStock = useCallback((pid: string, talla: 'S' | 'M' | 'L', cantidad: number, tipo: 'ingreso' | 'salida', userId: string) => {
    setInventario(prev => prev.map(inv => {
      if (inv.producto_id === pid && inv.talla === talla) {
        return { ...inv, cantidad: tipo === 'ingreso' ? inv.cantidad + cantidad : Math.max(0, inv.cantidad - cantidad) }
      }
      return inv
    }))
    setMovimientos(prev => [{ id: `m${Date.now()}`, producto_id: pid, talla, tipo, cantidad, motivo: tipo === 'ingreso' ? 'Restock manual' : 'Salida manual', usuario_id: userId, fecha_hora: new Date().toISOString() }, ...prev])
  }, [])

  const agregarGasto = useCallback((concepto: string, monto: number, categoria: string, userId: string) => {
    setGastos(prev => [{ id: `g${Date.now()}`, concepto, monto, categoria, fecha_hora: new Date().toISOString(), usuario_id: userId }, ...prev])
  }, [])

  const agregarCliente = useCallback((nombre: string, whatsapp: string, fechaNac: string) => {
    setClientes(prev => [{ id: `c${Date.now()}`, nombre, whatsapp, fecha_nacimiento: fechaNac || undefined, total_prendas_compradas: 0, valor_total_vida: 0, created_at: new Date().toISOString() }, ...prev])
  }, [])

  const enviarCuadre = useCallback((staffId: string, efectivo: number, yape: number, plin: number, transferencia: number, tarjeta: number, obs: string): CuadreCaja => {
    const hoy = new Date().toISOString().split('T')[0]
    const ventasStaffHoy = ventas.filter(v => v.usuario_id === staffId && v.fecha_hora.startsWith(hoy))
    const montoSistema = ventasStaffHoy.reduce((s, v) => s + v.total, 0)
    const montoDeclarado = efectivo + yape + plin + transferencia + tarjeta
    const diferencia = montoDeclarado - montoSistema
    const estado = Math.abs(diferencia) < 1 ? 'aprobado' as const : 'descuadre' as const

    const cuadre: CuadreCaja = {
      id: `cq${Date.now()}`, usuario_staff_id: staffId, fecha_hora: new Date().toISOString(),
      monto_efectivo: efectivo, monto_yape: yape, monto_plin: plin, monto_transferencia: transferencia, monto_tarjeta: tarjeta,
      monto_declarado: montoDeclarado, monto_sistema: montoSistema, diferencia, observaciones: obs, estado,
    }
    setCuadres(prev => [cuadre, ...prev])
    return cuadre
  }, [ventas])

  const registrarCuadre = useCallback((cuadre: any) => {
    setCuadres(prev => [cuadre, ...prev])
  }, [])

  const agregarProducto = useCallback((prodData: any) => {
    const nuevoId = 'p' + Date.now()
    const margen = (prodData.precio_venta || 0) - (prodData.costo_inversion || 0)
    const productoCompleto = {
      id: nuevoId,
      activo: true,
      margen_neto: margen,
      ...prodData
    }
    setProductos(prev => [productoCompleto, ...prev])
  }, [])

  const updateConfiguracion = useCallback((config: Partial<ConfiguracionEmpresa>) => {
    setConfiguracion(prev => {
      const next = { ...prev, ...config }
      if (next.tema_activo === 'night') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return next
    })
  }, [])

  const agregarStaff = useCallback((nombre: string, email: string) => {
    setStaffList(prev => [{ id: `usr-staff-${Date.now()}`, nombre, email, rol: 'staff' }, ...prev])
  }, [])

  const eliminarStaff = useCallback((id: string) => {
    setStaffList(prev => prev.filter(u => u.id !== id))
  }, [])

  return (
    <AppContext.Provider value={{
      productos, inventario, clientes, ventas, detalleVentas, movimientos, gastos, cuadres, cart, configuracion, staffList,
      addToCart, removeFromCart, updateCartQty, clearCart, confirmarVenta,
      ajustarStock, agregarGasto, agregarCliente, enviarCuadre,
      updateConfiguracion, agregarStaff, eliminarStaff,
      getStockForProduct, getTotalStock, getVentasStaff,
      registrarCuadre, agregarProducto,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = (): AppContextType => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp debe usarse dentro de AppProvider')
  return ctx
}
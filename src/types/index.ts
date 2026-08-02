export type Rol = 'admin' | 'staff'

export interface Usuario {
  id: string
  nombre: string
  email: string
  rol: Rol
}

export interface Producto {
  id: string
  nombre: string
  categoria: string
  color_principal: string
  costo_inversion: number
  precio_venta: number
  margen_neto: number
  activo: boolean
}

export interface InventarioTalla {
  id: string
  producto_id: string
  talla: 'S' | 'M' | 'L'
  cantidad: number
}

export interface Cliente {
  id: string
  nombre: string
  whatsapp: string
  fecha_nacimiento?: string
  total_prendas_compradas: number
  valor_total_vida: number
  nivel_segmentacion?: 'VIP' | 'Potencial' | 'Nueva'
  notas?: string
  created_at: string
}

export interface Venta {
  id: string
  usuario_id: string
  cliente_id?: string
  fecha_hora: string
  canal_venta: 'stand' | 'instagram'
  metodo_pago: 'efectivo' | 'yape' | 'plin' | 'transferencia' | 'tarjeta'
  total: number
  utilidad_neta_venta: number
}

export interface DetalleVenta {
  id: string
  venta_id: string
  producto_id: string
  talla: string
  cantidad: number
  costo_inversion_unitario: number
  precio_venta_unitario: number
  subtotal: number
  utilidad_subtotal: number
}

export interface MovimientoInventario {
  id: string
  producto_id: string
  talla: string
  tipo: 'ingreso' | 'salida' | 'ajuste'
  cantidad: number
  motivo?: string
  usuario_id: string
  fecha_hora: string
}

export interface GastoOperativo {
  id: string
  concepto: string
  monto: number
  categoria: string
  fecha_hora: string
  usuario_id: string
}

export interface CuadreCaja {
  id: string
  usuario_staff_id: string
  fecha_hora: string
  monto_efectivo: number
  monto_yape: number
  monto_plin: number
  monto_transferencia: number
  monto_tarjeta: number
  monto_declarado: number
  monto_sistema: number
  diferencia: number
  observaciones?: string
  estado: 'pendiente' | 'aprobado' | 'descuadre'
}

export interface CartItem {
  producto: Producto
  talla: 'S' | 'M' | 'L'
  cantidad: number
}

export interface ConfiguracionEmpresa {
  id: string
  nombre_empresa: string
  logo_url?: string
  tema_activo: 'light' | 'night'
  whatsapp_corporativo: string
}

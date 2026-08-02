
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ClientesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  whatsapp: 'whatsapp',
  fecha_nacimiento: 'fecha_nacimiento',
  total_prendas_compradas: 'total_prendas_compradas',
  valor_total_vida: 'valor_total_vida',
  notas: 'notas',
  created_at: 'created_at'
};

exports.Prisma.Configuracion_empresaScalarFieldEnum = {
  id: 'id',
  nombre_empresa: 'nombre_empresa',
  logo_url: 'logo_url',
  tema_activo: 'tema_activo',
  whatsapp_corporativo: 'whatsapp_corporativo',
  updated_at: 'updated_at'
};

exports.Prisma.Cuadres_cajaScalarFieldEnum = {
  id: 'id',
  usuario_staff_id: 'usuario_staff_id',
  fecha_hora: 'fecha_hora',
  monto_efectivo: 'monto_efectivo',
  monto_yape: 'monto_yape',
  monto_plin: 'monto_plin',
  monto_transferencia: 'monto_transferencia',
  monto_tarjeta: 'monto_tarjeta',
  monto_declarado: 'monto_declarado',
  monto_sistema: 'monto_sistema',
  diferencia: 'diferencia',
  observaciones: 'observaciones',
  estado: 'estado'
};

exports.Prisma.Detalle_ventasScalarFieldEnum = {
  id: 'id',
  venta_id: 'venta_id',
  producto_id: 'producto_id',
  talla: 'talla',
  cantidad: 'cantidad',
  costo_inversion_unitario: 'costo_inversion_unitario',
  precio_venta_unitario: 'precio_venta_unitario',
  subtotal: 'subtotal',
  utilidad_subtotal: 'utilidad_subtotal'
};

exports.Prisma.Gastos_operativosScalarFieldEnum = {
  id: 'id',
  concepto: 'concepto',
  monto: 'monto',
  categoria: 'categoria',
  fecha_hora: 'fecha_hora',
  usuario_id: 'usuario_id'
};

exports.Prisma.Inventario_tallasScalarFieldEnum = {
  id: 'id',
  producto_id: 'producto_id',
  talla: 'talla',
  cantidad: 'cantidad'
};

exports.Prisma.Movimientos_inventarioScalarFieldEnum = {
  id: 'id',
  producto_id: 'producto_id',
  talla: 'talla',
  tipo: 'tipo',
  cantidad: 'cantidad',
  motivo: 'motivo',
  usuario_id: 'usuario_id',
  fecha_hora: 'fecha_hora'
};

exports.Prisma.PerfilesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  email: 'email',
  rol: 'rol',
  created_at: 'created_at'
};

exports.Prisma.ProductosScalarFieldEnum = {
  id: 'id',
  codigo_barras: 'codigo_barras',
  nombre: 'nombre',
  categoria: 'categoria',
  color_principal: 'color_principal',
  costo_inversion: 'costo_inversion',
  precio_venta: 'precio_venta',
  margen_neto: 'margen_neto',
  imagen_url: 'imagen_url',
  activo: 'activo',
  created_at: 'created_at'
};

exports.Prisma.VentasScalarFieldEnum = {
  id: 'id',
  usuario_id: 'usuario_id',
  cliente_id: 'cliente_id',
  fecha_hora: 'fecha_hora',
  canal_venta: 'canal_venta',
  metodo_pago: 'metodo_pago',
  total: 'total',
  utilidad_neta_venta: 'utilidad_neta_venta'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  clientes: 'clientes',
  configuracion_empresa: 'configuracion_empresa',
  cuadres_caja: 'cuadres_caja',
  detalle_ventas: 'detalle_ventas',
  gastos_operativos: 'gastos_operativos',
  inventario_tallas: 'inventario_tallas',
  movimientos_inventario: 'movimientos_inventario',
  perfiles: 'perfiles',
  productos: 'productos',
  ventas: 'ventas'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

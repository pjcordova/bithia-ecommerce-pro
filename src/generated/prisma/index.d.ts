
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model configuracion_empresa
 * 
 */
export type configuracion_empresa = $Result.DefaultSelection<Prisma.$configuracion_empresaPayload>
/**
 * Model cuadres_caja
 * 
 */
export type cuadres_caja = $Result.DefaultSelection<Prisma.$cuadres_cajaPayload>
/**
 * Model detalle_ventas
 * 
 */
export type detalle_ventas = $Result.DefaultSelection<Prisma.$detalle_ventasPayload>
/**
 * Model gastos_operativos
 * 
 */
export type gastos_operativos = $Result.DefaultSelection<Prisma.$gastos_operativosPayload>
/**
 * Model inventario_tallas
 * 
 */
export type inventario_tallas = $Result.DefaultSelection<Prisma.$inventario_tallasPayload>
/**
 * Model movimientos_inventario
 * 
 */
export type movimientos_inventario = $Result.DefaultSelection<Prisma.$movimientos_inventarioPayload>
/**
 * Model perfiles
 * 
 */
export type perfiles = $Result.DefaultSelection<Prisma.$perfilesPayload>
/**
 * Model productos
 * 
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>
/**
 * Model ventas
 * 
 */
export type ventas = $Result.DefaultSelection<Prisma.$ventasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs>;

  /**
   * `prisma.configuracion_empresa`: Exposes CRUD operations for the **configuracion_empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracion_empresas
    * const configuracion_empresas = await prisma.configuracion_empresa.findMany()
    * ```
    */
  get configuracion_empresa(): Prisma.configuracion_empresaDelegate<ExtArgs>;

  /**
   * `prisma.cuadres_caja`: Exposes CRUD operations for the **cuadres_caja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuadres_cajas
    * const cuadres_cajas = await prisma.cuadres_caja.findMany()
    * ```
    */
  get cuadres_caja(): Prisma.cuadres_cajaDelegate<ExtArgs>;

  /**
   * `prisma.detalle_ventas`: Exposes CRUD operations for the **detalle_ventas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_ventas
    * const detalle_ventas = await prisma.detalle_ventas.findMany()
    * ```
    */
  get detalle_ventas(): Prisma.detalle_ventasDelegate<ExtArgs>;

  /**
   * `prisma.gastos_operativos`: Exposes CRUD operations for the **gastos_operativos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos_operativos
    * const gastos_operativos = await prisma.gastos_operativos.findMany()
    * ```
    */
  get gastos_operativos(): Prisma.gastos_operativosDelegate<ExtArgs>;

  /**
   * `prisma.inventario_tallas`: Exposes CRUD operations for the **inventario_tallas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventario_tallas
    * const inventario_tallas = await prisma.inventario_tallas.findMany()
    * ```
    */
  get inventario_tallas(): Prisma.inventario_tallasDelegate<ExtArgs>;

  /**
   * `prisma.movimientos_inventario`: Exposes CRUD operations for the **movimientos_inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimientos_inventarios
    * const movimientos_inventarios = await prisma.movimientos_inventario.findMany()
    * ```
    */
  get movimientos_inventario(): Prisma.movimientos_inventarioDelegate<ExtArgs>;

  /**
   * `prisma.perfiles`: Exposes CRUD operations for the **perfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfiles
    * const perfiles = await prisma.perfiles.findMany()
    * ```
    */
  get perfiles(): Prisma.perfilesDelegate<ExtArgs>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs>;

  /**
   * `prisma.ventas`: Exposes CRUD operations for the **ventas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.ventas.findMany()
    * ```
    */
  get ventas(): Prisma.ventasDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "clientes" | "configuracion_empresa" | "cuadres_caja" | "detalle_ventas" | "gastos_operativos" | "inventario_tallas" | "movimientos_inventario" | "perfiles" | "productos" | "ventas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      configuracion_empresa: {
        payload: Prisma.$configuracion_empresaPayload<ExtArgs>
        fields: Prisma.configuracion_empresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configuracion_empresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configuracion_empresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>
          }
          findFirst: {
            args: Prisma.configuracion_empresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configuracion_empresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>
          }
          findMany: {
            args: Prisma.configuracion_empresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>[]
          }
          create: {
            args: Prisma.configuracion_empresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>
          }
          createMany: {
            args: Prisma.configuracion_empresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.configuracion_empresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>[]
          }
          delete: {
            args: Prisma.configuracion_empresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>
          }
          update: {
            args: Prisma.configuracion_empresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>
          }
          deleteMany: {
            args: Prisma.configuracion_empresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configuracion_empresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.configuracion_empresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_empresaPayload>
          }
          aggregate: {
            args: Prisma.Configuracion_empresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracion_empresa>
          }
          groupBy: {
            args: Prisma.configuracion_empresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Configuracion_empresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.configuracion_empresaCountArgs<ExtArgs>
            result: $Utils.Optional<Configuracion_empresaCountAggregateOutputType> | number
          }
        }
      }
      cuadres_caja: {
        payload: Prisma.$cuadres_cajaPayload<ExtArgs>
        fields: Prisma.cuadres_cajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuadres_cajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuadres_cajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>
          }
          findFirst: {
            args: Prisma.cuadres_cajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuadres_cajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>
          }
          findMany: {
            args: Prisma.cuadres_cajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>[]
          }
          create: {
            args: Prisma.cuadres_cajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>
          }
          createMany: {
            args: Prisma.cuadres_cajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cuadres_cajaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>[]
          }
          delete: {
            args: Prisma.cuadres_cajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>
          }
          update: {
            args: Prisma.cuadres_cajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>
          }
          deleteMany: {
            args: Prisma.cuadres_cajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cuadres_cajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cuadres_cajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuadres_cajaPayload>
          }
          aggregate: {
            args: Prisma.Cuadres_cajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuadres_caja>
          }
          groupBy: {
            args: Prisma.cuadres_cajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cuadres_cajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuadres_cajaCountArgs<ExtArgs>
            result: $Utils.Optional<Cuadres_cajaCountAggregateOutputType> | number
          }
        }
      }
      detalle_ventas: {
        payload: Prisma.$detalle_ventasPayload<ExtArgs>
        fields: Prisma.detalle_ventasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_ventasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_ventasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>
          }
          findFirst: {
            args: Prisma.detalle_ventasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_ventasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>
          }
          findMany: {
            args: Prisma.detalle_ventasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>[]
          }
          create: {
            args: Prisma.detalle_ventasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>
          }
          createMany: {
            args: Prisma.detalle_ventasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detalle_ventasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>[]
          }
          delete: {
            args: Prisma.detalle_ventasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>
          }
          update: {
            args: Prisma.detalle_ventasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>
          }
          deleteMany: {
            args: Prisma.detalle_ventasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_ventasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detalle_ventasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_ventasPayload>
          }
          aggregate: {
            args: Prisma.Detalle_ventasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_ventas>
          }
          groupBy: {
            args: Prisma.detalle_ventasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_ventasGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_ventasCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_ventasCountAggregateOutputType> | number
          }
        }
      }
      gastos_operativos: {
        payload: Prisma.$gastos_operativosPayload<ExtArgs>
        fields: Prisma.gastos_operativosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gastos_operativosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gastos_operativosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>
          }
          findFirst: {
            args: Prisma.gastos_operativosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gastos_operativosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>
          }
          findMany: {
            args: Prisma.gastos_operativosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>[]
          }
          create: {
            args: Prisma.gastos_operativosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>
          }
          createMany: {
            args: Prisma.gastos_operativosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gastos_operativosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>[]
          }
          delete: {
            args: Prisma.gastos_operativosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>
          }
          update: {
            args: Prisma.gastos_operativosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>
          }
          deleteMany: {
            args: Prisma.gastos_operativosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gastos_operativosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gastos_operativosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastos_operativosPayload>
          }
          aggregate: {
            args: Prisma.Gastos_operativosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGastos_operativos>
          }
          groupBy: {
            args: Prisma.gastos_operativosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gastos_operativosGroupByOutputType>[]
          }
          count: {
            args: Prisma.gastos_operativosCountArgs<ExtArgs>
            result: $Utils.Optional<Gastos_operativosCountAggregateOutputType> | number
          }
        }
      }
      inventario_tallas: {
        payload: Prisma.$inventario_tallasPayload<ExtArgs>
        fields: Prisma.inventario_tallasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventario_tallasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventario_tallasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>
          }
          findFirst: {
            args: Prisma.inventario_tallasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventario_tallasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>
          }
          findMany: {
            args: Prisma.inventario_tallasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>[]
          }
          create: {
            args: Prisma.inventario_tallasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>
          }
          createMany: {
            args: Prisma.inventario_tallasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventario_tallasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>[]
          }
          delete: {
            args: Prisma.inventario_tallasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>
          }
          update: {
            args: Prisma.inventario_tallasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>
          }
          deleteMany: {
            args: Prisma.inventario_tallasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventario_tallasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inventario_tallasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventario_tallasPayload>
          }
          aggregate: {
            args: Prisma.Inventario_tallasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario_tallas>
          }
          groupBy: {
            args: Prisma.inventario_tallasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inventario_tallasGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventario_tallasCountArgs<ExtArgs>
            result: $Utils.Optional<Inventario_tallasCountAggregateOutputType> | number
          }
        }
      }
      movimientos_inventario: {
        payload: Prisma.$movimientos_inventarioPayload<ExtArgs>
        fields: Prisma.movimientos_inventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movimientos_inventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movimientos_inventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>
          }
          findFirst: {
            args: Prisma.movimientos_inventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movimientos_inventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>
          }
          findMany: {
            args: Prisma.movimientos_inventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>[]
          }
          create: {
            args: Prisma.movimientos_inventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>
          }
          createMany: {
            args: Prisma.movimientos_inventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movimientos_inventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>[]
          }
          delete: {
            args: Prisma.movimientos_inventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>
          }
          update: {
            args: Prisma.movimientos_inventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>
          }
          deleteMany: {
            args: Prisma.movimientos_inventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movimientos_inventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.movimientos_inventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_inventarioPayload>
          }
          aggregate: {
            args: Prisma.Movimientos_inventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientos_inventario>
          }
          groupBy: {
            args: Prisma.movimientos_inventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Movimientos_inventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.movimientos_inventarioCountArgs<ExtArgs>
            result: $Utils.Optional<Movimientos_inventarioCountAggregateOutputType> | number
          }
        }
      }
      perfiles: {
        payload: Prisma.$perfilesPayload<ExtArgs>
        fields: Prisma.perfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.perfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.perfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          findFirst: {
            args: Prisma.perfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.perfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          findMany: {
            args: Prisma.perfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>[]
          }
          create: {
            args: Prisma.perfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          createMany: {
            args: Prisma.perfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.perfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>[]
          }
          delete: {
            args: Prisma.perfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          update: {
            args: Prisma.perfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          deleteMany: {
            args: Prisma.perfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.perfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.perfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilesPayload>
          }
          aggregate: {
            args: Prisma.PerfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfiles>
          }
          groupBy: {
            args: Prisma.perfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.perfilesCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilesCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      ventas: {
        payload: Prisma.$ventasPayload<ExtArgs>
        fields: Prisma.ventasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ventasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ventasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findFirst: {
            args: Prisma.ventasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ventasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          findMany: {
            args: Prisma.ventasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          create: {
            args: Prisma.ventasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          createMany: {
            args: Prisma.ventasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ventasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>[]
          }
          delete: {
            args: Prisma.ventasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          update: {
            args: Prisma.ventasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          deleteMany: {
            args: Prisma.ventasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ventasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ventasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ventasPayload>
          }
          aggregate: {
            args: Prisma.VentasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentas>
          }
          groupBy: {
            args: Prisma.ventasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ventasCountArgs<ExtArgs>
            result: $Utils.Optional<VentasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    ventas: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | ClientesCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
  }


  /**
   * Count Type PerfilesCountOutputType
   */

  export type PerfilesCountOutputType = {
    cuadres_caja: number
    gastos_operativos: number
    movimientos_inventario: number
    ventas: number
  }

  export type PerfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuadres_caja?: boolean | PerfilesCountOutputTypeCountCuadres_cajaArgs
    gastos_operativos?: boolean | PerfilesCountOutputTypeCountGastos_operativosArgs
    movimientos_inventario?: boolean | PerfilesCountOutputTypeCountMovimientos_inventarioArgs
    ventas?: boolean | PerfilesCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * PerfilesCountOutputType without action
   */
  export type PerfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilesCountOutputType
     */
    select?: PerfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilesCountOutputType without action
   */
  export type PerfilesCountOutputTypeCountCuadres_cajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuadres_cajaWhereInput
  }

  /**
   * PerfilesCountOutputType without action
   */
  export type PerfilesCountOutputTypeCountGastos_operativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gastos_operativosWhereInput
  }

  /**
   * PerfilesCountOutputType without action
   */
  export type PerfilesCountOutputTypeCountMovimientos_inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientos_inventarioWhereInput
  }

  /**
   * PerfilesCountOutputType without action
   */
  export type PerfilesCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    detalle_ventas: number
    inventario_tallas: number
    movimientos_inventario: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_ventas?: boolean | ProductosCountOutputTypeCountDetalle_ventasArgs
    inventario_tallas?: boolean | ProductosCountOutputTypeCountInventario_tallasArgs
    movimientos_inventario?: boolean | ProductosCountOutputTypeCountMovimientos_inventarioArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountDetalle_ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_ventasWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountInventario_tallasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventario_tallasWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountMovimientos_inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientos_inventarioWhereInput
  }


  /**
   * Count Type VentasCountOutputType
   */

  export type VentasCountOutputType = {
    detalle_ventas: number
  }

  export type VentasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_ventas?: boolean | VentasCountOutputTypeCountDetalle_ventasArgs
  }

  // Custom InputTypes
  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentasCountOutputType
     */
    select?: VentasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentasCountOutputType without action
   */
  export type VentasCountOutputTypeCountDetalle_ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_ventasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    total_prendas_compradas: number | null
    valor_total_vida: Decimal | null
  }

  export type ClientesSumAggregateOutputType = {
    total_prendas_compradas: number | null
    valor_total_vida: Decimal | null
  }

  export type ClientesMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    whatsapp: string | null
    fecha_nacimiento: Date | null
    total_prendas_compradas: number | null
    valor_total_vida: Decimal | null
    notas: string | null
    created_at: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    whatsapp: string | null
    fecha_nacimiento: Date | null
    total_prendas_compradas: number | null
    valor_total_vida: Decimal | null
    notas: string | null
    created_at: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    nombre: number
    whatsapp: number
    fecha_nacimiento: number
    total_prendas_compradas: number
    valor_total_vida: number
    notas: number
    created_at: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    total_prendas_compradas?: true
    valor_total_vida?: true
  }

  export type ClientesSumAggregateInputType = {
    total_prendas_compradas?: true
    valor_total_vida?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    nombre?: true
    whatsapp?: true
    fecha_nacimiento?: true
    total_prendas_compradas?: true
    valor_total_vida?: true
    notas?: true
    created_at?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    nombre?: true
    whatsapp?: true
    fecha_nacimiento?: true
    total_prendas_compradas?: true
    valor_total_vida?: true
    notas?: true
    created_at?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    nombre?: true
    whatsapp?: true
    fecha_nacimiento?: true
    total_prendas_compradas?: true
    valor_total_vida?: true
    notas?: true
    created_at?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: string
    nombre: string
    whatsapp: string | null
    fecha_nacimiento: Date | null
    total_prendas_compradas: number | null
    valor_total_vida: Decimal | null
    notas: string | null
    created_at: Date | null
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    whatsapp?: boolean
    fecha_nacimiento?: boolean
    total_prendas_compradas?: boolean
    valor_total_vida?: boolean
    notas?: boolean
    created_at?: boolean
    ventas?: boolean | clientes$ventasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    whatsapp?: boolean
    fecha_nacimiento?: boolean
    total_prendas_compradas?: boolean
    valor_total_vida?: boolean
    notas?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectScalar = {
    id?: boolean
    nombre?: boolean
    whatsapp?: boolean
    fecha_nacimiento?: boolean
    total_prendas_compradas?: boolean
    valor_total_vida?: boolean
    notas?: boolean
    created_at?: boolean
  }

  export type clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | clientes$ventasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {
      ventas: Prisma.$ventasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      whatsapp: string | null
      fecha_nacimiento: Date | null
      total_prendas_compradas: number | null
      valor_total_vida: Prisma.Decimal | null
      notas: string | null
      created_at: Date | null
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clientesWithIdOnly = await prisma.clientes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientesCreateManyAndReturnArgs>(args?: SelectSubset<T, clientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends clientes$ventasArgs<ExtArgs> = {}>(args?: Subset<T, clientes$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clientes model
   */ 
  interface clientesFieldRefs {
    readonly id: FieldRef<"clientes", 'String'>
    readonly nombre: FieldRef<"clientes", 'String'>
    readonly whatsapp: FieldRef<"clientes", 'String'>
    readonly fecha_nacimiento: FieldRef<"clientes", 'DateTime'>
    readonly total_prendas_compradas: FieldRef<"clientes", 'Int'>
    readonly valor_total_vida: FieldRef<"clientes", 'Decimal'>
    readonly notas: FieldRef<"clientes", 'String'>
    readonly created_at: FieldRef<"clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes createManyAndReturn
   */
  export type clientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
  }

  /**
   * clientes.ventas
   */
  export type clientes$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    cursor?: ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
  }


  /**
   * Model configuracion_empresa
   */

  export type AggregateConfiguracion_empresa = {
    _count: Configuracion_empresaCountAggregateOutputType | null
    _min: Configuracion_empresaMinAggregateOutputType | null
    _max: Configuracion_empresaMaxAggregateOutputType | null
  }

  export type Configuracion_empresaMinAggregateOutputType = {
    id: string | null
    nombre_empresa: string | null
    logo_url: string | null
    tema_activo: string | null
    whatsapp_corporativo: string | null
    updated_at: Date | null
  }

  export type Configuracion_empresaMaxAggregateOutputType = {
    id: string | null
    nombre_empresa: string | null
    logo_url: string | null
    tema_activo: string | null
    whatsapp_corporativo: string | null
    updated_at: Date | null
  }

  export type Configuracion_empresaCountAggregateOutputType = {
    id: number
    nombre_empresa: number
    logo_url: number
    tema_activo: number
    whatsapp_corporativo: number
    updated_at: number
    _all: number
  }


  export type Configuracion_empresaMinAggregateInputType = {
    id?: true
    nombre_empresa?: true
    logo_url?: true
    tema_activo?: true
    whatsapp_corporativo?: true
    updated_at?: true
  }

  export type Configuracion_empresaMaxAggregateInputType = {
    id?: true
    nombre_empresa?: true
    logo_url?: true
    tema_activo?: true
    whatsapp_corporativo?: true
    updated_at?: true
  }

  export type Configuracion_empresaCountAggregateInputType = {
    id?: true
    nombre_empresa?: true
    logo_url?: true
    tema_activo?: true
    whatsapp_corporativo?: true
    updated_at?: true
    _all?: true
  }

  export type Configuracion_empresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracion_empresa to aggregate.
     */
    where?: configuracion_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_empresas to fetch.
     */
    orderBy?: configuracion_empresaOrderByWithRelationInput | configuracion_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracion_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuracion_empresas
    **/
    _count?: true | Configuracion_empresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Configuracion_empresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Configuracion_empresaMaxAggregateInputType
  }

  export type GetConfiguracion_empresaAggregateType<T extends Configuracion_empresaAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracion_empresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracion_empresa[P]>
      : GetScalarType<T[P], AggregateConfiguracion_empresa[P]>
  }




  export type configuracion_empresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracion_empresaWhereInput
    orderBy?: configuracion_empresaOrderByWithAggregationInput | configuracion_empresaOrderByWithAggregationInput[]
    by: Configuracion_empresaScalarFieldEnum[] | Configuracion_empresaScalarFieldEnum
    having?: configuracion_empresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Configuracion_empresaCountAggregateInputType | true
    _min?: Configuracion_empresaMinAggregateInputType
    _max?: Configuracion_empresaMaxAggregateInputType
  }

  export type Configuracion_empresaGroupByOutputType = {
    id: string
    nombre_empresa: string
    logo_url: string | null
    tema_activo: string | null
    whatsapp_corporativo: string | null
    updated_at: Date | null
    _count: Configuracion_empresaCountAggregateOutputType | null
    _min: Configuracion_empresaMinAggregateOutputType | null
    _max: Configuracion_empresaMaxAggregateOutputType | null
  }

  type GetConfiguracion_empresaGroupByPayload<T extends configuracion_empresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Configuracion_empresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Configuracion_empresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Configuracion_empresaGroupByOutputType[P]>
            : GetScalarType<T[P], Configuracion_empresaGroupByOutputType[P]>
        }
      >
    >


  export type configuracion_empresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_empresa?: boolean
    logo_url?: boolean
    tema_activo?: boolean
    whatsapp_corporativo?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["configuracion_empresa"]>

  export type configuracion_empresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_empresa?: boolean
    logo_url?: boolean
    tema_activo?: boolean
    whatsapp_corporativo?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["configuracion_empresa"]>

  export type configuracion_empresaSelectScalar = {
    id?: boolean
    nombre_empresa?: boolean
    logo_url?: boolean
    tema_activo?: boolean
    whatsapp_corporativo?: boolean
    updated_at?: boolean
  }


  export type $configuracion_empresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuracion_empresa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre_empresa: string
      logo_url: string | null
      tema_activo: string | null
      whatsapp_corporativo: string | null
      updated_at: Date | null
    }, ExtArgs["result"]["configuracion_empresa"]>
    composites: {}
  }

  type configuracion_empresaGetPayload<S extends boolean | null | undefined | configuracion_empresaDefaultArgs> = $Result.GetResult<Prisma.$configuracion_empresaPayload, S>

  type configuracion_empresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<configuracion_empresaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Configuracion_empresaCountAggregateInputType | true
    }

  export interface configuracion_empresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuracion_empresa'], meta: { name: 'configuracion_empresa' } }
    /**
     * Find zero or one Configuracion_empresa that matches the filter.
     * @param {configuracion_empresaFindUniqueArgs} args - Arguments to find a Configuracion_empresa
     * @example
     * // Get one Configuracion_empresa
     * const configuracion_empresa = await prisma.configuracion_empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configuracion_empresaFindUniqueArgs>(args: SelectSubset<T, configuracion_empresaFindUniqueArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Configuracion_empresa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {configuracion_empresaFindUniqueOrThrowArgs} args - Arguments to find a Configuracion_empresa
     * @example
     * // Get one Configuracion_empresa
     * const configuracion_empresa = await prisma.configuracion_empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configuracion_empresaFindUniqueOrThrowArgs>(args: SelectSubset<T, configuracion_empresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Configuracion_empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_empresaFindFirstArgs} args - Arguments to find a Configuracion_empresa
     * @example
     * // Get one Configuracion_empresa
     * const configuracion_empresa = await prisma.configuracion_empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configuracion_empresaFindFirstArgs>(args?: SelectSubset<T, configuracion_empresaFindFirstArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Configuracion_empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_empresaFindFirstOrThrowArgs} args - Arguments to find a Configuracion_empresa
     * @example
     * // Get one Configuracion_empresa
     * const configuracion_empresa = await prisma.configuracion_empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configuracion_empresaFindFirstOrThrowArgs>(args?: SelectSubset<T, configuracion_empresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Configuracion_empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_empresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracion_empresas
     * const configuracion_empresas = await prisma.configuracion_empresa.findMany()
     * 
     * // Get first 10 Configuracion_empresas
     * const configuracion_empresas = await prisma.configuracion_empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracion_empresaWithIdOnly = await prisma.configuracion_empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends configuracion_empresaFindManyArgs>(args?: SelectSubset<T, configuracion_empresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Configuracion_empresa.
     * @param {configuracion_empresaCreateArgs} args - Arguments to create a Configuracion_empresa.
     * @example
     * // Create one Configuracion_empresa
     * const Configuracion_empresa = await prisma.configuracion_empresa.create({
     *   data: {
     *     // ... data to create a Configuracion_empresa
     *   }
     * })
     * 
     */
    create<T extends configuracion_empresaCreateArgs>(args: SelectSubset<T, configuracion_empresaCreateArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Configuracion_empresas.
     * @param {configuracion_empresaCreateManyArgs} args - Arguments to create many Configuracion_empresas.
     * @example
     * // Create many Configuracion_empresas
     * const configuracion_empresa = await prisma.configuracion_empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configuracion_empresaCreateManyArgs>(args?: SelectSubset<T, configuracion_empresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracion_empresas and returns the data saved in the database.
     * @param {configuracion_empresaCreateManyAndReturnArgs} args - Arguments to create many Configuracion_empresas.
     * @example
     * // Create many Configuracion_empresas
     * const configuracion_empresa = await prisma.configuracion_empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracion_empresas and only return the `id`
     * const configuracion_empresaWithIdOnly = await prisma.configuracion_empresa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends configuracion_empresaCreateManyAndReturnArgs>(args?: SelectSubset<T, configuracion_empresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Configuracion_empresa.
     * @param {configuracion_empresaDeleteArgs} args - Arguments to delete one Configuracion_empresa.
     * @example
     * // Delete one Configuracion_empresa
     * const Configuracion_empresa = await prisma.configuracion_empresa.delete({
     *   where: {
     *     // ... filter to delete one Configuracion_empresa
     *   }
     * })
     * 
     */
    delete<T extends configuracion_empresaDeleteArgs>(args: SelectSubset<T, configuracion_empresaDeleteArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Configuracion_empresa.
     * @param {configuracion_empresaUpdateArgs} args - Arguments to update one Configuracion_empresa.
     * @example
     * // Update one Configuracion_empresa
     * const configuracion_empresa = await prisma.configuracion_empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configuracion_empresaUpdateArgs>(args: SelectSubset<T, configuracion_empresaUpdateArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Configuracion_empresas.
     * @param {configuracion_empresaDeleteManyArgs} args - Arguments to filter Configuracion_empresas to delete.
     * @example
     * // Delete a few Configuracion_empresas
     * const { count } = await prisma.configuracion_empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configuracion_empresaDeleteManyArgs>(args?: SelectSubset<T, configuracion_empresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracion_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_empresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracion_empresas
     * const configuracion_empresa = await prisma.configuracion_empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configuracion_empresaUpdateManyArgs>(args: SelectSubset<T, configuracion_empresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuracion_empresa.
     * @param {configuracion_empresaUpsertArgs} args - Arguments to update or create a Configuracion_empresa.
     * @example
     * // Update or create a Configuracion_empresa
     * const configuracion_empresa = await prisma.configuracion_empresa.upsert({
     *   create: {
     *     // ... data to create a Configuracion_empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracion_empresa we want to update
     *   }
     * })
     */
    upsert<T extends configuracion_empresaUpsertArgs>(args: SelectSubset<T, configuracion_empresaUpsertArgs<ExtArgs>>): Prisma__configuracion_empresaClient<$Result.GetResult<Prisma.$configuracion_empresaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Configuracion_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_empresaCountArgs} args - Arguments to filter Configuracion_empresas to count.
     * @example
     * // Count the number of Configuracion_empresas
     * const count = await prisma.configuracion_empresa.count({
     *   where: {
     *     // ... the filter for the Configuracion_empresas we want to count
     *   }
     * })
    **/
    count<T extends configuracion_empresaCountArgs>(
      args?: Subset<T, configuracion_empresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Configuracion_empresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracion_empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_empresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Configuracion_empresaAggregateArgs>(args: Subset<T, Configuracion_empresaAggregateArgs>): Prisma.PrismaPromise<GetConfiguracion_empresaAggregateType<T>>

    /**
     * Group by Configuracion_empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_empresaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends configuracion_empresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configuracion_empresaGroupByArgs['orderBy'] }
        : { orderBy?: configuracion_empresaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, configuracion_empresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracion_empresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuracion_empresa model
   */
  readonly fields: configuracion_empresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuracion_empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configuracion_empresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the configuracion_empresa model
   */ 
  interface configuracion_empresaFieldRefs {
    readonly id: FieldRef<"configuracion_empresa", 'String'>
    readonly nombre_empresa: FieldRef<"configuracion_empresa", 'String'>
    readonly logo_url: FieldRef<"configuracion_empresa", 'String'>
    readonly tema_activo: FieldRef<"configuracion_empresa", 'String'>
    readonly whatsapp_corporativo: FieldRef<"configuracion_empresa", 'String'>
    readonly updated_at: FieldRef<"configuracion_empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * configuracion_empresa findUnique
   */
  export type configuracion_empresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * Filter, which configuracion_empresa to fetch.
     */
    where: configuracion_empresaWhereUniqueInput
  }

  /**
   * configuracion_empresa findUniqueOrThrow
   */
  export type configuracion_empresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * Filter, which configuracion_empresa to fetch.
     */
    where: configuracion_empresaWhereUniqueInput
  }

  /**
   * configuracion_empresa findFirst
   */
  export type configuracion_empresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * Filter, which configuracion_empresa to fetch.
     */
    where?: configuracion_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_empresas to fetch.
     */
    orderBy?: configuracion_empresaOrderByWithRelationInput | configuracion_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracion_empresas.
     */
    cursor?: configuracion_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracion_empresas.
     */
    distinct?: Configuracion_empresaScalarFieldEnum | Configuracion_empresaScalarFieldEnum[]
  }

  /**
   * configuracion_empresa findFirstOrThrow
   */
  export type configuracion_empresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * Filter, which configuracion_empresa to fetch.
     */
    where?: configuracion_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_empresas to fetch.
     */
    orderBy?: configuracion_empresaOrderByWithRelationInput | configuracion_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracion_empresas.
     */
    cursor?: configuracion_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracion_empresas.
     */
    distinct?: Configuracion_empresaScalarFieldEnum | Configuracion_empresaScalarFieldEnum[]
  }

  /**
   * configuracion_empresa findMany
   */
  export type configuracion_empresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * Filter, which configuracion_empresas to fetch.
     */
    where?: configuracion_empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_empresas to fetch.
     */
    orderBy?: configuracion_empresaOrderByWithRelationInput | configuracion_empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuracion_empresas.
     */
    cursor?: configuracion_empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_empresas.
     */
    skip?: number
    distinct?: Configuracion_empresaScalarFieldEnum | Configuracion_empresaScalarFieldEnum[]
  }

  /**
   * configuracion_empresa create
   */
  export type configuracion_empresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * The data needed to create a configuracion_empresa.
     */
    data?: XOR<configuracion_empresaCreateInput, configuracion_empresaUncheckedCreateInput>
  }

  /**
   * configuracion_empresa createMany
   */
  export type configuracion_empresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configuracion_empresas.
     */
    data: configuracion_empresaCreateManyInput | configuracion_empresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuracion_empresa createManyAndReturn
   */
  export type configuracion_empresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many configuracion_empresas.
     */
    data: configuracion_empresaCreateManyInput | configuracion_empresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuracion_empresa update
   */
  export type configuracion_empresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * The data needed to update a configuracion_empresa.
     */
    data: XOR<configuracion_empresaUpdateInput, configuracion_empresaUncheckedUpdateInput>
    /**
     * Choose, which configuracion_empresa to update.
     */
    where: configuracion_empresaWhereUniqueInput
  }

  /**
   * configuracion_empresa updateMany
   */
  export type configuracion_empresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configuracion_empresas.
     */
    data: XOR<configuracion_empresaUpdateManyMutationInput, configuracion_empresaUncheckedUpdateManyInput>
    /**
     * Filter which configuracion_empresas to update
     */
    where?: configuracion_empresaWhereInput
  }

  /**
   * configuracion_empresa upsert
   */
  export type configuracion_empresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * The filter to search for the configuracion_empresa to update in case it exists.
     */
    where: configuracion_empresaWhereUniqueInput
    /**
     * In case the configuracion_empresa found by the `where` argument doesn't exist, create a new configuracion_empresa with this data.
     */
    create: XOR<configuracion_empresaCreateInput, configuracion_empresaUncheckedCreateInput>
    /**
     * In case the configuracion_empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracion_empresaUpdateInput, configuracion_empresaUncheckedUpdateInput>
  }

  /**
   * configuracion_empresa delete
   */
  export type configuracion_empresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
    /**
     * Filter which configuracion_empresa to delete.
     */
    where: configuracion_empresaWhereUniqueInput
  }

  /**
   * configuracion_empresa deleteMany
   */
  export type configuracion_empresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracion_empresas to delete
     */
    where?: configuracion_empresaWhereInput
  }

  /**
   * configuracion_empresa without action
   */
  export type configuracion_empresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_empresa
     */
    select?: configuracion_empresaSelect<ExtArgs> | null
  }


  /**
   * Model cuadres_caja
   */

  export type AggregateCuadres_caja = {
    _count: Cuadres_cajaCountAggregateOutputType | null
    _avg: Cuadres_cajaAvgAggregateOutputType | null
    _sum: Cuadres_cajaSumAggregateOutputType | null
    _min: Cuadres_cajaMinAggregateOutputType | null
    _max: Cuadres_cajaMaxAggregateOutputType | null
  }

  export type Cuadres_cajaAvgAggregateOutputType = {
    monto_efectivo: Decimal | null
    monto_yape: Decimal | null
    monto_plin: Decimal | null
    monto_transferencia: Decimal | null
    monto_tarjeta: Decimal | null
    monto_declarado: Decimal | null
    monto_sistema: Decimal | null
    diferencia: Decimal | null
  }

  export type Cuadres_cajaSumAggregateOutputType = {
    monto_efectivo: Decimal | null
    monto_yape: Decimal | null
    monto_plin: Decimal | null
    monto_transferencia: Decimal | null
    monto_tarjeta: Decimal | null
    monto_declarado: Decimal | null
    monto_sistema: Decimal | null
    diferencia: Decimal | null
  }

  export type Cuadres_cajaMinAggregateOutputType = {
    id: string | null
    usuario_staff_id: string | null
    fecha_hora: Date | null
    monto_efectivo: Decimal | null
    monto_yape: Decimal | null
    monto_plin: Decimal | null
    monto_transferencia: Decimal | null
    monto_tarjeta: Decimal | null
    monto_declarado: Decimal | null
    monto_sistema: Decimal | null
    diferencia: Decimal | null
    observaciones: string | null
    estado: string | null
  }

  export type Cuadres_cajaMaxAggregateOutputType = {
    id: string | null
    usuario_staff_id: string | null
    fecha_hora: Date | null
    monto_efectivo: Decimal | null
    monto_yape: Decimal | null
    monto_plin: Decimal | null
    monto_transferencia: Decimal | null
    monto_tarjeta: Decimal | null
    monto_declarado: Decimal | null
    monto_sistema: Decimal | null
    diferencia: Decimal | null
    observaciones: string | null
    estado: string | null
  }

  export type Cuadres_cajaCountAggregateOutputType = {
    id: number
    usuario_staff_id: number
    fecha_hora: number
    monto_efectivo: number
    monto_yape: number
    monto_plin: number
    monto_transferencia: number
    monto_tarjeta: number
    monto_declarado: number
    monto_sistema: number
    diferencia: number
    observaciones: number
    estado: number
    _all: number
  }


  export type Cuadres_cajaAvgAggregateInputType = {
    monto_efectivo?: true
    monto_yape?: true
    monto_plin?: true
    monto_transferencia?: true
    monto_tarjeta?: true
    monto_declarado?: true
    monto_sistema?: true
    diferencia?: true
  }

  export type Cuadres_cajaSumAggregateInputType = {
    monto_efectivo?: true
    monto_yape?: true
    monto_plin?: true
    monto_transferencia?: true
    monto_tarjeta?: true
    monto_declarado?: true
    monto_sistema?: true
    diferencia?: true
  }

  export type Cuadres_cajaMinAggregateInputType = {
    id?: true
    usuario_staff_id?: true
    fecha_hora?: true
    monto_efectivo?: true
    monto_yape?: true
    monto_plin?: true
    monto_transferencia?: true
    monto_tarjeta?: true
    monto_declarado?: true
    monto_sistema?: true
    diferencia?: true
    observaciones?: true
    estado?: true
  }

  export type Cuadres_cajaMaxAggregateInputType = {
    id?: true
    usuario_staff_id?: true
    fecha_hora?: true
    monto_efectivo?: true
    monto_yape?: true
    monto_plin?: true
    monto_transferencia?: true
    monto_tarjeta?: true
    monto_declarado?: true
    monto_sistema?: true
    diferencia?: true
    observaciones?: true
    estado?: true
  }

  export type Cuadres_cajaCountAggregateInputType = {
    id?: true
    usuario_staff_id?: true
    fecha_hora?: true
    monto_efectivo?: true
    monto_yape?: true
    monto_plin?: true
    monto_transferencia?: true
    monto_tarjeta?: true
    monto_declarado?: true
    monto_sistema?: true
    diferencia?: true
    observaciones?: true
    estado?: true
    _all?: true
  }

  export type Cuadres_cajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuadres_caja to aggregate.
     */
    where?: cuadres_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuadres_cajas to fetch.
     */
    orderBy?: cuadres_cajaOrderByWithRelationInput | cuadres_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuadres_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuadres_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuadres_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cuadres_cajas
    **/
    _count?: true | Cuadres_cajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cuadres_cajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cuadres_cajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cuadres_cajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cuadres_cajaMaxAggregateInputType
  }

  export type GetCuadres_cajaAggregateType<T extends Cuadres_cajaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuadres_caja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuadres_caja[P]>
      : GetScalarType<T[P], AggregateCuadres_caja[P]>
  }




  export type cuadres_cajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuadres_cajaWhereInput
    orderBy?: cuadres_cajaOrderByWithAggregationInput | cuadres_cajaOrderByWithAggregationInput[]
    by: Cuadres_cajaScalarFieldEnum[] | Cuadres_cajaScalarFieldEnum
    having?: cuadres_cajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cuadres_cajaCountAggregateInputType | true
    _avg?: Cuadres_cajaAvgAggregateInputType
    _sum?: Cuadres_cajaSumAggregateInputType
    _min?: Cuadres_cajaMinAggregateInputType
    _max?: Cuadres_cajaMaxAggregateInputType
  }

  export type Cuadres_cajaGroupByOutputType = {
    id: string
    usuario_staff_id: string
    fecha_hora: Date | null
    monto_efectivo: Decimal | null
    monto_yape: Decimal | null
    monto_plin: Decimal | null
    monto_transferencia: Decimal | null
    monto_tarjeta: Decimal | null
    monto_declarado: Decimal
    monto_sistema: Decimal
    diferencia: Decimal
    observaciones: string | null
    estado: string | null
    _count: Cuadres_cajaCountAggregateOutputType | null
    _avg: Cuadres_cajaAvgAggregateOutputType | null
    _sum: Cuadres_cajaSumAggregateOutputType | null
    _min: Cuadres_cajaMinAggregateOutputType | null
    _max: Cuadres_cajaMaxAggregateOutputType | null
  }

  type GetCuadres_cajaGroupByPayload<T extends cuadres_cajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cuadres_cajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cuadres_cajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cuadres_cajaGroupByOutputType[P]>
            : GetScalarType<T[P], Cuadres_cajaGroupByOutputType[P]>
        }
      >
    >


  export type cuadres_cajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_staff_id?: boolean
    fecha_hora?: boolean
    monto_efectivo?: boolean
    monto_yape?: boolean
    monto_plin?: boolean
    monto_transferencia?: boolean
    monto_tarjeta?: boolean
    monto_declarado?: boolean
    monto_sistema?: boolean
    diferencia?: boolean
    observaciones?: boolean
    estado?: boolean
    perfiles?: boolean | perfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuadres_caja"]>

  export type cuadres_cajaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_staff_id?: boolean
    fecha_hora?: boolean
    monto_efectivo?: boolean
    monto_yape?: boolean
    monto_plin?: boolean
    monto_transferencia?: boolean
    monto_tarjeta?: boolean
    monto_declarado?: boolean
    monto_sistema?: boolean
    diferencia?: boolean
    observaciones?: boolean
    estado?: boolean
    perfiles?: boolean | perfilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuadres_caja"]>

  export type cuadres_cajaSelectScalar = {
    id?: boolean
    usuario_staff_id?: boolean
    fecha_hora?: boolean
    monto_efectivo?: boolean
    monto_yape?: boolean
    monto_plin?: boolean
    monto_transferencia?: boolean
    monto_tarjeta?: boolean
    monto_declarado?: boolean
    monto_sistema?: boolean
    diferencia?: boolean
    observaciones?: boolean
    estado?: boolean
  }

  export type cuadres_cajaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfiles?: boolean | perfilesDefaultArgs<ExtArgs>
  }
  export type cuadres_cajaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfiles?: boolean | perfilesDefaultArgs<ExtArgs>
  }

  export type $cuadres_cajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cuadres_caja"
    objects: {
      perfiles: Prisma.$perfilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_staff_id: string
      fecha_hora: Date | null
      monto_efectivo: Prisma.Decimal | null
      monto_yape: Prisma.Decimal | null
      monto_plin: Prisma.Decimal | null
      monto_transferencia: Prisma.Decimal | null
      monto_tarjeta: Prisma.Decimal | null
      monto_declarado: Prisma.Decimal
      monto_sistema: Prisma.Decimal
      diferencia: Prisma.Decimal
      observaciones: string | null
      estado: string | null
    }, ExtArgs["result"]["cuadres_caja"]>
    composites: {}
  }

  type cuadres_cajaGetPayload<S extends boolean | null | undefined | cuadres_cajaDefaultArgs> = $Result.GetResult<Prisma.$cuadres_cajaPayload, S>

  type cuadres_cajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cuadres_cajaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Cuadres_cajaCountAggregateInputType | true
    }

  export interface cuadres_cajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cuadres_caja'], meta: { name: 'cuadres_caja' } }
    /**
     * Find zero or one Cuadres_caja that matches the filter.
     * @param {cuadres_cajaFindUniqueArgs} args - Arguments to find a Cuadres_caja
     * @example
     * // Get one Cuadres_caja
     * const cuadres_caja = await prisma.cuadres_caja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuadres_cajaFindUniqueArgs>(args: SelectSubset<T, cuadres_cajaFindUniqueArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cuadres_caja that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cuadres_cajaFindUniqueOrThrowArgs} args - Arguments to find a Cuadres_caja
     * @example
     * // Get one Cuadres_caja
     * const cuadres_caja = await prisma.cuadres_caja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuadres_cajaFindUniqueOrThrowArgs>(args: SelectSubset<T, cuadres_cajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cuadres_caja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuadres_cajaFindFirstArgs} args - Arguments to find a Cuadres_caja
     * @example
     * // Get one Cuadres_caja
     * const cuadres_caja = await prisma.cuadres_caja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuadres_cajaFindFirstArgs>(args?: SelectSubset<T, cuadres_cajaFindFirstArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cuadres_caja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuadres_cajaFindFirstOrThrowArgs} args - Arguments to find a Cuadres_caja
     * @example
     * // Get one Cuadres_caja
     * const cuadres_caja = await prisma.cuadres_caja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuadres_cajaFindFirstOrThrowArgs>(args?: SelectSubset<T, cuadres_cajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cuadres_cajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuadres_cajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuadres_cajas
     * const cuadres_cajas = await prisma.cuadres_caja.findMany()
     * 
     * // Get first 10 Cuadres_cajas
     * const cuadres_cajas = await prisma.cuadres_caja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuadres_cajaWithIdOnly = await prisma.cuadres_caja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cuadres_cajaFindManyArgs>(args?: SelectSubset<T, cuadres_cajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cuadres_caja.
     * @param {cuadres_cajaCreateArgs} args - Arguments to create a Cuadres_caja.
     * @example
     * // Create one Cuadres_caja
     * const Cuadres_caja = await prisma.cuadres_caja.create({
     *   data: {
     *     // ... data to create a Cuadres_caja
     *   }
     * })
     * 
     */
    create<T extends cuadres_cajaCreateArgs>(args: SelectSubset<T, cuadres_cajaCreateArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cuadres_cajas.
     * @param {cuadres_cajaCreateManyArgs} args - Arguments to create many Cuadres_cajas.
     * @example
     * // Create many Cuadres_cajas
     * const cuadres_caja = await prisma.cuadres_caja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cuadres_cajaCreateManyArgs>(args?: SelectSubset<T, cuadres_cajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cuadres_cajas and returns the data saved in the database.
     * @param {cuadres_cajaCreateManyAndReturnArgs} args - Arguments to create many Cuadres_cajas.
     * @example
     * // Create many Cuadres_cajas
     * const cuadres_caja = await prisma.cuadres_caja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cuadres_cajas and only return the `id`
     * const cuadres_cajaWithIdOnly = await prisma.cuadres_caja.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cuadres_cajaCreateManyAndReturnArgs>(args?: SelectSubset<T, cuadres_cajaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cuadres_caja.
     * @param {cuadres_cajaDeleteArgs} args - Arguments to delete one Cuadres_caja.
     * @example
     * // Delete one Cuadres_caja
     * const Cuadres_caja = await prisma.cuadres_caja.delete({
     *   where: {
     *     // ... filter to delete one Cuadres_caja
     *   }
     * })
     * 
     */
    delete<T extends cuadres_cajaDeleteArgs>(args: SelectSubset<T, cuadres_cajaDeleteArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cuadres_caja.
     * @param {cuadres_cajaUpdateArgs} args - Arguments to update one Cuadres_caja.
     * @example
     * // Update one Cuadres_caja
     * const cuadres_caja = await prisma.cuadres_caja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cuadres_cajaUpdateArgs>(args: SelectSubset<T, cuadres_cajaUpdateArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cuadres_cajas.
     * @param {cuadres_cajaDeleteManyArgs} args - Arguments to filter Cuadres_cajas to delete.
     * @example
     * // Delete a few Cuadres_cajas
     * const { count } = await prisma.cuadres_caja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cuadres_cajaDeleteManyArgs>(args?: SelectSubset<T, cuadres_cajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuadres_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuadres_cajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuadres_cajas
     * const cuadres_caja = await prisma.cuadres_caja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cuadres_cajaUpdateManyArgs>(args: SelectSubset<T, cuadres_cajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuadres_caja.
     * @param {cuadres_cajaUpsertArgs} args - Arguments to update or create a Cuadres_caja.
     * @example
     * // Update or create a Cuadres_caja
     * const cuadres_caja = await prisma.cuadres_caja.upsert({
     *   create: {
     *     // ... data to create a Cuadres_caja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuadres_caja we want to update
     *   }
     * })
     */
    upsert<T extends cuadres_cajaUpsertArgs>(args: SelectSubset<T, cuadres_cajaUpsertArgs<ExtArgs>>): Prisma__cuadres_cajaClient<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cuadres_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuadres_cajaCountArgs} args - Arguments to filter Cuadres_cajas to count.
     * @example
     * // Count the number of Cuadres_cajas
     * const count = await prisma.cuadres_caja.count({
     *   where: {
     *     // ... the filter for the Cuadres_cajas we want to count
     *   }
     * })
    **/
    count<T extends cuadres_cajaCountArgs>(
      args?: Subset<T, cuadres_cajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cuadres_cajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuadres_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cuadres_cajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cuadres_cajaAggregateArgs>(args: Subset<T, Cuadres_cajaAggregateArgs>): Prisma.PrismaPromise<GetCuadres_cajaAggregateType<T>>

    /**
     * Group by Cuadres_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuadres_cajaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cuadres_cajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuadres_cajaGroupByArgs['orderBy'] }
        : { orderBy?: cuadres_cajaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cuadres_cajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuadres_cajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cuadres_caja model
   */
  readonly fields: cuadres_cajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cuadres_caja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cuadres_cajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfiles<T extends perfilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, perfilesDefaultArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cuadres_caja model
   */ 
  interface cuadres_cajaFieldRefs {
    readonly id: FieldRef<"cuadres_caja", 'String'>
    readonly usuario_staff_id: FieldRef<"cuadres_caja", 'String'>
    readonly fecha_hora: FieldRef<"cuadres_caja", 'DateTime'>
    readonly monto_efectivo: FieldRef<"cuadres_caja", 'Decimal'>
    readonly monto_yape: FieldRef<"cuadres_caja", 'Decimal'>
    readonly monto_plin: FieldRef<"cuadres_caja", 'Decimal'>
    readonly monto_transferencia: FieldRef<"cuadres_caja", 'Decimal'>
    readonly monto_tarjeta: FieldRef<"cuadres_caja", 'Decimal'>
    readonly monto_declarado: FieldRef<"cuadres_caja", 'Decimal'>
    readonly monto_sistema: FieldRef<"cuadres_caja", 'Decimal'>
    readonly diferencia: FieldRef<"cuadres_caja", 'Decimal'>
    readonly observaciones: FieldRef<"cuadres_caja", 'String'>
    readonly estado: FieldRef<"cuadres_caja", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cuadres_caja findUnique
   */
  export type cuadres_cajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * Filter, which cuadres_caja to fetch.
     */
    where: cuadres_cajaWhereUniqueInput
  }

  /**
   * cuadres_caja findUniqueOrThrow
   */
  export type cuadres_cajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * Filter, which cuadres_caja to fetch.
     */
    where: cuadres_cajaWhereUniqueInput
  }

  /**
   * cuadres_caja findFirst
   */
  export type cuadres_cajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * Filter, which cuadres_caja to fetch.
     */
    where?: cuadres_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuadres_cajas to fetch.
     */
    orderBy?: cuadres_cajaOrderByWithRelationInput | cuadres_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuadres_cajas.
     */
    cursor?: cuadres_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuadres_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuadres_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuadres_cajas.
     */
    distinct?: Cuadres_cajaScalarFieldEnum | Cuadres_cajaScalarFieldEnum[]
  }

  /**
   * cuadres_caja findFirstOrThrow
   */
  export type cuadres_cajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * Filter, which cuadres_caja to fetch.
     */
    where?: cuadres_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuadres_cajas to fetch.
     */
    orderBy?: cuadres_cajaOrderByWithRelationInput | cuadres_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuadres_cajas.
     */
    cursor?: cuadres_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuadres_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuadres_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuadres_cajas.
     */
    distinct?: Cuadres_cajaScalarFieldEnum | Cuadres_cajaScalarFieldEnum[]
  }

  /**
   * cuadres_caja findMany
   */
  export type cuadres_cajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * Filter, which cuadres_cajas to fetch.
     */
    where?: cuadres_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuadres_cajas to fetch.
     */
    orderBy?: cuadres_cajaOrderByWithRelationInput | cuadres_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cuadres_cajas.
     */
    cursor?: cuadres_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuadres_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuadres_cajas.
     */
    skip?: number
    distinct?: Cuadres_cajaScalarFieldEnum | Cuadres_cajaScalarFieldEnum[]
  }

  /**
   * cuadres_caja create
   */
  export type cuadres_cajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * The data needed to create a cuadres_caja.
     */
    data: XOR<cuadres_cajaCreateInput, cuadres_cajaUncheckedCreateInput>
  }

  /**
   * cuadres_caja createMany
   */
  export type cuadres_cajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuadres_cajas.
     */
    data: cuadres_cajaCreateManyInput | cuadres_cajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cuadres_caja createManyAndReturn
   */
  export type cuadres_cajaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many cuadres_cajas.
     */
    data: cuadres_cajaCreateManyInput | cuadres_cajaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cuadres_caja update
   */
  export type cuadres_cajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * The data needed to update a cuadres_caja.
     */
    data: XOR<cuadres_cajaUpdateInput, cuadres_cajaUncheckedUpdateInput>
    /**
     * Choose, which cuadres_caja to update.
     */
    where: cuadres_cajaWhereUniqueInput
  }

  /**
   * cuadres_caja updateMany
   */
  export type cuadres_cajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cuadres_cajas.
     */
    data: XOR<cuadres_cajaUpdateManyMutationInput, cuadres_cajaUncheckedUpdateManyInput>
    /**
     * Filter which cuadres_cajas to update
     */
    where?: cuadres_cajaWhereInput
  }

  /**
   * cuadres_caja upsert
   */
  export type cuadres_cajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * The filter to search for the cuadres_caja to update in case it exists.
     */
    where: cuadres_cajaWhereUniqueInput
    /**
     * In case the cuadres_caja found by the `where` argument doesn't exist, create a new cuadres_caja with this data.
     */
    create: XOR<cuadres_cajaCreateInput, cuadres_cajaUncheckedCreateInput>
    /**
     * In case the cuadres_caja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuadres_cajaUpdateInput, cuadres_cajaUncheckedUpdateInput>
  }

  /**
   * cuadres_caja delete
   */
  export type cuadres_cajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    /**
     * Filter which cuadres_caja to delete.
     */
    where: cuadres_cajaWhereUniqueInput
  }

  /**
   * cuadres_caja deleteMany
   */
  export type cuadres_cajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuadres_cajas to delete
     */
    where?: cuadres_cajaWhereInput
  }

  /**
   * cuadres_caja without action
   */
  export type cuadres_cajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
  }


  /**
   * Model detalle_ventas
   */

  export type AggregateDetalle_ventas = {
    _count: Detalle_ventasCountAggregateOutputType | null
    _avg: Detalle_ventasAvgAggregateOutputType | null
    _sum: Detalle_ventasSumAggregateOutputType | null
    _min: Detalle_ventasMinAggregateOutputType | null
    _max: Detalle_ventasMaxAggregateOutputType | null
  }

  export type Detalle_ventasAvgAggregateOutputType = {
    cantidad: number | null
    costo_inversion_unitario: Decimal | null
    precio_venta_unitario: Decimal | null
    subtotal: Decimal | null
    utilidad_subtotal: Decimal | null
  }

  export type Detalle_ventasSumAggregateOutputType = {
    cantidad: number | null
    costo_inversion_unitario: Decimal | null
    precio_venta_unitario: Decimal | null
    subtotal: Decimal | null
    utilidad_subtotal: Decimal | null
  }

  export type Detalle_ventasMinAggregateOutputType = {
    id: string | null
    venta_id: string | null
    producto_id: string | null
    talla: string | null
    cantidad: number | null
    costo_inversion_unitario: Decimal | null
    precio_venta_unitario: Decimal | null
    subtotal: Decimal | null
    utilidad_subtotal: Decimal | null
  }

  export type Detalle_ventasMaxAggregateOutputType = {
    id: string | null
    venta_id: string | null
    producto_id: string | null
    talla: string | null
    cantidad: number | null
    costo_inversion_unitario: Decimal | null
    precio_venta_unitario: Decimal | null
    subtotal: Decimal | null
    utilidad_subtotal: Decimal | null
  }

  export type Detalle_ventasCountAggregateOutputType = {
    id: number
    venta_id: number
    producto_id: number
    talla: number
    cantidad: number
    costo_inversion_unitario: number
    precio_venta_unitario: number
    subtotal: number
    utilidad_subtotal: number
    _all: number
  }


  export type Detalle_ventasAvgAggregateInputType = {
    cantidad?: true
    costo_inversion_unitario?: true
    precio_venta_unitario?: true
    subtotal?: true
    utilidad_subtotal?: true
  }

  export type Detalle_ventasSumAggregateInputType = {
    cantidad?: true
    costo_inversion_unitario?: true
    precio_venta_unitario?: true
    subtotal?: true
    utilidad_subtotal?: true
  }

  export type Detalle_ventasMinAggregateInputType = {
    id?: true
    venta_id?: true
    producto_id?: true
    talla?: true
    cantidad?: true
    costo_inversion_unitario?: true
    precio_venta_unitario?: true
    subtotal?: true
    utilidad_subtotal?: true
  }

  export type Detalle_ventasMaxAggregateInputType = {
    id?: true
    venta_id?: true
    producto_id?: true
    talla?: true
    cantidad?: true
    costo_inversion_unitario?: true
    precio_venta_unitario?: true
    subtotal?: true
    utilidad_subtotal?: true
  }

  export type Detalle_ventasCountAggregateInputType = {
    id?: true
    venta_id?: true
    producto_id?: true
    talla?: true
    cantidad?: true
    costo_inversion_unitario?: true
    precio_venta_unitario?: true
    subtotal?: true
    utilidad_subtotal?: true
    _all?: true
  }

  export type Detalle_ventasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_ventas to aggregate.
     */
    where?: detalle_ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventasOrderByWithRelationInput | detalle_ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_ventas
    **/
    _count?: true | Detalle_ventasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_ventasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_ventasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_ventasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_ventasMaxAggregateInputType
  }

  export type GetDetalle_ventasAggregateType<T extends Detalle_ventasAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_ventas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_ventas[P]>
      : GetScalarType<T[P], AggregateDetalle_ventas[P]>
  }




  export type detalle_ventasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_ventasWhereInput
    orderBy?: detalle_ventasOrderByWithAggregationInput | detalle_ventasOrderByWithAggregationInput[]
    by: Detalle_ventasScalarFieldEnum[] | Detalle_ventasScalarFieldEnum
    having?: detalle_ventasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_ventasCountAggregateInputType | true
    _avg?: Detalle_ventasAvgAggregateInputType
    _sum?: Detalle_ventasSumAggregateInputType
    _min?: Detalle_ventasMinAggregateInputType
    _max?: Detalle_ventasMaxAggregateInputType
  }

  export type Detalle_ventasGroupByOutputType = {
    id: string
    venta_id: string
    producto_id: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal
    precio_venta_unitario: Decimal
    subtotal: Decimal
    utilidad_subtotal: Decimal | null
    _count: Detalle_ventasCountAggregateOutputType | null
    _avg: Detalle_ventasAvgAggregateOutputType | null
    _sum: Detalle_ventasSumAggregateOutputType | null
    _min: Detalle_ventasMinAggregateOutputType | null
    _max: Detalle_ventasMaxAggregateOutputType | null
  }

  type GetDetalle_ventasGroupByPayload<T extends detalle_ventasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_ventasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_ventasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_ventasGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_ventasGroupByOutputType[P]>
        }
      >
    >


  export type detalle_ventasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    producto_id?: boolean
    talla?: boolean
    cantidad?: boolean
    costo_inversion_unitario?: boolean
    precio_venta_unitario?: boolean
    subtotal?: boolean
    utilidad_subtotal?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    ventas?: boolean | ventasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_ventas"]>

  export type detalle_ventasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venta_id?: boolean
    producto_id?: boolean
    talla?: boolean
    cantidad?: boolean
    costo_inversion_unitario?: boolean
    precio_venta_unitario?: boolean
    subtotal?: boolean
    utilidad_subtotal?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    ventas?: boolean | ventasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_ventas"]>

  export type detalle_ventasSelectScalar = {
    id?: boolean
    venta_id?: boolean
    producto_id?: boolean
    talla?: boolean
    cantidad?: boolean
    costo_inversion_unitario?: boolean
    precio_venta_unitario?: boolean
    subtotal?: boolean
    utilidad_subtotal?: boolean
  }

  export type detalle_ventasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    ventas?: boolean | ventasDefaultArgs<ExtArgs>
  }
  export type detalle_ventasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    ventas?: boolean | ventasDefaultArgs<ExtArgs>
  }

  export type $detalle_ventasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_ventas"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>
      ventas: Prisma.$ventasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venta_id: string
      producto_id: string
      talla: string
      cantidad: number
      costo_inversion_unitario: Prisma.Decimal
      precio_venta_unitario: Prisma.Decimal
      subtotal: Prisma.Decimal
      utilidad_subtotal: Prisma.Decimal | null
    }, ExtArgs["result"]["detalle_ventas"]>
    composites: {}
  }

  type detalle_ventasGetPayload<S extends boolean | null | undefined | detalle_ventasDefaultArgs> = $Result.GetResult<Prisma.$detalle_ventasPayload, S>

  type detalle_ventasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<detalle_ventasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Detalle_ventasCountAggregateInputType | true
    }

  export interface detalle_ventasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_ventas'], meta: { name: 'detalle_ventas' } }
    /**
     * Find zero or one Detalle_ventas that matches the filter.
     * @param {detalle_ventasFindUniqueArgs} args - Arguments to find a Detalle_ventas
     * @example
     * // Get one Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_ventasFindUniqueArgs>(args: SelectSubset<T, detalle_ventasFindUniqueArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Detalle_ventas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {detalle_ventasFindUniqueOrThrowArgs} args - Arguments to find a Detalle_ventas
     * @example
     * // Get one Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_ventasFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_ventasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Detalle_ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventasFindFirstArgs} args - Arguments to find a Detalle_ventas
     * @example
     * // Get one Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_ventasFindFirstArgs>(args?: SelectSubset<T, detalle_ventasFindFirstArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Detalle_ventas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventasFindFirstOrThrowArgs} args - Arguments to find a Detalle_ventas
     * @example
     * // Get one Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_ventasFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_ventasFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Detalle_ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.findMany()
     * 
     * // Get first 10 Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalle_ventasWithIdOnly = await prisma.detalle_ventas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detalle_ventasFindManyArgs>(args?: SelectSubset<T, detalle_ventasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Detalle_ventas.
     * @param {detalle_ventasCreateArgs} args - Arguments to create a Detalle_ventas.
     * @example
     * // Create one Detalle_ventas
     * const Detalle_ventas = await prisma.detalle_ventas.create({
     *   data: {
     *     // ... data to create a Detalle_ventas
     *   }
     * })
     * 
     */
    create<T extends detalle_ventasCreateArgs>(args: SelectSubset<T, detalle_ventasCreateArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Detalle_ventas.
     * @param {detalle_ventasCreateManyArgs} args - Arguments to create many Detalle_ventas.
     * @example
     * // Create many Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_ventasCreateManyArgs>(args?: SelectSubset<T, detalle_ventasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalle_ventas and returns the data saved in the database.
     * @param {detalle_ventasCreateManyAndReturnArgs} args - Arguments to create many Detalle_ventas.
     * @example
     * // Create many Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalle_ventas and only return the `id`
     * const detalle_ventasWithIdOnly = await prisma.detalle_ventas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detalle_ventasCreateManyAndReturnArgs>(args?: SelectSubset<T, detalle_ventasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Detalle_ventas.
     * @param {detalle_ventasDeleteArgs} args - Arguments to delete one Detalle_ventas.
     * @example
     * // Delete one Detalle_ventas
     * const Detalle_ventas = await prisma.detalle_ventas.delete({
     *   where: {
     *     // ... filter to delete one Detalle_ventas
     *   }
     * })
     * 
     */
    delete<T extends detalle_ventasDeleteArgs>(args: SelectSubset<T, detalle_ventasDeleteArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Detalle_ventas.
     * @param {detalle_ventasUpdateArgs} args - Arguments to update one Detalle_ventas.
     * @example
     * // Update one Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_ventasUpdateArgs>(args: SelectSubset<T, detalle_ventasUpdateArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Detalle_ventas.
     * @param {detalle_ventasDeleteManyArgs} args - Arguments to filter Detalle_ventas to delete.
     * @example
     * // Delete a few Detalle_ventas
     * const { count } = await prisma.detalle_ventas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_ventasDeleteManyArgs>(args?: SelectSubset<T, detalle_ventasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_ventasUpdateManyArgs>(args: SelectSubset<T, detalle_ventasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detalle_ventas.
     * @param {detalle_ventasUpsertArgs} args - Arguments to update or create a Detalle_ventas.
     * @example
     * // Update or create a Detalle_ventas
     * const detalle_ventas = await prisma.detalle_ventas.upsert({
     *   create: {
     *     // ... data to create a Detalle_ventas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_ventas we want to update
     *   }
     * })
     */
    upsert<T extends detalle_ventasUpsertArgs>(args: SelectSubset<T, detalle_ventasUpsertArgs<ExtArgs>>): Prisma__detalle_ventasClient<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Detalle_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventasCountArgs} args - Arguments to filter Detalle_ventas to count.
     * @example
     * // Count the number of Detalle_ventas
     * const count = await prisma.detalle_ventas.count({
     *   where: {
     *     // ... the filter for the Detalle_ventas we want to count
     *   }
     * })
    **/
    count<T extends detalle_ventasCountArgs>(
      args?: Subset<T, detalle_ventasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_ventasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_ventasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_ventasAggregateArgs>(args: Subset<T, Detalle_ventasAggregateArgs>): Prisma.PrismaPromise<GetDetalle_ventasAggregateType<T>>

    /**
     * Group by Detalle_ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_ventasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalle_ventasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_ventasGroupByArgs['orderBy'] }
        : { orderBy?: detalle_ventasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalle_ventasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_ventasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_ventas model
   */
  readonly fields: detalle_ventasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_ventas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_ventasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ventas<T extends ventasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ventasDefaultArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalle_ventas model
   */ 
  interface detalle_ventasFieldRefs {
    readonly id: FieldRef<"detalle_ventas", 'String'>
    readonly venta_id: FieldRef<"detalle_ventas", 'String'>
    readonly producto_id: FieldRef<"detalle_ventas", 'String'>
    readonly talla: FieldRef<"detalle_ventas", 'String'>
    readonly cantidad: FieldRef<"detalle_ventas", 'Int'>
    readonly costo_inversion_unitario: FieldRef<"detalle_ventas", 'Decimal'>
    readonly precio_venta_unitario: FieldRef<"detalle_ventas", 'Decimal'>
    readonly subtotal: FieldRef<"detalle_ventas", 'Decimal'>
    readonly utilidad_subtotal: FieldRef<"detalle_ventas", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * detalle_ventas findUnique
   */
  export type detalle_ventasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ventas to fetch.
     */
    where: detalle_ventasWhereUniqueInput
  }

  /**
   * detalle_ventas findUniqueOrThrow
   */
  export type detalle_ventasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ventas to fetch.
     */
    where: detalle_ventasWhereUniqueInput
  }

  /**
   * detalle_ventas findFirst
   */
  export type detalle_ventasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ventas to fetch.
     */
    where?: detalle_ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventasOrderByWithRelationInput | detalle_ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_ventas.
     */
    cursor?: detalle_ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_ventas.
     */
    distinct?: Detalle_ventasScalarFieldEnum | Detalle_ventasScalarFieldEnum[]
  }

  /**
   * detalle_ventas findFirstOrThrow
   */
  export type detalle_ventasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ventas to fetch.
     */
    where?: detalle_ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventasOrderByWithRelationInput | detalle_ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_ventas.
     */
    cursor?: detalle_ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_ventas.
     */
    distinct?: Detalle_ventasScalarFieldEnum | Detalle_ventasScalarFieldEnum[]
  }

  /**
   * detalle_ventas findMany
   */
  export type detalle_ventasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * Filter, which detalle_ventas to fetch.
     */
    where?: detalle_ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_ventas to fetch.
     */
    orderBy?: detalle_ventasOrderByWithRelationInput | detalle_ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_ventas.
     */
    cursor?: detalle_ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_ventas.
     */
    skip?: number
    distinct?: Detalle_ventasScalarFieldEnum | Detalle_ventasScalarFieldEnum[]
  }

  /**
   * detalle_ventas create
   */
  export type detalle_ventasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * The data needed to create a detalle_ventas.
     */
    data: XOR<detalle_ventasCreateInput, detalle_ventasUncheckedCreateInput>
  }

  /**
   * detalle_ventas createMany
   */
  export type detalle_ventasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_ventas.
     */
    data: detalle_ventasCreateManyInput | detalle_ventasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_ventas createManyAndReturn
   */
  export type detalle_ventasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many detalle_ventas.
     */
    data: detalle_ventasCreateManyInput | detalle_ventasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalle_ventas update
   */
  export type detalle_ventasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * The data needed to update a detalle_ventas.
     */
    data: XOR<detalle_ventasUpdateInput, detalle_ventasUncheckedUpdateInput>
    /**
     * Choose, which detalle_ventas to update.
     */
    where: detalle_ventasWhereUniqueInput
  }

  /**
   * detalle_ventas updateMany
   */
  export type detalle_ventasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_ventas.
     */
    data: XOR<detalle_ventasUpdateManyMutationInput, detalle_ventasUncheckedUpdateManyInput>
    /**
     * Filter which detalle_ventas to update
     */
    where?: detalle_ventasWhereInput
  }

  /**
   * detalle_ventas upsert
   */
  export type detalle_ventasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * The filter to search for the detalle_ventas to update in case it exists.
     */
    where: detalle_ventasWhereUniqueInput
    /**
     * In case the detalle_ventas found by the `where` argument doesn't exist, create a new detalle_ventas with this data.
     */
    create: XOR<detalle_ventasCreateInput, detalle_ventasUncheckedCreateInput>
    /**
     * In case the detalle_ventas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_ventasUpdateInput, detalle_ventasUncheckedUpdateInput>
  }

  /**
   * detalle_ventas delete
   */
  export type detalle_ventasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    /**
     * Filter which detalle_ventas to delete.
     */
    where: detalle_ventasWhereUniqueInput
  }

  /**
   * detalle_ventas deleteMany
   */
  export type detalle_ventasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_ventas to delete
     */
    where?: detalle_ventasWhereInput
  }

  /**
   * detalle_ventas without action
   */
  export type detalle_ventasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
  }


  /**
   * Model gastos_operativos
   */

  export type AggregateGastos_operativos = {
    _count: Gastos_operativosCountAggregateOutputType | null
    _avg: Gastos_operativosAvgAggregateOutputType | null
    _sum: Gastos_operativosSumAggregateOutputType | null
    _min: Gastos_operativosMinAggregateOutputType | null
    _max: Gastos_operativosMaxAggregateOutputType | null
  }

  export type Gastos_operativosAvgAggregateOutputType = {
    monto: Decimal | null
  }

  export type Gastos_operativosSumAggregateOutputType = {
    monto: Decimal | null
  }

  export type Gastos_operativosMinAggregateOutputType = {
    id: string | null
    concepto: string | null
    monto: Decimal | null
    categoria: string | null
    fecha_hora: Date | null
    usuario_id: string | null
  }

  export type Gastos_operativosMaxAggregateOutputType = {
    id: string | null
    concepto: string | null
    monto: Decimal | null
    categoria: string | null
    fecha_hora: Date | null
    usuario_id: string | null
  }

  export type Gastos_operativosCountAggregateOutputType = {
    id: number
    concepto: number
    monto: number
    categoria: number
    fecha_hora: number
    usuario_id: number
    _all: number
  }


  export type Gastos_operativosAvgAggregateInputType = {
    monto?: true
  }

  export type Gastos_operativosSumAggregateInputType = {
    monto?: true
  }

  export type Gastos_operativosMinAggregateInputType = {
    id?: true
    concepto?: true
    monto?: true
    categoria?: true
    fecha_hora?: true
    usuario_id?: true
  }

  export type Gastos_operativosMaxAggregateInputType = {
    id?: true
    concepto?: true
    monto?: true
    categoria?: true
    fecha_hora?: true
    usuario_id?: true
  }

  export type Gastos_operativosCountAggregateInputType = {
    id?: true
    concepto?: true
    monto?: true
    categoria?: true
    fecha_hora?: true
    usuario_id?: true
    _all?: true
  }

  export type Gastos_operativosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gastos_operativos to aggregate.
     */
    where?: gastos_operativosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos_operativos to fetch.
     */
    orderBy?: gastos_operativosOrderByWithRelationInput | gastos_operativosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gastos_operativosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos_operativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos_operativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gastos_operativos
    **/
    _count?: true | Gastos_operativosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gastos_operativosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gastos_operativosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gastos_operativosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gastos_operativosMaxAggregateInputType
  }

  export type GetGastos_operativosAggregateType<T extends Gastos_operativosAggregateArgs> = {
        [P in keyof T & keyof AggregateGastos_operativos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGastos_operativos[P]>
      : GetScalarType<T[P], AggregateGastos_operativos[P]>
  }




  export type gastos_operativosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gastos_operativosWhereInput
    orderBy?: gastos_operativosOrderByWithAggregationInput | gastos_operativosOrderByWithAggregationInput[]
    by: Gastos_operativosScalarFieldEnum[] | Gastos_operativosScalarFieldEnum
    having?: gastos_operativosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gastos_operativosCountAggregateInputType | true
    _avg?: Gastos_operativosAvgAggregateInputType
    _sum?: Gastos_operativosSumAggregateInputType
    _min?: Gastos_operativosMinAggregateInputType
    _max?: Gastos_operativosMaxAggregateInputType
  }

  export type Gastos_operativosGroupByOutputType = {
    id: string
    concepto: string
    monto: Decimal
    categoria: string | null
    fecha_hora: Date | null
    usuario_id: string | null
    _count: Gastos_operativosCountAggregateOutputType | null
    _avg: Gastos_operativosAvgAggregateOutputType | null
    _sum: Gastos_operativosSumAggregateOutputType | null
    _min: Gastos_operativosMinAggregateOutputType | null
    _max: Gastos_operativosMaxAggregateOutputType | null
  }

  type GetGastos_operativosGroupByPayload<T extends gastos_operativosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gastos_operativosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gastos_operativosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gastos_operativosGroupByOutputType[P]>
            : GetScalarType<T[P], Gastos_operativosGroupByOutputType[P]>
        }
      >
    >


  export type gastos_operativosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    concepto?: boolean
    monto?: boolean
    categoria?: boolean
    fecha_hora?: boolean
    usuario_id?: boolean
    perfiles?: boolean | gastos_operativos$perfilesArgs<ExtArgs>
  }, ExtArgs["result"]["gastos_operativos"]>

  export type gastos_operativosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    concepto?: boolean
    monto?: boolean
    categoria?: boolean
    fecha_hora?: boolean
    usuario_id?: boolean
    perfiles?: boolean | gastos_operativos$perfilesArgs<ExtArgs>
  }, ExtArgs["result"]["gastos_operativos"]>

  export type gastos_operativosSelectScalar = {
    id?: boolean
    concepto?: boolean
    monto?: boolean
    categoria?: boolean
    fecha_hora?: boolean
    usuario_id?: boolean
  }

  export type gastos_operativosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfiles?: boolean | gastos_operativos$perfilesArgs<ExtArgs>
  }
  export type gastos_operativosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfiles?: boolean | gastos_operativos$perfilesArgs<ExtArgs>
  }

  export type $gastos_operativosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gastos_operativos"
    objects: {
      perfiles: Prisma.$perfilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      concepto: string
      monto: Prisma.Decimal
      categoria: string | null
      fecha_hora: Date | null
      usuario_id: string | null
    }, ExtArgs["result"]["gastos_operativos"]>
    composites: {}
  }

  type gastos_operativosGetPayload<S extends boolean | null | undefined | gastos_operativosDefaultArgs> = $Result.GetResult<Prisma.$gastos_operativosPayload, S>

  type gastos_operativosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gastos_operativosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Gastos_operativosCountAggregateInputType | true
    }

  export interface gastos_operativosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gastos_operativos'], meta: { name: 'gastos_operativos' } }
    /**
     * Find zero or one Gastos_operativos that matches the filter.
     * @param {gastos_operativosFindUniqueArgs} args - Arguments to find a Gastos_operativos
     * @example
     * // Get one Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gastos_operativosFindUniqueArgs>(args: SelectSubset<T, gastos_operativosFindUniqueArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gastos_operativos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gastos_operativosFindUniqueOrThrowArgs} args - Arguments to find a Gastos_operativos
     * @example
     * // Get one Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gastos_operativosFindUniqueOrThrowArgs>(args: SelectSubset<T, gastos_operativosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gastos_operativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastos_operativosFindFirstArgs} args - Arguments to find a Gastos_operativos
     * @example
     * // Get one Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gastos_operativosFindFirstArgs>(args?: SelectSubset<T, gastos_operativosFindFirstArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gastos_operativos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastos_operativosFindFirstOrThrowArgs} args - Arguments to find a Gastos_operativos
     * @example
     * // Get one Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gastos_operativosFindFirstOrThrowArgs>(args?: SelectSubset<T, gastos_operativosFindFirstOrThrowArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gastos_operativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastos_operativosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.findMany()
     * 
     * // Get first 10 Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastos_operativosWithIdOnly = await prisma.gastos_operativos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gastos_operativosFindManyArgs>(args?: SelectSubset<T, gastos_operativosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gastos_operativos.
     * @param {gastos_operativosCreateArgs} args - Arguments to create a Gastos_operativos.
     * @example
     * // Create one Gastos_operativos
     * const Gastos_operativos = await prisma.gastos_operativos.create({
     *   data: {
     *     // ... data to create a Gastos_operativos
     *   }
     * })
     * 
     */
    create<T extends gastos_operativosCreateArgs>(args: SelectSubset<T, gastos_operativosCreateArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gastos_operativos.
     * @param {gastos_operativosCreateManyArgs} args - Arguments to create many Gastos_operativos.
     * @example
     * // Create many Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gastos_operativosCreateManyArgs>(args?: SelectSubset<T, gastos_operativosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gastos_operativos and returns the data saved in the database.
     * @param {gastos_operativosCreateManyAndReturnArgs} args - Arguments to create many Gastos_operativos.
     * @example
     * // Create many Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gastos_operativos and only return the `id`
     * const gastos_operativosWithIdOnly = await prisma.gastos_operativos.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gastos_operativosCreateManyAndReturnArgs>(args?: SelectSubset<T, gastos_operativosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gastos_operativos.
     * @param {gastos_operativosDeleteArgs} args - Arguments to delete one Gastos_operativos.
     * @example
     * // Delete one Gastos_operativos
     * const Gastos_operativos = await prisma.gastos_operativos.delete({
     *   where: {
     *     // ... filter to delete one Gastos_operativos
     *   }
     * })
     * 
     */
    delete<T extends gastos_operativosDeleteArgs>(args: SelectSubset<T, gastos_operativosDeleteArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gastos_operativos.
     * @param {gastos_operativosUpdateArgs} args - Arguments to update one Gastos_operativos.
     * @example
     * // Update one Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gastos_operativosUpdateArgs>(args: SelectSubset<T, gastos_operativosUpdateArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gastos_operativos.
     * @param {gastos_operativosDeleteManyArgs} args - Arguments to filter Gastos_operativos to delete.
     * @example
     * // Delete a few Gastos_operativos
     * const { count } = await prisma.gastos_operativos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gastos_operativosDeleteManyArgs>(args?: SelectSubset<T, gastos_operativosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos_operativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastos_operativosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gastos_operativosUpdateManyArgs>(args: SelectSubset<T, gastos_operativosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gastos_operativos.
     * @param {gastos_operativosUpsertArgs} args - Arguments to update or create a Gastos_operativos.
     * @example
     * // Update or create a Gastos_operativos
     * const gastos_operativos = await prisma.gastos_operativos.upsert({
     *   create: {
     *     // ... data to create a Gastos_operativos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gastos_operativos we want to update
     *   }
     * })
     */
    upsert<T extends gastos_operativosUpsertArgs>(args: SelectSubset<T, gastos_operativosUpsertArgs<ExtArgs>>): Prisma__gastos_operativosClient<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gastos_operativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastos_operativosCountArgs} args - Arguments to filter Gastos_operativos to count.
     * @example
     * // Count the number of Gastos_operativos
     * const count = await prisma.gastos_operativos.count({
     *   where: {
     *     // ... the filter for the Gastos_operativos we want to count
     *   }
     * })
    **/
    count<T extends gastos_operativosCountArgs>(
      args?: Subset<T, gastos_operativosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gastos_operativosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gastos_operativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gastos_operativosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gastos_operativosAggregateArgs>(args: Subset<T, Gastos_operativosAggregateArgs>): Prisma.PrismaPromise<GetGastos_operativosAggregateType<T>>

    /**
     * Group by Gastos_operativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastos_operativosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gastos_operativosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gastos_operativosGroupByArgs['orderBy'] }
        : { orderBy?: gastos_operativosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gastos_operativosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastos_operativosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gastos_operativos model
   */
  readonly fields: gastos_operativosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gastos_operativos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gastos_operativosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfiles<T extends gastos_operativos$perfilesArgs<ExtArgs> = {}>(args?: Subset<T, gastos_operativos$perfilesArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gastos_operativos model
   */ 
  interface gastos_operativosFieldRefs {
    readonly id: FieldRef<"gastos_operativos", 'String'>
    readonly concepto: FieldRef<"gastos_operativos", 'String'>
    readonly monto: FieldRef<"gastos_operativos", 'Decimal'>
    readonly categoria: FieldRef<"gastos_operativos", 'String'>
    readonly fecha_hora: FieldRef<"gastos_operativos", 'DateTime'>
    readonly usuario_id: FieldRef<"gastos_operativos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gastos_operativos findUnique
   */
  export type gastos_operativosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * Filter, which gastos_operativos to fetch.
     */
    where: gastos_operativosWhereUniqueInput
  }

  /**
   * gastos_operativos findUniqueOrThrow
   */
  export type gastos_operativosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * Filter, which gastos_operativos to fetch.
     */
    where: gastos_operativosWhereUniqueInput
  }

  /**
   * gastos_operativos findFirst
   */
  export type gastos_operativosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * Filter, which gastos_operativos to fetch.
     */
    where?: gastos_operativosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos_operativos to fetch.
     */
    orderBy?: gastos_operativosOrderByWithRelationInput | gastos_operativosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastos_operativos.
     */
    cursor?: gastos_operativosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos_operativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos_operativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastos_operativos.
     */
    distinct?: Gastos_operativosScalarFieldEnum | Gastos_operativosScalarFieldEnum[]
  }

  /**
   * gastos_operativos findFirstOrThrow
   */
  export type gastos_operativosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * Filter, which gastos_operativos to fetch.
     */
    where?: gastos_operativosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos_operativos to fetch.
     */
    orderBy?: gastos_operativosOrderByWithRelationInput | gastos_operativosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastos_operativos.
     */
    cursor?: gastos_operativosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos_operativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos_operativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastos_operativos.
     */
    distinct?: Gastos_operativosScalarFieldEnum | Gastos_operativosScalarFieldEnum[]
  }

  /**
   * gastos_operativos findMany
   */
  export type gastos_operativosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * Filter, which gastos_operativos to fetch.
     */
    where?: gastos_operativosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos_operativos to fetch.
     */
    orderBy?: gastos_operativosOrderByWithRelationInput | gastos_operativosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gastos_operativos.
     */
    cursor?: gastos_operativosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos_operativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos_operativos.
     */
    skip?: number
    distinct?: Gastos_operativosScalarFieldEnum | Gastos_operativosScalarFieldEnum[]
  }

  /**
   * gastos_operativos create
   */
  export type gastos_operativosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * The data needed to create a gastos_operativos.
     */
    data: XOR<gastos_operativosCreateInput, gastos_operativosUncheckedCreateInput>
  }

  /**
   * gastos_operativos createMany
   */
  export type gastos_operativosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gastos_operativos.
     */
    data: gastos_operativosCreateManyInput | gastos_operativosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gastos_operativos createManyAndReturn
   */
  export type gastos_operativosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gastos_operativos.
     */
    data: gastos_operativosCreateManyInput | gastos_operativosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * gastos_operativos update
   */
  export type gastos_operativosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * The data needed to update a gastos_operativos.
     */
    data: XOR<gastos_operativosUpdateInput, gastos_operativosUncheckedUpdateInput>
    /**
     * Choose, which gastos_operativos to update.
     */
    where: gastos_operativosWhereUniqueInput
  }

  /**
   * gastos_operativos updateMany
   */
  export type gastos_operativosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gastos_operativos.
     */
    data: XOR<gastos_operativosUpdateManyMutationInput, gastos_operativosUncheckedUpdateManyInput>
    /**
     * Filter which gastos_operativos to update
     */
    where?: gastos_operativosWhereInput
  }

  /**
   * gastos_operativos upsert
   */
  export type gastos_operativosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * The filter to search for the gastos_operativos to update in case it exists.
     */
    where: gastos_operativosWhereUniqueInput
    /**
     * In case the gastos_operativos found by the `where` argument doesn't exist, create a new gastos_operativos with this data.
     */
    create: XOR<gastos_operativosCreateInput, gastos_operativosUncheckedCreateInput>
    /**
     * In case the gastos_operativos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gastos_operativosUpdateInput, gastos_operativosUncheckedUpdateInput>
  }

  /**
   * gastos_operativos delete
   */
  export type gastos_operativosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    /**
     * Filter which gastos_operativos to delete.
     */
    where: gastos_operativosWhereUniqueInput
  }

  /**
   * gastos_operativos deleteMany
   */
  export type gastos_operativosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gastos_operativos to delete
     */
    where?: gastos_operativosWhereInput
  }

  /**
   * gastos_operativos.perfiles
   */
  export type gastos_operativos$perfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    where?: perfilesWhereInput
  }

  /**
   * gastos_operativos without action
   */
  export type gastos_operativosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
  }


  /**
   * Model inventario_tallas
   */

  export type AggregateInventario_tallas = {
    _count: Inventario_tallasCountAggregateOutputType | null
    _avg: Inventario_tallasAvgAggregateOutputType | null
    _sum: Inventario_tallasSumAggregateOutputType | null
    _min: Inventario_tallasMinAggregateOutputType | null
    _max: Inventario_tallasMaxAggregateOutputType | null
  }

  export type Inventario_tallasAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type Inventario_tallasSumAggregateOutputType = {
    cantidad: number | null
  }

  export type Inventario_tallasMinAggregateOutputType = {
    id: string | null
    producto_id: string | null
    talla: string | null
    cantidad: number | null
  }

  export type Inventario_tallasMaxAggregateOutputType = {
    id: string | null
    producto_id: string | null
    talla: string | null
    cantidad: number | null
  }

  export type Inventario_tallasCountAggregateOutputType = {
    id: number
    producto_id: number
    talla: number
    cantidad: number
    _all: number
  }


  export type Inventario_tallasAvgAggregateInputType = {
    cantidad?: true
  }

  export type Inventario_tallasSumAggregateInputType = {
    cantidad?: true
  }

  export type Inventario_tallasMinAggregateInputType = {
    id?: true
    producto_id?: true
    talla?: true
    cantidad?: true
  }

  export type Inventario_tallasMaxAggregateInputType = {
    id?: true
    producto_id?: true
    talla?: true
    cantidad?: true
  }

  export type Inventario_tallasCountAggregateInputType = {
    id?: true
    producto_id?: true
    talla?: true
    cantidad?: true
    _all?: true
  }

  export type Inventario_tallasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventario_tallas to aggregate.
     */
    where?: inventario_tallasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_tallas to fetch.
     */
    orderBy?: inventario_tallasOrderByWithRelationInput | inventario_tallasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventario_tallasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_tallas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_tallas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventario_tallas
    **/
    _count?: true | Inventario_tallasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inventario_tallasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inventario_tallasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventario_tallasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventario_tallasMaxAggregateInputType
  }

  export type GetInventario_tallasAggregateType<T extends Inventario_tallasAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario_tallas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario_tallas[P]>
      : GetScalarType<T[P], AggregateInventario_tallas[P]>
  }




  export type inventario_tallasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventario_tallasWhereInput
    orderBy?: inventario_tallasOrderByWithAggregationInput | inventario_tallasOrderByWithAggregationInput[]
    by: Inventario_tallasScalarFieldEnum[] | Inventario_tallasScalarFieldEnum
    having?: inventario_tallasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventario_tallasCountAggregateInputType | true
    _avg?: Inventario_tallasAvgAggregateInputType
    _sum?: Inventario_tallasSumAggregateInputType
    _min?: Inventario_tallasMinAggregateInputType
    _max?: Inventario_tallasMaxAggregateInputType
  }

  export type Inventario_tallasGroupByOutputType = {
    id: string
    producto_id: string
    talla: string
    cantidad: number
    _count: Inventario_tallasCountAggregateOutputType | null
    _avg: Inventario_tallasAvgAggregateOutputType | null
    _sum: Inventario_tallasSumAggregateOutputType | null
    _min: Inventario_tallasMinAggregateOutputType | null
    _max: Inventario_tallasMaxAggregateOutputType | null
  }

  type GetInventario_tallasGroupByPayload<T extends inventario_tallasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventario_tallasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventario_tallasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventario_tallasGroupByOutputType[P]>
            : GetScalarType<T[P], Inventario_tallasGroupByOutputType[P]>
        }
      >
    >


  export type inventario_tallasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    talla?: boolean
    cantidad?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario_tallas"]>

  export type inventario_tallasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    talla?: boolean
    cantidad?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario_tallas"]>

  export type inventario_tallasSelectScalar = {
    id?: boolean
    producto_id?: boolean
    talla?: boolean
    cantidad?: boolean
  }

  export type inventario_tallasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }
  export type inventario_tallasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }

  export type $inventario_tallasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventario_tallas"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      producto_id: string
      talla: string
      cantidad: number
    }, ExtArgs["result"]["inventario_tallas"]>
    composites: {}
  }

  type inventario_tallasGetPayload<S extends boolean | null | undefined | inventario_tallasDefaultArgs> = $Result.GetResult<Prisma.$inventario_tallasPayload, S>

  type inventario_tallasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inventario_tallasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Inventario_tallasCountAggregateInputType | true
    }

  export interface inventario_tallasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventario_tallas'], meta: { name: 'inventario_tallas' } }
    /**
     * Find zero or one Inventario_tallas that matches the filter.
     * @param {inventario_tallasFindUniqueArgs} args - Arguments to find a Inventario_tallas
     * @example
     * // Get one Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventario_tallasFindUniqueArgs>(args: SelectSubset<T, inventario_tallasFindUniqueArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventario_tallas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {inventario_tallasFindUniqueOrThrowArgs} args - Arguments to find a Inventario_tallas
     * @example
     * // Get one Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventario_tallasFindUniqueOrThrowArgs>(args: SelectSubset<T, inventario_tallasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventario_tallas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_tallasFindFirstArgs} args - Arguments to find a Inventario_tallas
     * @example
     * // Get one Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventario_tallasFindFirstArgs>(args?: SelectSubset<T, inventario_tallasFindFirstArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventario_tallas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_tallasFindFirstOrThrowArgs} args - Arguments to find a Inventario_tallas
     * @example
     * // Get one Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventario_tallasFindFirstOrThrowArgs>(args?: SelectSubset<T, inventario_tallasFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventario_tallas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_tallasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.findMany()
     * 
     * // Get first 10 Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventario_tallasWithIdOnly = await prisma.inventario_tallas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventario_tallasFindManyArgs>(args?: SelectSubset<T, inventario_tallasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventario_tallas.
     * @param {inventario_tallasCreateArgs} args - Arguments to create a Inventario_tallas.
     * @example
     * // Create one Inventario_tallas
     * const Inventario_tallas = await prisma.inventario_tallas.create({
     *   data: {
     *     // ... data to create a Inventario_tallas
     *   }
     * })
     * 
     */
    create<T extends inventario_tallasCreateArgs>(args: SelectSubset<T, inventario_tallasCreateArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventario_tallas.
     * @param {inventario_tallasCreateManyArgs} args - Arguments to create many Inventario_tallas.
     * @example
     * // Create many Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventario_tallasCreateManyArgs>(args?: SelectSubset<T, inventario_tallasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventario_tallas and returns the data saved in the database.
     * @param {inventario_tallasCreateManyAndReturnArgs} args - Arguments to create many Inventario_tallas.
     * @example
     * // Create many Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventario_tallas and only return the `id`
     * const inventario_tallasWithIdOnly = await prisma.inventario_tallas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventario_tallasCreateManyAndReturnArgs>(args?: SelectSubset<T, inventario_tallasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inventario_tallas.
     * @param {inventario_tallasDeleteArgs} args - Arguments to delete one Inventario_tallas.
     * @example
     * // Delete one Inventario_tallas
     * const Inventario_tallas = await prisma.inventario_tallas.delete({
     *   where: {
     *     // ... filter to delete one Inventario_tallas
     *   }
     * })
     * 
     */
    delete<T extends inventario_tallasDeleteArgs>(args: SelectSubset<T, inventario_tallasDeleteArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventario_tallas.
     * @param {inventario_tallasUpdateArgs} args - Arguments to update one Inventario_tallas.
     * @example
     * // Update one Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventario_tallasUpdateArgs>(args: SelectSubset<T, inventario_tallasUpdateArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventario_tallas.
     * @param {inventario_tallasDeleteManyArgs} args - Arguments to filter Inventario_tallas to delete.
     * @example
     * // Delete a few Inventario_tallas
     * const { count } = await prisma.inventario_tallas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventario_tallasDeleteManyArgs>(args?: SelectSubset<T, inventario_tallasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventario_tallas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_tallasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventario_tallasUpdateManyArgs>(args: SelectSubset<T, inventario_tallasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventario_tallas.
     * @param {inventario_tallasUpsertArgs} args - Arguments to update or create a Inventario_tallas.
     * @example
     * // Update or create a Inventario_tallas
     * const inventario_tallas = await prisma.inventario_tallas.upsert({
     *   create: {
     *     // ... data to create a Inventario_tallas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario_tallas we want to update
     *   }
     * })
     */
    upsert<T extends inventario_tallasUpsertArgs>(args: SelectSubset<T, inventario_tallasUpsertArgs<ExtArgs>>): Prisma__inventario_tallasClient<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventario_tallas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_tallasCountArgs} args - Arguments to filter Inventario_tallas to count.
     * @example
     * // Count the number of Inventario_tallas
     * const count = await prisma.inventario_tallas.count({
     *   where: {
     *     // ... the filter for the Inventario_tallas we want to count
     *   }
     * })
    **/
    count<T extends inventario_tallasCountArgs>(
      args?: Subset<T, inventario_tallasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventario_tallasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario_tallas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventario_tallasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inventario_tallasAggregateArgs>(args: Subset<T, Inventario_tallasAggregateArgs>): Prisma.PrismaPromise<GetInventario_tallasAggregateType<T>>

    /**
     * Group by Inventario_tallas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventario_tallasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventario_tallasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventario_tallasGroupByArgs['orderBy'] }
        : { orderBy?: inventario_tallasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventario_tallasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventario_tallasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventario_tallas model
   */
  readonly fields: inventario_tallasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventario_tallas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventario_tallasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventario_tallas model
   */ 
  interface inventario_tallasFieldRefs {
    readonly id: FieldRef<"inventario_tallas", 'String'>
    readonly producto_id: FieldRef<"inventario_tallas", 'String'>
    readonly talla: FieldRef<"inventario_tallas", 'String'>
    readonly cantidad: FieldRef<"inventario_tallas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * inventario_tallas findUnique
   */
  export type inventario_tallasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * Filter, which inventario_tallas to fetch.
     */
    where: inventario_tallasWhereUniqueInput
  }

  /**
   * inventario_tallas findUniqueOrThrow
   */
  export type inventario_tallasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * Filter, which inventario_tallas to fetch.
     */
    where: inventario_tallasWhereUniqueInput
  }

  /**
   * inventario_tallas findFirst
   */
  export type inventario_tallasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * Filter, which inventario_tallas to fetch.
     */
    where?: inventario_tallasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_tallas to fetch.
     */
    orderBy?: inventario_tallasOrderByWithRelationInput | inventario_tallasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventario_tallas.
     */
    cursor?: inventario_tallasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_tallas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_tallas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventario_tallas.
     */
    distinct?: Inventario_tallasScalarFieldEnum | Inventario_tallasScalarFieldEnum[]
  }

  /**
   * inventario_tallas findFirstOrThrow
   */
  export type inventario_tallasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * Filter, which inventario_tallas to fetch.
     */
    where?: inventario_tallasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_tallas to fetch.
     */
    orderBy?: inventario_tallasOrderByWithRelationInput | inventario_tallasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventario_tallas.
     */
    cursor?: inventario_tallasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_tallas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_tallas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventario_tallas.
     */
    distinct?: Inventario_tallasScalarFieldEnum | Inventario_tallasScalarFieldEnum[]
  }

  /**
   * inventario_tallas findMany
   */
  export type inventario_tallasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * Filter, which inventario_tallas to fetch.
     */
    where?: inventario_tallasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventario_tallas to fetch.
     */
    orderBy?: inventario_tallasOrderByWithRelationInput | inventario_tallasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventario_tallas.
     */
    cursor?: inventario_tallasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventario_tallas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventario_tallas.
     */
    skip?: number
    distinct?: Inventario_tallasScalarFieldEnum | Inventario_tallasScalarFieldEnum[]
  }

  /**
   * inventario_tallas create
   */
  export type inventario_tallasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * The data needed to create a inventario_tallas.
     */
    data: XOR<inventario_tallasCreateInput, inventario_tallasUncheckedCreateInput>
  }

  /**
   * inventario_tallas createMany
   */
  export type inventario_tallasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventario_tallas.
     */
    data: inventario_tallasCreateManyInput | inventario_tallasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventario_tallas createManyAndReturn
   */
  export type inventario_tallasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many inventario_tallas.
     */
    data: inventario_tallasCreateManyInput | inventario_tallasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventario_tallas update
   */
  export type inventario_tallasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * The data needed to update a inventario_tallas.
     */
    data: XOR<inventario_tallasUpdateInput, inventario_tallasUncheckedUpdateInput>
    /**
     * Choose, which inventario_tallas to update.
     */
    where: inventario_tallasWhereUniqueInput
  }

  /**
   * inventario_tallas updateMany
   */
  export type inventario_tallasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventario_tallas.
     */
    data: XOR<inventario_tallasUpdateManyMutationInput, inventario_tallasUncheckedUpdateManyInput>
    /**
     * Filter which inventario_tallas to update
     */
    where?: inventario_tallasWhereInput
  }

  /**
   * inventario_tallas upsert
   */
  export type inventario_tallasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * The filter to search for the inventario_tallas to update in case it exists.
     */
    where: inventario_tallasWhereUniqueInput
    /**
     * In case the inventario_tallas found by the `where` argument doesn't exist, create a new inventario_tallas with this data.
     */
    create: XOR<inventario_tallasCreateInput, inventario_tallasUncheckedCreateInput>
    /**
     * In case the inventario_tallas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventario_tallasUpdateInput, inventario_tallasUncheckedUpdateInput>
  }

  /**
   * inventario_tallas delete
   */
  export type inventario_tallasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    /**
     * Filter which inventario_tallas to delete.
     */
    where: inventario_tallasWhereUniqueInput
  }

  /**
   * inventario_tallas deleteMany
   */
  export type inventario_tallasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventario_tallas to delete
     */
    where?: inventario_tallasWhereInput
  }

  /**
   * inventario_tallas without action
   */
  export type inventario_tallasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
  }


  /**
   * Model movimientos_inventario
   */

  export type AggregateMovimientos_inventario = {
    _count: Movimientos_inventarioCountAggregateOutputType | null
    _avg: Movimientos_inventarioAvgAggregateOutputType | null
    _sum: Movimientos_inventarioSumAggregateOutputType | null
    _min: Movimientos_inventarioMinAggregateOutputType | null
    _max: Movimientos_inventarioMaxAggregateOutputType | null
  }

  export type Movimientos_inventarioAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type Movimientos_inventarioSumAggregateOutputType = {
    cantidad: number | null
  }

  export type Movimientos_inventarioMinAggregateOutputType = {
    id: string | null
    producto_id: string | null
    talla: string | null
    tipo: string | null
    cantidad: number | null
    motivo: string | null
    usuario_id: string | null
    fecha_hora: Date | null
  }

  export type Movimientos_inventarioMaxAggregateOutputType = {
    id: string | null
    producto_id: string | null
    talla: string | null
    tipo: string | null
    cantidad: number | null
    motivo: string | null
    usuario_id: string | null
    fecha_hora: Date | null
  }

  export type Movimientos_inventarioCountAggregateOutputType = {
    id: number
    producto_id: number
    talla: number
    tipo: number
    cantidad: number
    motivo: number
    usuario_id: number
    fecha_hora: number
    _all: number
  }


  export type Movimientos_inventarioAvgAggregateInputType = {
    cantidad?: true
  }

  export type Movimientos_inventarioSumAggregateInputType = {
    cantidad?: true
  }

  export type Movimientos_inventarioMinAggregateInputType = {
    id?: true
    producto_id?: true
    talla?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    usuario_id?: true
    fecha_hora?: true
  }

  export type Movimientos_inventarioMaxAggregateInputType = {
    id?: true
    producto_id?: true
    talla?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    usuario_id?: true
    fecha_hora?: true
  }

  export type Movimientos_inventarioCountAggregateInputType = {
    id?: true
    producto_id?: true
    talla?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    usuario_id?: true
    fecha_hora?: true
    _all?: true
  }

  export type Movimientos_inventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientos_inventario to aggregate.
     */
    where?: movimientos_inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_inventarios to fetch.
     */
    orderBy?: movimientos_inventarioOrderByWithRelationInput | movimientos_inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movimientos_inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movimientos_inventarios
    **/
    _count?: true | Movimientos_inventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Movimientos_inventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Movimientos_inventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Movimientos_inventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Movimientos_inventarioMaxAggregateInputType
  }

  export type GetMovimientos_inventarioAggregateType<T extends Movimientos_inventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientos_inventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientos_inventario[P]>
      : GetScalarType<T[P], AggregateMovimientos_inventario[P]>
  }




  export type movimientos_inventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientos_inventarioWhereInput
    orderBy?: movimientos_inventarioOrderByWithAggregationInput | movimientos_inventarioOrderByWithAggregationInput[]
    by: Movimientos_inventarioScalarFieldEnum[] | Movimientos_inventarioScalarFieldEnum
    having?: movimientos_inventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Movimientos_inventarioCountAggregateInputType | true
    _avg?: Movimientos_inventarioAvgAggregateInputType
    _sum?: Movimientos_inventarioSumAggregateInputType
    _min?: Movimientos_inventarioMinAggregateInputType
    _max?: Movimientos_inventarioMaxAggregateInputType
  }

  export type Movimientos_inventarioGroupByOutputType = {
    id: string
    producto_id: string
    talla: string
    tipo: string
    cantidad: number
    motivo: string | null
    usuario_id: string | null
    fecha_hora: Date | null
    _count: Movimientos_inventarioCountAggregateOutputType | null
    _avg: Movimientos_inventarioAvgAggregateOutputType | null
    _sum: Movimientos_inventarioSumAggregateOutputType | null
    _min: Movimientos_inventarioMinAggregateOutputType | null
    _max: Movimientos_inventarioMaxAggregateOutputType | null
  }

  type GetMovimientos_inventarioGroupByPayload<T extends movimientos_inventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Movimientos_inventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Movimientos_inventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Movimientos_inventarioGroupByOutputType[P]>
            : GetScalarType<T[P], Movimientos_inventarioGroupByOutputType[P]>
        }
      >
    >


  export type movimientos_inventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    talla?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    usuario_id?: boolean
    fecha_hora?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    perfiles?: boolean | movimientos_inventario$perfilesArgs<ExtArgs>
  }, ExtArgs["result"]["movimientos_inventario"]>

  export type movimientos_inventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    talla?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    usuario_id?: boolean
    fecha_hora?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    perfiles?: boolean | movimientos_inventario$perfilesArgs<ExtArgs>
  }, ExtArgs["result"]["movimientos_inventario"]>

  export type movimientos_inventarioSelectScalar = {
    id?: boolean
    producto_id?: boolean
    talla?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    usuario_id?: boolean
    fecha_hora?: boolean
  }

  export type movimientos_inventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    perfiles?: boolean | movimientos_inventario$perfilesArgs<ExtArgs>
  }
  export type movimientos_inventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    perfiles?: boolean | movimientos_inventario$perfilesArgs<ExtArgs>
  }

  export type $movimientos_inventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movimientos_inventario"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>
      perfiles: Prisma.$perfilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      producto_id: string
      talla: string
      tipo: string
      cantidad: number
      motivo: string | null
      usuario_id: string | null
      fecha_hora: Date | null
    }, ExtArgs["result"]["movimientos_inventario"]>
    composites: {}
  }

  type movimientos_inventarioGetPayload<S extends boolean | null | undefined | movimientos_inventarioDefaultArgs> = $Result.GetResult<Prisma.$movimientos_inventarioPayload, S>

  type movimientos_inventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<movimientos_inventarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Movimientos_inventarioCountAggregateInputType | true
    }

  export interface movimientos_inventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movimientos_inventario'], meta: { name: 'movimientos_inventario' } }
    /**
     * Find zero or one Movimientos_inventario that matches the filter.
     * @param {movimientos_inventarioFindUniqueArgs} args - Arguments to find a Movimientos_inventario
     * @example
     * // Get one Movimientos_inventario
     * const movimientos_inventario = await prisma.movimientos_inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movimientos_inventarioFindUniqueArgs>(args: SelectSubset<T, movimientos_inventarioFindUniqueArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movimientos_inventario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {movimientos_inventarioFindUniqueOrThrowArgs} args - Arguments to find a Movimientos_inventario
     * @example
     * // Get one Movimientos_inventario
     * const movimientos_inventario = await prisma.movimientos_inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movimientos_inventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, movimientos_inventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movimientos_inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_inventarioFindFirstArgs} args - Arguments to find a Movimientos_inventario
     * @example
     * // Get one Movimientos_inventario
     * const movimientos_inventario = await prisma.movimientos_inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movimientos_inventarioFindFirstArgs>(args?: SelectSubset<T, movimientos_inventarioFindFirstArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movimientos_inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_inventarioFindFirstOrThrowArgs} args - Arguments to find a Movimientos_inventario
     * @example
     * // Get one Movimientos_inventario
     * const movimientos_inventario = await prisma.movimientos_inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movimientos_inventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, movimientos_inventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movimientos_inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_inventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimientos_inventarios
     * const movimientos_inventarios = await prisma.movimientos_inventario.findMany()
     * 
     * // Get first 10 Movimientos_inventarios
     * const movimientos_inventarios = await prisma.movimientos_inventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientos_inventarioWithIdOnly = await prisma.movimientos_inventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movimientos_inventarioFindManyArgs>(args?: SelectSubset<T, movimientos_inventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movimientos_inventario.
     * @param {movimientos_inventarioCreateArgs} args - Arguments to create a Movimientos_inventario.
     * @example
     * // Create one Movimientos_inventario
     * const Movimientos_inventario = await prisma.movimientos_inventario.create({
     *   data: {
     *     // ... data to create a Movimientos_inventario
     *   }
     * })
     * 
     */
    create<T extends movimientos_inventarioCreateArgs>(args: SelectSubset<T, movimientos_inventarioCreateArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movimientos_inventarios.
     * @param {movimientos_inventarioCreateManyArgs} args - Arguments to create many Movimientos_inventarios.
     * @example
     * // Create many Movimientos_inventarios
     * const movimientos_inventario = await prisma.movimientos_inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movimientos_inventarioCreateManyArgs>(args?: SelectSubset<T, movimientos_inventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimientos_inventarios and returns the data saved in the database.
     * @param {movimientos_inventarioCreateManyAndReturnArgs} args - Arguments to create many Movimientos_inventarios.
     * @example
     * // Create many Movimientos_inventarios
     * const movimientos_inventario = await prisma.movimientos_inventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimientos_inventarios and only return the `id`
     * const movimientos_inventarioWithIdOnly = await prisma.movimientos_inventario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movimientos_inventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, movimientos_inventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Movimientos_inventario.
     * @param {movimientos_inventarioDeleteArgs} args - Arguments to delete one Movimientos_inventario.
     * @example
     * // Delete one Movimientos_inventario
     * const Movimientos_inventario = await prisma.movimientos_inventario.delete({
     *   where: {
     *     // ... filter to delete one Movimientos_inventario
     *   }
     * })
     * 
     */
    delete<T extends movimientos_inventarioDeleteArgs>(args: SelectSubset<T, movimientos_inventarioDeleteArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movimientos_inventario.
     * @param {movimientos_inventarioUpdateArgs} args - Arguments to update one Movimientos_inventario.
     * @example
     * // Update one Movimientos_inventario
     * const movimientos_inventario = await prisma.movimientos_inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movimientos_inventarioUpdateArgs>(args: SelectSubset<T, movimientos_inventarioUpdateArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movimientos_inventarios.
     * @param {movimientos_inventarioDeleteManyArgs} args - Arguments to filter Movimientos_inventarios to delete.
     * @example
     * // Delete a few Movimientos_inventarios
     * const { count } = await prisma.movimientos_inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movimientos_inventarioDeleteManyArgs>(args?: SelectSubset<T, movimientos_inventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientos_inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_inventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimientos_inventarios
     * const movimientos_inventario = await prisma.movimientos_inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movimientos_inventarioUpdateManyArgs>(args: SelectSubset<T, movimientos_inventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movimientos_inventario.
     * @param {movimientos_inventarioUpsertArgs} args - Arguments to update or create a Movimientos_inventario.
     * @example
     * // Update or create a Movimientos_inventario
     * const movimientos_inventario = await prisma.movimientos_inventario.upsert({
     *   create: {
     *     // ... data to create a Movimientos_inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimientos_inventario we want to update
     *   }
     * })
     */
    upsert<T extends movimientos_inventarioUpsertArgs>(args: SelectSubset<T, movimientos_inventarioUpsertArgs<ExtArgs>>): Prisma__movimientos_inventarioClient<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movimientos_inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_inventarioCountArgs} args - Arguments to filter Movimientos_inventarios to count.
     * @example
     * // Count the number of Movimientos_inventarios
     * const count = await prisma.movimientos_inventario.count({
     *   where: {
     *     // ... the filter for the Movimientos_inventarios we want to count
     *   }
     * })
    **/
    count<T extends movimientos_inventarioCountArgs>(
      args?: Subset<T, movimientos_inventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Movimientos_inventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimientos_inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movimientos_inventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Movimientos_inventarioAggregateArgs>(args: Subset<T, Movimientos_inventarioAggregateArgs>): Prisma.PrismaPromise<GetMovimientos_inventarioAggregateType<T>>

    /**
     * Group by Movimientos_inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_inventarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movimientos_inventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movimientos_inventarioGroupByArgs['orderBy'] }
        : { orderBy?: movimientos_inventarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movimientos_inventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientos_inventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movimientos_inventario model
   */
  readonly fields: movimientos_inventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movimientos_inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movimientos_inventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    perfiles<T extends movimientos_inventario$perfilesArgs<ExtArgs> = {}>(args?: Subset<T, movimientos_inventario$perfilesArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movimientos_inventario model
   */ 
  interface movimientos_inventarioFieldRefs {
    readonly id: FieldRef<"movimientos_inventario", 'String'>
    readonly producto_id: FieldRef<"movimientos_inventario", 'String'>
    readonly talla: FieldRef<"movimientos_inventario", 'String'>
    readonly tipo: FieldRef<"movimientos_inventario", 'String'>
    readonly cantidad: FieldRef<"movimientos_inventario", 'Int'>
    readonly motivo: FieldRef<"movimientos_inventario", 'String'>
    readonly usuario_id: FieldRef<"movimientos_inventario", 'String'>
    readonly fecha_hora: FieldRef<"movimientos_inventario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * movimientos_inventario findUnique
   */
  export type movimientos_inventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_inventario to fetch.
     */
    where: movimientos_inventarioWhereUniqueInput
  }

  /**
   * movimientos_inventario findUniqueOrThrow
   */
  export type movimientos_inventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_inventario to fetch.
     */
    where: movimientos_inventarioWhereUniqueInput
  }

  /**
   * movimientos_inventario findFirst
   */
  export type movimientos_inventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_inventario to fetch.
     */
    where?: movimientos_inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_inventarios to fetch.
     */
    orderBy?: movimientos_inventarioOrderByWithRelationInput | movimientos_inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientos_inventarios.
     */
    cursor?: movimientos_inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientos_inventarios.
     */
    distinct?: Movimientos_inventarioScalarFieldEnum | Movimientos_inventarioScalarFieldEnum[]
  }

  /**
   * movimientos_inventario findFirstOrThrow
   */
  export type movimientos_inventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_inventario to fetch.
     */
    where?: movimientos_inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_inventarios to fetch.
     */
    orderBy?: movimientos_inventarioOrderByWithRelationInput | movimientos_inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientos_inventarios.
     */
    cursor?: movimientos_inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientos_inventarios.
     */
    distinct?: Movimientos_inventarioScalarFieldEnum | Movimientos_inventarioScalarFieldEnum[]
  }

  /**
   * movimientos_inventario findMany
   */
  export type movimientos_inventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_inventarios to fetch.
     */
    where?: movimientos_inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_inventarios to fetch.
     */
    orderBy?: movimientos_inventarioOrderByWithRelationInput | movimientos_inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movimientos_inventarios.
     */
    cursor?: movimientos_inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_inventarios.
     */
    skip?: number
    distinct?: Movimientos_inventarioScalarFieldEnum | Movimientos_inventarioScalarFieldEnum[]
  }

  /**
   * movimientos_inventario create
   */
  export type movimientos_inventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a movimientos_inventario.
     */
    data: XOR<movimientos_inventarioCreateInput, movimientos_inventarioUncheckedCreateInput>
  }

  /**
   * movimientos_inventario createMany
   */
  export type movimientos_inventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movimientos_inventarios.
     */
    data: movimientos_inventarioCreateManyInput | movimientos_inventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movimientos_inventario createManyAndReturn
   */
  export type movimientos_inventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many movimientos_inventarios.
     */
    data: movimientos_inventarioCreateManyInput | movimientos_inventarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * movimientos_inventario update
   */
  export type movimientos_inventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a movimientos_inventario.
     */
    data: XOR<movimientos_inventarioUpdateInput, movimientos_inventarioUncheckedUpdateInput>
    /**
     * Choose, which movimientos_inventario to update.
     */
    where: movimientos_inventarioWhereUniqueInput
  }

  /**
   * movimientos_inventario updateMany
   */
  export type movimientos_inventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movimientos_inventarios.
     */
    data: XOR<movimientos_inventarioUpdateManyMutationInput, movimientos_inventarioUncheckedUpdateManyInput>
    /**
     * Filter which movimientos_inventarios to update
     */
    where?: movimientos_inventarioWhereInput
  }

  /**
   * movimientos_inventario upsert
   */
  export type movimientos_inventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the movimientos_inventario to update in case it exists.
     */
    where: movimientos_inventarioWhereUniqueInput
    /**
     * In case the movimientos_inventario found by the `where` argument doesn't exist, create a new movimientos_inventario with this data.
     */
    create: XOR<movimientos_inventarioCreateInput, movimientos_inventarioUncheckedCreateInput>
    /**
     * In case the movimientos_inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movimientos_inventarioUpdateInput, movimientos_inventarioUncheckedUpdateInput>
  }

  /**
   * movimientos_inventario delete
   */
  export type movimientos_inventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    /**
     * Filter which movimientos_inventario to delete.
     */
    where: movimientos_inventarioWhereUniqueInput
  }

  /**
   * movimientos_inventario deleteMany
   */
  export type movimientos_inventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientos_inventarios to delete
     */
    where?: movimientos_inventarioWhereInput
  }

  /**
   * movimientos_inventario.perfiles
   */
  export type movimientos_inventario$perfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    where?: perfilesWhereInput
  }

  /**
   * movimientos_inventario without action
   */
  export type movimientos_inventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
  }


  /**
   * Model perfiles
   */

  export type AggregatePerfiles = {
    _count: PerfilesCountAggregateOutputType | null
    _min: PerfilesMinAggregateOutputType | null
    _max: PerfilesMaxAggregateOutputType | null
  }

  export type PerfilesMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    rol: string | null
    created_at: Date | null
  }

  export type PerfilesMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    rol: string | null
    created_at: Date | null
  }

  export type PerfilesCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    rol: number
    created_at: number
    _all: number
  }


  export type PerfilesMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    rol?: true
    created_at?: true
  }

  export type PerfilesMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    rol?: true
    created_at?: true
  }

  export type PerfilesCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    rol?: true
    created_at?: true
    _all?: true
  }

  export type PerfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfiles to aggregate.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned perfiles
    **/
    _count?: true | PerfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilesMaxAggregateInputType
  }

  export type GetPerfilesAggregateType<T extends PerfilesAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfiles[P]>
      : GetScalarType<T[P], AggregatePerfiles[P]>
  }




  export type perfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: perfilesWhereInput
    orderBy?: perfilesOrderByWithAggregationInput | perfilesOrderByWithAggregationInput[]
    by: PerfilesScalarFieldEnum[] | PerfilesScalarFieldEnum
    having?: perfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilesCountAggregateInputType | true
    _min?: PerfilesMinAggregateInputType
    _max?: PerfilesMaxAggregateInputType
  }

  export type PerfilesGroupByOutputType = {
    id: string
    nombre: string
    email: string
    rol: string
    created_at: Date | null
    _count: PerfilesCountAggregateOutputType | null
    _min: PerfilesMinAggregateOutputType | null
    _max: PerfilesMaxAggregateOutputType | null
  }

  type GetPerfilesGroupByPayload<T extends perfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilesGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilesGroupByOutputType[P]>
        }
      >
    >


  export type perfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    rol?: boolean
    created_at?: boolean
    cuadres_caja?: boolean | perfiles$cuadres_cajaArgs<ExtArgs>
    gastos_operativos?: boolean | perfiles$gastos_operativosArgs<ExtArgs>
    movimientos_inventario?: boolean | perfiles$movimientos_inventarioArgs<ExtArgs>
    ventas?: boolean | perfiles$ventasArgs<ExtArgs>
    _count?: boolean | PerfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfiles"]>

  export type perfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    rol?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["perfiles"]>

  export type perfilesSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    rol?: boolean
    created_at?: boolean
  }

  export type perfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuadres_caja?: boolean | perfiles$cuadres_cajaArgs<ExtArgs>
    gastos_operativos?: boolean | perfiles$gastos_operativosArgs<ExtArgs>
    movimientos_inventario?: boolean | perfiles$movimientos_inventarioArgs<ExtArgs>
    ventas?: boolean | perfiles$ventasArgs<ExtArgs>
    _count?: boolean | PerfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type perfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $perfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "perfiles"
    objects: {
      cuadres_caja: Prisma.$cuadres_cajaPayload<ExtArgs>[]
      gastos_operativos: Prisma.$gastos_operativosPayload<ExtArgs>[]
      movimientos_inventario: Prisma.$movimientos_inventarioPayload<ExtArgs>[]
      ventas: Prisma.$ventasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      rol: string
      created_at: Date | null
    }, ExtArgs["result"]["perfiles"]>
    composites: {}
  }

  type perfilesGetPayload<S extends boolean | null | undefined | perfilesDefaultArgs> = $Result.GetResult<Prisma.$perfilesPayload, S>

  type perfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<perfilesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PerfilesCountAggregateInputType | true
    }

  export interface perfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['perfiles'], meta: { name: 'perfiles' } }
    /**
     * Find zero or one Perfiles that matches the filter.
     * @param {perfilesFindUniqueArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends perfilesFindUniqueArgs>(args: SelectSubset<T, perfilesFindUniqueArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Perfiles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {perfilesFindUniqueOrThrowArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends perfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, perfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Perfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesFindFirstArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends perfilesFindFirstArgs>(args?: SelectSubset<T, perfilesFindFirstArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Perfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesFindFirstOrThrowArgs} args - Arguments to find a Perfiles
     * @example
     * // Get one Perfiles
     * const perfiles = await prisma.perfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends perfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, perfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Perfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfiles
     * const perfiles = await prisma.perfiles.findMany()
     * 
     * // Get first 10 Perfiles
     * const perfiles = await prisma.perfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilesWithIdOnly = await prisma.perfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends perfilesFindManyArgs>(args?: SelectSubset<T, perfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Perfiles.
     * @param {perfilesCreateArgs} args - Arguments to create a Perfiles.
     * @example
     * // Create one Perfiles
     * const Perfiles = await prisma.perfiles.create({
     *   data: {
     *     // ... data to create a Perfiles
     *   }
     * })
     * 
     */
    create<T extends perfilesCreateArgs>(args: SelectSubset<T, perfilesCreateArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Perfiles.
     * @param {perfilesCreateManyArgs} args - Arguments to create many Perfiles.
     * @example
     * // Create many Perfiles
     * const perfiles = await prisma.perfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends perfilesCreateManyArgs>(args?: SelectSubset<T, perfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perfiles and returns the data saved in the database.
     * @param {perfilesCreateManyAndReturnArgs} args - Arguments to create many Perfiles.
     * @example
     * // Create many Perfiles
     * const perfiles = await prisma.perfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perfiles and only return the `id`
     * const perfilesWithIdOnly = await prisma.perfiles.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends perfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, perfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Perfiles.
     * @param {perfilesDeleteArgs} args - Arguments to delete one Perfiles.
     * @example
     * // Delete one Perfiles
     * const Perfiles = await prisma.perfiles.delete({
     *   where: {
     *     // ... filter to delete one Perfiles
     *   }
     * })
     * 
     */
    delete<T extends perfilesDeleteArgs>(args: SelectSubset<T, perfilesDeleteArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Perfiles.
     * @param {perfilesUpdateArgs} args - Arguments to update one Perfiles.
     * @example
     * // Update one Perfiles
     * const perfiles = await prisma.perfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends perfilesUpdateArgs>(args: SelectSubset<T, perfilesUpdateArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Perfiles.
     * @param {perfilesDeleteManyArgs} args - Arguments to filter Perfiles to delete.
     * @example
     * // Delete a few Perfiles
     * const { count } = await prisma.perfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends perfilesDeleteManyArgs>(args?: SelectSubset<T, perfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfiles
     * const perfiles = await prisma.perfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends perfilesUpdateManyArgs>(args: SelectSubset<T, perfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfiles.
     * @param {perfilesUpsertArgs} args - Arguments to update or create a Perfiles.
     * @example
     * // Update or create a Perfiles
     * const perfiles = await prisma.perfiles.upsert({
     *   create: {
     *     // ... data to create a Perfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfiles we want to update
     *   }
     * })
     */
    upsert<T extends perfilesUpsertArgs>(args: SelectSubset<T, perfilesUpsertArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesCountArgs} args - Arguments to filter Perfiles to count.
     * @example
     * // Count the number of Perfiles
     * const count = await prisma.perfiles.count({
     *   where: {
     *     // ... the filter for the Perfiles we want to count
     *   }
     * })
    **/
    count<T extends perfilesCountArgs>(
      args?: Subset<T, perfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilesAggregateArgs>(args: Subset<T, PerfilesAggregateArgs>): Prisma.PrismaPromise<GetPerfilesAggregateType<T>>

    /**
     * Group by Perfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends perfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: perfilesGroupByArgs['orderBy'] }
        : { orderBy?: perfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, perfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the perfiles model
   */
  readonly fields: perfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for perfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__perfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuadres_caja<T extends perfiles$cuadres_cajaArgs<ExtArgs> = {}>(args?: Subset<T, perfiles$cuadres_cajaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuadres_cajaPayload<ExtArgs>, T, "findMany"> | Null>
    gastos_operativos<T extends perfiles$gastos_operativosArgs<ExtArgs> = {}>(args?: Subset<T, perfiles$gastos_operativosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gastos_operativosPayload<ExtArgs>, T, "findMany"> | Null>
    movimientos_inventario<T extends perfiles$movimientos_inventarioArgs<ExtArgs> = {}>(args?: Subset<T, perfiles$movimientos_inventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "findMany"> | Null>
    ventas<T extends perfiles$ventasArgs<ExtArgs> = {}>(args?: Subset<T, perfiles$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the perfiles model
   */ 
  interface perfilesFieldRefs {
    readonly id: FieldRef<"perfiles", 'String'>
    readonly nombre: FieldRef<"perfiles", 'String'>
    readonly email: FieldRef<"perfiles", 'String'>
    readonly rol: FieldRef<"perfiles", 'String'>
    readonly created_at: FieldRef<"perfiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * perfiles findUnique
   */
  export type perfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles findUniqueOrThrow
   */
  export type perfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles findFirst
   */
  export type perfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfiles.
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfiles.
     */
    distinct?: PerfilesScalarFieldEnum | PerfilesScalarFieldEnum[]
  }

  /**
   * perfiles findFirstOrThrow
   */
  export type perfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfiles.
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfiles.
     */
    distinct?: PerfilesScalarFieldEnum | PerfilesScalarFieldEnum[]
  }

  /**
   * perfiles findMany
   */
  export type perfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter, which perfiles to fetch.
     */
    where?: perfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfiles to fetch.
     */
    orderBy?: perfilesOrderByWithRelationInput | perfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing perfiles.
     */
    cursor?: perfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfiles.
     */
    skip?: number
    distinct?: PerfilesScalarFieldEnum | PerfilesScalarFieldEnum[]
  }

  /**
   * perfiles create
   */
  export type perfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a perfiles.
     */
    data: XOR<perfilesCreateInput, perfilesUncheckedCreateInput>
  }

  /**
   * perfiles createMany
   */
  export type perfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many perfiles.
     */
    data: perfilesCreateManyInput | perfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * perfiles createManyAndReturn
   */
  export type perfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many perfiles.
     */
    data: perfilesCreateManyInput | perfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * perfiles update
   */
  export type perfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a perfiles.
     */
    data: XOR<perfilesUpdateInput, perfilesUncheckedUpdateInput>
    /**
     * Choose, which perfiles to update.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles updateMany
   */
  export type perfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update perfiles.
     */
    data: XOR<perfilesUpdateManyMutationInput, perfilesUncheckedUpdateManyInput>
    /**
     * Filter which perfiles to update
     */
    where?: perfilesWhereInput
  }

  /**
   * perfiles upsert
   */
  export type perfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the perfiles to update in case it exists.
     */
    where: perfilesWhereUniqueInput
    /**
     * In case the perfiles found by the `where` argument doesn't exist, create a new perfiles with this data.
     */
    create: XOR<perfilesCreateInput, perfilesUncheckedCreateInput>
    /**
     * In case the perfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<perfilesUpdateInput, perfilesUncheckedUpdateInput>
  }

  /**
   * perfiles delete
   */
  export type perfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    /**
     * Filter which perfiles to delete.
     */
    where: perfilesWhereUniqueInput
  }

  /**
   * perfiles deleteMany
   */
  export type perfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfiles to delete
     */
    where?: perfilesWhereInput
  }

  /**
   * perfiles.cuadres_caja
   */
  export type perfiles$cuadres_cajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuadres_caja
     */
    select?: cuadres_cajaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuadres_cajaInclude<ExtArgs> | null
    where?: cuadres_cajaWhereInput
    orderBy?: cuadres_cajaOrderByWithRelationInput | cuadres_cajaOrderByWithRelationInput[]
    cursor?: cuadres_cajaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cuadres_cajaScalarFieldEnum | Cuadres_cajaScalarFieldEnum[]
  }

  /**
   * perfiles.gastos_operativos
   */
  export type perfiles$gastos_operativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos_operativos
     */
    select?: gastos_operativosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gastos_operativosInclude<ExtArgs> | null
    where?: gastos_operativosWhereInput
    orderBy?: gastos_operativosOrderByWithRelationInput | gastos_operativosOrderByWithRelationInput[]
    cursor?: gastos_operativosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gastos_operativosScalarFieldEnum | Gastos_operativosScalarFieldEnum[]
  }

  /**
   * perfiles.movimientos_inventario
   */
  export type perfiles$movimientos_inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    where?: movimientos_inventarioWhereInput
    orderBy?: movimientos_inventarioOrderByWithRelationInput | movimientos_inventarioOrderByWithRelationInput[]
    cursor?: movimientos_inventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movimientos_inventarioScalarFieldEnum | Movimientos_inventarioScalarFieldEnum[]
  }

  /**
   * perfiles.ventas
   */
  export type perfiles$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    cursor?: ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * perfiles without action
   */
  export type perfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    costo_inversion: Decimal | null
    precio_venta: Decimal | null
    margen_neto: Decimal | null
  }

  export type ProductosSumAggregateOutputType = {
    costo_inversion: Decimal | null
    precio_venta: Decimal | null
    margen_neto: Decimal | null
  }

  export type ProductosMinAggregateOutputType = {
    id: string | null
    codigo_barras: string | null
    nombre: string | null
    categoria: string | null
    color_principal: string | null
    costo_inversion: Decimal | null
    precio_venta: Decimal | null
    margen_neto: Decimal | null
    imagen_url: string | null
    activo: boolean | null
    created_at: Date | null
  }

  export type ProductosMaxAggregateOutputType = {
    id: string | null
    codigo_barras: string | null
    nombre: string | null
    categoria: string | null
    color_principal: string | null
    costo_inversion: Decimal | null
    precio_venta: Decimal | null
    margen_neto: Decimal | null
    imagen_url: string | null
    activo: boolean | null
    created_at: Date | null
  }

  export type ProductosCountAggregateOutputType = {
    id: number
    codigo_barras: number
    nombre: number
    categoria: number
    color_principal: number
    costo_inversion: number
    precio_venta: number
    margen_neto: number
    imagen_url: number
    activo: number
    created_at: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    costo_inversion?: true
    precio_venta?: true
    margen_neto?: true
  }

  export type ProductosSumAggregateInputType = {
    costo_inversion?: true
    precio_venta?: true
    margen_neto?: true
  }

  export type ProductosMinAggregateInputType = {
    id?: true
    codigo_barras?: true
    nombre?: true
    categoria?: true
    color_principal?: true
    costo_inversion?: true
    precio_venta?: true
    margen_neto?: true
    imagen_url?: true
    activo?: true
    created_at?: true
  }

  export type ProductosMaxAggregateInputType = {
    id?: true
    codigo_barras?: true
    nombre?: true
    categoria?: true
    color_principal?: true
    costo_inversion?: true
    precio_venta?: true
    margen_neto?: true
    imagen_url?: true
    activo?: true
    created_at?: true
  }

  export type ProductosCountAggregateInputType = {
    id?: true
    codigo_barras?: true
    nombre?: true
    categoria?: true
    color_principal?: true
    costo_inversion?: true
    precio_venta?: true
    margen_neto?: true
    imagen_url?: true
    activo?: true
    created_at?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id: string
    codigo_barras: string | null
    nombre: string
    categoria: string
    color_principal: string
    costo_inversion: Decimal
    precio_venta: Decimal
    margen_neto: Decimal | null
    imagen_url: string | null
    activo: boolean | null
    created_at: Date | null
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_barras?: boolean
    nombre?: boolean
    categoria?: boolean
    color_principal?: boolean
    costo_inversion?: boolean
    precio_venta?: boolean
    margen_neto?: boolean
    imagen_url?: boolean
    activo?: boolean
    created_at?: boolean
    detalle_ventas?: boolean | productos$detalle_ventasArgs<ExtArgs>
    inventario_tallas?: boolean | productos$inventario_tallasArgs<ExtArgs>
    movimientos_inventario?: boolean | productos$movimientos_inventarioArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo_barras?: boolean
    nombre?: boolean
    categoria?: boolean
    color_principal?: boolean
    costo_inversion?: boolean
    precio_venta?: boolean
    margen_neto?: boolean
    imagen_url?: boolean
    activo?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["productos"]>

  export type productosSelectScalar = {
    id?: boolean
    codigo_barras?: boolean
    nombre?: boolean
    categoria?: boolean
    color_principal?: boolean
    costo_inversion?: boolean
    precio_venta?: boolean
    margen_neto?: boolean
    imagen_url?: boolean
    activo?: boolean
    created_at?: boolean
  }

  export type productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_ventas?: boolean | productos$detalle_ventasArgs<ExtArgs>
    inventario_tallas?: boolean | productos$inventario_tallasArgs<ExtArgs>
    movimientos_inventario?: boolean | productos$movimientos_inventarioArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {
      detalle_ventas: Prisma.$detalle_ventasPayload<ExtArgs>[]
      inventario_tallas: Prisma.$inventario_tallasPayload<ExtArgs>[]
      movimientos_inventario: Prisma.$movimientos_inventarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo_barras: string | null
      nombre: string
      categoria: string
      color_principal: string
      costo_inversion: Prisma.Decimal
      precio_venta: Prisma.Decimal
      margen_neto: Prisma.Decimal | null
      imagen_url: string | null
      activo: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productosWithIdOnly = await prisma.productos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {productosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productosCreateManyAndReturnArgs>(args?: SelectSubset<T, productosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_ventas<T extends productos$detalle_ventasArgs<ExtArgs> = {}>(args?: Subset<T, productos$detalle_ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "findMany"> | Null>
    inventario_tallas<T extends productos$inventario_tallasArgs<ExtArgs> = {}>(args?: Subset<T, productos$inventario_tallasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventario_tallasPayload<ExtArgs>, T, "findMany"> | Null>
    movimientos_inventario<T extends productos$movimientos_inventarioArgs<ExtArgs> = {}>(args?: Subset<T, productos$movimientos_inventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientos_inventarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productos model
   */ 
  interface productosFieldRefs {
    readonly id: FieldRef<"productos", 'String'>
    readonly codigo_barras: FieldRef<"productos", 'String'>
    readonly nombre: FieldRef<"productos", 'String'>
    readonly categoria: FieldRef<"productos", 'String'>
    readonly color_principal: FieldRef<"productos", 'String'>
    readonly costo_inversion: FieldRef<"productos", 'Decimal'>
    readonly precio_venta: FieldRef<"productos", 'Decimal'>
    readonly margen_neto: FieldRef<"productos", 'Decimal'>
    readonly imagen_url: FieldRef<"productos", 'String'>
    readonly activo: FieldRef<"productos", 'Boolean'>
    readonly created_at: FieldRef<"productos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos createManyAndReturn
   */
  export type productosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
  }

  /**
   * productos.detalle_ventas
   */
  export type productos$detalle_ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    where?: detalle_ventasWhereInput
    orderBy?: detalle_ventasOrderByWithRelationInput | detalle_ventasOrderByWithRelationInput[]
    cursor?: detalle_ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_ventasScalarFieldEnum | Detalle_ventasScalarFieldEnum[]
  }

  /**
   * productos.inventario_tallas
   */
  export type productos$inventario_tallasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario_tallas
     */
    select?: inventario_tallasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventario_tallasInclude<ExtArgs> | null
    where?: inventario_tallasWhereInput
    orderBy?: inventario_tallasOrderByWithRelationInput | inventario_tallasOrderByWithRelationInput[]
    cursor?: inventario_tallasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventario_tallasScalarFieldEnum | Inventario_tallasScalarFieldEnum[]
  }

  /**
   * productos.movimientos_inventario
   */
  export type productos$movimientos_inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_inventario
     */
    select?: movimientos_inventarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_inventarioInclude<ExtArgs> | null
    where?: movimientos_inventarioWhereInput
    orderBy?: movimientos_inventarioOrderByWithRelationInput | movimientos_inventarioOrderByWithRelationInput[]
    cursor?: movimientos_inventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movimientos_inventarioScalarFieldEnum | Movimientos_inventarioScalarFieldEnum[]
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
  }


  /**
   * Model ventas
   */

  export type AggregateVentas = {
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  export type VentasAvgAggregateOutputType = {
    total: Decimal | null
    utilidad_neta_venta: Decimal | null
  }

  export type VentasSumAggregateOutputType = {
    total: Decimal | null
    utilidad_neta_venta: Decimal | null
  }

  export type VentasMinAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    cliente_id: string | null
    fecha_hora: Date | null
    canal_venta: string | null
    metodo_pago: string | null
    total: Decimal | null
    utilidad_neta_venta: Decimal | null
  }

  export type VentasMaxAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    cliente_id: string | null
    fecha_hora: Date | null
    canal_venta: string | null
    metodo_pago: string | null
    total: Decimal | null
    utilidad_neta_venta: Decimal | null
  }

  export type VentasCountAggregateOutputType = {
    id: number
    usuario_id: number
    cliente_id: number
    fecha_hora: number
    canal_venta: number
    metodo_pago: number
    total: number
    utilidad_neta_venta: number
    _all: number
  }


  export type VentasAvgAggregateInputType = {
    total?: true
    utilidad_neta_venta?: true
  }

  export type VentasSumAggregateInputType = {
    total?: true
    utilidad_neta_venta?: true
  }

  export type VentasMinAggregateInputType = {
    id?: true
    usuario_id?: true
    cliente_id?: true
    fecha_hora?: true
    canal_venta?: true
    metodo_pago?: true
    total?: true
    utilidad_neta_venta?: true
  }

  export type VentasMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    cliente_id?: true
    fecha_hora?: true
    canal_venta?: true
    metodo_pago?: true
    total?: true
    utilidad_neta_venta?: true
  }

  export type VentasCountAggregateInputType = {
    id?: true
    usuario_id?: true
    cliente_id?: true
    fecha_hora?: true
    canal_venta?: true
    metodo_pago?: true
    total?: true
    utilidad_neta_venta?: true
    _all?: true
  }

  export type VentasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to aggregate.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ventas
    **/
    _count?: true | VentasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentasMaxAggregateInputType
  }

  export type GetVentasAggregateType<T extends VentasAggregateArgs> = {
        [P in keyof T & keyof AggregateVentas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentas[P]>
      : GetScalarType<T[P], AggregateVentas[P]>
  }




  export type ventasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ventasWhereInput
    orderBy?: ventasOrderByWithAggregationInput | ventasOrderByWithAggregationInput[]
    by: VentasScalarFieldEnum[] | VentasScalarFieldEnum
    having?: ventasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentasCountAggregateInputType | true
    _avg?: VentasAvgAggregateInputType
    _sum?: VentasSumAggregateInputType
    _min?: VentasMinAggregateInputType
    _max?: VentasMaxAggregateInputType
  }

  export type VentasGroupByOutputType = {
    id: string
    usuario_id: string | null
    cliente_id: string | null
    fecha_hora: Date | null
    canal_venta: string
    metodo_pago: string
    total: Decimal
    utilidad_neta_venta: Decimal
    _count: VentasCountAggregateOutputType | null
    _avg: VentasAvgAggregateOutputType | null
    _sum: VentasSumAggregateOutputType | null
    _min: VentasMinAggregateOutputType | null
    _max: VentasMaxAggregateOutputType | null
  }

  type GetVentasGroupByPayload<T extends ventasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentasGroupByOutputType[P]>
            : GetScalarType<T[P], VentasGroupByOutputType[P]>
        }
      >
    >


  export type ventasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cliente_id?: boolean
    fecha_hora?: boolean
    canal_venta?: boolean
    metodo_pago?: boolean
    total?: boolean
    utilidad_neta_venta?: boolean
    detalle_ventas?: boolean | ventas$detalle_ventasArgs<ExtArgs>
    clientes?: boolean | ventas$clientesArgs<ExtArgs>
    perfiles?: boolean | ventas$perfilesArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    cliente_id?: boolean
    fecha_hora?: boolean
    canal_venta?: boolean
    metodo_pago?: boolean
    total?: boolean
    utilidad_neta_venta?: boolean
    clientes?: boolean | ventas$clientesArgs<ExtArgs>
    perfiles?: boolean | ventas$perfilesArgs<ExtArgs>
  }, ExtArgs["result"]["ventas"]>

  export type ventasSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    cliente_id?: boolean
    fecha_hora?: boolean
    canal_venta?: boolean
    metodo_pago?: boolean
    total?: boolean
    utilidad_neta_venta?: boolean
  }

  export type ventasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_ventas?: boolean | ventas$detalle_ventasArgs<ExtArgs>
    clientes?: boolean | ventas$clientesArgs<ExtArgs>
    perfiles?: boolean | ventas$perfilesArgs<ExtArgs>
    _count?: boolean | VentasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ventasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | ventas$clientesArgs<ExtArgs>
    perfiles?: boolean | ventas$perfilesArgs<ExtArgs>
  }

  export type $ventasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ventas"
    objects: {
      detalle_ventas: Prisma.$detalle_ventasPayload<ExtArgs>[]
      clientes: Prisma.$clientesPayload<ExtArgs> | null
      perfiles: Prisma.$perfilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_id: string | null
      cliente_id: string | null
      fecha_hora: Date | null
      canal_venta: string
      metodo_pago: string
      total: Prisma.Decimal
      utilidad_neta_venta: Prisma.Decimal
    }, ExtArgs["result"]["ventas"]>
    composites: {}
  }

  type ventasGetPayload<S extends boolean | null | undefined | ventasDefaultArgs> = $Result.GetResult<Prisma.$ventasPayload, S>

  type ventasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ventasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VentasCountAggregateInputType | true
    }

  export interface ventasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ventas'], meta: { name: 'ventas' } }
    /**
     * Find zero or one Ventas that matches the filter.
     * @param {ventasFindUniqueArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ventasFindUniqueArgs>(args: SelectSubset<T, ventasFindUniqueArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ventas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ventasFindUniqueOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ventasFindUniqueOrThrowArgs>(args: SelectSubset<T, ventasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ventasFindFirstArgs>(args?: SelectSubset<T, ventasFindFirstArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ventas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindFirstOrThrowArgs} args - Arguments to find a Ventas
     * @example
     * // Get one Ventas
     * const ventas = await prisma.ventas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ventasFindFirstOrThrowArgs>(args?: SelectSubset<T, ventasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.ventas.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.ventas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventasWithIdOnly = await prisma.ventas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ventasFindManyArgs>(args?: SelectSubset<T, ventasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ventas.
     * @param {ventasCreateArgs} args - Arguments to create a Ventas.
     * @example
     * // Create one Ventas
     * const Ventas = await prisma.ventas.create({
     *   data: {
     *     // ... data to create a Ventas
     *   }
     * })
     * 
     */
    create<T extends ventasCreateArgs>(args: SelectSubset<T, ventasCreateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ventas.
     * @param {ventasCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ventasCreateManyArgs>(args?: SelectSubset<T, ventasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {ventasCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const ventas = await prisma.ventas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventasWithIdOnly = await prisma.ventas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ventasCreateManyAndReturnArgs>(args?: SelectSubset<T, ventasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ventas.
     * @param {ventasDeleteArgs} args - Arguments to delete one Ventas.
     * @example
     * // Delete one Ventas
     * const Ventas = await prisma.ventas.delete({
     *   where: {
     *     // ... filter to delete one Ventas
     *   }
     * })
     * 
     */
    delete<T extends ventasDeleteArgs>(args: SelectSubset<T, ventasDeleteArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ventas.
     * @param {ventasUpdateArgs} args - Arguments to update one Ventas.
     * @example
     * // Update one Ventas
     * const ventas = await prisma.ventas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ventasUpdateArgs>(args: SelectSubset<T, ventasUpdateArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ventas.
     * @param {ventasDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.ventas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ventasDeleteManyArgs>(args?: SelectSubset<T, ventasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const ventas = await prisma.ventas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ventasUpdateManyArgs>(args: SelectSubset<T, ventasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ventas.
     * @param {ventasUpsertArgs} args - Arguments to update or create a Ventas.
     * @example
     * // Update or create a Ventas
     * const ventas = await prisma.ventas.upsert({
     *   create: {
     *     // ... data to create a Ventas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ventas we want to update
     *   }
     * })
     */
    upsert<T extends ventasUpsertArgs>(args: SelectSubset<T, ventasUpsertArgs<ExtArgs>>): Prisma__ventasClient<$Result.GetResult<Prisma.$ventasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.ventas.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends ventasCountArgs>(
      args?: Subset<T, ventasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentasAggregateArgs>(args: Subset<T, VentasAggregateArgs>): Prisma.PrismaPromise<GetVentasAggregateType<T>>

    /**
     * Group by Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ventasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ventasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ventasGroupByArgs['orderBy'] }
        : { orderBy?: ventasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ventasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ventas model
   */
  readonly fields: ventasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ventas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ventasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_ventas<T extends ventas$detalle_ventasArgs<ExtArgs> = {}>(args?: Subset<T, ventas$detalle_ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_ventasPayload<ExtArgs>, T, "findMany"> | Null>
    clientes<T extends ventas$clientesArgs<ExtArgs> = {}>(args?: Subset<T, ventas$clientesArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    perfiles<T extends ventas$perfilesArgs<ExtArgs> = {}>(args?: Subset<T, ventas$perfilesArgs<ExtArgs>>): Prisma__perfilesClient<$Result.GetResult<Prisma.$perfilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ventas model
   */ 
  interface ventasFieldRefs {
    readonly id: FieldRef<"ventas", 'String'>
    readonly usuario_id: FieldRef<"ventas", 'String'>
    readonly cliente_id: FieldRef<"ventas", 'String'>
    readonly fecha_hora: FieldRef<"ventas", 'DateTime'>
    readonly canal_venta: FieldRef<"ventas", 'String'>
    readonly metodo_pago: FieldRef<"ventas", 'String'>
    readonly total: FieldRef<"ventas", 'Decimal'>
    readonly utilidad_neta_venta: FieldRef<"ventas", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ventas findUnique
   */
  export type ventasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findUniqueOrThrow
   */
  export type ventasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas findFirst
   */
  export type ventasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findFirstOrThrow
   */
  export type ventasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ventas.
     */
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas findMany
   */
  export type ventasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter, which ventas to fetch.
     */
    where?: ventasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ventas to fetch.
     */
    orderBy?: ventasOrderByWithRelationInput | ventasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ventas.
     */
    cursor?: ventasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ventas.
     */
    skip?: number
    distinct?: VentasScalarFieldEnum | VentasScalarFieldEnum[]
  }

  /**
   * ventas create
   */
  export type ventasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to create a ventas.
     */
    data: XOR<ventasCreateInput, ventasUncheckedCreateInput>
  }

  /**
   * ventas createMany
   */
  export type ventasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ventas.
     */
    data: ventasCreateManyInput | ventasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ventas createManyAndReturn
   */
  export type ventasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ventas.
     */
    data: ventasCreateManyInput | ventasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ventas update
   */
  export type ventasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The data needed to update a ventas.
     */
    data: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
    /**
     * Choose, which ventas to update.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas updateMany
   */
  export type ventasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ventas.
     */
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyInput>
    /**
     * Filter which ventas to update
     */
    where?: ventasWhereInput
  }

  /**
   * ventas upsert
   */
  export type ventasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * The filter to search for the ventas to update in case it exists.
     */
    where: ventasWhereUniqueInput
    /**
     * In case the ventas found by the `where` argument doesn't exist, create a new ventas with this data.
     */
    create: XOR<ventasCreateInput, ventasUncheckedCreateInput>
    /**
     * In case the ventas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ventasUpdateInput, ventasUncheckedUpdateInput>
  }

  /**
   * ventas delete
   */
  export type ventasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
    /**
     * Filter which ventas to delete.
     */
    where: ventasWhereUniqueInput
  }

  /**
   * ventas deleteMany
   */
  export type ventasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ventas to delete
     */
    where?: ventasWhereInput
  }

  /**
   * ventas.detalle_ventas
   */
  export type ventas$detalle_ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_ventas
     */
    select?: detalle_ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_ventasInclude<ExtArgs> | null
    where?: detalle_ventasWhereInput
    orderBy?: detalle_ventasOrderByWithRelationInput | detalle_ventasOrderByWithRelationInput[]
    cursor?: detalle_ventasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_ventasScalarFieldEnum | Detalle_ventasScalarFieldEnum[]
  }

  /**
   * ventas.clientes
   */
  export type ventas$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    where?: clientesWhereInput
  }

  /**
   * ventas.perfiles
   */
  export type ventas$perfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfiles
     */
    select?: perfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilesInclude<ExtArgs> | null
    where?: perfilesWhereInput
  }

  /**
   * ventas without action
   */
  export type ventasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ventas
     */
    select?: ventasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ventasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    whatsapp: 'whatsapp',
    fecha_nacimiento: 'fecha_nacimiento',
    total_prendas_compradas: 'total_prendas_compradas',
    valor_total_vida: 'valor_total_vida',
    notas: 'notas',
    created_at: 'created_at'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const Configuracion_empresaScalarFieldEnum: {
    id: 'id',
    nombre_empresa: 'nombre_empresa',
    logo_url: 'logo_url',
    tema_activo: 'tema_activo',
    whatsapp_corporativo: 'whatsapp_corporativo',
    updated_at: 'updated_at'
  };

  export type Configuracion_empresaScalarFieldEnum = (typeof Configuracion_empresaScalarFieldEnum)[keyof typeof Configuracion_empresaScalarFieldEnum]


  export const Cuadres_cajaScalarFieldEnum: {
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

  export type Cuadres_cajaScalarFieldEnum = (typeof Cuadres_cajaScalarFieldEnum)[keyof typeof Cuadres_cajaScalarFieldEnum]


  export const Detalle_ventasScalarFieldEnum: {
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

  export type Detalle_ventasScalarFieldEnum = (typeof Detalle_ventasScalarFieldEnum)[keyof typeof Detalle_ventasScalarFieldEnum]


  export const Gastos_operativosScalarFieldEnum: {
    id: 'id',
    concepto: 'concepto',
    monto: 'monto',
    categoria: 'categoria',
    fecha_hora: 'fecha_hora',
    usuario_id: 'usuario_id'
  };

  export type Gastos_operativosScalarFieldEnum = (typeof Gastos_operativosScalarFieldEnum)[keyof typeof Gastos_operativosScalarFieldEnum]


  export const Inventario_tallasScalarFieldEnum: {
    id: 'id',
    producto_id: 'producto_id',
    talla: 'talla',
    cantidad: 'cantidad'
  };

  export type Inventario_tallasScalarFieldEnum = (typeof Inventario_tallasScalarFieldEnum)[keyof typeof Inventario_tallasScalarFieldEnum]


  export const Movimientos_inventarioScalarFieldEnum: {
    id: 'id',
    producto_id: 'producto_id',
    talla: 'talla',
    tipo: 'tipo',
    cantidad: 'cantidad',
    motivo: 'motivo',
    usuario_id: 'usuario_id',
    fecha_hora: 'fecha_hora'
  };

  export type Movimientos_inventarioScalarFieldEnum = (typeof Movimientos_inventarioScalarFieldEnum)[keyof typeof Movimientos_inventarioScalarFieldEnum]


  export const PerfilesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    rol: 'rol',
    created_at: 'created_at'
  };

  export type PerfilesScalarFieldEnum = (typeof PerfilesScalarFieldEnum)[keyof typeof PerfilesScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
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

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const VentasScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    cliente_id: 'cliente_id',
    fecha_hora: 'fecha_hora',
    canal_venta: 'canal_venta',
    metodo_pago: 'metodo_pago',
    total: 'total',
    utilidad_neta_venta: 'utilidad_neta_venta'
  };

  export type VentasScalarFieldEnum = (typeof VentasScalarFieldEnum)[keyof typeof VentasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    id?: UuidFilter<"clientes"> | string
    nombre?: StringFilter<"clientes"> | string
    whatsapp?: StringNullableFilter<"clientes"> | string | null
    fecha_nacimiento?: DateTimeNullableFilter<"clientes"> | Date | string | null
    total_prendas_compradas?: IntNullableFilter<"clientes"> | number | null
    valor_total_vida?: DecimalNullableFilter<"clientes"> | Decimal | DecimalJsLike | number | string | null
    notas?: StringNullableFilter<"clientes"> | string | null
    created_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    ventas?: VentasListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    total_prendas_compradas?: SortOrderInput | SortOrder
    valor_total_vida?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    ventas?: ventasOrderByRelationAggregateInput
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    nombre?: StringFilter<"clientes"> | string
    whatsapp?: StringNullableFilter<"clientes"> | string | null
    fecha_nacimiento?: DateTimeNullableFilter<"clientes"> | Date | string | null
    total_prendas_compradas?: IntNullableFilter<"clientes"> | number | null
    valor_total_vida?: DecimalNullableFilter<"clientes"> | Decimal | DecimalJsLike | number | string | null
    notas?: StringNullableFilter<"clientes"> | string | null
    created_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    ventas?: VentasListRelationFilter
  }, "id">

  export type clientesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    total_prendas_compradas?: SortOrderInput | SortOrder
    valor_total_vida?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"clientes"> | string
    nombre?: StringWithAggregatesFilter<"clientes"> | string
    whatsapp?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
    total_prendas_compradas?: IntNullableWithAggregatesFilter<"clientes"> | number | null
    valor_total_vida?: DecimalNullableWithAggregatesFilter<"clientes"> | Decimal | DecimalJsLike | number | string | null
    notas?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
  }

  export type configuracion_empresaWhereInput = {
    AND?: configuracion_empresaWhereInput | configuracion_empresaWhereInput[]
    OR?: configuracion_empresaWhereInput[]
    NOT?: configuracion_empresaWhereInput | configuracion_empresaWhereInput[]
    id?: UuidFilter<"configuracion_empresa"> | string
    nombre_empresa?: StringFilter<"configuracion_empresa"> | string
    logo_url?: StringNullableFilter<"configuracion_empresa"> | string | null
    tema_activo?: StringNullableFilter<"configuracion_empresa"> | string | null
    whatsapp_corporativo?: StringNullableFilter<"configuracion_empresa"> | string | null
    updated_at?: DateTimeNullableFilter<"configuracion_empresa"> | Date | string | null
  }

  export type configuracion_empresaOrderByWithRelationInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    tema_activo?: SortOrderInput | SortOrder
    whatsapp_corporativo?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type configuracion_empresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: configuracion_empresaWhereInput | configuracion_empresaWhereInput[]
    OR?: configuracion_empresaWhereInput[]
    NOT?: configuracion_empresaWhereInput | configuracion_empresaWhereInput[]
    nombre_empresa?: StringFilter<"configuracion_empresa"> | string
    logo_url?: StringNullableFilter<"configuracion_empresa"> | string | null
    tema_activo?: StringNullableFilter<"configuracion_empresa"> | string | null
    whatsapp_corporativo?: StringNullableFilter<"configuracion_empresa"> | string | null
    updated_at?: DateTimeNullableFilter<"configuracion_empresa"> | Date | string | null
  }, "id">

  export type configuracion_empresaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    tema_activo?: SortOrderInput | SortOrder
    whatsapp_corporativo?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: configuracion_empresaCountOrderByAggregateInput
    _max?: configuracion_empresaMaxOrderByAggregateInput
    _min?: configuracion_empresaMinOrderByAggregateInput
  }

  export type configuracion_empresaScalarWhereWithAggregatesInput = {
    AND?: configuracion_empresaScalarWhereWithAggregatesInput | configuracion_empresaScalarWhereWithAggregatesInput[]
    OR?: configuracion_empresaScalarWhereWithAggregatesInput[]
    NOT?: configuracion_empresaScalarWhereWithAggregatesInput | configuracion_empresaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"configuracion_empresa"> | string
    nombre_empresa?: StringWithAggregatesFilter<"configuracion_empresa"> | string
    logo_url?: StringNullableWithAggregatesFilter<"configuracion_empresa"> | string | null
    tema_activo?: StringNullableWithAggregatesFilter<"configuracion_empresa"> | string | null
    whatsapp_corporativo?: StringNullableWithAggregatesFilter<"configuracion_empresa"> | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"configuracion_empresa"> | Date | string | null
  }

  export type cuadres_cajaWhereInput = {
    AND?: cuadres_cajaWhereInput | cuadres_cajaWhereInput[]
    OR?: cuadres_cajaWhereInput[]
    NOT?: cuadres_cajaWhereInput | cuadres_cajaWhereInput[]
    id?: UuidFilter<"cuadres_caja"> | string
    usuario_staff_id?: UuidFilter<"cuadres_caja"> | string
    fecha_hora?: DateTimeNullableFilter<"cuadres_caja"> | Date | string | null
    monto_efectivo?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_yape?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_plin?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"cuadres_caja"> | string | null
    estado?: StringNullableFilter<"cuadres_caja"> | string | null
    perfiles?: XOR<PerfilesRelationFilter, perfilesWhereInput>
  }

  export type cuadres_cajaOrderByWithRelationInput = {
    id?: SortOrder
    usuario_staff_id?: SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    monto_efectivo?: SortOrderInput | SortOrder
    monto_yape?: SortOrderInput | SortOrder
    monto_plin?: SortOrderInput | SortOrder
    monto_transferencia?: SortOrderInput | SortOrder
    monto_tarjeta?: SortOrderInput | SortOrder
    monto_declarado?: SortOrder
    monto_sistema?: SortOrder
    diferencia?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    perfiles?: perfilesOrderByWithRelationInput
  }

  export type cuadres_cajaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cuadres_cajaWhereInput | cuadres_cajaWhereInput[]
    OR?: cuadres_cajaWhereInput[]
    NOT?: cuadres_cajaWhereInput | cuadres_cajaWhereInput[]
    usuario_staff_id?: UuidFilter<"cuadres_caja"> | string
    fecha_hora?: DateTimeNullableFilter<"cuadres_caja"> | Date | string | null
    monto_efectivo?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_yape?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_plin?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"cuadres_caja"> | string | null
    estado?: StringNullableFilter<"cuadres_caja"> | string | null
    perfiles?: XOR<PerfilesRelationFilter, perfilesWhereInput>
  }, "id">

  export type cuadres_cajaOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_staff_id?: SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    monto_efectivo?: SortOrderInput | SortOrder
    monto_yape?: SortOrderInput | SortOrder
    monto_plin?: SortOrderInput | SortOrder
    monto_transferencia?: SortOrderInput | SortOrder
    monto_tarjeta?: SortOrderInput | SortOrder
    monto_declarado?: SortOrder
    monto_sistema?: SortOrder
    diferencia?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: cuadres_cajaCountOrderByAggregateInput
    _avg?: cuadres_cajaAvgOrderByAggregateInput
    _max?: cuadres_cajaMaxOrderByAggregateInput
    _min?: cuadres_cajaMinOrderByAggregateInput
    _sum?: cuadres_cajaSumOrderByAggregateInput
  }

  export type cuadres_cajaScalarWhereWithAggregatesInput = {
    AND?: cuadres_cajaScalarWhereWithAggregatesInput | cuadres_cajaScalarWhereWithAggregatesInput[]
    OR?: cuadres_cajaScalarWhereWithAggregatesInput[]
    NOT?: cuadres_cajaScalarWhereWithAggregatesInput | cuadres_cajaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"cuadres_caja"> | string
    usuario_staff_id?: UuidWithAggregatesFilter<"cuadres_caja"> | string
    fecha_hora?: DateTimeNullableWithAggregatesFilter<"cuadres_caja"> | Date | string | null
    monto_efectivo?: DecimalNullableWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_yape?: DecimalNullableWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_plin?: DecimalNullableWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: DecimalNullableWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: DecimalNullableWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalWithAggregatesFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableWithAggregatesFilter<"cuadres_caja"> | string | null
    estado?: StringNullableWithAggregatesFilter<"cuadres_caja"> | string | null
  }

  export type detalle_ventasWhereInput = {
    AND?: detalle_ventasWhereInput | detalle_ventasWhereInput[]
    OR?: detalle_ventasWhereInput[]
    NOT?: detalle_ventasWhereInput | detalle_ventasWhereInput[]
    id?: UuidFilter<"detalle_ventas"> | string
    venta_id?: UuidFilter<"detalle_ventas"> | string
    producto_id?: UuidFilter<"detalle_ventas"> | string
    talla?: StringFilter<"detalle_ventas"> | string
    cantidad?: IntFilter<"detalle_ventas"> | number
    costo_inversion_unitario?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: DecimalNullableFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string | null
    productos?: XOR<ProductosRelationFilter, productosWhereInput>
    ventas?: XOR<VentasRelationFilter, ventasWhereInput>
  }

  export type detalle_ventasOrderByWithRelationInput = {
    id?: SortOrder
    venta_id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
    costo_inversion_unitario?: SortOrder
    precio_venta_unitario?: SortOrder
    subtotal?: SortOrder
    utilidad_subtotal?: SortOrderInput | SortOrder
    productos?: productosOrderByWithRelationInput
    ventas?: ventasOrderByWithRelationInput
  }

  export type detalle_ventasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: detalle_ventasWhereInput | detalle_ventasWhereInput[]
    OR?: detalle_ventasWhereInput[]
    NOT?: detalle_ventasWhereInput | detalle_ventasWhereInput[]
    venta_id?: UuidFilter<"detalle_ventas"> | string
    producto_id?: UuidFilter<"detalle_ventas"> | string
    talla?: StringFilter<"detalle_ventas"> | string
    cantidad?: IntFilter<"detalle_ventas"> | number
    costo_inversion_unitario?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: DecimalNullableFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string | null
    productos?: XOR<ProductosRelationFilter, productosWhereInput>
    ventas?: XOR<VentasRelationFilter, ventasWhereInput>
  }, "id">

  export type detalle_ventasOrderByWithAggregationInput = {
    id?: SortOrder
    venta_id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
    costo_inversion_unitario?: SortOrder
    precio_venta_unitario?: SortOrder
    subtotal?: SortOrder
    utilidad_subtotal?: SortOrderInput | SortOrder
    _count?: detalle_ventasCountOrderByAggregateInput
    _avg?: detalle_ventasAvgOrderByAggregateInput
    _max?: detalle_ventasMaxOrderByAggregateInput
    _min?: detalle_ventasMinOrderByAggregateInput
    _sum?: detalle_ventasSumOrderByAggregateInput
  }

  export type detalle_ventasScalarWhereWithAggregatesInput = {
    AND?: detalle_ventasScalarWhereWithAggregatesInput | detalle_ventasScalarWhereWithAggregatesInput[]
    OR?: detalle_ventasScalarWhereWithAggregatesInput[]
    NOT?: detalle_ventasScalarWhereWithAggregatesInput | detalle_ventasScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"detalle_ventas"> | string
    venta_id?: UuidWithAggregatesFilter<"detalle_ventas"> | string
    producto_id?: UuidWithAggregatesFilter<"detalle_ventas"> | string
    talla?: StringWithAggregatesFilter<"detalle_ventas"> | string
    cantidad?: IntWithAggregatesFilter<"detalle_ventas"> | number
    costo_inversion_unitario?: DecimalWithAggregatesFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalWithAggregatesFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: DecimalNullableWithAggregatesFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string | null
  }

  export type gastos_operativosWhereInput = {
    AND?: gastos_operativosWhereInput | gastos_operativosWhereInput[]
    OR?: gastos_operativosWhereInput[]
    NOT?: gastos_operativosWhereInput | gastos_operativosWhereInput[]
    id?: UuidFilter<"gastos_operativos"> | string
    concepto?: StringFilter<"gastos_operativos"> | string
    monto?: DecimalFilter<"gastos_operativos"> | Decimal | DecimalJsLike | number | string
    categoria?: StringNullableFilter<"gastos_operativos"> | string | null
    fecha_hora?: DateTimeNullableFilter<"gastos_operativos"> | Date | string | null
    usuario_id?: UuidNullableFilter<"gastos_operativos"> | string | null
    perfiles?: XOR<PerfilesNullableRelationFilter, perfilesWhereInput> | null
  }

  export type gastos_operativosOrderByWithRelationInput = {
    id?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    categoria?: SortOrderInput | SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    perfiles?: perfilesOrderByWithRelationInput
  }

  export type gastos_operativosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: gastos_operativosWhereInput | gastos_operativosWhereInput[]
    OR?: gastos_operativosWhereInput[]
    NOT?: gastos_operativosWhereInput | gastos_operativosWhereInput[]
    concepto?: StringFilter<"gastos_operativos"> | string
    monto?: DecimalFilter<"gastos_operativos"> | Decimal | DecimalJsLike | number | string
    categoria?: StringNullableFilter<"gastos_operativos"> | string | null
    fecha_hora?: DateTimeNullableFilter<"gastos_operativos"> | Date | string | null
    usuario_id?: UuidNullableFilter<"gastos_operativos"> | string | null
    perfiles?: XOR<PerfilesNullableRelationFilter, perfilesWhereInput> | null
  }, "id">

  export type gastos_operativosOrderByWithAggregationInput = {
    id?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    categoria?: SortOrderInput | SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    _count?: gastos_operativosCountOrderByAggregateInput
    _avg?: gastos_operativosAvgOrderByAggregateInput
    _max?: gastos_operativosMaxOrderByAggregateInput
    _min?: gastos_operativosMinOrderByAggregateInput
    _sum?: gastos_operativosSumOrderByAggregateInput
  }

  export type gastos_operativosScalarWhereWithAggregatesInput = {
    AND?: gastos_operativosScalarWhereWithAggregatesInput | gastos_operativosScalarWhereWithAggregatesInput[]
    OR?: gastos_operativosScalarWhereWithAggregatesInput[]
    NOT?: gastos_operativosScalarWhereWithAggregatesInput | gastos_operativosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"gastos_operativos"> | string
    concepto?: StringWithAggregatesFilter<"gastos_operativos"> | string
    monto?: DecimalWithAggregatesFilter<"gastos_operativos"> | Decimal | DecimalJsLike | number | string
    categoria?: StringNullableWithAggregatesFilter<"gastos_operativos"> | string | null
    fecha_hora?: DateTimeNullableWithAggregatesFilter<"gastos_operativos"> | Date | string | null
    usuario_id?: UuidNullableWithAggregatesFilter<"gastos_operativos"> | string | null
  }

  export type inventario_tallasWhereInput = {
    AND?: inventario_tallasWhereInput | inventario_tallasWhereInput[]
    OR?: inventario_tallasWhereInput[]
    NOT?: inventario_tallasWhereInput | inventario_tallasWhereInput[]
    id?: UuidFilter<"inventario_tallas"> | string
    producto_id?: UuidFilter<"inventario_tallas"> | string
    talla?: StringFilter<"inventario_tallas"> | string
    cantidad?: IntFilter<"inventario_tallas"> | number
    productos?: XOR<ProductosRelationFilter, productosWhereInput>
  }

  export type inventario_tallasOrderByWithRelationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
    productos?: productosOrderByWithRelationInput
  }

  export type inventario_tallasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    producto_id_talla?: inventario_tallasProducto_idTallaCompoundUniqueInput
    AND?: inventario_tallasWhereInput | inventario_tallasWhereInput[]
    OR?: inventario_tallasWhereInput[]
    NOT?: inventario_tallasWhereInput | inventario_tallasWhereInput[]
    producto_id?: UuidFilter<"inventario_tallas"> | string
    talla?: StringFilter<"inventario_tallas"> | string
    cantidad?: IntFilter<"inventario_tallas"> | number
    productos?: XOR<ProductosRelationFilter, productosWhereInput>
  }, "id" | "producto_id_talla">

  export type inventario_tallasOrderByWithAggregationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
    _count?: inventario_tallasCountOrderByAggregateInput
    _avg?: inventario_tallasAvgOrderByAggregateInput
    _max?: inventario_tallasMaxOrderByAggregateInput
    _min?: inventario_tallasMinOrderByAggregateInput
    _sum?: inventario_tallasSumOrderByAggregateInput
  }

  export type inventario_tallasScalarWhereWithAggregatesInput = {
    AND?: inventario_tallasScalarWhereWithAggregatesInput | inventario_tallasScalarWhereWithAggregatesInput[]
    OR?: inventario_tallasScalarWhereWithAggregatesInput[]
    NOT?: inventario_tallasScalarWhereWithAggregatesInput | inventario_tallasScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"inventario_tallas"> | string
    producto_id?: UuidWithAggregatesFilter<"inventario_tallas"> | string
    talla?: StringWithAggregatesFilter<"inventario_tallas"> | string
    cantidad?: IntWithAggregatesFilter<"inventario_tallas"> | number
  }

  export type movimientos_inventarioWhereInput = {
    AND?: movimientos_inventarioWhereInput | movimientos_inventarioWhereInput[]
    OR?: movimientos_inventarioWhereInput[]
    NOT?: movimientos_inventarioWhereInput | movimientos_inventarioWhereInput[]
    id?: UuidFilter<"movimientos_inventario"> | string
    producto_id?: UuidFilter<"movimientos_inventario"> | string
    talla?: StringFilter<"movimientos_inventario"> | string
    tipo?: StringFilter<"movimientos_inventario"> | string
    cantidad?: IntFilter<"movimientos_inventario"> | number
    motivo?: StringNullableFilter<"movimientos_inventario"> | string | null
    usuario_id?: UuidNullableFilter<"movimientos_inventario"> | string | null
    fecha_hora?: DateTimeNullableFilter<"movimientos_inventario"> | Date | string | null
    productos?: XOR<ProductosRelationFilter, productosWhereInput>
    perfiles?: XOR<PerfilesNullableRelationFilter, perfilesWhereInput> | null
  }

  export type movimientos_inventarioOrderByWithRelationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    productos?: productosOrderByWithRelationInput
    perfiles?: perfilesOrderByWithRelationInput
  }

  export type movimientos_inventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: movimientos_inventarioWhereInput | movimientos_inventarioWhereInput[]
    OR?: movimientos_inventarioWhereInput[]
    NOT?: movimientos_inventarioWhereInput | movimientos_inventarioWhereInput[]
    producto_id?: UuidFilter<"movimientos_inventario"> | string
    talla?: StringFilter<"movimientos_inventario"> | string
    tipo?: StringFilter<"movimientos_inventario"> | string
    cantidad?: IntFilter<"movimientos_inventario"> | number
    motivo?: StringNullableFilter<"movimientos_inventario"> | string | null
    usuario_id?: UuidNullableFilter<"movimientos_inventario"> | string | null
    fecha_hora?: DateTimeNullableFilter<"movimientos_inventario"> | Date | string | null
    productos?: XOR<ProductosRelationFilter, productosWhereInput>
    perfiles?: XOR<PerfilesNullableRelationFilter, perfilesWhereInput> | null
  }, "id">

  export type movimientos_inventarioOrderByWithAggregationInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    _count?: movimientos_inventarioCountOrderByAggregateInput
    _avg?: movimientos_inventarioAvgOrderByAggregateInput
    _max?: movimientos_inventarioMaxOrderByAggregateInput
    _min?: movimientos_inventarioMinOrderByAggregateInput
    _sum?: movimientos_inventarioSumOrderByAggregateInput
  }

  export type movimientos_inventarioScalarWhereWithAggregatesInput = {
    AND?: movimientos_inventarioScalarWhereWithAggregatesInput | movimientos_inventarioScalarWhereWithAggregatesInput[]
    OR?: movimientos_inventarioScalarWhereWithAggregatesInput[]
    NOT?: movimientos_inventarioScalarWhereWithAggregatesInput | movimientos_inventarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"movimientos_inventario"> | string
    producto_id?: UuidWithAggregatesFilter<"movimientos_inventario"> | string
    talla?: StringWithAggregatesFilter<"movimientos_inventario"> | string
    tipo?: StringWithAggregatesFilter<"movimientos_inventario"> | string
    cantidad?: IntWithAggregatesFilter<"movimientos_inventario"> | number
    motivo?: StringNullableWithAggregatesFilter<"movimientos_inventario"> | string | null
    usuario_id?: UuidNullableWithAggregatesFilter<"movimientos_inventario"> | string | null
    fecha_hora?: DateTimeNullableWithAggregatesFilter<"movimientos_inventario"> | Date | string | null
  }

  export type perfilesWhereInput = {
    AND?: perfilesWhereInput | perfilesWhereInput[]
    OR?: perfilesWhereInput[]
    NOT?: perfilesWhereInput | perfilesWhereInput[]
    id?: UuidFilter<"perfiles"> | string
    nombre?: StringFilter<"perfiles"> | string
    email?: StringFilter<"perfiles"> | string
    rol?: StringFilter<"perfiles"> | string
    created_at?: DateTimeNullableFilter<"perfiles"> | Date | string | null
    cuadres_caja?: Cuadres_cajaListRelationFilter
    gastos_operativos?: Gastos_operativosListRelationFilter
    movimientos_inventario?: Movimientos_inventarioListRelationFilter
    ventas?: VentasListRelationFilter
  }

  export type perfilesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    created_at?: SortOrderInput | SortOrder
    cuadres_caja?: cuadres_cajaOrderByRelationAggregateInput
    gastos_operativos?: gastos_operativosOrderByRelationAggregateInput
    movimientos_inventario?: movimientos_inventarioOrderByRelationAggregateInput
    ventas?: ventasOrderByRelationAggregateInput
  }

  export type perfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: perfilesWhereInput | perfilesWhereInput[]
    OR?: perfilesWhereInput[]
    NOT?: perfilesWhereInput | perfilesWhereInput[]
    nombre?: StringFilter<"perfiles"> | string
    rol?: StringFilter<"perfiles"> | string
    created_at?: DateTimeNullableFilter<"perfiles"> | Date | string | null
    cuadres_caja?: Cuadres_cajaListRelationFilter
    gastos_operativos?: Gastos_operativosListRelationFilter
    movimientos_inventario?: Movimientos_inventarioListRelationFilter
    ventas?: VentasListRelationFilter
  }, "id" | "email">

  export type perfilesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: perfilesCountOrderByAggregateInput
    _max?: perfilesMaxOrderByAggregateInput
    _min?: perfilesMinOrderByAggregateInput
  }

  export type perfilesScalarWhereWithAggregatesInput = {
    AND?: perfilesScalarWhereWithAggregatesInput | perfilesScalarWhereWithAggregatesInput[]
    OR?: perfilesScalarWhereWithAggregatesInput[]
    NOT?: perfilesScalarWhereWithAggregatesInput | perfilesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"perfiles"> | string
    nombre?: StringWithAggregatesFilter<"perfiles"> | string
    email?: StringWithAggregatesFilter<"perfiles"> | string
    rol?: StringWithAggregatesFilter<"perfiles"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"perfiles"> | Date | string | null
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id?: UuidFilter<"productos"> | string
    codigo_barras?: StringNullableFilter<"productos"> | string | null
    nombre?: StringFilter<"productos"> | string
    categoria?: StringFilter<"productos"> | string
    color_principal?: StringFilter<"productos"> | string
    costo_inversion?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    margen_neto?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    imagen_url?: StringNullableFilter<"productos"> | string | null
    activo?: BoolNullableFilter<"productos"> | boolean | null
    created_at?: DateTimeNullableFilter<"productos"> | Date | string | null
    detalle_ventas?: Detalle_ventasListRelationFilter
    inventario_tallas?: Inventario_tallasListRelationFilter
    movimientos_inventario?: Movimientos_inventarioListRelationFilter
  }

  export type productosOrderByWithRelationInput = {
    id?: SortOrder
    codigo_barras?: SortOrderInput | SortOrder
    nombre?: SortOrder
    categoria?: SortOrder
    color_principal?: SortOrder
    costo_inversion?: SortOrder
    precio_venta?: SortOrder
    margen_neto?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    detalle_ventas?: detalle_ventasOrderByRelationAggregateInput
    inventario_tallas?: inventario_tallasOrderByRelationAggregateInput
    movimientos_inventario?: movimientos_inventarioOrderByRelationAggregateInput
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo_barras?: string
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    nombre?: StringFilter<"productos"> | string
    categoria?: StringFilter<"productos"> | string
    color_principal?: StringFilter<"productos"> | string
    costo_inversion?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    margen_neto?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    imagen_url?: StringNullableFilter<"productos"> | string | null
    activo?: BoolNullableFilter<"productos"> | boolean | null
    created_at?: DateTimeNullableFilter<"productos"> | Date | string | null
    detalle_ventas?: Detalle_ventasListRelationFilter
    inventario_tallas?: Inventario_tallasListRelationFilter
    movimientos_inventario?: Movimientos_inventarioListRelationFilter
  }, "id" | "codigo_barras">

  export type productosOrderByWithAggregationInput = {
    id?: SortOrder
    codigo_barras?: SortOrderInput | SortOrder
    nombre?: SortOrder
    categoria?: SortOrder
    color_principal?: SortOrder
    costo_inversion?: SortOrder
    precio_venta?: SortOrder
    margen_neto?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"productos"> | string
    codigo_barras?: StringNullableWithAggregatesFilter<"productos"> | string | null
    nombre?: StringWithAggregatesFilter<"productos"> | string
    categoria?: StringWithAggregatesFilter<"productos"> | string
    color_principal?: StringWithAggregatesFilter<"productos"> | string
    costo_inversion?: DecimalWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string
    margen_neto?: DecimalNullableWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    imagen_url?: StringNullableWithAggregatesFilter<"productos"> | string | null
    activo?: BoolNullableWithAggregatesFilter<"productos"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"productos"> | Date | string | null
  }

  export type ventasWhereInput = {
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    id?: UuidFilter<"ventas"> | string
    usuario_id?: UuidNullableFilter<"ventas"> | string | null
    cliente_id?: UuidNullableFilter<"ventas"> | string | null
    fecha_hora?: DateTimeNullableFilter<"ventas"> | Date | string | null
    canal_venta?: StringFilter<"ventas"> | string
    metodo_pago?: StringFilter<"ventas"> | string
    total?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    detalle_ventas?: Detalle_ventasListRelationFilter
    clientes?: XOR<ClientesNullableRelationFilter, clientesWhereInput> | null
    perfiles?: XOR<PerfilesNullableRelationFilter, perfilesWhereInput> | null
  }

  export type ventasOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    cliente_id?: SortOrderInput | SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    canal_venta?: SortOrder
    metodo_pago?: SortOrder
    total?: SortOrder
    utilidad_neta_venta?: SortOrder
    detalle_ventas?: detalle_ventasOrderByRelationAggregateInput
    clientes?: clientesOrderByWithRelationInput
    perfiles?: perfilesOrderByWithRelationInput
  }

  export type ventasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ventasWhereInput | ventasWhereInput[]
    OR?: ventasWhereInput[]
    NOT?: ventasWhereInput | ventasWhereInput[]
    usuario_id?: UuidNullableFilter<"ventas"> | string | null
    cliente_id?: UuidNullableFilter<"ventas"> | string | null
    fecha_hora?: DateTimeNullableFilter<"ventas"> | Date | string | null
    canal_venta?: StringFilter<"ventas"> | string
    metodo_pago?: StringFilter<"ventas"> | string
    total?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    detalle_ventas?: Detalle_ventasListRelationFilter
    clientes?: XOR<ClientesNullableRelationFilter, clientesWhereInput> | null
    perfiles?: XOR<PerfilesNullableRelationFilter, perfilesWhereInput> | null
  }, "id">

  export type ventasOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    cliente_id?: SortOrderInput | SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    canal_venta?: SortOrder
    metodo_pago?: SortOrder
    total?: SortOrder
    utilidad_neta_venta?: SortOrder
    _count?: ventasCountOrderByAggregateInput
    _avg?: ventasAvgOrderByAggregateInput
    _max?: ventasMaxOrderByAggregateInput
    _min?: ventasMinOrderByAggregateInput
    _sum?: ventasSumOrderByAggregateInput
  }

  export type ventasScalarWhereWithAggregatesInput = {
    AND?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    OR?: ventasScalarWhereWithAggregatesInput[]
    NOT?: ventasScalarWhereWithAggregatesInput | ventasScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ventas"> | string
    usuario_id?: UuidNullableWithAggregatesFilter<"ventas"> | string | null
    cliente_id?: UuidNullableWithAggregatesFilter<"ventas"> | string | null
    fecha_hora?: DateTimeNullableWithAggregatesFilter<"ventas"> | Date | string | null
    canal_venta?: StringWithAggregatesFilter<"ventas"> | string
    metodo_pago?: StringWithAggregatesFilter<"ventas"> | string
    total?: DecimalWithAggregatesFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalWithAggregatesFilter<"ventas"> | Decimal | DecimalJsLike | number | string
  }

  export type clientesCreateInput = {
    id?: string
    nombre: string
    whatsapp?: string | null
    fecha_nacimiento?: Date | string | null
    total_prendas_compradas?: number | null
    valor_total_vida?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    created_at?: Date | string | null
    ventas?: ventasCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id?: string
    nombre: string
    whatsapp?: string | null
    fecha_nacimiento?: Date | string | null
    total_prendas_compradas?: number | null
    valor_total_vida?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    created_at?: Date | string | null
    ventas?: ventasUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_prendas_compradas?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total_vida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventas?: ventasUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_prendas_compradas?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total_vida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventas?: ventasUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id?: string
    nombre: string
    whatsapp?: string | null
    fecha_nacimiento?: Date | string | null
    total_prendas_compradas?: number | null
    valor_total_vida?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    created_at?: Date | string | null
  }

  export type clientesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_prendas_compradas?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total_vida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_prendas_compradas?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total_vida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type configuracion_empresaCreateInput = {
    id?: string
    nombre_empresa?: string
    logo_url?: string | null
    tema_activo?: string | null
    whatsapp_corporativo?: string | null
    updated_at?: Date | string | null
  }

  export type configuracion_empresaUncheckedCreateInput = {
    id?: string
    nombre_empresa?: string
    logo_url?: string | null
    tema_activo?: string | null
    whatsapp_corporativo?: string | null
    updated_at?: Date | string | null
  }

  export type configuracion_empresaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    tema_activo?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_corporativo?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type configuracion_empresaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    tema_activo?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_corporativo?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type configuracion_empresaCreateManyInput = {
    id?: string
    nombre_empresa?: string
    logo_url?: string | null
    tema_activo?: string | null
    whatsapp_corporativo?: string | null
    updated_at?: Date | string | null
  }

  export type configuracion_empresaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    tema_activo?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_corporativo?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type configuracion_empresaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    tema_activo?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_corporativo?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuadres_cajaCreateInput = {
    id?: string
    fecha_hora?: Date | string | null
    monto_efectivo?: Decimal | DecimalJsLike | number | string | null
    monto_yape?: Decimal | DecimalJsLike | number | string | null
    monto_plin?: Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: Decimal | DecimalJsLike | number | string | null
    monto_declarado: Decimal | DecimalJsLike | number | string
    monto_sistema: Decimal | DecimalJsLike | number | string
    diferencia?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    estado?: string | null
    perfiles: perfilesCreateNestedOneWithoutCuadres_cajaInput
  }

  export type cuadres_cajaUncheckedCreateInput = {
    id?: string
    usuario_staff_id: string
    fecha_hora?: Date | string | null
    monto_efectivo?: Decimal | DecimalJsLike | number | string | null
    monto_yape?: Decimal | DecimalJsLike | number | string | null
    monto_plin?: Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: Decimal | DecimalJsLike | number | string | null
    monto_declarado: Decimal | DecimalJsLike | number | string
    monto_sistema: Decimal | DecimalJsLike | number | string
    diferencia?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    estado?: string | null
  }

  export type cuadres_cajaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_efectivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_yape?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_plin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    perfiles?: perfilesUpdateOneRequiredWithoutCuadres_cajaNestedInput
  }

  export type cuadres_cajaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_staff_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_efectivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_yape?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_plin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuadres_cajaCreateManyInput = {
    id?: string
    usuario_staff_id: string
    fecha_hora?: Date | string | null
    monto_efectivo?: Decimal | DecimalJsLike | number | string | null
    monto_yape?: Decimal | DecimalJsLike | number | string | null
    monto_plin?: Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: Decimal | DecimalJsLike | number | string | null
    monto_declarado: Decimal | DecimalJsLike | number | string
    monto_sistema: Decimal | DecimalJsLike | number | string
    diferencia?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    estado?: string | null
  }

  export type cuadres_cajaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_efectivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_yape?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_plin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuadres_cajaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_staff_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_efectivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_yape?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_plin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalle_ventasCreateInput = {
    id?: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
    productos: productosCreateNestedOneWithoutDetalle_ventasInput
    ventas: ventasCreateNestedOneWithoutDetalle_ventasInput
  }

  export type detalle_ventasUncheckedCreateInput = {
    id?: string
    venta_id: string
    producto_id: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    productos?: productosUpdateOneRequiredWithoutDetalle_ventasNestedInput
    ventas?: ventasUpdateOneRequiredWithoutDetalle_ventasNestedInput
  }

  export type detalle_ventasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venta_id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasCreateManyInput = {
    id?: string
    venta_id: string
    producto_id: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venta_id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type gastos_operativosCreateInput = {
    id?: string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    categoria?: string | null
    fecha_hora?: Date | string | null
    perfiles?: perfilesCreateNestedOneWithoutGastos_operativosInput
  }

  export type gastos_operativosUncheckedCreateInput = {
    id?: string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    categoria?: string | null
    fecha_hora?: Date | string | null
    usuario_id?: string | null
  }

  export type gastos_operativosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfiles?: perfilesUpdateOneWithoutGastos_operativosNestedInput
  }

  export type gastos_operativosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gastos_operativosCreateManyInput = {
    id?: string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    categoria?: string | null
    fecha_hora?: Date | string | null
    usuario_id?: string | null
  }

  export type gastos_operativosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gastos_operativosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inventario_tallasCreateInput = {
    id?: string
    talla: string
    cantidad?: number
    productos: productosCreateNestedOneWithoutInventario_tallasInput
  }

  export type inventario_tallasUncheckedCreateInput = {
    id?: string
    producto_id: string
    talla: string
    cantidad?: number
  }

  export type inventario_tallasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    productos?: productosUpdateOneRequiredWithoutInventario_tallasNestedInput
  }

  export type inventario_tallasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type inventario_tallasCreateManyInput = {
    id?: string
    producto_id: string
    talla: string
    cantidad?: number
  }

  export type inventario_tallasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type inventario_tallasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type movimientos_inventarioCreateInput = {
    id?: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    fecha_hora?: Date | string | null
    productos: productosCreateNestedOneWithoutMovimientos_inventarioInput
    perfiles?: perfilesCreateNestedOneWithoutMovimientos_inventarioInput
  }

  export type movimientos_inventarioUncheckedCreateInput = {
    id?: string
    producto_id: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    usuario_id?: string | null
    fecha_hora?: Date | string | null
  }

  export type movimientos_inventarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateOneRequiredWithoutMovimientos_inventarioNestedInput
    perfiles?: perfilesUpdateOneWithoutMovimientos_inventarioNestedInput
  }

  export type movimientos_inventarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_inventarioCreateManyInput = {
    id?: string
    producto_id: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    usuario_id?: string | null
    fecha_hora?: Date | string | null
  }

  export type movimientos_inventarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_inventarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type perfilesCreateInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaCreateNestedManyWithoutPerfilesInput
    gastos_operativos?: gastos_operativosCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioCreateNestedManyWithoutPerfilesInput
    ventas?: ventasCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedCreateNestedManyWithoutPerfilesInput
    gastos_operativos?: gastos_operativosUncheckedCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioUncheckedCreateNestedManyWithoutPerfilesInput
    ventas?: ventasUncheckedCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUpdateManyWithoutPerfilesNestedInput
    gastos_operativos?: gastos_operativosUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedUpdateManyWithoutPerfilesNestedInput
    gastos_operativos?: gastos_operativosUncheckedUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUncheckedUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesCreateManyInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
  }

  export type perfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type perfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosCreateInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    detalle_ventas?: detalle_ventasCreateNestedManyWithoutProductosInput
    inventario_tallas?: inventario_tallasCreateNestedManyWithoutProductosInput
    movimientos_inventario?: movimientos_inventarioCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    detalle_ventas?: detalle_ventasUncheckedCreateNestedManyWithoutProductosInput
    inventario_tallas?: inventario_tallasUncheckedCreateNestedManyWithoutProductosInput
    movimientos_inventario?: movimientos_inventarioUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_ventas?: detalle_ventasUpdateManyWithoutProductosNestedInput
    inventario_tallas?: inventario_tallasUpdateManyWithoutProductosNestedInput
    movimientos_inventario?: movimientos_inventarioUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_ventas?: detalle_ventasUncheckedUpdateManyWithoutProductosNestedInput
    inventario_tallas?: inventario_tallasUncheckedUpdateManyWithoutProductosNestedInput
    movimientos_inventario?: movimientos_inventarioUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateManyInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
  }

  export type productosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventasCreateInput = {
    id?: string
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasCreateNestedManyWithoutVentasInput
    clientes?: clientesCreateNestedOneWithoutVentasInput
    perfiles?: perfilesCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateInput = {
    id?: string
    usuario_id?: string | null
    cliente_id?: string | null
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUpdateManyWithoutVentasNestedInput
    clientes?: clientesUpdateOneWithoutVentasNestedInput
    perfiles?: perfilesUpdateOneWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasCreateManyInput = {
    id?: string
    usuario_id?: string | null
    cliente_id?: string | null
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
  }

  export type ventasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ventasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type VentasListRelationFilter = {
    every?: ventasWhereInput
    some?: ventasWhereInput
    none?: ventasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ventasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    whatsapp?: SortOrder
    fecha_nacimiento?: SortOrder
    total_prendas_compradas?: SortOrder
    valor_total_vida?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    total_prendas_compradas?: SortOrder
    valor_total_vida?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    whatsapp?: SortOrder
    fecha_nacimiento?: SortOrder
    total_prendas_compradas?: SortOrder
    valor_total_vida?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    whatsapp?: SortOrder
    fecha_nacimiento?: SortOrder
    total_prendas_compradas?: SortOrder
    valor_total_vida?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    total_prendas_compradas?: SortOrder
    valor_total_vida?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type configuracion_empresaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    logo_url?: SortOrder
    tema_activo?: SortOrder
    whatsapp_corporativo?: SortOrder
    updated_at?: SortOrder
  }

  export type configuracion_empresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    logo_url?: SortOrder
    tema_activo?: SortOrder
    whatsapp_corporativo?: SortOrder
    updated_at?: SortOrder
  }

  export type configuracion_empresaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre_empresa?: SortOrder
    logo_url?: SortOrder
    tema_activo?: SortOrder
    whatsapp_corporativo?: SortOrder
    updated_at?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PerfilesRelationFilter = {
    is?: perfilesWhereInput
    isNot?: perfilesWhereInput
  }

  export type cuadres_cajaCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_staff_id?: SortOrder
    fecha_hora?: SortOrder
    monto_efectivo?: SortOrder
    monto_yape?: SortOrder
    monto_plin?: SortOrder
    monto_transferencia?: SortOrder
    monto_tarjeta?: SortOrder
    monto_declarado?: SortOrder
    monto_sistema?: SortOrder
    diferencia?: SortOrder
    observaciones?: SortOrder
    estado?: SortOrder
  }

  export type cuadres_cajaAvgOrderByAggregateInput = {
    monto_efectivo?: SortOrder
    monto_yape?: SortOrder
    monto_plin?: SortOrder
    monto_transferencia?: SortOrder
    monto_tarjeta?: SortOrder
    monto_declarado?: SortOrder
    monto_sistema?: SortOrder
    diferencia?: SortOrder
  }

  export type cuadres_cajaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_staff_id?: SortOrder
    fecha_hora?: SortOrder
    monto_efectivo?: SortOrder
    monto_yape?: SortOrder
    monto_plin?: SortOrder
    monto_transferencia?: SortOrder
    monto_tarjeta?: SortOrder
    monto_declarado?: SortOrder
    monto_sistema?: SortOrder
    diferencia?: SortOrder
    observaciones?: SortOrder
    estado?: SortOrder
  }

  export type cuadres_cajaMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_staff_id?: SortOrder
    fecha_hora?: SortOrder
    monto_efectivo?: SortOrder
    monto_yape?: SortOrder
    monto_plin?: SortOrder
    monto_transferencia?: SortOrder
    monto_tarjeta?: SortOrder
    monto_declarado?: SortOrder
    monto_sistema?: SortOrder
    diferencia?: SortOrder
    observaciones?: SortOrder
    estado?: SortOrder
  }

  export type cuadres_cajaSumOrderByAggregateInput = {
    monto_efectivo?: SortOrder
    monto_yape?: SortOrder
    monto_plin?: SortOrder
    monto_transferencia?: SortOrder
    monto_tarjeta?: SortOrder
    monto_declarado?: SortOrder
    monto_sistema?: SortOrder
    diferencia?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductosRelationFilter = {
    is?: productosWhereInput
    isNot?: productosWhereInput
  }

  export type VentasRelationFilter = {
    is?: ventasWhereInput
    isNot?: ventasWhereInput
  }

  export type detalle_ventasCountOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
    costo_inversion_unitario?: SortOrder
    precio_venta_unitario?: SortOrder
    subtotal?: SortOrder
    utilidad_subtotal?: SortOrder
  }

  export type detalle_ventasAvgOrderByAggregateInput = {
    cantidad?: SortOrder
    costo_inversion_unitario?: SortOrder
    precio_venta_unitario?: SortOrder
    subtotal?: SortOrder
    utilidad_subtotal?: SortOrder
  }

  export type detalle_ventasMaxOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
    costo_inversion_unitario?: SortOrder
    precio_venta_unitario?: SortOrder
    subtotal?: SortOrder
    utilidad_subtotal?: SortOrder
  }

  export type detalle_ventasMinOrderByAggregateInput = {
    id?: SortOrder
    venta_id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
    costo_inversion_unitario?: SortOrder
    precio_venta_unitario?: SortOrder
    subtotal?: SortOrder
    utilidad_subtotal?: SortOrder
  }

  export type detalle_ventasSumOrderByAggregateInput = {
    cantidad?: SortOrder
    costo_inversion_unitario?: SortOrder
    precio_venta_unitario?: SortOrder
    subtotal?: SortOrder
    utilidad_subtotal?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type PerfilesNullableRelationFilter = {
    is?: perfilesWhereInput | null
    isNot?: perfilesWhereInput | null
  }

  export type gastos_operativosCountOrderByAggregateInput = {
    id?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    categoria?: SortOrder
    fecha_hora?: SortOrder
    usuario_id?: SortOrder
  }

  export type gastos_operativosAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type gastos_operativosMaxOrderByAggregateInput = {
    id?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    categoria?: SortOrder
    fecha_hora?: SortOrder
    usuario_id?: SortOrder
  }

  export type gastos_operativosMinOrderByAggregateInput = {
    id?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    categoria?: SortOrder
    fecha_hora?: SortOrder
    usuario_id?: SortOrder
  }

  export type gastos_operativosSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type inventario_tallasProducto_idTallaCompoundUniqueInput = {
    producto_id: string
    talla: string
  }

  export type inventario_tallasCountOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
  }

  export type inventario_tallasAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type inventario_tallasMaxOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
  }

  export type inventario_tallasMinOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    cantidad?: SortOrder
  }

  export type inventario_tallasSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type movimientos_inventarioCountOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    usuario_id?: SortOrder
    fecha_hora?: SortOrder
  }

  export type movimientos_inventarioAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type movimientos_inventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    usuario_id?: SortOrder
    fecha_hora?: SortOrder
  }

  export type movimientos_inventarioMinOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    talla?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    usuario_id?: SortOrder
    fecha_hora?: SortOrder
  }

  export type movimientos_inventarioSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type Cuadres_cajaListRelationFilter = {
    every?: cuadres_cajaWhereInput
    some?: cuadres_cajaWhereInput
    none?: cuadres_cajaWhereInput
  }

  export type Gastos_operativosListRelationFilter = {
    every?: gastos_operativosWhereInput
    some?: gastos_operativosWhereInput
    none?: gastos_operativosWhereInput
  }

  export type Movimientos_inventarioListRelationFilter = {
    every?: movimientos_inventarioWhereInput
    some?: movimientos_inventarioWhereInput
    none?: movimientos_inventarioWhereInput
  }

  export type cuadres_cajaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gastos_operativosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type movimientos_inventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type perfilesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    created_at?: SortOrder
  }

  export type perfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    created_at?: SortOrder
  }

  export type perfilesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    created_at?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Detalle_ventasListRelationFilter = {
    every?: detalle_ventasWhereInput
    some?: detalle_ventasWhereInput
    none?: detalle_ventasWhereInput
  }

  export type Inventario_tallasListRelationFilter = {
    every?: inventario_tallasWhereInput
    some?: inventario_tallasWhereInput
    none?: inventario_tallasWhereInput
  }

  export type detalle_ventasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inventario_tallasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productosCountOrderByAggregateInput = {
    id?: SortOrder
    codigo_barras?: SortOrder
    nombre?: SortOrder
    categoria?: SortOrder
    color_principal?: SortOrder
    costo_inversion?: SortOrder
    precio_venta?: SortOrder
    margen_neto?: SortOrder
    imagen_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    costo_inversion?: SortOrder
    precio_venta?: SortOrder
    margen_neto?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo_barras?: SortOrder
    nombre?: SortOrder
    categoria?: SortOrder
    color_principal?: SortOrder
    costo_inversion?: SortOrder
    precio_venta?: SortOrder
    margen_neto?: SortOrder
    imagen_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id?: SortOrder
    codigo_barras?: SortOrder
    nombre?: SortOrder
    categoria?: SortOrder
    color_principal?: SortOrder
    costo_inversion?: SortOrder
    precio_venta?: SortOrder
    margen_neto?: SortOrder
    imagen_url?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    costo_inversion?: SortOrder
    precio_venta?: SortOrder
    margen_neto?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ClientesNullableRelationFilter = {
    is?: clientesWhereInput | null
    isNot?: clientesWhereInput | null
  }

  export type ventasCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cliente_id?: SortOrder
    fecha_hora?: SortOrder
    canal_venta?: SortOrder
    metodo_pago?: SortOrder
    total?: SortOrder
    utilidad_neta_venta?: SortOrder
  }

  export type ventasAvgOrderByAggregateInput = {
    total?: SortOrder
    utilidad_neta_venta?: SortOrder
  }

  export type ventasMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cliente_id?: SortOrder
    fecha_hora?: SortOrder
    canal_venta?: SortOrder
    metodo_pago?: SortOrder
    total?: SortOrder
    utilidad_neta_venta?: SortOrder
  }

  export type ventasMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    cliente_id?: SortOrder
    fecha_hora?: SortOrder
    canal_venta?: SortOrder
    metodo_pago?: SortOrder
    total?: SortOrder
    utilidad_neta_venta?: SortOrder
  }

  export type ventasSumOrderByAggregateInput = {
    total?: SortOrder
    utilidad_neta_venta?: SortOrder
  }

  export type ventasCreateNestedManyWithoutClientesInput = {
    create?: XOR<ventasCreateWithoutClientesInput, ventasUncheckedCreateWithoutClientesInput> | ventasCreateWithoutClientesInput[] | ventasUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutClientesInput | ventasCreateOrConnectWithoutClientesInput[]
    createMany?: ventasCreateManyClientesInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type ventasUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<ventasCreateWithoutClientesInput, ventasUncheckedCreateWithoutClientesInput> | ventasCreateWithoutClientesInput[] | ventasUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutClientesInput | ventasCreateOrConnectWithoutClientesInput[]
    createMany?: ventasCreateManyClientesInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ventasUpdateManyWithoutClientesNestedInput = {
    create?: XOR<ventasCreateWithoutClientesInput, ventasUncheckedCreateWithoutClientesInput> | ventasCreateWithoutClientesInput[] | ventasUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutClientesInput | ventasCreateOrConnectWithoutClientesInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutClientesInput | ventasUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: ventasCreateManyClientesInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutClientesInput | ventasUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutClientesInput | ventasUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type ventasUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<ventasCreateWithoutClientesInput, ventasUncheckedCreateWithoutClientesInput> | ventasCreateWithoutClientesInput[] | ventasUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutClientesInput | ventasCreateOrConnectWithoutClientesInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutClientesInput | ventasUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: ventasCreateManyClientesInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutClientesInput | ventasUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutClientesInput | ventasUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type perfilesCreateNestedOneWithoutCuadres_cajaInput = {
    create?: XOR<perfilesCreateWithoutCuadres_cajaInput, perfilesUncheckedCreateWithoutCuadres_cajaInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutCuadres_cajaInput
    connect?: perfilesWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type perfilesUpdateOneRequiredWithoutCuadres_cajaNestedInput = {
    create?: XOR<perfilesCreateWithoutCuadres_cajaInput, perfilesUncheckedCreateWithoutCuadres_cajaInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutCuadres_cajaInput
    upsert?: perfilesUpsertWithoutCuadres_cajaInput
    connect?: perfilesWhereUniqueInput
    update?: XOR<XOR<perfilesUpdateToOneWithWhereWithoutCuadres_cajaInput, perfilesUpdateWithoutCuadres_cajaInput>, perfilesUncheckedUpdateWithoutCuadres_cajaInput>
  }

  export type productosCreateNestedOneWithoutDetalle_ventasInput = {
    create?: XOR<productosCreateWithoutDetalle_ventasInput, productosUncheckedCreateWithoutDetalle_ventasInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalle_ventasInput
    connect?: productosWhereUniqueInput
  }

  export type ventasCreateNestedOneWithoutDetalle_ventasInput = {
    create?: XOR<ventasCreateWithoutDetalle_ventasInput, ventasUncheckedCreateWithoutDetalle_ventasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutDetalle_ventasInput
    connect?: ventasWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productosUpdateOneRequiredWithoutDetalle_ventasNestedInput = {
    create?: XOR<productosCreateWithoutDetalle_ventasInput, productosUncheckedCreateWithoutDetalle_ventasInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalle_ventasInput
    upsert?: productosUpsertWithoutDetalle_ventasInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutDetalle_ventasInput, productosUpdateWithoutDetalle_ventasInput>, productosUncheckedUpdateWithoutDetalle_ventasInput>
  }

  export type ventasUpdateOneRequiredWithoutDetalle_ventasNestedInput = {
    create?: XOR<ventasCreateWithoutDetalle_ventasInput, ventasUncheckedCreateWithoutDetalle_ventasInput>
    connectOrCreate?: ventasCreateOrConnectWithoutDetalle_ventasInput
    upsert?: ventasUpsertWithoutDetalle_ventasInput
    connect?: ventasWhereUniqueInput
    update?: XOR<XOR<ventasUpdateToOneWithWhereWithoutDetalle_ventasInput, ventasUpdateWithoutDetalle_ventasInput>, ventasUncheckedUpdateWithoutDetalle_ventasInput>
  }

  export type perfilesCreateNestedOneWithoutGastos_operativosInput = {
    create?: XOR<perfilesCreateWithoutGastos_operativosInput, perfilesUncheckedCreateWithoutGastos_operativosInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutGastos_operativosInput
    connect?: perfilesWhereUniqueInput
  }

  export type perfilesUpdateOneWithoutGastos_operativosNestedInput = {
    create?: XOR<perfilesCreateWithoutGastos_operativosInput, perfilesUncheckedCreateWithoutGastos_operativosInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutGastos_operativosInput
    upsert?: perfilesUpsertWithoutGastos_operativosInput
    disconnect?: perfilesWhereInput | boolean
    delete?: perfilesWhereInput | boolean
    connect?: perfilesWhereUniqueInput
    update?: XOR<XOR<perfilesUpdateToOneWithWhereWithoutGastos_operativosInput, perfilesUpdateWithoutGastos_operativosInput>, perfilesUncheckedUpdateWithoutGastos_operativosInput>
  }

  export type productosCreateNestedOneWithoutInventario_tallasInput = {
    create?: XOR<productosCreateWithoutInventario_tallasInput, productosUncheckedCreateWithoutInventario_tallasInput>
    connectOrCreate?: productosCreateOrConnectWithoutInventario_tallasInput
    connect?: productosWhereUniqueInput
  }

  export type productosUpdateOneRequiredWithoutInventario_tallasNestedInput = {
    create?: XOR<productosCreateWithoutInventario_tallasInput, productosUncheckedCreateWithoutInventario_tallasInput>
    connectOrCreate?: productosCreateOrConnectWithoutInventario_tallasInput
    upsert?: productosUpsertWithoutInventario_tallasInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutInventario_tallasInput, productosUpdateWithoutInventario_tallasInput>, productosUncheckedUpdateWithoutInventario_tallasInput>
  }

  export type productosCreateNestedOneWithoutMovimientos_inventarioInput = {
    create?: XOR<productosCreateWithoutMovimientos_inventarioInput, productosUncheckedCreateWithoutMovimientos_inventarioInput>
    connectOrCreate?: productosCreateOrConnectWithoutMovimientos_inventarioInput
    connect?: productosWhereUniqueInput
  }

  export type perfilesCreateNestedOneWithoutMovimientos_inventarioInput = {
    create?: XOR<perfilesCreateWithoutMovimientos_inventarioInput, perfilesUncheckedCreateWithoutMovimientos_inventarioInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutMovimientos_inventarioInput
    connect?: perfilesWhereUniqueInput
  }

  export type productosUpdateOneRequiredWithoutMovimientos_inventarioNestedInput = {
    create?: XOR<productosCreateWithoutMovimientos_inventarioInput, productosUncheckedCreateWithoutMovimientos_inventarioInput>
    connectOrCreate?: productosCreateOrConnectWithoutMovimientos_inventarioInput
    upsert?: productosUpsertWithoutMovimientos_inventarioInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutMovimientos_inventarioInput, productosUpdateWithoutMovimientos_inventarioInput>, productosUncheckedUpdateWithoutMovimientos_inventarioInput>
  }

  export type perfilesUpdateOneWithoutMovimientos_inventarioNestedInput = {
    create?: XOR<perfilesCreateWithoutMovimientos_inventarioInput, perfilesUncheckedCreateWithoutMovimientos_inventarioInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutMovimientos_inventarioInput
    upsert?: perfilesUpsertWithoutMovimientos_inventarioInput
    disconnect?: perfilesWhereInput | boolean
    delete?: perfilesWhereInput | boolean
    connect?: perfilesWhereUniqueInput
    update?: XOR<XOR<perfilesUpdateToOneWithWhereWithoutMovimientos_inventarioInput, perfilesUpdateWithoutMovimientos_inventarioInput>, perfilesUncheckedUpdateWithoutMovimientos_inventarioInput>
  }

  export type cuadres_cajaCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<cuadres_cajaCreateWithoutPerfilesInput, cuadres_cajaUncheckedCreateWithoutPerfilesInput> | cuadres_cajaCreateWithoutPerfilesInput[] | cuadres_cajaUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: cuadres_cajaCreateOrConnectWithoutPerfilesInput | cuadres_cajaCreateOrConnectWithoutPerfilesInput[]
    createMany?: cuadres_cajaCreateManyPerfilesInputEnvelope
    connect?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
  }

  export type gastos_operativosCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<gastos_operativosCreateWithoutPerfilesInput, gastos_operativosUncheckedCreateWithoutPerfilesInput> | gastos_operativosCreateWithoutPerfilesInput[] | gastos_operativosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: gastos_operativosCreateOrConnectWithoutPerfilesInput | gastos_operativosCreateOrConnectWithoutPerfilesInput[]
    createMany?: gastos_operativosCreateManyPerfilesInputEnvelope
    connect?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
  }

  export type movimientos_inventarioCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<movimientos_inventarioCreateWithoutPerfilesInput, movimientos_inventarioUncheckedCreateWithoutPerfilesInput> | movimientos_inventarioCreateWithoutPerfilesInput[] | movimientos_inventarioUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutPerfilesInput | movimientos_inventarioCreateOrConnectWithoutPerfilesInput[]
    createMany?: movimientos_inventarioCreateManyPerfilesInputEnvelope
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
  }

  export type ventasCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<ventasCreateWithoutPerfilesInput, ventasUncheckedCreateWithoutPerfilesInput> | ventasCreateWithoutPerfilesInput[] | ventasUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutPerfilesInput | ventasCreateOrConnectWithoutPerfilesInput[]
    createMany?: ventasCreateManyPerfilesInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type cuadres_cajaUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<cuadres_cajaCreateWithoutPerfilesInput, cuadres_cajaUncheckedCreateWithoutPerfilesInput> | cuadres_cajaCreateWithoutPerfilesInput[] | cuadres_cajaUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: cuadres_cajaCreateOrConnectWithoutPerfilesInput | cuadres_cajaCreateOrConnectWithoutPerfilesInput[]
    createMany?: cuadres_cajaCreateManyPerfilesInputEnvelope
    connect?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
  }

  export type gastos_operativosUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<gastos_operativosCreateWithoutPerfilesInput, gastos_operativosUncheckedCreateWithoutPerfilesInput> | gastos_operativosCreateWithoutPerfilesInput[] | gastos_operativosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: gastos_operativosCreateOrConnectWithoutPerfilesInput | gastos_operativosCreateOrConnectWithoutPerfilesInput[]
    createMany?: gastos_operativosCreateManyPerfilesInputEnvelope
    connect?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
  }

  export type movimientos_inventarioUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<movimientos_inventarioCreateWithoutPerfilesInput, movimientos_inventarioUncheckedCreateWithoutPerfilesInput> | movimientos_inventarioCreateWithoutPerfilesInput[] | movimientos_inventarioUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutPerfilesInput | movimientos_inventarioCreateOrConnectWithoutPerfilesInput[]
    createMany?: movimientos_inventarioCreateManyPerfilesInputEnvelope
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
  }

  export type ventasUncheckedCreateNestedManyWithoutPerfilesInput = {
    create?: XOR<ventasCreateWithoutPerfilesInput, ventasUncheckedCreateWithoutPerfilesInput> | ventasCreateWithoutPerfilesInput[] | ventasUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutPerfilesInput | ventasCreateOrConnectWithoutPerfilesInput[]
    createMany?: ventasCreateManyPerfilesInputEnvelope
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
  }

  export type cuadres_cajaUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<cuadres_cajaCreateWithoutPerfilesInput, cuadres_cajaUncheckedCreateWithoutPerfilesInput> | cuadres_cajaCreateWithoutPerfilesInput[] | cuadres_cajaUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: cuadres_cajaCreateOrConnectWithoutPerfilesInput | cuadres_cajaCreateOrConnectWithoutPerfilesInput[]
    upsert?: cuadres_cajaUpsertWithWhereUniqueWithoutPerfilesInput | cuadres_cajaUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: cuadres_cajaCreateManyPerfilesInputEnvelope
    set?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    disconnect?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    delete?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    connect?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    update?: cuadres_cajaUpdateWithWhereUniqueWithoutPerfilesInput | cuadres_cajaUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: cuadres_cajaUpdateManyWithWhereWithoutPerfilesInput | cuadres_cajaUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: cuadres_cajaScalarWhereInput | cuadres_cajaScalarWhereInput[]
  }

  export type gastos_operativosUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<gastos_operativosCreateWithoutPerfilesInput, gastos_operativosUncheckedCreateWithoutPerfilesInput> | gastos_operativosCreateWithoutPerfilesInput[] | gastos_operativosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: gastos_operativosCreateOrConnectWithoutPerfilesInput | gastos_operativosCreateOrConnectWithoutPerfilesInput[]
    upsert?: gastos_operativosUpsertWithWhereUniqueWithoutPerfilesInput | gastos_operativosUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: gastos_operativosCreateManyPerfilesInputEnvelope
    set?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    disconnect?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    delete?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    connect?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    update?: gastos_operativosUpdateWithWhereUniqueWithoutPerfilesInput | gastos_operativosUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: gastos_operativosUpdateManyWithWhereWithoutPerfilesInput | gastos_operativosUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: gastos_operativosScalarWhereInput | gastos_operativosScalarWhereInput[]
  }

  export type movimientos_inventarioUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<movimientos_inventarioCreateWithoutPerfilesInput, movimientos_inventarioUncheckedCreateWithoutPerfilesInput> | movimientos_inventarioCreateWithoutPerfilesInput[] | movimientos_inventarioUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutPerfilesInput | movimientos_inventarioCreateOrConnectWithoutPerfilesInput[]
    upsert?: movimientos_inventarioUpsertWithWhereUniqueWithoutPerfilesInput | movimientos_inventarioUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: movimientos_inventarioCreateManyPerfilesInputEnvelope
    set?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    disconnect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    delete?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    update?: movimientos_inventarioUpdateWithWhereUniqueWithoutPerfilesInput | movimientos_inventarioUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: movimientos_inventarioUpdateManyWithWhereWithoutPerfilesInput | movimientos_inventarioUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: movimientos_inventarioScalarWhereInput | movimientos_inventarioScalarWhereInput[]
  }

  export type ventasUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<ventasCreateWithoutPerfilesInput, ventasUncheckedCreateWithoutPerfilesInput> | ventasCreateWithoutPerfilesInput[] | ventasUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutPerfilesInput | ventasCreateOrConnectWithoutPerfilesInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutPerfilesInput | ventasUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: ventasCreateManyPerfilesInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutPerfilesInput | ventasUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutPerfilesInput | ventasUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type cuadres_cajaUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<cuadres_cajaCreateWithoutPerfilesInput, cuadres_cajaUncheckedCreateWithoutPerfilesInput> | cuadres_cajaCreateWithoutPerfilesInput[] | cuadres_cajaUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: cuadres_cajaCreateOrConnectWithoutPerfilesInput | cuadres_cajaCreateOrConnectWithoutPerfilesInput[]
    upsert?: cuadres_cajaUpsertWithWhereUniqueWithoutPerfilesInput | cuadres_cajaUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: cuadres_cajaCreateManyPerfilesInputEnvelope
    set?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    disconnect?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    delete?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    connect?: cuadres_cajaWhereUniqueInput | cuadres_cajaWhereUniqueInput[]
    update?: cuadres_cajaUpdateWithWhereUniqueWithoutPerfilesInput | cuadres_cajaUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: cuadres_cajaUpdateManyWithWhereWithoutPerfilesInput | cuadres_cajaUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: cuadres_cajaScalarWhereInput | cuadres_cajaScalarWhereInput[]
  }

  export type gastos_operativosUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<gastos_operativosCreateWithoutPerfilesInput, gastos_operativosUncheckedCreateWithoutPerfilesInput> | gastos_operativosCreateWithoutPerfilesInput[] | gastos_operativosUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: gastos_operativosCreateOrConnectWithoutPerfilesInput | gastos_operativosCreateOrConnectWithoutPerfilesInput[]
    upsert?: gastos_operativosUpsertWithWhereUniqueWithoutPerfilesInput | gastos_operativosUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: gastos_operativosCreateManyPerfilesInputEnvelope
    set?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    disconnect?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    delete?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    connect?: gastos_operativosWhereUniqueInput | gastos_operativosWhereUniqueInput[]
    update?: gastos_operativosUpdateWithWhereUniqueWithoutPerfilesInput | gastos_operativosUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: gastos_operativosUpdateManyWithWhereWithoutPerfilesInput | gastos_operativosUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: gastos_operativosScalarWhereInput | gastos_operativosScalarWhereInput[]
  }

  export type movimientos_inventarioUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<movimientos_inventarioCreateWithoutPerfilesInput, movimientos_inventarioUncheckedCreateWithoutPerfilesInput> | movimientos_inventarioCreateWithoutPerfilesInput[] | movimientos_inventarioUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutPerfilesInput | movimientos_inventarioCreateOrConnectWithoutPerfilesInput[]
    upsert?: movimientos_inventarioUpsertWithWhereUniqueWithoutPerfilesInput | movimientos_inventarioUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: movimientos_inventarioCreateManyPerfilesInputEnvelope
    set?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    disconnect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    delete?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    update?: movimientos_inventarioUpdateWithWhereUniqueWithoutPerfilesInput | movimientos_inventarioUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: movimientos_inventarioUpdateManyWithWhereWithoutPerfilesInput | movimientos_inventarioUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: movimientos_inventarioScalarWhereInput | movimientos_inventarioScalarWhereInput[]
  }

  export type ventasUncheckedUpdateManyWithoutPerfilesNestedInput = {
    create?: XOR<ventasCreateWithoutPerfilesInput, ventasUncheckedCreateWithoutPerfilesInput> | ventasCreateWithoutPerfilesInput[] | ventasUncheckedCreateWithoutPerfilesInput[]
    connectOrCreate?: ventasCreateOrConnectWithoutPerfilesInput | ventasCreateOrConnectWithoutPerfilesInput[]
    upsert?: ventasUpsertWithWhereUniqueWithoutPerfilesInput | ventasUpsertWithWhereUniqueWithoutPerfilesInput[]
    createMany?: ventasCreateManyPerfilesInputEnvelope
    set?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    disconnect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    delete?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    connect?: ventasWhereUniqueInput | ventasWhereUniqueInput[]
    update?: ventasUpdateWithWhereUniqueWithoutPerfilesInput | ventasUpdateWithWhereUniqueWithoutPerfilesInput[]
    updateMany?: ventasUpdateManyWithWhereWithoutPerfilesInput | ventasUpdateManyWithWhereWithoutPerfilesInput[]
    deleteMany?: ventasScalarWhereInput | ventasScalarWhereInput[]
  }

  export type detalle_ventasCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalle_ventasCreateWithoutProductosInput, detalle_ventasUncheckedCreateWithoutProductosInput> | detalle_ventasCreateWithoutProductosInput[] | detalle_ventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutProductosInput | detalle_ventasCreateOrConnectWithoutProductosInput[]
    createMany?: detalle_ventasCreateManyProductosInputEnvelope
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
  }

  export type inventario_tallasCreateNestedManyWithoutProductosInput = {
    create?: XOR<inventario_tallasCreateWithoutProductosInput, inventario_tallasUncheckedCreateWithoutProductosInput> | inventario_tallasCreateWithoutProductosInput[] | inventario_tallasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: inventario_tallasCreateOrConnectWithoutProductosInput | inventario_tallasCreateOrConnectWithoutProductosInput[]
    createMany?: inventario_tallasCreateManyProductosInputEnvelope
    connect?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
  }

  export type movimientos_inventarioCreateNestedManyWithoutProductosInput = {
    create?: XOR<movimientos_inventarioCreateWithoutProductosInput, movimientos_inventarioUncheckedCreateWithoutProductosInput> | movimientos_inventarioCreateWithoutProductosInput[] | movimientos_inventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutProductosInput | movimientos_inventarioCreateOrConnectWithoutProductosInput[]
    createMany?: movimientos_inventarioCreateManyProductosInputEnvelope
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
  }

  export type detalle_ventasUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalle_ventasCreateWithoutProductosInput, detalle_ventasUncheckedCreateWithoutProductosInput> | detalle_ventasCreateWithoutProductosInput[] | detalle_ventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutProductosInput | detalle_ventasCreateOrConnectWithoutProductosInput[]
    createMany?: detalle_ventasCreateManyProductosInputEnvelope
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
  }

  export type inventario_tallasUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<inventario_tallasCreateWithoutProductosInput, inventario_tallasUncheckedCreateWithoutProductosInput> | inventario_tallasCreateWithoutProductosInput[] | inventario_tallasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: inventario_tallasCreateOrConnectWithoutProductosInput | inventario_tallasCreateOrConnectWithoutProductosInput[]
    createMany?: inventario_tallasCreateManyProductosInputEnvelope
    connect?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
  }

  export type movimientos_inventarioUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<movimientos_inventarioCreateWithoutProductosInput, movimientos_inventarioUncheckedCreateWithoutProductosInput> | movimientos_inventarioCreateWithoutProductosInput[] | movimientos_inventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutProductosInput | movimientos_inventarioCreateOrConnectWithoutProductosInput[]
    createMany?: movimientos_inventarioCreateManyProductosInputEnvelope
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type detalle_ventasUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalle_ventasCreateWithoutProductosInput, detalle_ventasUncheckedCreateWithoutProductosInput> | detalle_ventasCreateWithoutProductosInput[] | detalle_ventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutProductosInput | detalle_ventasCreateOrConnectWithoutProductosInput[]
    upsert?: detalle_ventasUpsertWithWhereUniqueWithoutProductosInput | detalle_ventasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalle_ventasCreateManyProductosInputEnvelope
    set?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    disconnect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    delete?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    update?: detalle_ventasUpdateWithWhereUniqueWithoutProductosInput | detalle_ventasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalle_ventasUpdateManyWithWhereWithoutProductosInput | detalle_ventasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalle_ventasScalarWhereInput | detalle_ventasScalarWhereInput[]
  }

  export type inventario_tallasUpdateManyWithoutProductosNestedInput = {
    create?: XOR<inventario_tallasCreateWithoutProductosInput, inventario_tallasUncheckedCreateWithoutProductosInput> | inventario_tallasCreateWithoutProductosInput[] | inventario_tallasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: inventario_tallasCreateOrConnectWithoutProductosInput | inventario_tallasCreateOrConnectWithoutProductosInput[]
    upsert?: inventario_tallasUpsertWithWhereUniqueWithoutProductosInput | inventario_tallasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: inventario_tallasCreateManyProductosInputEnvelope
    set?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    disconnect?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    delete?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    connect?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    update?: inventario_tallasUpdateWithWhereUniqueWithoutProductosInput | inventario_tallasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: inventario_tallasUpdateManyWithWhereWithoutProductosInput | inventario_tallasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: inventario_tallasScalarWhereInput | inventario_tallasScalarWhereInput[]
  }

  export type movimientos_inventarioUpdateManyWithoutProductosNestedInput = {
    create?: XOR<movimientos_inventarioCreateWithoutProductosInput, movimientos_inventarioUncheckedCreateWithoutProductosInput> | movimientos_inventarioCreateWithoutProductosInput[] | movimientos_inventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutProductosInput | movimientos_inventarioCreateOrConnectWithoutProductosInput[]
    upsert?: movimientos_inventarioUpsertWithWhereUniqueWithoutProductosInput | movimientos_inventarioUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: movimientos_inventarioCreateManyProductosInputEnvelope
    set?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    disconnect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    delete?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    update?: movimientos_inventarioUpdateWithWhereUniqueWithoutProductosInput | movimientos_inventarioUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: movimientos_inventarioUpdateManyWithWhereWithoutProductosInput | movimientos_inventarioUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: movimientos_inventarioScalarWhereInput | movimientos_inventarioScalarWhereInput[]
  }

  export type detalle_ventasUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalle_ventasCreateWithoutProductosInput, detalle_ventasUncheckedCreateWithoutProductosInput> | detalle_ventasCreateWithoutProductosInput[] | detalle_ventasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutProductosInput | detalle_ventasCreateOrConnectWithoutProductosInput[]
    upsert?: detalle_ventasUpsertWithWhereUniqueWithoutProductosInput | detalle_ventasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalle_ventasCreateManyProductosInputEnvelope
    set?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    disconnect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    delete?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    update?: detalle_ventasUpdateWithWhereUniqueWithoutProductosInput | detalle_ventasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalle_ventasUpdateManyWithWhereWithoutProductosInput | detalle_ventasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalle_ventasScalarWhereInput | detalle_ventasScalarWhereInput[]
  }

  export type inventario_tallasUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<inventario_tallasCreateWithoutProductosInput, inventario_tallasUncheckedCreateWithoutProductosInput> | inventario_tallasCreateWithoutProductosInput[] | inventario_tallasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: inventario_tallasCreateOrConnectWithoutProductosInput | inventario_tallasCreateOrConnectWithoutProductosInput[]
    upsert?: inventario_tallasUpsertWithWhereUniqueWithoutProductosInput | inventario_tallasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: inventario_tallasCreateManyProductosInputEnvelope
    set?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    disconnect?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    delete?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    connect?: inventario_tallasWhereUniqueInput | inventario_tallasWhereUniqueInput[]
    update?: inventario_tallasUpdateWithWhereUniqueWithoutProductosInput | inventario_tallasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: inventario_tallasUpdateManyWithWhereWithoutProductosInput | inventario_tallasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: inventario_tallasScalarWhereInput | inventario_tallasScalarWhereInput[]
  }

  export type movimientos_inventarioUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<movimientos_inventarioCreateWithoutProductosInput, movimientos_inventarioUncheckedCreateWithoutProductosInput> | movimientos_inventarioCreateWithoutProductosInput[] | movimientos_inventarioUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: movimientos_inventarioCreateOrConnectWithoutProductosInput | movimientos_inventarioCreateOrConnectWithoutProductosInput[]
    upsert?: movimientos_inventarioUpsertWithWhereUniqueWithoutProductosInput | movimientos_inventarioUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: movimientos_inventarioCreateManyProductosInputEnvelope
    set?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    disconnect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    delete?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    connect?: movimientos_inventarioWhereUniqueInput | movimientos_inventarioWhereUniqueInput[]
    update?: movimientos_inventarioUpdateWithWhereUniqueWithoutProductosInput | movimientos_inventarioUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: movimientos_inventarioUpdateManyWithWhereWithoutProductosInput | movimientos_inventarioUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: movimientos_inventarioScalarWhereInput | movimientos_inventarioScalarWhereInput[]
  }

  export type detalle_ventasCreateNestedManyWithoutVentasInput = {
    create?: XOR<detalle_ventasCreateWithoutVentasInput, detalle_ventasUncheckedCreateWithoutVentasInput> | detalle_ventasCreateWithoutVentasInput[] | detalle_ventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutVentasInput | detalle_ventasCreateOrConnectWithoutVentasInput[]
    createMany?: detalle_ventasCreateManyVentasInputEnvelope
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
  }

  export type clientesCreateNestedOneWithoutVentasInput = {
    create?: XOR<clientesCreateWithoutVentasInput, clientesUncheckedCreateWithoutVentasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutVentasInput
    connect?: clientesWhereUniqueInput
  }

  export type perfilesCreateNestedOneWithoutVentasInput = {
    create?: XOR<perfilesCreateWithoutVentasInput, perfilesUncheckedCreateWithoutVentasInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutVentasInput
    connect?: perfilesWhereUniqueInput
  }

  export type detalle_ventasUncheckedCreateNestedManyWithoutVentasInput = {
    create?: XOR<detalle_ventasCreateWithoutVentasInput, detalle_ventasUncheckedCreateWithoutVentasInput> | detalle_ventasCreateWithoutVentasInput[] | detalle_ventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutVentasInput | detalle_ventasCreateOrConnectWithoutVentasInput[]
    createMany?: detalle_ventasCreateManyVentasInputEnvelope
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
  }

  export type detalle_ventasUpdateManyWithoutVentasNestedInput = {
    create?: XOR<detalle_ventasCreateWithoutVentasInput, detalle_ventasUncheckedCreateWithoutVentasInput> | detalle_ventasCreateWithoutVentasInput[] | detalle_ventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutVentasInput | detalle_ventasCreateOrConnectWithoutVentasInput[]
    upsert?: detalle_ventasUpsertWithWhereUniqueWithoutVentasInput | detalle_ventasUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: detalle_ventasCreateManyVentasInputEnvelope
    set?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    disconnect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    delete?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    update?: detalle_ventasUpdateWithWhereUniqueWithoutVentasInput | detalle_ventasUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: detalle_ventasUpdateManyWithWhereWithoutVentasInput | detalle_ventasUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: detalle_ventasScalarWhereInput | detalle_ventasScalarWhereInput[]
  }

  export type clientesUpdateOneWithoutVentasNestedInput = {
    create?: XOR<clientesCreateWithoutVentasInput, clientesUncheckedCreateWithoutVentasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutVentasInput
    upsert?: clientesUpsertWithoutVentasInput
    disconnect?: clientesWhereInput | boolean
    delete?: clientesWhereInput | boolean
    connect?: clientesWhereUniqueInput
    update?: XOR<XOR<clientesUpdateToOneWithWhereWithoutVentasInput, clientesUpdateWithoutVentasInput>, clientesUncheckedUpdateWithoutVentasInput>
  }

  export type perfilesUpdateOneWithoutVentasNestedInput = {
    create?: XOR<perfilesCreateWithoutVentasInput, perfilesUncheckedCreateWithoutVentasInput>
    connectOrCreate?: perfilesCreateOrConnectWithoutVentasInput
    upsert?: perfilesUpsertWithoutVentasInput
    disconnect?: perfilesWhereInput | boolean
    delete?: perfilesWhereInput | boolean
    connect?: perfilesWhereUniqueInput
    update?: XOR<XOR<perfilesUpdateToOneWithWhereWithoutVentasInput, perfilesUpdateWithoutVentasInput>, perfilesUncheckedUpdateWithoutVentasInput>
  }

  export type detalle_ventasUncheckedUpdateManyWithoutVentasNestedInput = {
    create?: XOR<detalle_ventasCreateWithoutVentasInput, detalle_ventasUncheckedCreateWithoutVentasInput> | detalle_ventasCreateWithoutVentasInput[] | detalle_ventasUncheckedCreateWithoutVentasInput[]
    connectOrCreate?: detalle_ventasCreateOrConnectWithoutVentasInput | detalle_ventasCreateOrConnectWithoutVentasInput[]
    upsert?: detalle_ventasUpsertWithWhereUniqueWithoutVentasInput | detalle_ventasUpsertWithWhereUniqueWithoutVentasInput[]
    createMany?: detalle_ventasCreateManyVentasInputEnvelope
    set?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    disconnect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    delete?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    connect?: detalle_ventasWhereUniqueInput | detalle_ventasWhereUniqueInput[]
    update?: detalle_ventasUpdateWithWhereUniqueWithoutVentasInput | detalle_ventasUpdateWithWhereUniqueWithoutVentasInput[]
    updateMany?: detalle_ventasUpdateManyWithWhereWithoutVentasInput | detalle_ventasUpdateManyWithWhereWithoutVentasInput[]
    deleteMany?: detalle_ventasScalarWhereInput | detalle_ventasScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ventasCreateWithoutClientesInput = {
    id?: string
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasCreateNestedManyWithoutVentasInput
    perfiles?: perfilesCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutClientesInput = {
    id?: string
    usuario_id?: string | null
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasCreateOrConnectWithoutClientesInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutClientesInput, ventasUncheckedCreateWithoutClientesInput>
  }

  export type ventasCreateManyClientesInputEnvelope = {
    data: ventasCreateManyClientesInput | ventasCreateManyClientesInput[]
    skipDuplicates?: boolean
  }

  export type ventasUpsertWithWhereUniqueWithoutClientesInput = {
    where: ventasWhereUniqueInput
    update: XOR<ventasUpdateWithoutClientesInput, ventasUncheckedUpdateWithoutClientesInput>
    create: XOR<ventasCreateWithoutClientesInput, ventasUncheckedCreateWithoutClientesInput>
  }

  export type ventasUpdateWithWhereUniqueWithoutClientesInput = {
    where: ventasWhereUniqueInput
    data: XOR<ventasUpdateWithoutClientesInput, ventasUncheckedUpdateWithoutClientesInput>
  }

  export type ventasUpdateManyWithWhereWithoutClientesInput = {
    where: ventasScalarWhereInput
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyWithoutClientesInput>
  }

  export type ventasScalarWhereInput = {
    AND?: ventasScalarWhereInput | ventasScalarWhereInput[]
    OR?: ventasScalarWhereInput[]
    NOT?: ventasScalarWhereInput | ventasScalarWhereInput[]
    id?: UuidFilter<"ventas"> | string
    usuario_id?: UuidNullableFilter<"ventas"> | string | null
    cliente_id?: UuidNullableFilter<"ventas"> | string | null
    fecha_hora?: DateTimeNullableFilter<"ventas"> | Date | string | null
    canal_venta?: StringFilter<"ventas"> | string
    metodo_pago?: StringFilter<"ventas"> | string
    total?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFilter<"ventas"> | Decimal | DecimalJsLike | number | string
  }

  export type perfilesCreateWithoutCuadres_cajaInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    gastos_operativos?: gastos_operativosCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioCreateNestedManyWithoutPerfilesInput
    ventas?: ventasCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUncheckedCreateWithoutCuadres_cajaInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    gastos_operativos?: gastos_operativosUncheckedCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioUncheckedCreateNestedManyWithoutPerfilesInput
    ventas?: ventasUncheckedCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesCreateOrConnectWithoutCuadres_cajaInput = {
    where: perfilesWhereUniqueInput
    create: XOR<perfilesCreateWithoutCuadres_cajaInput, perfilesUncheckedCreateWithoutCuadres_cajaInput>
  }

  export type perfilesUpsertWithoutCuadres_cajaInput = {
    update: XOR<perfilesUpdateWithoutCuadres_cajaInput, perfilesUncheckedUpdateWithoutCuadres_cajaInput>
    create: XOR<perfilesCreateWithoutCuadres_cajaInput, perfilesUncheckedCreateWithoutCuadres_cajaInput>
    where?: perfilesWhereInput
  }

  export type perfilesUpdateToOneWithWhereWithoutCuadres_cajaInput = {
    where?: perfilesWhereInput
    data: XOR<perfilesUpdateWithoutCuadres_cajaInput, perfilesUncheckedUpdateWithoutCuadres_cajaInput>
  }

  export type perfilesUpdateWithoutCuadres_cajaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gastos_operativos?: gastos_operativosUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesUncheckedUpdateWithoutCuadres_cajaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gastos_operativos?: gastos_operativosUncheckedUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUncheckedUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutPerfilesNestedInput
  }

  export type productosCreateWithoutDetalle_ventasInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    inventario_tallas?: inventario_tallasCreateNestedManyWithoutProductosInput
    movimientos_inventario?: movimientos_inventarioCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutDetalle_ventasInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    inventario_tallas?: inventario_tallasUncheckedCreateNestedManyWithoutProductosInput
    movimientos_inventario?: movimientos_inventarioUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutDetalle_ventasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutDetalle_ventasInput, productosUncheckedCreateWithoutDetalle_ventasInput>
  }

  export type ventasCreateWithoutDetalle_ventasInput = {
    id?: string
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
    clientes?: clientesCreateNestedOneWithoutVentasInput
    perfiles?: perfilesCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutDetalle_ventasInput = {
    id?: string
    usuario_id?: string | null
    cliente_id?: string | null
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
  }

  export type ventasCreateOrConnectWithoutDetalle_ventasInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutDetalle_ventasInput, ventasUncheckedCreateWithoutDetalle_ventasInput>
  }

  export type productosUpsertWithoutDetalle_ventasInput = {
    update: XOR<productosUpdateWithoutDetalle_ventasInput, productosUncheckedUpdateWithoutDetalle_ventasInput>
    create: XOR<productosCreateWithoutDetalle_ventasInput, productosUncheckedCreateWithoutDetalle_ventasInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutDetalle_ventasInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutDetalle_ventasInput, productosUncheckedUpdateWithoutDetalle_ventasInput>
  }

  export type productosUpdateWithoutDetalle_ventasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventario_tallas?: inventario_tallasUpdateManyWithoutProductosNestedInput
    movimientos_inventario?: movimientos_inventarioUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutDetalle_ventasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventario_tallas?: inventario_tallasUncheckedUpdateManyWithoutProductosNestedInput
    movimientos_inventario?: movimientos_inventarioUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type ventasUpsertWithoutDetalle_ventasInput = {
    update: XOR<ventasUpdateWithoutDetalle_ventasInput, ventasUncheckedUpdateWithoutDetalle_ventasInput>
    create: XOR<ventasCreateWithoutDetalle_ventasInput, ventasUncheckedCreateWithoutDetalle_ventasInput>
    where?: ventasWhereInput
  }

  export type ventasUpdateToOneWithWhereWithoutDetalle_ventasInput = {
    where?: ventasWhereInput
    data: XOR<ventasUpdateWithoutDetalle_ventasInput, ventasUncheckedUpdateWithoutDetalle_ventasInput>
  }

  export type ventasUpdateWithoutDetalle_ventasInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clientes?: clientesUpdateOneWithoutVentasNestedInput
    perfiles?: perfilesUpdateOneWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutDetalle_ventasInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type perfilesCreateWithoutGastos_operativosInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioCreateNestedManyWithoutPerfilesInput
    ventas?: ventasCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUncheckedCreateWithoutGastos_operativosInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioUncheckedCreateNestedManyWithoutPerfilesInput
    ventas?: ventasUncheckedCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesCreateOrConnectWithoutGastos_operativosInput = {
    where: perfilesWhereUniqueInput
    create: XOR<perfilesCreateWithoutGastos_operativosInput, perfilesUncheckedCreateWithoutGastos_operativosInput>
  }

  export type perfilesUpsertWithoutGastos_operativosInput = {
    update: XOR<perfilesUpdateWithoutGastos_operativosInput, perfilesUncheckedUpdateWithoutGastos_operativosInput>
    create: XOR<perfilesCreateWithoutGastos_operativosInput, perfilesUncheckedCreateWithoutGastos_operativosInput>
    where?: perfilesWhereInput
  }

  export type perfilesUpdateToOneWithWhereWithoutGastos_operativosInput = {
    where?: perfilesWhereInput
    data: XOR<perfilesUpdateWithoutGastos_operativosInput, perfilesUncheckedUpdateWithoutGastos_operativosInput>
  }

  export type perfilesUpdateWithoutGastos_operativosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesUncheckedUpdateWithoutGastos_operativosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUncheckedUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutPerfilesNestedInput
  }

  export type productosCreateWithoutInventario_tallasInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    detalle_ventas?: detalle_ventasCreateNestedManyWithoutProductosInput
    movimientos_inventario?: movimientos_inventarioCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutInventario_tallasInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    detalle_ventas?: detalle_ventasUncheckedCreateNestedManyWithoutProductosInput
    movimientos_inventario?: movimientos_inventarioUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutInventario_tallasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutInventario_tallasInput, productosUncheckedCreateWithoutInventario_tallasInput>
  }

  export type productosUpsertWithoutInventario_tallasInput = {
    update: XOR<productosUpdateWithoutInventario_tallasInput, productosUncheckedUpdateWithoutInventario_tallasInput>
    create: XOR<productosCreateWithoutInventario_tallasInput, productosUncheckedCreateWithoutInventario_tallasInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutInventario_tallasInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutInventario_tallasInput, productosUncheckedUpdateWithoutInventario_tallasInput>
  }

  export type productosUpdateWithoutInventario_tallasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_ventas?: detalle_ventasUpdateManyWithoutProductosNestedInput
    movimientos_inventario?: movimientos_inventarioUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutInventario_tallasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_ventas?: detalle_ventasUncheckedUpdateManyWithoutProductosNestedInput
    movimientos_inventario?: movimientos_inventarioUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateWithoutMovimientos_inventarioInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    detalle_ventas?: detalle_ventasCreateNestedManyWithoutProductosInput
    inventario_tallas?: inventario_tallasCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutMovimientos_inventarioInput = {
    id?: string
    codigo_barras?: string | null
    nombre: string
    categoria?: string
    color_principal?: string
    costo_inversion?: Decimal | DecimalJsLike | number | string
    precio_venta: Decimal | DecimalJsLike | number | string
    margen_neto?: Decimal | DecimalJsLike | number | string | null
    imagen_url?: string | null
    activo?: boolean | null
    created_at?: Date | string | null
    detalle_ventas?: detalle_ventasUncheckedCreateNestedManyWithoutProductosInput
    inventario_tallas?: inventario_tallasUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutMovimientos_inventarioInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutMovimientos_inventarioInput, productosUncheckedCreateWithoutMovimientos_inventarioInput>
  }

  export type perfilesCreateWithoutMovimientos_inventarioInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaCreateNestedManyWithoutPerfilesInput
    gastos_operativos?: gastos_operativosCreateNestedManyWithoutPerfilesInput
    ventas?: ventasCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUncheckedCreateWithoutMovimientos_inventarioInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedCreateNestedManyWithoutPerfilesInput
    gastos_operativos?: gastos_operativosUncheckedCreateNestedManyWithoutPerfilesInput
    ventas?: ventasUncheckedCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesCreateOrConnectWithoutMovimientos_inventarioInput = {
    where: perfilesWhereUniqueInput
    create: XOR<perfilesCreateWithoutMovimientos_inventarioInput, perfilesUncheckedCreateWithoutMovimientos_inventarioInput>
  }

  export type productosUpsertWithoutMovimientos_inventarioInput = {
    update: XOR<productosUpdateWithoutMovimientos_inventarioInput, productosUncheckedUpdateWithoutMovimientos_inventarioInput>
    create: XOR<productosCreateWithoutMovimientos_inventarioInput, productosUncheckedCreateWithoutMovimientos_inventarioInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutMovimientos_inventarioInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutMovimientos_inventarioInput, productosUncheckedUpdateWithoutMovimientos_inventarioInput>
  }

  export type productosUpdateWithoutMovimientos_inventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_ventas?: detalle_ventasUpdateManyWithoutProductosNestedInput
    inventario_tallas?: inventario_tallasUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutMovimientos_inventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo_barras?: NullableStringFieldUpdateOperationsInput | string | null
    nombre?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    color_principal?: StringFieldUpdateOperationsInput | string
    costo_inversion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    margen_neto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_ventas?: detalle_ventasUncheckedUpdateManyWithoutProductosNestedInput
    inventario_tallas?: inventario_tallasUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type perfilesUpsertWithoutMovimientos_inventarioInput = {
    update: XOR<perfilesUpdateWithoutMovimientos_inventarioInput, perfilesUncheckedUpdateWithoutMovimientos_inventarioInput>
    create: XOR<perfilesCreateWithoutMovimientos_inventarioInput, perfilesUncheckedCreateWithoutMovimientos_inventarioInput>
    where?: perfilesWhereInput
  }

  export type perfilesUpdateToOneWithWhereWithoutMovimientos_inventarioInput = {
    where?: perfilesWhereInput
    data: XOR<perfilesUpdateWithoutMovimientos_inventarioInput, perfilesUncheckedUpdateWithoutMovimientos_inventarioInput>
  }

  export type perfilesUpdateWithoutMovimientos_inventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUpdateManyWithoutPerfilesNestedInput
    gastos_operativos?: gastos_operativosUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesUncheckedUpdateWithoutMovimientos_inventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedUpdateManyWithoutPerfilesNestedInput
    gastos_operativos?: gastos_operativosUncheckedUpdateManyWithoutPerfilesNestedInput
    ventas?: ventasUncheckedUpdateManyWithoutPerfilesNestedInput
  }

  export type cuadres_cajaCreateWithoutPerfilesInput = {
    id?: string
    fecha_hora?: Date | string | null
    monto_efectivo?: Decimal | DecimalJsLike | number | string | null
    monto_yape?: Decimal | DecimalJsLike | number | string | null
    monto_plin?: Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: Decimal | DecimalJsLike | number | string | null
    monto_declarado: Decimal | DecimalJsLike | number | string
    monto_sistema: Decimal | DecimalJsLike | number | string
    diferencia?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    estado?: string | null
  }

  export type cuadres_cajaUncheckedCreateWithoutPerfilesInput = {
    id?: string
    fecha_hora?: Date | string | null
    monto_efectivo?: Decimal | DecimalJsLike | number | string | null
    monto_yape?: Decimal | DecimalJsLike | number | string | null
    monto_plin?: Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: Decimal | DecimalJsLike | number | string | null
    monto_declarado: Decimal | DecimalJsLike | number | string
    monto_sistema: Decimal | DecimalJsLike | number | string
    diferencia?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    estado?: string | null
  }

  export type cuadres_cajaCreateOrConnectWithoutPerfilesInput = {
    where: cuadres_cajaWhereUniqueInput
    create: XOR<cuadres_cajaCreateWithoutPerfilesInput, cuadres_cajaUncheckedCreateWithoutPerfilesInput>
  }

  export type cuadres_cajaCreateManyPerfilesInputEnvelope = {
    data: cuadres_cajaCreateManyPerfilesInput | cuadres_cajaCreateManyPerfilesInput[]
    skipDuplicates?: boolean
  }

  export type gastos_operativosCreateWithoutPerfilesInput = {
    id?: string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    categoria?: string | null
    fecha_hora?: Date | string | null
  }

  export type gastos_operativosUncheckedCreateWithoutPerfilesInput = {
    id?: string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    categoria?: string | null
    fecha_hora?: Date | string | null
  }

  export type gastos_operativosCreateOrConnectWithoutPerfilesInput = {
    where: gastos_operativosWhereUniqueInput
    create: XOR<gastos_operativosCreateWithoutPerfilesInput, gastos_operativosUncheckedCreateWithoutPerfilesInput>
  }

  export type gastos_operativosCreateManyPerfilesInputEnvelope = {
    data: gastos_operativosCreateManyPerfilesInput | gastos_operativosCreateManyPerfilesInput[]
    skipDuplicates?: boolean
  }

  export type movimientos_inventarioCreateWithoutPerfilesInput = {
    id?: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    fecha_hora?: Date | string | null
    productos: productosCreateNestedOneWithoutMovimientos_inventarioInput
  }

  export type movimientos_inventarioUncheckedCreateWithoutPerfilesInput = {
    id?: string
    producto_id: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    fecha_hora?: Date | string | null
  }

  export type movimientos_inventarioCreateOrConnectWithoutPerfilesInput = {
    where: movimientos_inventarioWhereUniqueInput
    create: XOR<movimientos_inventarioCreateWithoutPerfilesInput, movimientos_inventarioUncheckedCreateWithoutPerfilesInput>
  }

  export type movimientos_inventarioCreateManyPerfilesInputEnvelope = {
    data: movimientos_inventarioCreateManyPerfilesInput | movimientos_inventarioCreateManyPerfilesInput[]
    skipDuplicates?: boolean
  }

  export type ventasCreateWithoutPerfilesInput = {
    id?: string
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasCreateNestedManyWithoutVentasInput
    clientes?: clientesCreateNestedOneWithoutVentasInput
  }

  export type ventasUncheckedCreateWithoutPerfilesInput = {
    id?: string
    cliente_id?: string | null
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUncheckedCreateNestedManyWithoutVentasInput
  }

  export type ventasCreateOrConnectWithoutPerfilesInput = {
    where: ventasWhereUniqueInput
    create: XOR<ventasCreateWithoutPerfilesInput, ventasUncheckedCreateWithoutPerfilesInput>
  }

  export type ventasCreateManyPerfilesInputEnvelope = {
    data: ventasCreateManyPerfilesInput | ventasCreateManyPerfilesInput[]
    skipDuplicates?: boolean
  }

  export type cuadres_cajaUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: cuadres_cajaWhereUniqueInput
    update: XOR<cuadres_cajaUpdateWithoutPerfilesInput, cuadres_cajaUncheckedUpdateWithoutPerfilesInput>
    create: XOR<cuadres_cajaCreateWithoutPerfilesInput, cuadres_cajaUncheckedCreateWithoutPerfilesInput>
  }

  export type cuadres_cajaUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: cuadres_cajaWhereUniqueInput
    data: XOR<cuadres_cajaUpdateWithoutPerfilesInput, cuadres_cajaUncheckedUpdateWithoutPerfilesInput>
  }

  export type cuadres_cajaUpdateManyWithWhereWithoutPerfilesInput = {
    where: cuadres_cajaScalarWhereInput
    data: XOR<cuadres_cajaUpdateManyMutationInput, cuadres_cajaUncheckedUpdateManyWithoutPerfilesInput>
  }

  export type cuadres_cajaScalarWhereInput = {
    AND?: cuadres_cajaScalarWhereInput | cuadres_cajaScalarWhereInput[]
    OR?: cuadres_cajaScalarWhereInput[]
    NOT?: cuadres_cajaScalarWhereInput | cuadres_cajaScalarWhereInput[]
    id?: UuidFilter<"cuadres_caja"> | string
    usuario_staff_id?: UuidFilter<"cuadres_caja"> | string
    fecha_hora?: DateTimeNullableFilter<"cuadres_caja"> | Date | string | null
    monto_efectivo?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_yape?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_plin?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: DecimalNullableFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFilter<"cuadres_caja"> | Decimal | DecimalJsLike | number | string
    observaciones?: StringNullableFilter<"cuadres_caja"> | string | null
    estado?: StringNullableFilter<"cuadres_caja"> | string | null
  }

  export type gastos_operativosUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: gastos_operativosWhereUniqueInput
    update: XOR<gastos_operativosUpdateWithoutPerfilesInput, gastos_operativosUncheckedUpdateWithoutPerfilesInput>
    create: XOR<gastos_operativosCreateWithoutPerfilesInput, gastos_operativosUncheckedCreateWithoutPerfilesInput>
  }

  export type gastos_operativosUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: gastos_operativosWhereUniqueInput
    data: XOR<gastos_operativosUpdateWithoutPerfilesInput, gastos_operativosUncheckedUpdateWithoutPerfilesInput>
  }

  export type gastos_operativosUpdateManyWithWhereWithoutPerfilesInput = {
    where: gastos_operativosScalarWhereInput
    data: XOR<gastos_operativosUpdateManyMutationInput, gastos_operativosUncheckedUpdateManyWithoutPerfilesInput>
  }

  export type gastos_operativosScalarWhereInput = {
    AND?: gastos_operativosScalarWhereInput | gastos_operativosScalarWhereInput[]
    OR?: gastos_operativosScalarWhereInput[]
    NOT?: gastos_operativosScalarWhereInput | gastos_operativosScalarWhereInput[]
    id?: UuidFilter<"gastos_operativos"> | string
    concepto?: StringFilter<"gastos_operativos"> | string
    monto?: DecimalFilter<"gastos_operativos"> | Decimal | DecimalJsLike | number | string
    categoria?: StringNullableFilter<"gastos_operativos"> | string | null
    fecha_hora?: DateTimeNullableFilter<"gastos_operativos"> | Date | string | null
    usuario_id?: UuidNullableFilter<"gastos_operativos"> | string | null
  }

  export type movimientos_inventarioUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: movimientos_inventarioWhereUniqueInput
    update: XOR<movimientos_inventarioUpdateWithoutPerfilesInput, movimientos_inventarioUncheckedUpdateWithoutPerfilesInput>
    create: XOR<movimientos_inventarioCreateWithoutPerfilesInput, movimientos_inventarioUncheckedCreateWithoutPerfilesInput>
  }

  export type movimientos_inventarioUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: movimientos_inventarioWhereUniqueInput
    data: XOR<movimientos_inventarioUpdateWithoutPerfilesInput, movimientos_inventarioUncheckedUpdateWithoutPerfilesInput>
  }

  export type movimientos_inventarioUpdateManyWithWhereWithoutPerfilesInput = {
    where: movimientos_inventarioScalarWhereInput
    data: XOR<movimientos_inventarioUpdateManyMutationInput, movimientos_inventarioUncheckedUpdateManyWithoutPerfilesInput>
  }

  export type movimientos_inventarioScalarWhereInput = {
    AND?: movimientos_inventarioScalarWhereInput | movimientos_inventarioScalarWhereInput[]
    OR?: movimientos_inventarioScalarWhereInput[]
    NOT?: movimientos_inventarioScalarWhereInput | movimientos_inventarioScalarWhereInput[]
    id?: UuidFilter<"movimientos_inventario"> | string
    producto_id?: UuidFilter<"movimientos_inventario"> | string
    talla?: StringFilter<"movimientos_inventario"> | string
    tipo?: StringFilter<"movimientos_inventario"> | string
    cantidad?: IntFilter<"movimientos_inventario"> | number
    motivo?: StringNullableFilter<"movimientos_inventario"> | string | null
    usuario_id?: UuidNullableFilter<"movimientos_inventario"> | string | null
    fecha_hora?: DateTimeNullableFilter<"movimientos_inventario"> | Date | string | null
  }

  export type ventasUpsertWithWhereUniqueWithoutPerfilesInput = {
    where: ventasWhereUniqueInput
    update: XOR<ventasUpdateWithoutPerfilesInput, ventasUncheckedUpdateWithoutPerfilesInput>
    create: XOR<ventasCreateWithoutPerfilesInput, ventasUncheckedCreateWithoutPerfilesInput>
  }

  export type ventasUpdateWithWhereUniqueWithoutPerfilesInput = {
    where: ventasWhereUniqueInput
    data: XOR<ventasUpdateWithoutPerfilesInput, ventasUncheckedUpdateWithoutPerfilesInput>
  }

  export type ventasUpdateManyWithWhereWithoutPerfilesInput = {
    where: ventasScalarWhereInput
    data: XOR<ventasUpdateManyMutationInput, ventasUncheckedUpdateManyWithoutPerfilesInput>
  }

  export type detalle_ventasCreateWithoutProductosInput = {
    id?: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
    ventas: ventasCreateNestedOneWithoutDetalle_ventasInput
  }

  export type detalle_ventasUncheckedCreateWithoutProductosInput = {
    id?: string
    venta_id: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasCreateOrConnectWithoutProductosInput = {
    where: detalle_ventasWhereUniqueInput
    create: XOR<detalle_ventasCreateWithoutProductosInput, detalle_ventasUncheckedCreateWithoutProductosInput>
  }

  export type detalle_ventasCreateManyProductosInputEnvelope = {
    data: detalle_ventasCreateManyProductosInput | detalle_ventasCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type inventario_tallasCreateWithoutProductosInput = {
    id?: string
    talla: string
    cantidad?: number
  }

  export type inventario_tallasUncheckedCreateWithoutProductosInput = {
    id?: string
    talla: string
    cantidad?: number
  }

  export type inventario_tallasCreateOrConnectWithoutProductosInput = {
    where: inventario_tallasWhereUniqueInput
    create: XOR<inventario_tallasCreateWithoutProductosInput, inventario_tallasUncheckedCreateWithoutProductosInput>
  }

  export type inventario_tallasCreateManyProductosInputEnvelope = {
    data: inventario_tallasCreateManyProductosInput | inventario_tallasCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type movimientos_inventarioCreateWithoutProductosInput = {
    id?: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    fecha_hora?: Date | string | null
    perfiles?: perfilesCreateNestedOneWithoutMovimientos_inventarioInput
  }

  export type movimientos_inventarioUncheckedCreateWithoutProductosInput = {
    id?: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    usuario_id?: string | null
    fecha_hora?: Date | string | null
  }

  export type movimientos_inventarioCreateOrConnectWithoutProductosInput = {
    where: movimientos_inventarioWhereUniqueInput
    create: XOR<movimientos_inventarioCreateWithoutProductosInput, movimientos_inventarioUncheckedCreateWithoutProductosInput>
  }

  export type movimientos_inventarioCreateManyProductosInputEnvelope = {
    data: movimientos_inventarioCreateManyProductosInput | movimientos_inventarioCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type detalle_ventasUpsertWithWhereUniqueWithoutProductosInput = {
    where: detalle_ventasWhereUniqueInput
    update: XOR<detalle_ventasUpdateWithoutProductosInput, detalle_ventasUncheckedUpdateWithoutProductosInput>
    create: XOR<detalle_ventasCreateWithoutProductosInput, detalle_ventasUncheckedCreateWithoutProductosInput>
  }

  export type detalle_ventasUpdateWithWhereUniqueWithoutProductosInput = {
    where: detalle_ventasWhereUniqueInput
    data: XOR<detalle_ventasUpdateWithoutProductosInput, detalle_ventasUncheckedUpdateWithoutProductosInput>
  }

  export type detalle_ventasUpdateManyWithWhereWithoutProductosInput = {
    where: detalle_ventasScalarWhereInput
    data: XOR<detalle_ventasUpdateManyMutationInput, detalle_ventasUncheckedUpdateManyWithoutProductosInput>
  }

  export type detalle_ventasScalarWhereInput = {
    AND?: detalle_ventasScalarWhereInput | detalle_ventasScalarWhereInput[]
    OR?: detalle_ventasScalarWhereInput[]
    NOT?: detalle_ventasScalarWhereInput | detalle_ventasScalarWhereInput[]
    id?: UuidFilter<"detalle_ventas"> | string
    venta_id?: UuidFilter<"detalle_ventas"> | string
    producto_id?: UuidFilter<"detalle_ventas"> | string
    talla?: StringFilter<"detalle_ventas"> | string
    cantidad?: IntFilter<"detalle_ventas"> | number
    costo_inversion_unitario?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: DecimalNullableFilter<"detalle_ventas"> | Decimal | DecimalJsLike | number | string | null
  }

  export type inventario_tallasUpsertWithWhereUniqueWithoutProductosInput = {
    where: inventario_tallasWhereUniqueInput
    update: XOR<inventario_tallasUpdateWithoutProductosInput, inventario_tallasUncheckedUpdateWithoutProductosInput>
    create: XOR<inventario_tallasCreateWithoutProductosInput, inventario_tallasUncheckedCreateWithoutProductosInput>
  }

  export type inventario_tallasUpdateWithWhereUniqueWithoutProductosInput = {
    where: inventario_tallasWhereUniqueInput
    data: XOR<inventario_tallasUpdateWithoutProductosInput, inventario_tallasUncheckedUpdateWithoutProductosInput>
  }

  export type inventario_tallasUpdateManyWithWhereWithoutProductosInput = {
    where: inventario_tallasScalarWhereInput
    data: XOR<inventario_tallasUpdateManyMutationInput, inventario_tallasUncheckedUpdateManyWithoutProductosInput>
  }

  export type inventario_tallasScalarWhereInput = {
    AND?: inventario_tallasScalarWhereInput | inventario_tallasScalarWhereInput[]
    OR?: inventario_tallasScalarWhereInput[]
    NOT?: inventario_tallasScalarWhereInput | inventario_tallasScalarWhereInput[]
    id?: UuidFilter<"inventario_tallas"> | string
    producto_id?: UuidFilter<"inventario_tallas"> | string
    talla?: StringFilter<"inventario_tallas"> | string
    cantidad?: IntFilter<"inventario_tallas"> | number
  }

  export type movimientos_inventarioUpsertWithWhereUniqueWithoutProductosInput = {
    where: movimientos_inventarioWhereUniqueInput
    update: XOR<movimientos_inventarioUpdateWithoutProductosInput, movimientos_inventarioUncheckedUpdateWithoutProductosInput>
    create: XOR<movimientos_inventarioCreateWithoutProductosInput, movimientos_inventarioUncheckedCreateWithoutProductosInput>
  }

  export type movimientos_inventarioUpdateWithWhereUniqueWithoutProductosInput = {
    where: movimientos_inventarioWhereUniqueInput
    data: XOR<movimientos_inventarioUpdateWithoutProductosInput, movimientos_inventarioUncheckedUpdateWithoutProductosInput>
  }

  export type movimientos_inventarioUpdateManyWithWhereWithoutProductosInput = {
    where: movimientos_inventarioScalarWhereInput
    data: XOR<movimientos_inventarioUpdateManyMutationInput, movimientos_inventarioUncheckedUpdateManyWithoutProductosInput>
  }

  export type detalle_ventasCreateWithoutVentasInput = {
    id?: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
    productos: productosCreateNestedOneWithoutDetalle_ventasInput
  }

  export type detalle_ventasUncheckedCreateWithoutVentasInput = {
    id?: string
    producto_id: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasCreateOrConnectWithoutVentasInput = {
    where: detalle_ventasWhereUniqueInput
    create: XOR<detalle_ventasCreateWithoutVentasInput, detalle_ventasUncheckedCreateWithoutVentasInput>
  }

  export type detalle_ventasCreateManyVentasInputEnvelope = {
    data: detalle_ventasCreateManyVentasInput | detalle_ventasCreateManyVentasInput[]
    skipDuplicates?: boolean
  }

  export type clientesCreateWithoutVentasInput = {
    id?: string
    nombre: string
    whatsapp?: string | null
    fecha_nacimiento?: Date | string | null
    total_prendas_compradas?: number | null
    valor_total_vida?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    created_at?: Date | string | null
  }

  export type clientesUncheckedCreateWithoutVentasInput = {
    id?: string
    nombre: string
    whatsapp?: string | null
    fecha_nacimiento?: Date | string | null
    total_prendas_compradas?: number | null
    valor_total_vida?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    created_at?: Date | string | null
  }

  export type clientesCreateOrConnectWithoutVentasInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutVentasInput, clientesUncheckedCreateWithoutVentasInput>
  }

  export type perfilesCreateWithoutVentasInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaCreateNestedManyWithoutPerfilesInput
    gastos_operativos?: gastos_operativosCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesUncheckedCreateWithoutVentasInput = {
    id?: string
    nombre: string
    email: string
    rol?: string
    created_at?: Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedCreateNestedManyWithoutPerfilesInput
    gastos_operativos?: gastos_operativosUncheckedCreateNestedManyWithoutPerfilesInput
    movimientos_inventario?: movimientos_inventarioUncheckedCreateNestedManyWithoutPerfilesInput
  }

  export type perfilesCreateOrConnectWithoutVentasInput = {
    where: perfilesWhereUniqueInput
    create: XOR<perfilesCreateWithoutVentasInput, perfilesUncheckedCreateWithoutVentasInput>
  }

  export type detalle_ventasUpsertWithWhereUniqueWithoutVentasInput = {
    where: detalle_ventasWhereUniqueInput
    update: XOR<detalle_ventasUpdateWithoutVentasInput, detalle_ventasUncheckedUpdateWithoutVentasInput>
    create: XOR<detalle_ventasCreateWithoutVentasInput, detalle_ventasUncheckedCreateWithoutVentasInput>
  }

  export type detalle_ventasUpdateWithWhereUniqueWithoutVentasInput = {
    where: detalle_ventasWhereUniqueInput
    data: XOR<detalle_ventasUpdateWithoutVentasInput, detalle_ventasUncheckedUpdateWithoutVentasInput>
  }

  export type detalle_ventasUpdateManyWithWhereWithoutVentasInput = {
    where: detalle_ventasScalarWhereInput
    data: XOR<detalle_ventasUpdateManyMutationInput, detalle_ventasUncheckedUpdateManyWithoutVentasInput>
  }

  export type clientesUpsertWithoutVentasInput = {
    update: XOR<clientesUpdateWithoutVentasInput, clientesUncheckedUpdateWithoutVentasInput>
    create: XOR<clientesCreateWithoutVentasInput, clientesUncheckedCreateWithoutVentasInput>
    where?: clientesWhereInput
  }

  export type clientesUpdateToOneWithWhereWithoutVentasInput = {
    where?: clientesWhereInput
    data: XOR<clientesUpdateWithoutVentasInput, clientesUncheckedUpdateWithoutVentasInput>
  }

  export type clientesUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_prendas_compradas?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total_vida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_prendas_compradas?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total_vida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type perfilesUpsertWithoutVentasInput = {
    update: XOR<perfilesUpdateWithoutVentasInput, perfilesUncheckedUpdateWithoutVentasInput>
    create: XOR<perfilesCreateWithoutVentasInput, perfilesUncheckedCreateWithoutVentasInput>
    where?: perfilesWhereInput
  }

  export type perfilesUpdateToOneWithWhereWithoutVentasInput = {
    where?: perfilesWhereInput
    data: XOR<perfilesUpdateWithoutVentasInput, perfilesUncheckedUpdateWithoutVentasInput>
  }

  export type perfilesUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUpdateManyWithoutPerfilesNestedInput
    gastos_operativos?: gastos_operativosUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUpdateManyWithoutPerfilesNestedInput
  }

  export type perfilesUncheckedUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cuadres_caja?: cuadres_cajaUncheckedUpdateManyWithoutPerfilesNestedInput
    gastos_operativos?: gastos_operativosUncheckedUpdateManyWithoutPerfilesNestedInput
    movimientos_inventario?: movimientos_inventarioUncheckedUpdateManyWithoutPerfilesNestedInput
  }

  export type ventasCreateManyClientesInput = {
    id?: string
    usuario_id?: string | null
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
  }

  export type ventasUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUpdateManyWithoutVentasNestedInput
    perfiles?: perfilesUpdateOneWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateManyWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type cuadres_cajaCreateManyPerfilesInput = {
    id?: string
    fecha_hora?: Date | string | null
    monto_efectivo?: Decimal | DecimalJsLike | number | string | null
    monto_yape?: Decimal | DecimalJsLike | number | string | null
    monto_plin?: Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: Decimal | DecimalJsLike | number | string | null
    monto_declarado: Decimal | DecimalJsLike | number | string
    monto_sistema: Decimal | DecimalJsLike | number | string
    diferencia?: Decimal | DecimalJsLike | number | string
    observaciones?: string | null
    estado?: string | null
  }

  export type gastos_operativosCreateManyPerfilesInput = {
    id?: string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    categoria?: string | null
    fecha_hora?: Date | string | null
  }

  export type movimientos_inventarioCreateManyPerfilesInput = {
    id?: string
    producto_id: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    fecha_hora?: Date | string | null
  }

  export type ventasCreateManyPerfilesInput = {
    id?: string
    cliente_id?: string | null
    fecha_hora?: Date | string | null
    canal_venta: string
    metodo_pago: string
    total: Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: Decimal | DecimalJsLike | number | string
  }

  export type cuadres_cajaUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_efectivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_yape?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_plin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuadres_cajaUncheckedUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_efectivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_yape?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_plin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuadres_cajaUncheckedUpdateManyWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_efectivo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_yape?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_plin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_transferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_tarjeta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_declarado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_sistema?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    diferencia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gastos_operativosUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gastos_operativosUncheckedUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gastos_operativosUncheckedUpdateManyWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_inventarioUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateOneRequiredWithoutMovimientos_inventarioNestedInput
  }

  export type movimientos_inventarioUncheckedUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_inventarioUncheckedUpdateManyWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ventasUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUpdateManyWithoutVentasNestedInput
    clientes?: clientesUpdateOneWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cliente_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalle_ventas?: detalle_ventasUncheckedUpdateManyWithoutVentasNestedInput
  }

  export type ventasUncheckedUpdateManyWithoutPerfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cliente_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canal_venta?: StringFieldUpdateOperationsInput | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_neta_venta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type detalle_ventasCreateManyProductosInput = {
    id?: string
    venta_id: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type inventario_tallasCreateManyProductosInput = {
    id?: string
    talla: string
    cantidad?: number
  }

  export type movimientos_inventarioCreateManyProductosInput = {
    id?: string
    talla: string
    tipo: string
    cantidad: number
    motivo?: string | null
    usuario_id?: string | null
    fecha_hora?: Date | string | null
  }

  export type detalle_ventasUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ventas?: ventasUpdateOneRequiredWithoutDetalle_ventasNestedInput
  }

  export type detalle_ventasUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    venta_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasUncheckedUpdateManyWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    venta_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type inventario_tallasUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type inventario_tallasUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type inventario_tallasUncheckedUpdateManyWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type movimientos_inventarioUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfiles?: perfilesUpdateOneWithoutMovimientos_inventarioNestedInput
  }

  export type movimientos_inventarioUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_inventarioUncheckedUpdateManyWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_ventasCreateManyVentasInput = {
    id?: string
    producto_id: string
    talla: string
    cantidad: number
    costo_inversion_unitario: Decimal | DecimalJsLike | number | string
    precio_venta_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    productos?: productosUpdateOneRequiredWithoutDetalle_ventasNestedInput
  }

  export type detalle_ventasUncheckedUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type detalle_ventasUncheckedUpdateManyWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    producto_id?: StringFieldUpdateOperationsInput | string
    talla?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    costo_inversion_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_venta_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilidad_subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClientesCountOutputTypeDefaultArgs instead
     */
    export type ClientesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerfilesCountOutputTypeDefaultArgs instead
     */
    export type PerfilesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerfilesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductosCountOutputTypeDefaultArgs instead
     */
    export type ProductosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VentasCountOutputTypeDefaultArgs instead
     */
    export type VentasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VentasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clientesDefaultArgs instead
     */
    export type clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clientesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use configuracion_empresaDefaultArgs instead
     */
    export type configuracion_empresaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = configuracion_empresaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cuadres_cajaDefaultArgs instead
     */
    export type cuadres_cajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cuadres_cajaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use detalle_ventasDefaultArgs instead
     */
    export type detalle_ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = detalle_ventasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gastos_operativosDefaultArgs instead
     */
    export type gastos_operativosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gastos_operativosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inventario_tallasDefaultArgs instead
     */
    export type inventario_tallasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inventario_tallasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use movimientos_inventarioDefaultArgs instead
     */
    export type movimientos_inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movimientos_inventarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use perfilesDefaultArgs instead
     */
    export type perfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = perfilesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productosDefaultArgs instead
     */
    export type productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ventasDefaultArgs instead
     */
    export type ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ventasDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
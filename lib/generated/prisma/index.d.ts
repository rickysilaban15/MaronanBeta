
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
 * Model contacts
 * 
 */
export type contacts = $Result.DefaultSelection<Prisma.$contactsPayload>
/**
 * Model keranjang
 * 
 */
export type keranjang = $Result.DefaultSelection<Prisma.$keranjangPayload>
/**
 * Model newsletter_subscribers
 * 
 */
export type newsletter_subscribers = $Result.DefaultSelection<Prisma.$newsletter_subscribersPayload>
/**
 * Model produk
 * 
 */
export type produk = $Result.DefaultSelection<Prisma.$produkPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contacts.findMany()
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
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contacts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contacts`: Exposes CRUD operations for the **contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.contactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keranjang`: Exposes CRUD operations for the **keranjang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keranjangs
    * const keranjangs = await prisma.keranjang.findMany()
    * ```
    */
  get keranjang(): Prisma.keranjangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletter_subscribers`: Exposes CRUD operations for the **newsletter_subscribers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Newsletter_subscribers
    * const newsletter_subscribers = await prisma.newsletter_subscribers.findMany()
    * ```
    */
  get newsletter_subscribers(): Prisma.newsletter_subscribersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.produkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    contacts: 'contacts',
    keranjang: 'keranjang',
    newsletter_subscribers: 'newsletter_subscribers',
    produk: 'produk',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contacts" | "keranjang" | "newsletter_subscribers" | "produk" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      contacts: {
        payload: Prisma.$contactsPayload<ExtArgs>
        fields: Prisma.contactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          findFirst: {
            args: Prisma.contactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          findMany: {
            args: Prisma.contactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>[]
          }
          create: {
            args: Prisma.contactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          createMany: {
            args: Prisma.contactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          update: {
            args: Prisma.contactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          deleteMany: {
            args: Prisma.contactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.contactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      keranjang: {
        payload: Prisma.$keranjangPayload<ExtArgs>
        fields: Prisma.keranjangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.keranjangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.keranjangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          findFirst: {
            args: Prisma.keranjangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.keranjangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          findMany: {
            args: Prisma.keranjangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>[]
          }
          create: {
            args: Prisma.keranjangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          createMany: {
            args: Prisma.keranjangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.keranjangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          update: {
            args: Prisma.keranjangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          deleteMany: {
            args: Prisma.keranjangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.keranjangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.keranjangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          aggregate: {
            args: Prisma.KeranjangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeranjang>
          }
          groupBy: {
            args: Prisma.keranjangGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeranjangGroupByOutputType>[]
          }
          count: {
            args: Prisma.keranjangCountArgs<ExtArgs>
            result: $Utils.Optional<KeranjangCountAggregateOutputType> | number
          }
        }
      }
      newsletter_subscribers: {
        payload: Prisma.$newsletter_subscribersPayload<ExtArgs>
        fields: Prisma.newsletter_subscribersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.newsletter_subscribersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.newsletter_subscribersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload>
          }
          findFirst: {
            args: Prisma.newsletter_subscribersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.newsletter_subscribersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload>
          }
          findMany: {
            args: Prisma.newsletter_subscribersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload>[]
          }
          create: {
            args: Prisma.newsletter_subscribersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload>
          }
          createMany: {
            args: Prisma.newsletter_subscribersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.newsletter_subscribersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload>
          }
          update: {
            args: Prisma.newsletter_subscribersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload>
          }
          deleteMany: {
            args: Prisma.newsletter_subscribersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.newsletter_subscribersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.newsletter_subscribersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$newsletter_subscribersPayload>
          }
          aggregate: {
            args: Prisma.Newsletter_subscribersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletter_subscribers>
          }
          groupBy: {
            args: Prisma.newsletter_subscribersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Newsletter_subscribersGroupByOutputType>[]
          }
          count: {
            args: Prisma.newsletter_subscribersCountArgs<ExtArgs>
            result: $Utils.Optional<Newsletter_subscribersCountAggregateOutputType> | number
          }
        }
      }
      produk: {
        payload: Prisma.$produkPayload<ExtArgs>
        fields: Prisma.produkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findFirst: {
            args: Prisma.produkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findMany: {
            args: Prisma.produkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          create: {
            args: Prisma.produkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          createMany: {
            args: Prisma.produkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          update: {
            args: Prisma.produkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          deleteMany: {
            args: Prisma.produkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.produkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contacts?: contactsOmit
    keranjang?: keranjangOmit
    newsletter_subscribers?: newsletter_subscribersOmit
    produk?: produkOmit
    users?: usersOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    keranjang: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | ProdukCountOutputTypeCountKeranjangArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
  }


  /**
   * Models
   */

  /**
   * Model contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactsSumAggregateOutputType = {
    id: number | null
  }

  export type ContactsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    created_at: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    created_at: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    created_at: number
    _all: number
  }


  export type ContactsAvgAggregateInputType = {
    id?: true
  }

  export type ContactsSumAggregateInputType = {
    id?: true
  }

  export type ContactsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    created_at?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    created_at?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    created_at?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to aggregate.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type contactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactsWhereInput
    orderBy?: contactsOrderByWithAggregationInput | contactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: contactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _avg?: ContactsAvgAggregateInputType
    _sum?: ContactsSumAggregateInputType
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    message: string | null
    created_at: Date
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends contactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type contactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contacts"]>



  export type contactsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    created_at?: boolean
  }

  export type contactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "created_at", ExtArgs["result"]["contacts"]>

  export type $contactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      message: string | null
      created_at: Date
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type contactsGetPayload<S extends boolean | null | undefined | contactsDefaultArgs> = $Result.GetResult<Prisma.$contactsPayload, S>

  type contactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface contactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contacts'], meta: { name: 'contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {contactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactsFindUniqueArgs>(args: SelectSubset<T, contactsFindUniqueArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactsFindUniqueOrThrowArgs>(args: SelectSubset<T, contactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactsFindFirstArgs>(args?: SelectSubset<T, contactsFindFirstArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactsFindFirstOrThrowArgs>(args?: SelectSubset<T, contactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactsFindManyArgs>(args?: SelectSubset<T, contactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {contactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends contactsCreateArgs>(args: SelectSubset<T, contactsCreateArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {contactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactsCreateManyArgs>(args?: SelectSubset<T, contactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contacts.
     * @param {contactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends contactsDeleteArgs>(args: SelectSubset<T, contactsDeleteArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {contactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactsUpdateArgs>(args: SelectSubset<T, contactsUpdateArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {contactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactsDeleteManyArgs>(args?: SelectSubset<T, contactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactsUpdateManyArgs>(args: SelectSubset<T, contactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contacts.
     * @param {contactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends contactsUpsertArgs>(args: SelectSubset<T, contactsUpsertArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactsCountArgs>(
      args?: Subset<T, contactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsGroupByArgs} args - Group by arguments.
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
      T extends contactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactsGroupByArgs['orderBy'] }
        : { orderBy?: contactsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contacts model
   */
  readonly fields: contactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the contacts model
   */
  interface contactsFieldRefs {
    readonly id: FieldRef<"contacts", 'Int'>
    readonly name: FieldRef<"contacts", 'String'>
    readonly email: FieldRef<"contacts", 'String'>
    readonly phone: FieldRef<"contacts", 'String'>
    readonly message: FieldRef<"contacts", 'String'>
    readonly created_at: FieldRef<"contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contacts findUnique
   */
  export type contactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts findUniqueOrThrow
   */
  export type contactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts findFirst
   */
  export type contactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts findFirstOrThrow
   */
  export type contactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts findMany
   */
  export type contactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts create
   */
  export type contactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data needed to create a contacts.
     */
    data: XOR<contactsCreateInput, contactsUncheckedCreateInput>
  }

  /**
   * contacts createMany
   */
  export type contactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactsCreateManyInput | contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacts update
   */
  export type contactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data needed to update a contacts.
     */
    data: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
    /**
     * Choose, which contacts to update.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts updateMany
   */
  export type contactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactsUpdateManyMutationInput, contactsUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contacts upsert
   */
  export type contactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The filter to search for the contacts to update in case it exists.
     */
    where: contactsWhereUniqueInput
    /**
     * In case the contacts found by the `where` argument doesn't exist, create a new contacts with this data.
     */
    create: XOR<contactsCreateInput, contactsUncheckedCreateInput>
    /**
     * In case the contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
  }

  /**
   * contacts delete
   */
  export type contactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter which contacts to delete.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts deleteMany
   */
  export type contactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to delete.
     */
    limit?: number
  }

  /**
   * contacts without action
   */
  export type contactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
  }


  /**
   * Model keranjang
   */

  export type AggregateKeranjang = {
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  export type KeranjangAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    produk_id: number | null
    jumlah: number | null
  }

  export type KeranjangSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    produk_id: number | null
    jumlah: number | null
  }

  export type KeranjangMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    produk_id: number | null
    jumlah: number | null
    created_at: Date | null
  }

  export type KeranjangMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    produk_id: number | null
    jumlah: number | null
    created_at: Date | null
  }

  export type KeranjangCountAggregateOutputType = {
    id: number
    user_id: number
    produk_id: number
    jumlah: number
    created_at: number
    _all: number
  }


  export type KeranjangAvgAggregateInputType = {
    id?: true
    user_id?: true
    produk_id?: true
    jumlah?: true
  }

  export type KeranjangSumAggregateInputType = {
    id?: true
    user_id?: true
    produk_id?: true
    jumlah?: true
  }

  export type KeranjangMinAggregateInputType = {
    id?: true
    user_id?: true
    produk_id?: true
    jumlah?: true
    created_at?: true
  }

  export type KeranjangMaxAggregateInputType = {
    id?: true
    user_id?: true
    produk_id?: true
    jumlah?: true
    created_at?: true
  }

  export type KeranjangCountAggregateInputType = {
    id?: true
    user_id?: true
    produk_id?: true
    jumlah?: true
    created_at?: true
    _all?: true
  }

  export type KeranjangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keranjang to aggregate.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned keranjangs
    **/
    _count?: true | KeranjangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeranjangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeranjangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeranjangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeranjangMaxAggregateInputType
  }

  export type GetKeranjangAggregateType<T extends KeranjangAggregateArgs> = {
        [P in keyof T & keyof AggregateKeranjang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeranjang[P]>
      : GetScalarType<T[P], AggregateKeranjang[P]>
  }




  export type keranjangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithAggregationInput | keranjangOrderByWithAggregationInput[]
    by: KeranjangScalarFieldEnum[] | KeranjangScalarFieldEnum
    having?: keranjangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeranjangCountAggregateInputType | true
    _avg?: KeranjangAvgAggregateInputType
    _sum?: KeranjangSumAggregateInputType
    _min?: KeranjangMinAggregateInputType
    _max?: KeranjangMaxAggregateInputType
  }

  export type KeranjangGroupByOutputType = {
    id: number
    user_id: number | null
    produk_id: number
    jumlah: number | null
    created_at: Date
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  type GetKeranjangGroupByPayload<T extends keranjangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeranjangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeranjangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
            : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
        }
      >
    >


  export type keranjangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    produk_id?: boolean
    jumlah?: boolean
    created_at?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keranjang"]>



  export type keranjangSelectScalar = {
    id?: boolean
    user_id?: boolean
    produk_id?: boolean
    jumlah?: boolean
    created_at?: boolean
  }

  export type keranjangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "produk_id" | "jumlah" | "created_at", ExtArgs["result"]["keranjang"]>
  export type keranjangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }

  export type $keranjangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "keranjang"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      produk_id: number
      jumlah: number | null
      created_at: Date
    }, ExtArgs["result"]["keranjang"]>
    composites: {}
  }

  type keranjangGetPayload<S extends boolean | null | undefined | keranjangDefaultArgs> = $Result.GetResult<Prisma.$keranjangPayload, S>

  type keranjangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<keranjangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeranjangCountAggregateInputType | true
    }

  export interface keranjangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['keranjang'], meta: { name: 'keranjang' } }
    /**
     * Find zero or one Keranjang that matches the filter.
     * @param {keranjangFindUniqueArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends keranjangFindUniqueArgs>(args: SelectSubset<T, keranjangFindUniqueArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keranjang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {keranjangFindUniqueOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends keranjangFindUniqueOrThrowArgs>(args: SelectSubset<T, keranjangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keranjang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindFirstArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends keranjangFindFirstArgs>(args?: SelectSubset<T, keranjangFindFirstArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keranjang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindFirstOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends keranjangFindFirstOrThrowArgs>(args?: SelectSubset<T, keranjangFindFirstOrThrowArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keranjangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keranjangs
     * const keranjangs = await prisma.keranjang.findMany()
     * 
     * // Get first 10 Keranjangs
     * const keranjangs = await prisma.keranjang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keranjangWithIdOnly = await prisma.keranjang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends keranjangFindManyArgs>(args?: SelectSubset<T, keranjangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keranjang.
     * @param {keranjangCreateArgs} args - Arguments to create a Keranjang.
     * @example
     * // Create one Keranjang
     * const Keranjang = await prisma.keranjang.create({
     *   data: {
     *     // ... data to create a Keranjang
     *   }
     * })
     * 
     */
    create<T extends keranjangCreateArgs>(args: SelectSubset<T, keranjangCreateArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keranjangs.
     * @param {keranjangCreateManyArgs} args - Arguments to create many Keranjangs.
     * @example
     * // Create many Keranjangs
     * const keranjang = await prisma.keranjang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends keranjangCreateManyArgs>(args?: SelectSubset<T, keranjangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Keranjang.
     * @param {keranjangDeleteArgs} args - Arguments to delete one Keranjang.
     * @example
     * // Delete one Keranjang
     * const Keranjang = await prisma.keranjang.delete({
     *   where: {
     *     // ... filter to delete one Keranjang
     *   }
     * })
     * 
     */
    delete<T extends keranjangDeleteArgs>(args: SelectSubset<T, keranjangDeleteArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keranjang.
     * @param {keranjangUpdateArgs} args - Arguments to update one Keranjang.
     * @example
     * // Update one Keranjang
     * const keranjang = await prisma.keranjang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends keranjangUpdateArgs>(args: SelectSubset<T, keranjangUpdateArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keranjangs.
     * @param {keranjangDeleteManyArgs} args - Arguments to filter Keranjangs to delete.
     * @example
     * // Delete a few Keranjangs
     * const { count } = await prisma.keranjang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends keranjangDeleteManyArgs>(args?: SelectSubset<T, keranjangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keranjangs
     * const keranjang = await prisma.keranjang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends keranjangUpdateManyArgs>(args: SelectSubset<T, keranjangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Keranjang.
     * @param {keranjangUpsertArgs} args - Arguments to update or create a Keranjang.
     * @example
     * // Update or create a Keranjang
     * const keranjang = await prisma.keranjang.upsert({
     *   create: {
     *     // ... data to create a Keranjang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keranjang we want to update
     *   }
     * })
     */
    upsert<T extends keranjangUpsertArgs>(args: SelectSubset<T, keranjangUpsertArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangCountArgs} args - Arguments to filter Keranjangs to count.
     * @example
     * // Count the number of Keranjangs
     * const count = await prisma.keranjang.count({
     *   where: {
     *     // ... the filter for the Keranjangs we want to count
     *   }
     * })
    **/
    count<T extends keranjangCountArgs>(
      args?: Subset<T, keranjangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeranjangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeranjangAggregateArgs>(args: Subset<T, KeranjangAggregateArgs>): Prisma.PrismaPromise<GetKeranjangAggregateType<T>>

    /**
     * Group by Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangGroupByArgs} args - Group by arguments.
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
      T extends keranjangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: keranjangGroupByArgs['orderBy'] }
        : { orderBy?: keranjangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, keranjangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeranjangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the keranjang model
   */
  readonly fields: keranjangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for keranjang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__keranjangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends produkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkDefaultArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the keranjang model
   */
  interface keranjangFieldRefs {
    readonly id: FieldRef<"keranjang", 'Int'>
    readonly user_id: FieldRef<"keranjang", 'Int'>
    readonly produk_id: FieldRef<"keranjang", 'Int'>
    readonly jumlah: FieldRef<"keranjang", 'Int'>
    readonly created_at: FieldRef<"keranjang", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * keranjang findUnique
   */
  export type keranjangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang findUniqueOrThrow
   */
  export type keranjangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang findFirst
   */
  export type keranjangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang findFirstOrThrow
   */
  export type keranjangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang findMany
   */
  export type keranjangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjangs to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang create
   */
  export type keranjangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The data needed to create a keranjang.
     */
    data: XOR<keranjangCreateInput, keranjangUncheckedCreateInput>
  }

  /**
   * keranjang createMany
   */
  export type keranjangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many keranjangs.
     */
    data: keranjangCreateManyInput | keranjangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * keranjang update
   */
  export type keranjangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The data needed to update a keranjang.
     */
    data: XOR<keranjangUpdateInput, keranjangUncheckedUpdateInput>
    /**
     * Choose, which keranjang to update.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang updateMany
   */
  export type keranjangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update keranjangs.
     */
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyInput>
    /**
     * Filter which keranjangs to update
     */
    where?: keranjangWhereInput
    /**
     * Limit how many keranjangs to update.
     */
    limit?: number
  }

  /**
   * keranjang upsert
   */
  export type keranjangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The filter to search for the keranjang to update in case it exists.
     */
    where: keranjangWhereUniqueInput
    /**
     * In case the keranjang found by the `where` argument doesn't exist, create a new keranjang with this data.
     */
    create: XOR<keranjangCreateInput, keranjangUncheckedCreateInput>
    /**
     * In case the keranjang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<keranjangUpdateInput, keranjangUncheckedUpdateInput>
  }

  /**
   * keranjang delete
   */
  export type keranjangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter which keranjang to delete.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang deleteMany
   */
  export type keranjangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keranjangs to delete
     */
    where?: keranjangWhereInput
    /**
     * Limit how many keranjangs to delete.
     */
    limit?: number
  }

  /**
   * keranjang without action
   */
  export type keranjangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
  }


  /**
   * Model newsletter_subscribers
   */

  export type AggregateNewsletter_subscribers = {
    _count: Newsletter_subscribersCountAggregateOutputType | null
    _avg: Newsletter_subscribersAvgAggregateOutputType | null
    _sum: Newsletter_subscribersSumAggregateOutputType | null
    _min: Newsletter_subscribersMinAggregateOutputType | null
    _max: Newsletter_subscribersMaxAggregateOutputType | null
  }

  export type Newsletter_subscribersAvgAggregateOutputType = {
    id: number | null
  }

  export type Newsletter_subscribersSumAggregateOutputType = {
    id: number | null
  }

  export type Newsletter_subscribersMinAggregateOutputType = {
    id: number | null
    email: string | null
    subscribed_at: Date | null
  }

  export type Newsletter_subscribersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    subscribed_at: Date | null
  }

  export type Newsletter_subscribersCountAggregateOutputType = {
    id: number
    email: number
    subscribed_at: number
    _all: number
  }


  export type Newsletter_subscribersAvgAggregateInputType = {
    id?: true
  }

  export type Newsletter_subscribersSumAggregateInputType = {
    id?: true
  }

  export type Newsletter_subscribersMinAggregateInputType = {
    id?: true
    email?: true
    subscribed_at?: true
  }

  export type Newsletter_subscribersMaxAggregateInputType = {
    id?: true
    email?: true
    subscribed_at?: true
  }

  export type Newsletter_subscribersCountAggregateInputType = {
    id?: true
    email?: true
    subscribed_at?: true
    _all?: true
  }

  export type Newsletter_subscribersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsletter_subscribers to aggregate.
     */
    where?: newsletter_subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletter_subscribers to fetch.
     */
    orderBy?: newsletter_subscribersOrderByWithRelationInput | newsletter_subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: newsletter_subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletter_subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletter_subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned newsletter_subscribers
    **/
    _count?: true | Newsletter_subscribersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Newsletter_subscribersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Newsletter_subscribersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Newsletter_subscribersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Newsletter_subscribersMaxAggregateInputType
  }

  export type GetNewsletter_subscribersAggregateType<T extends Newsletter_subscribersAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletter_subscribers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletter_subscribers[P]>
      : GetScalarType<T[P], AggregateNewsletter_subscribers[P]>
  }




  export type newsletter_subscribersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: newsletter_subscribersWhereInput
    orderBy?: newsletter_subscribersOrderByWithAggregationInput | newsletter_subscribersOrderByWithAggregationInput[]
    by: Newsletter_subscribersScalarFieldEnum[] | Newsletter_subscribersScalarFieldEnum
    having?: newsletter_subscribersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Newsletter_subscribersCountAggregateInputType | true
    _avg?: Newsletter_subscribersAvgAggregateInputType
    _sum?: Newsletter_subscribersSumAggregateInputType
    _min?: Newsletter_subscribersMinAggregateInputType
    _max?: Newsletter_subscribersMaxAggregateInputType
  }

  export type Newsletter_subscribersGroupByOutputType = {
    id: number
    email: string
    subscribed_at: Date
    _count: Newsletter_subscribersCountAggregateOutputType | null
    _avg: Newsletter_subscribersAvgAggregateOutputType | null
    _sum: Newsletter_subscribersSumAggregateOutputType | null
    _min: Newsletter_subscribersMinAggregateOutputType | null
    _max: Newsletter_subscribersMaxAggregateOutputType | null
  }

  type GetNewsletter_subscribersGroupByPayload<T extends newsletter_subscribersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Newsletter_subscribersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Newsletter_subscribersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Newsletter_subscribersGroupByOutputType[P]>
            : GetScalarType<T[P], Newsletter_subscribersGroupByOutputType[P]>
        }
      >
    >


  export type newsletter_subscribersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    subscribed_at?: boolean
  }, ExtArgs["result"]["newsletter_subscribers"]>



  export type newsletter_subscribersSelectScalar = {
    id?: boolean
    email?: boolean
    subscribed_at?: boolean
  }

  export type newsletter_subscribersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "subscribed_at", ExtArgs["result"]["newsletter_subscribers"]>

  export type $newsletter_subscribersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "newsletter_subscribers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      subscribed_at: Date
    }, ExtArgs["result"]["newsletter_subscribers"]>
    composites: {}
  }

  type newsletter_subscribersGetPayload<S extends boolean | null | undefined | newsletter_subscribersDefaultArgs> = $Result.GetResult<Prisma.$newsletter_subscribersPayload, S>

  type newsletter_subscribersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<newsletter_subscribersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Newsletter_subscribersCountAggregateInputType | true
    }

  export interface newsletter_subscribersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['newsletter_subscribers'], meta: { name: 'newsletter_subscribers' } }
    /**
     * Find zero or one Newsletter_subscribers that matches the filter.
     * @param {newsletter_subscribersFindUniqueArgs} args - Arguments to find a Newsletter_subscribers
     * @example
     * // Get one Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends newsletter_subscribersFindUniqueArgs>(args: SelectSubset<T, newsletter_subscribersFindUniqueArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Newsletter_subscribers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {newsletter_subscribersFindUniqueOrThrowArgs} args - Arguments to find a Newsletter_subscribers
     * @example
     * // Get one Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends newsletter_subscribersFindUniqueOrThrowArgs>(args: SelectSubset<T, newsletter_subscribersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletter_subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsletter_subscribersFindFirstArgs} args - Arguments to find a Newsletter_subscribers
     * @example
     * // Get one Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends newsletter_subscribersFindFirstArgs>(args?: SelectSubset<T, newsletter_subscribersFindFirstArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletter_subscribers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsletter_subscribersFindFirstOrThrowArgs} args - Arguments to find a Newsletter_subscribers
     * @example
     * // Get one Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends newsletter_subscribersFindFirstOrThrowArgs>(args?: SelectSubset<T, newsletter_subscribersFindFirstOrThrowArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Newsletter_subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsletter_subscribersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.findMany()
     * 
     * // Get first 10 Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletter_subscribersWithIdOnly = await prisma.newsletter_subscribers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends newsletter_subscribersFindManyArgs>(args?: SelectSubset<T, newsletter_subscribersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Newsletter_subscribers.
     * @param {newsletter_subscribersCreateArgs} args - Arguments to create a Newsletter_subscribers.
     * @example
     * // Create one Newsletter_subscribers
     * const Newsletter_subscribers = await prisma.newsletter_subscribers.create({
     *   data: {
     *     // ... data to create a Newsletter_subscribers
     *   }
     * })
     * 
     */
    create<T extends newsletter_subscribersCreateArgs>(args: SelectSubset<T, newsletter_subscribersCreateArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Newsletter_subscribers.
     * @param {newsletter_subscribersCreateManyArgs} args - Arguments to create many Newsletter_subscribers.
     * @example
     * // Create many Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends newsletter_subscribersCreateManyArgs>(args?: SelectSubset<T, newsletter_subscribersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Newsletter_subscribers.
     * @param {newsletter_subscribersDeleteArgs} args - Arguments to delete one Newsletter_subscribers.
     * @example
     * // Delete one Newsletter_subscribers
     * const Newsletter_subscribers = await prisma.newsletter_subscribers.delete({
     *   where: {
     *     // ... filter to delete one Newsletter_subscribers
     *   }
     * })
     * 
     */
    delete<T extends newsletter_subscribersDeleteArgs>(args: SelectSubset<T, newsletter_subscribersDeleteArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Newsletter_subscribers.
     * @param {newsletter_subscribersUpdateArgs} args - Arguments to update one Newsletter_subscribers.
     * @example
     * // Update one Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends newsletter_subscribersUpdateArgs>(args: SelectSubset<T, newsletter_subscribersUpdateArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Newsletter_subscribers.
     * @param {newsletter_subscribersDeleteManyArgs} args - Arguments to filter Newsletter_subscribers to delete.
     * @example
     * // Delete a few Newsletter_subscribers
     * const { count } = await prisma.newsletter_subscribers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends newsletter_subscribersDeleteManyArgs>(args?: SelectSubset<T, newsletter_subscribersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletter_subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsletter_subscribersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends newsletter_subscribersUpdateManyArgs>(args: SelectSubset<T, newsletter_subscribersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Newsletter_subscribers.
     * @param {newsletter_subscribersUpsertArgs} args - Arguments to update or create a Newsletter_subscribers.
     * @example
     * // Update or create a Newsletter_subscribers
     * const newsletter_subscribers = await prisma.newsletter_subscribers.upsert({
     *   create: {
     *     // ... data to create a Newsletter_subscribers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Newsletter_subscribers we want to update
     *   }
     * })
     */
    upsert<T extends newsletter_subscribersUpsertArgs>(args: SelectSubset<T, newsletter_subscribersUpsertArgs<ExtArgs>>): Prisma__newsletter_subscribersClient<$Result.GetResult<Prisma.$newsletter_subscribersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Newsletter_subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsletter_subscribersCountArgs} args - Arguments to filter Newsletter_subscribers to count.
     * @example
     * // Count the number of Newsletter_subscribers
     * const count = await prisma.newsletter_subscribers.count({
     *   where: {
     *     // ... the filter for the Newsletter_subscribers we want to count
     *   }
     * })
    **/
    count<T extends newsletter_subscribersCountArgs>(
      args?: Subset<T, newsletter_subscribersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Newsletter_subscribersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Newsletter_subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Newsletter_subscribersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Newsletter_subscribersAggregateArgs>(args: Subset<T, Newsletter_subscribersAggregateArgs>): Prisma.PrismaPromise<GetNewsletter_subscribersAggregateType<T>>

    /**
     * Group by Newsletter_subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {newsletter_subscribersGroupByArgs} args - Group by arguments.
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
      T extends newsletter_subscribersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: newsletter_subscribersGroupByArgs['orderBy'] }
        : { orderBy?: newsletter_subscribersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, newsletter_subscribersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletter_subscribersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the newsletter_subscribers model
   */
  readonly fields: newsletter_subscribersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for newsletter_subscribers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__newsletter_subscribersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the newsletter_subscribers model
   */
  interface newsletter_subscribersFieldRefs {
    readonly id: FieldRef<"newsletter_subscribers", 'Int'>
    readonly email: FieldRef<"newsletter_subscribers", 'String'>
    readonly subscribed_at: FieldRef<"newsletter_subscribers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * newsletter_subscribers findUnique
   */
  export type newsletter_subscribersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * Filter, which newsletter_subscribers to fetch.
     */
    where: newsletter_subscribersWhereUniqueInput
  }

  /**
   * newsletter_subscribers findUniqueOrThrow
   */
  export type newsletter_subscribersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * Filter, which newsletter_subscribers to fetch.
     */
    where: newsletter_subscribersWhereUniqueInput
  }

  /**
   * newsletter_subscribers findFirst
   */
  export type newsletter_subscribersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * Filter, which newsletter_subscribers to fetch.
     */
    where?: newsletter_subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletter_subscribers to fetch.
     */
    orderBy?: newsletter_subscribersOrderByWithRelationInput | newsletter_subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsletter_subscribers.
     */
    cursor?: newsletter_subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletter_subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletter_subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsletter_subscribers.
     */
    distinct?: Newsletter_subscribersScalarFieldEnum | Newsletter_subscribersScalarFieldEnum[]
  }

  /**
   * newsletter_subscribers findFirstOrThrow
   */
  export type newsletter_subscribersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * Filter, which newsletter_subscribers to fetch.
     */
    where?: newsletter_subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletter_subscribers to fetch.
     */
    orderBy?: newsletter_subscribersOrderByWithRelationInput | newsletter_subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for newsletter_subscribers.
     */
    cursor?: newsletter_subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletter_subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletter_subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of newsletter_subscribers.
     */
    distinct?: Newsletter_subscribersScalarFieldEnum | Newsletter_subscribersScalarFieldEnum[]
  }

  /**
   * newsletter_subscribers findMany
   */
  export type newsletter_subscribersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * Filter, which newsletter_subscribers to fetch.
     */
    where?: newsletter_subscribersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of newsletter_subscribers to fetch.
     */
    orderBy?: newsletter_subscribersOrderByWithRelationInput | newsletter_subscribersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing newsletter_subscribers.
     */
    cursor?: newsletter_subscribersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` newsletter_subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` newsletter_subscribers.
     */
    skip?: number
    distinct?: Newsletter_subscribersScalarFieldEnum | Newsletter_subscribersScalarFieldEnum[]
  }

  /**
   * newsletter_subscribers create
   */
  export type newsletter_subscribersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * The data needed to create a newsletter_subscribers.
     */
    data: XOR<newsletter_subscribersCreateInput, newsletter_subscribersUncheckedCreateInput>
  }

  /**
   * newsletter_subscribers createMany
   */
  export type newsletter_subscribersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many newsletter_subscribers.
     */
    data: newsletter_subscribersCreateManyInput | newsletter_subscribersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * newsletter_subscribers update
   */
  export type newsletter_subscribersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * The data needed to update a newsletter_subscribers.
     */
    data: XOR<newsletter_subscribersUpdateInput, newsletter_subscribersUncheckedUpdateInput>
    /**
     * Choose, which newsletter_subscribers to update.
     */
    where: newsletter_subscribersWhereUniqueInput
  }

  /**
   * newsletter_subscribers updateMany
   */
  export type newsletter_subscribersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update newsletter_subscribers.
     */
    data: XOR<newsletter_subscribersUpdateManyMutationInput, newsletter_subscribersUncheckedUpdateManyInput>
    /**
     * Filter which newsletter_subscribers to update
     */
    where?: newsletter_subscribersWhereInput
    /**
     * Limit how many newsletter_subscribers to update.
     */
    limit?: number
  }

  /**
   * newsletter_subscribers upsert
   */
  export type newsletter_subscribersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * The filter to search for the newsletter_subscribers to update in case it exists.
     */
    where: newsletter_subscribersWhereUniqueInput
    /**
     * In case the newsletter_subscribers found by the `where` argument doesn't exist, create a new newsletter_subscribers with this data.
     */
    create: XOR<newsletter_subscribersCreateInput, newsletter_subscribersUncheckedCreateInput>
    /**
     * In case the newsletter_subscribers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<newsletter_subscribersUpdateInput, newsletter_subscribersUncheckedUpdateInput>
  }

  /**
   * newsletter_subscribers delete
   */
  export type newsletter_subscribersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
    /**
     * Filter which newsletter_subscribers to delete.
     */
    where: newsletter_subscribersWhereUniqueInput
  }

  /**
   * newsletter_subscribers deleteMany
   */
  export type newsletter_subscribersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which newsletter_subscribers to delete
     */
    where?: newsletter_subscribersWhereInput
    /**
     * Limit how many newsletter_subscribers to delete.
     */
    limit?: number
  }

  /**
   * newsletter_subscribers without action
   */
  export type newsletter_subscribersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the newsletter_subscribers
     */
    select?: newsletter_subscribersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the newsletter_subscribers
     */
    omit?: newsletter_subscribersOmit<ExtArgs> | null
  }


  /**
   * Model produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id: number | null
    harga: Decimal | null
    stok: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id: number | null
    harga: Decimal | null
    stok: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id: number | null
    nama: string | null
    deskripsi: string | null
    harga: Decimal | null
    gambar: string | null
    stok: number | null
  }

  export type ProdukMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    deskripsi: string | null
    harga: Decimal | null
    gambar: string | null
    stok: number | null
  }

  export type ProdukCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    harga: number
    gambar: number
    stok: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id?: true
    harga?: true
    stok?: true
  }

  export type ProdukSumAggregateInputType = {
    id?: true
    harga?: true
    stok?: true
  }

  export type ProdukMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    gambar?: true
    stok?: true
  }

  export type ProdukMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    gambar?: true
    stok?: true
  }

  export type ProdukCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    gambar?: true
    stok?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produk to aggregate.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type produkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
    orderBy?: produkOrderByWithAggregationInput | produkOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: produkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id: number
    nama: string
    deskripsi: string | null
    harga: Decimal
    gambar: string | null
    stok: number | null
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends produkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type produkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    gambar?: boolean
    stok?: boolean
    keranjang?: boolean | produk$keranjangArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>



  export type produkSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    gambar?: boolean
    stok?: boolean
  }

  export type produkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "deskripsi" | "harga" | "gambar" | "stok", ExtArgs["result"]["produk"]>
  export type produkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | produk$keranjangArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $produkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produk"
    objects: {
      keranjang: Prisma.$keranjangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      deskripsi: string | null
      harga: Prisma.Decimal
      gambar: string | null
      stok: number | null
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type produkGetPayload<S extends boolean | null | undefined | produkDefaultArgs> = $Result.GetResult<Prisma.$produkPayload, S>

  type produkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface produkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produk'], meta: { name: 'produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {produkFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkFindUniqueArgs>(args: SelectSubset<T, produkFindUniqueArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkFindUniqueOrThrowArgs>(args: SelectSubset<T, produkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkFindFirstArgs>(args?: SelectSubset<T, produkFindFirstArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkFindFirstOrThrowArgs>(args?: SelectSubset<T, produkFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produkFindManyArgs>(args?: SelectSubset<T, produkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {produkCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends produkCreateArgs>(args: SelectSubset<T, produkCreateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produkCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkCreateManyArgs>(args?: SelectSubset<T, produkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produk.
     * @param {produkDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends produkDeleteArgs>(args: SelectSubset<T, produkDeleteArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {produkUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkUpdateArgs>(args: SelectSubset<T, produkUpdateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produkDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkDeleteManyArgs>(args?: SelectSubset<T, produkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkUpdateManyArgs>(args: SelectSubset<T, produkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produk.
     * @param {produkUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends produkUpsertArgs>(args: SelectSubset<T, produkUpsertArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produkCountArgs>(
      args?: Subset<T, produkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGroupByArgs} args - Group by arguments.
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
      T extends produkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGroupByArgs['orderBy'] }
        : { orderBy?: produkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produk model
   */
  readonly fields: produkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keranjang<T extends produk$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, produk$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the produk model
   */
  interface produkFieldRefs {
    readonly id: FieldRef<"produk", 'Int'>
    readonly nama: FieldRef<"produk", 'String'>
    readonly deskripsi: FieldRef<"produk", 'String'>
    readonly harga: FieldRef<"produk", 'Decimal'>
    readonly gambar: FieldRef<"produk", 'String'>
    readonly stok: FieldRef<"produk", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produk findUnique
   */
  export type produkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findUniqueOrThrow
   */
  export type produkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findFirst
   */
  export type produkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findFirstOrThrow
   */
  export type produkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findMany
   */
  export type produkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk create
   */
  export type produkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to create a produk.
     */
    data: XOR<produkCreateInput, produkUncheckedCreateInput>
  }

  /**
   * produk createMany
   */
  export type produkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk update
   */
  export type produkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to update a produk.
     */
    data: XOR<produkUpdateInput, produkUncheckedUpdateInput>
    /**
     * Choose, which produk to update.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk updateMany
   */
  export type produkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk upsert
   */
  export type produkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The filter to search for the produk to update in case it exists.
     */
    where: produkWhereUniqueInput
    /**
     * In case the produk found by the `where` argument doesn't exist, create a new produk with this data.
     */
    create: XOR<produkCreateInput, produkUncheckedCreateInput>
    /**
     * In case the produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkUpdateInput, produkUncheckedUpdateInput>
  }

  /**
   * produk delete
   */
  export type produkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter which produk to delete.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk deleteMany
   */
  export type produkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produk.keranjang
   */
  export type produk$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    cursor?: keranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * produk without action
   */
  export type produkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    nama: string | null
    email: string | null
    password: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string | null
      email: string | null
      password: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly nama: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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


  export const ContactsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    created_at: 'created_at'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const KeranjangScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    produk_id: 'produk_id',
    jumlah: 'jumlah',
    created_at: 'created_at'
  };

  export type KeranjangScalarFieldEnum = (typeof KeranjangScalarFieldEnum)[keyof typeof KeranjangScalarFieldEnum]


  export const Newsletter_subscribersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    subscribed_at: 'subscribed_at'
  };

  export type Newsletter_subscribersScalarFieldEnum = (typeof Newsletter_subscribersScalarFieldEnum)[keyof typeof Newsletter_subscribersScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    harga: 'harga',
    gambar: 'gambar',
    stok: 'stok'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const contactsOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message'
  };

  export type contactsOrderByRelevanceFieldEnum = (typeof contactsOrderByRelevanceFieldEnum)[keyof typeof contactsOrderByRelevanceFieldEnum]


  export const newsletter_subscribersOrderByRelevanceFieldEnum: {
    email: 'email'
  };

  export type newsletter_subscribersOrderByRelevanceFieldEnum = (typeof newsletter_subscribersOrderByRelevanceFieldEnum)[keyof typeof newsletter_subscribersOrderByRelevanceFieldEnum]


  export const produkOrderByRelevanceFieldEnum: {
    nama: 'nama',
    deskripsi: 'deskripsi',
    gambar: 'gambar'
  };

  export type produkOrderByRelevanceFieldEnum = (typeof produkOrderByRelevanceFieldEnum)[keyof typeof produkOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    nama: 'nama',
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type contactsWhereInput = {
    AND?: contactsWhereInput | contactsWhereInput[]
    OR?: contactsWhereInput[]
    NOT?: contactsWhereInput | contactsWhereInput[]
    id?: IntFilter<"contacts"> | number
    name?: StringFilter<"contacts"> | string
    email?: StringFilter<"contacts"> | string
    phone?: StringNullableFilter<"contacts"> | string | null
    message?: StringNullableFilter<"contacts"> | string | null
    created_at?: DateTimeFilter<"contacts"> | Date | string
  }

  export type contactsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: contactsOrderByRelevanceInput
  }

  export type contactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: contactsWhereInput | contactsWhereInput[]
    OR?: contactsWhereInput[]
    NOT?: contactsWhereInput | contactsWhereInput[]
    name?: StringFilter<"contacts"> | string
    phone?: StringNullableFilter<"contacts"> | string | null
    message?: StringNullableFilter<"contacts"> | string | null
    created_at?: DateTimeFilter<"contacts"> | Date | string
  }, "id" | "email">

  export type contactsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: contactsCountOrderByAggregateInput
    _avg?: contactsAvgOrderByAggregateInput
    _max?: contactsMaxOrderByAggregateInput
    _min?: contactsMinOrderByAggregateInput
    _sum?: contactsSumOrderByAggregateInput
  }

  export type contactsScalarWhereWithAggregatesInput = {
    AND?: contactsScalarWhereWithAggregatesInput | contactsScalarWhereWithAggregatesInput[]
    OR?: contactsScalarWhereWithAggregatesInput[]
    NOT?: contactsScalarWhereWithAggregatesInput | contactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contacts"> | number
    name?: StringWithAggregatesFilter<"contacts"> | string
    email?: StringWithAggregatesFilter<"contacts"> | string
    phone?: StringNullableWithAggregatesFilter<"contacts"> | string | null
    message?: StringNullableWithAggregatesFilter<"contacts"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"contacts"> | Date | string
  }

  export type keranjangWhereInput = {
    AND?: keranjangWhereInput | keranjangWhereInput[]
    OR?: keranjangWhereInput[]
    NOT?: keranjangWhereInput | keranjangWhereInput[]
    id?: IntFilter<"keranjang"> | number
    user_id?: IntNullableFilter<"keranjang"> | number | null
    produk_id?: IntFilter<"keranjang"> | number
    jumlah?: IntNullableFilter<"keranjang"> | number | null
    created_at?: DateTimeFilter<"keranjang"> | Date | string
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }

  export type keranjangOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrderInput | SortOrder
    created_at?: SortOrder
    produk?: produkOrderByWithRelationInput
  }

  export type keranjangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: keranjangWhereInput | keranjangWhereInput[]
    OR?: keranjangWhereInput[]
    NOT?: keranjangWhereInput | keranjangWhereInput[]
    user_id?: IntNullableFilter<"keranjang"> | number | null
    produk_id?: IntFilter<"keranjang"> | number
    jumlah?: IntNullableFilter<"keranjang"> | number | null
    created_at?: DateTimeFilter<"keranjang"> | Date | string
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }, "id">

  export type keranjangOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: keranjangCountOrderByAggregateInput
    _avg?: keranjangAvgOrderByAggregateInput
    _max?: keranjangMaxOrderByAggregateInput
    _min?: keranjangMinOrderByAggregateInput
    _sum?: keranjangSumOrderByAggregateInput
  }

  export type keranjangScalarWhereWithAggregatesInput = {
    AND?: keranjangScalarWhereWithAggregatesInput | keranjangScalarWhereWithAggregatesInput[]
    OR?: keranjangScalarWhereWithAggregatesInput[]
    NOT?: keranjangScalarWhereWithAggregatesInput | keranjangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"keranjang"> | number
    user_id?: IntNullableWithAggregatesFilter<"keranjang"> | number | null
    produk_id?: IntWithAggregatesFilter<"keranjang"> | number
    jumlah?: IntNullableWithAggregatesFilter<"keranjang"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"keranjang"> | Date | string
  }

  export type newsletter_subscribersWhereInput = {
    AND?: newsletter_subscribersWhereInput | newsletter_subscribersWhereInput[]
    OR?: newsletter_subscribersWhereInput[]
    NOT?: newsletter_subscribersWhereInput | newsletter_subscribersWhereInput[]
    id?: IntFilter<"newsletter_subscribers"> | number
    email?: StringFilter<"newsletter_subscribers"> | string
    subscribed_at?: DateTimeFilter<"newsletter_subscribers"> | Date | string
  }

  export type newsletter_subscribersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    subscribed_at?: SortOrder
    _relevance?: newsletter_subscribersOrderByRelevanceInput
  }

  export type newsletter_subscribersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: newsletter_subscribersWhereInput | newsletter_subscribersWhereInput[]
    OR?: newsletter_subscribersWhereInput[]
    NOT?: newsletter_subscribersWhereInput | newsletter_subscribersWhereInput[]
    subscribed_at?: DateTimeFilter<"newsletter_subscribers"> | Date | string
  }, "id" | "email">

  export type newsletter_subscribersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    subscribed_at?: SortOrder
    _count?: newsletter_subscribersCountOrderByAggregateInput
    _avg?: newsletter_subscribersAvgOrderByAggregateInput
    _max?: newsletter_subscribersMaxOrderByAggregateInput
    _min?: newsletter_subscribersMinOrderByAggregateInput
    _sum?: newsletter_subscribersSumOrderByAggregateInput
  }

  export type newsletter_subscribersScalarWhereWithAggregatesInput = {
    AND?: newsletter_subscribersScalarWhereWithAggregatesInput | newsletter_subscribersScalarWhereWithAggregatesInput[]
    OR?: newsletter_subscribersScalarWhereWithAggregatesInput[]
    NOT?: newsletter_subscribersScalarWhereWithAggregatesInput | newsletter_subscribersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"newsletter_subscribers"> | number
    email?: StringWithAggregatesFilter<"newsletter_subscribers"> | string
    subscribed_at?: DateTimeWithAggregatesFilter<"newsletter_subscribers"> | Date | string
  }

  export type produkWhereInput = {
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    id?: IntFilter<"produk"> | number
    nama?: StringFilter<"produk"> | string
    deskripsi?: StringNullableFilter<"produk"> | string | null
    harga?: DecimalFilter<"produk"> | Decimal | DecimalJsLike | number | string
    gambar?: StringNullableFilter<"produk"> | string | null
    stok?: IntNullableFilter<"produk"> | number | null
    keranjang?: KeranjangListRelationFilter
  }

  export type produkOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    harga?: SortOrder
    gambar?: SortOrderInput | SortOrder
    stok?: SortOrderInput | SortOrder
    keranjang?: keranjangOrderByRelationAggregateInput
    _relevance?: produkOrderByRelevanceInput
  }

  export type produkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    nama?: StringFilter<"produk"> | string
    deskripsi?: StringNullableFilter<"produk"> | string | null
    harga?: DecimalFilter<"produk"> | Decimal | DecimalJsLike | number | string
    gambar?: StringNullableFilter<"produk"> | string | null
    stok?: IntNullableFilter<"produk"> | number | null
    keranjang?: KeranjangListRelationFilter
  }, "id">

  export type produkOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    harga?: SortOrder
    gambar?: SortOrderInput | SortOrder
    stok?: SortOrderInput | SortOrder
    _count?: produkCountOrderByAggregateInput
    _avg?: produkAvgOrderByAggregateInput
    _max?: produkMaxOrderByAggregateInput
    _min?: produkMinOrderByAggregateInput
    _sum?: produkSumOrderByAggregateInput
  }

  export type produkScalarWhereWithAggregatesInput = {
    AND?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    OR?: produkScalarWhereWithAggregatesInput[]
    NOT?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produk"> | number
    nama?: StringWithAggregatesFilter<"produk"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"produk"> | string | null
    harga?: DecimalWithAggregatesFilter<"produk"> | Decimal | DecimalJsLike | number | string
    gambar?: StringNullableWithAggregatesFilter<"produk"> | string | null
    stok?: IntNullableWithAggregatesFilter<"produk"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    nama?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nama?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    nama?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type contactsCreateInput = {
    name: string
    email: string
    phone?: string | null
    message?: string | null
    created_at?: Date | string
  }

  export type contactsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    message?: string | null
    created_at?: Date | string
  }

  export type contactsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactsCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    message?: string | null
    created_at?: Date | string
  }

  export type contactsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keranjangCreateInput = {
    user_id?: number | null
    jumlah?: number | null
    created_at?: Date | string
    produk: produkCreateNestedOneWithoutKeranjangInput
  }

  export type keranjangUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    produk_id: number
    jumlah?: number | null
    created_at?: Date | string
  }

  export type keranjangUpdateInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    produk?: produkUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type keranjangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    produk_id?: IntFieldUpdateOperationsInput | number
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keranjangCreateManyInput = {
    id?: number
    user_id?: number | null
    produk_id: number
    jumlah?: number | null
    created_at?: Date | string
  }

  export type keranjangUpdateManyMutationInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keranjangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    produk_id?: IntFieldUpdateOperationsInput | number
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsletter_subscribersCreateInput = {
    email: string
    subscribed_at?: Date | string
  }

  export type newsletter_subscribersUncheckedCreateInput = {
    id?: number
    email: string
    subscribed_at?: Date | string
  }

  export type newsletter_subscribersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    subscribed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsletter_subscribersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    subscribed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsletter_subscribersCreateManyInput = {
    id?: number
    email: string
    subscribed_at?: Date | string
  }

  export type newsletter_subscribersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    subscribed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type newsletter_subscribersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    subscribed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type produkCreateInput = {
    nama: string
    deskripsi?: string | null
    harga: Decimal | DecimalJsLike | number | string
    gambar?: string | null
    stok?: number | null
    keranjang?: keranjangCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateInput = {
    id?: number
    nama: string
    deskripsi?: string | null
    harga: Decimal | DecimalJsLike | number | string
    gambar?: string | null
    stok?: number | null
    keranjang?: keranjangUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    keranjang?: keranjangUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
    keranjang?: keranjangUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateManyInput = {
    id?: number
    nama: string
    deskripsi?: string | null
    harga: Decimal | DecimalJsLike | number | string
    gambar?: string | null
    stok?: number | null
  }

  export type produkUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type produkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    nama?: string | null
    email?: string | null
    password?: string | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    nama?: string | null
    email?: string | null
    password?: string | null
  }

  export type usersUpdateInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyInput = {
    id?: number
    nama?: string | null
    email?: string | null
    password?: string | null
  }

  export type usersUpdateManyMutationInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type contactsOrderByRelevanceInput = {
    fields: contactsOrderByRelevanceFieldEnum | contactsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contactsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type contactsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type contactsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type contactsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProdukScalarRelationFilter = {
    is?: produkWhereInput
    isNot?: produkWhereInput
  }

  export type keranjangCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    created_at?: SortOrder
  }

  export type keranjangAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
  }

  export type keranjangMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    created_at?: SortOrder
  }

  export type keranjangMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
    created_at?: SortOrder
  }

  export type keranjangSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    produk_id?: SortOrder
    jumlah?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type newsletter_subscribersOrderByRelevanceInput = {
    fields: newsletter_subscribersOrderByRelevanceFieldEnum | newsletter_subscribersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type newsletter_subscribersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    subscribed_at?: SortOrder
  }

  export type newsletter_subscribersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type newsletter_subscribersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    subscribed_at?: SortOrder
  }

  export type newsletter_subscribersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    subscribed_at?: SortOrder
  }

  export type newsletter_subscribersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type KeranjangListRelationFilter = {
    every?: keranjangWhereInput
    some?: keranjangWhereInput
    none?: keranjangWhereInput
  }

  export type keranjangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produkOrderByRelevanceInput = {
    fields: produkOrderByRelevanceFieldEnum | produkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produkCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    gambar?: SortOrder
    stok?: SortOrder
  }

  export type produkAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
  }

  export type produkMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    gambar?: SortOrder
    stok?: SortOrder
  }

  export type produkMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    gambar?: SortOrder
    stok?: SortOrder
  }

  export type produkSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type produkCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: produkCreateOrConnectWithoutKeranjangInput
    connect?: produkWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type produkUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: produkCreateOrConnectWithoutKeranjangInput
    upsert?: produkUpsertWithoutKeranjangInput
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutKeranjangInput, produkUpdateWithoutKeranjangInput>, produkUncheckedUpdateWithoutKeranjangInput>
  }

  export type keranjangCreateNestedManyWithoutProdukInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type keranjangUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type keranjangUpdateManyWithoutProdukNestedInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutProdukInput | keranjangUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutProdukInput | keranjangUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutProdukInput | keranjangUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type keranjangUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutProdukInput | keranjangUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutProdukInput | keranjangUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutProdukInput | keranjangUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type produkCreateWithoutKeranjangInput = {
    nama: string
    deskripsi?: string | null
    harga: Decimal | DecimalJsLike | number | string
    gambar?: string | null
    stok?: number | null
  }

  export type produkUncheckedCreateWithoutKeranjangInput = {
    id?: number
    nama: string
    deskripsi?: string | null
    harga: Decimal | DecimalJsLike | number | string
    gambar?: string | null
    stok?: number | null
  }

  export type produkCreateOrConnectWithoutKeranjangInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
  }

  export type produkUpsertWithoutKeranjangInput = {
    update: XOR<produkUpdateWithoutKeranjangInput, produkUncheckedUpdateWithoutKeranjangInput>
    create: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutKeranjangInput, produkUncheckedUpdateWithoutKeranjangInput>
  }

  export type produkUpdateWithoutKeranjangInput = {
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type produkUncheckedUpdateWithoutKeranjangInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    stok?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type keranjangCreateWithoutProdukInput = {
    user_id?: number | null
    jumlah?: number | null
    created_at?: Date | string
  }

  export type keranjangUncheckedCreateWithoutProdukInput = {
    id?: number
    user_id?: number | null
    jumlah?: number | null
    created_at?: Date | string
  }

  export type keranjangCreateOrConnectWithoutProdukInput = {
    where: keranjangWhereUniqueInput
    create: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput>
  }

  export type keranjangCreateManyProdukInputEnvelope = {
    data: keranjangCreateManyProdukInput | keranjangCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type keranjangUpsertWithWhereUniqueWithoutProdukInput = {
    where: keranjangWhereUniqueInput
    update: XOR<keranjangUpdateWithoutProdukInput, keranjangUncheckedUpdateWithoutProdukInput>
    create: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput>
  }

  export type keranjangUpdateWithWhereUniqueWithoutProdukInput = {
    where: keranjangWhereUniqueInput
    data: XOR<keranjangUpdateWithoutProdukInput, keranjangUncheckedUpdateWithoutProdukInput>
  }

  export type keranjangUpdateManyWithWhereWithoutProdukInput = {
    where: keranjangScalarWhereInput
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyWithoutProdukInput>
  }

  export type keranjangScalarWhereInput = {
    AND?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
    OR?: keranjangScalarWhereInput[]
    NOT?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
    id?: IntFilter<"keranjang"> | number
    user_id?: IntNullableFilter<"keranjang"> | number | null
    produk_id?: IntFilter<"keranjang"> | number
    jumlah?: IntNullableFilter<"keranjang"> | number | null
    created_at?: DateTimeFilter<"keranjang"> | Date | string
  }

  export type keranjangCreateManyProdukInput = {
    id?: number
    user_id?: number | null
    jumlah?: number | null
    created_at?: Date | string
  }

  export type keranjangUpdateWithoutProdukInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keranjangUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keranjangUncheckedUpdateManyWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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
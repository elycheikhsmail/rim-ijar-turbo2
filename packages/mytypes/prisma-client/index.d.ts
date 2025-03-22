/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model UserSession
 *
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>;
/**
 * Model OptionsModel
 *
 */
export type OptionsModel =
  $Result.DefaultSelection<Prisma.$OptionsModelPayload>;
/**
 * Model Image
 *
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>;
/**
 * Model Annonce
 *
 */
export type Annonce = $Result.DefaultSelection<Prisma.$AnnoncePayload>;
/**
 * Model AnnonceImage
 *
 */
export type AnnonceImage =
  $Result.DefaultSelection<Prisma.$AnnonceImagePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number },
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject,
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserSessions
   * const userSessions = await prisma.userSession.findMany()
   * ```
   */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optionsModel`: Exposes CRUD operations for the **OptionsModel** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OptionsModels
   * const optionsModels = await prisma.optionsModel.findMany()
   * ```
   */
  get optionsModel(): Prisma.OptionsModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Images
   * const images = await prisma.image.findMany()
   * ```
   */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annonce`: Exposes CRUD operations for the **Annonce** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Annonces
   * const annonces = await prisma.annonce.findMany()
   * ```
   */
  get annonce(): Prisma.AnnonceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annonceImage`: Exposes CRUD operations for the **AnnonceImage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AnnonceImages
   * const annonceImages = await prisma.annonceImage.findMany()
   * ```
   */
  get annonceImage(): Prisma.AnnonceImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    UserSession: "UserSession";
    OptionsModel: "OptionsModel";
    Image: "Image";
    Annonce: "Annonce";
    AnnonceImage: "AnnonceImage";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "userSession"
        | "optionsModel"
        | "image"
        | "annonce"
        | "annonceImage";
      txIsolationLevel: never;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>;
        fields: Prisma.UserSessionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>;
          };
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>;
          };
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[];
          };
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>;
          };
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>;
          };
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>;
          };
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>;
          };
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserSession>;
          };
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserSessionGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserSessionFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserSessionAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserSessionCountAggregateOutputType>
              | number;
          };
        };
      };
      OptionsModel: {
        payload: Prisma.$OptionsModelPayload<ExtArgs>;
        fields: Prisma.OptionsModelFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OptionsModelFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OptionsModelFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload>;
          };
          findFirst: {
            args: Prisma.OptionsModelFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OptionsModelFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload>;
          };
          findMany: {
            args: Prisma.OptionsModelFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload>[];
          };
          create: {
            args: Prisma.OptionsModelCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload>;
          };
          createMany: {
            args: Prisma.OptionsModelCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OptionsModelDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload>;
          };
          update: {
            args: Prisma.OptionsModelUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload>;
          };
          deleteMany: {
            args: Prisma.OptionsModelDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OptionsModelUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OptionsModelUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OptionsModelPayload>;
          };
          aggregate: {
            args: Prisma.OptionsModelAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOptionsModel>;
          };
          groupBy: {
            args: Prisma.OptionsModelGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OptionsModelGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.OptionsModelFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.OptionsModelAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.OptionsModelCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OptionsModelCountAggregateOutputType>
              | number;
          };
        };
      };
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>;
        fields: Prisma.ImageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[];
          };
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>;
          };
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateImage>;
          };
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ImageGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.ImageFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.ImageAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>;
            result: $Utils.Optional<ImageCountAggregateOutputType> | number;
          };
        };
      };
      Annonce: {
        payload: Prisma.$AnnoncePayload<ExtArgs>;
        fields: Prisma.AnnonceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AnnonceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AnnonceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>;
          };
          findFirst: {
            args: Prisma.AnnonceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AnnonceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>;
          };
          findMany: {
            args: Prisma.AnnonceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[];
          };
          create: {
            args: Prisma.AnnonceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>;
          };
          createMany: {
            args: Prisma.AnnonceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.AnnonceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>;
          };
          update: {
            args: Prisma.AnnonceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>;
          };
          deleteMany: {
            args: Prisma.AnnonceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AnnonceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AnnonceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>;
          };
          aggregate: {
            args: Prisma.AnnonceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAnnonce>;
          };
          groupBy: {
            args: Prisma.AnnonceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AnnonceGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.AnnonceFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.AnnonceAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.AnnonceCountArgs<ExtArgs>;
            result: $Utils.Optional<AnnonceCountAggregateOutputType> | number;
          };
        };
      };
      AnnonceImage: {
        payload: Prisma.$AnnonceImagePayload<ExtArgs>;
        fields: Prisma.AnnonceImageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AnnonceImageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AnnonceImageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload>;
          };
          findFirst: {
            args: Prisma.AnnonceImageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AnnonceImageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload>;
          };
          findMany: {
            args: Prisma.AnnonceImageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload>[];
          };
          create: {
            args: Prisma.AnnonceImageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload>;
          };
          createMany: {
            args: Prisma.AnnonceImageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.AnnonceImageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload>;
          };
          update: {
            args: Prisma.AnnonceImageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload>;
          };
          deleteMany: {
            args: Prisma.AnnonceImageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AnnonceImageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AnnonceImageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnnonceImagePayload>;
          };
          aggregate: {
            args: Prisma.AnnonceImageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAnnonceImage>;
          };
          groupBy: {
            args: Prisma.AnnonceImageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AnnonceImageGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.AnnonceImageFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.AnnonceImageAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.AnnonceImageCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AnnonceImageCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    userSession?: UserSessionOmit;
    optionsModel?: OptionsModelOmit;
    image?: ImageOmit;
    annonce?: AnnonceOmit;
    annonceImage?: AnnonceImageOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    annonceImages: number;
  };

  export type ImageCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    annonceImages?: boolean | ImageCountOutputTypeCountAnnonceImagesArgs;
  };

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountAnnonceImagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnnonceImageWhereInput;
  };

  /**
   * Count Type AnnonceCountOutputType
   */

  export type AnnonceCountOutputType = {
    annonceImages: number;
  };

  export type AnnonceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    annonceImages?: boolean | AnnonceCountOutputTypeCountAnnonceImagesArgs;
  };

  // Custom InputTypes
  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceCountOutputType
     */
    select?: AnnonceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeCountAnnonceImagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnnonceImageWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    lastLogin: Date | null;
    isActive: boolean | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    lastLogin: Date | null;
    isActive: boolean | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    createdAt: number;
    lastLogin: number;
    isActive: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    lastLogin?: true;
    isActive?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    lastLogin?: true;
    isActive?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    lastLogin?: true;
    isActive?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    lastLogin: Date | null;
    isActive: boolean;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      createdAt?: boolean;
      lastLogin?: boolean;
      isActive?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    lastLogin?: boolean;
    isActive?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "email" | "password" | "createdAt" | "lastLogin" | "isActive",
    ExtArgs["result"]["user"]
  >;

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password: string;
        createdAt: Date;
        lastLogin: Date | null;
        isActive: boolean;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly password: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly lastLogin: FieldRef<"User", "DateTime">;
    readonly isActive: FieldRef<"User", "Boolean">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
  };

  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null;
    _min: UserSessionMinAggregateOutputType | null;
    _max: UserSessionMaxAggregateOutputType | null;
  };

  export type UserSessionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    isExpired: boolean | null;
    createdAt: Date | null;
    lastAccessed: Date | null;
  };

  export type UserSessionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    token: string | null;
    isExpired: boolean | null;
    createdAt: Date | null;
    lastAccessed: Date | null;
  };

  export type UserSessionCountAggregateOutputType = {
    id: number;
    userId: number;
    token: number;
    isExpired: number;
    createdAt: number;
    lastAccessed: number;
    _all: number;
  };

  export type UserSessionMinAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    isExpired?: true;
    createdAt?: true;
    lastAccessed?: true;
  };

  export type UserSessionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    isExpired?: true;
    createdAt?: true;
    lastAccessed?: true;
  };

  export type UserSessionCountAggregateInputType = {
    id?: true;
    userId?: true;
    token?: true;
    isExpired?: true;
    createdAt?: true;
    lastAccessed?: true;
    _all?: true;
  };

  export type UserSessionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSessions to fetch.
     */
    orderBy?:
      | UserSessionOrderByWithRelationInput
      | UserSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserSessions
     **/
    _count?: true | UserSessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserSessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserSessionMaxAggregateInputType;
  };

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> =
    {
      [P in keyof T & keyof AggregateUserSession]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateUserSession[P]>
        : GetScalarType<T[P], AggregateUserSession[P]>;
    };

  export type UserSessionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSessionWhereInput;
    orderBy?:
      | UserSessionOrderByWithAggregationInput
      | UserSessionOrderByWithAggregationInput[];
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum;
    having?: UserSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserSessionCountAggregateInputType | true;
    _min?: UserSessionMinAggregateInputType;
    _max?: UserSessionMaxAggregateInputType;
  };

  export type UserSessionGroupByOutputType = {
    id: string;
    userId: string;
    token: string;
    isExpired: boolean;
    createdAt: Date;
    lastAccessed: Date | null;
    _count: UserSessionCountAggregateOutputType | null;
    _min: UserSessionMinAggregateOutputType | null;
    _max: UserSessionMaxAggregateOutputType | null;
  };

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserSessionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof UserSessionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>;
        }
      >
    >;

  export type UserSessionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      token?: boolean;
      isExpired?: boolean;
      createdAt?: boolean;
      lastAccessed?: boolean;
    },
    ExtArgs["result"]["userSession"]
  >;

  export type UserSessionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    token?: boolean;
    isExpired?: boolean;
    createdAt?: boolean;
    lastAccessed?: boolean;
  };

  export type UserSessionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "userId" | "token" | "isExpired" | "createdAt" | "lastAccessed",
    ExtArgs["result"]["userSession"]
  >;

  export type $UserSessionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserSession";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        token: string;
        isExpired: boolean;
        createdAt: Date;
        lastAccessed: Date | null;
      },
      ExtArgs["result"]["userSession"]
    >;
    composites: {};
  };

  type UserSessionGetPayload<
    S extends boolean | null | undefined | UserSessionDefaultArgs,
  > = $Result.GetResult<Prisma.$UserSessionPayload, S>;

  type UserSessionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserSessionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserSessionCountAggregateInputType | true;
  };

  export interface UserSessionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserSession"];
      meta: { name: "UserSession" };
    };
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(
      args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(
      args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     *
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserSessionFindManyArgs>(
      args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     *
     */
    create<T extends UserSessionCreateArgs>(
      args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserSessionCreateManyArgs>(
      args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     *
     */
    delete<T extends UserSessionDeleteArgs>(
      args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserSessionUpdateArgs>(
      args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(
      args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserSessionUpdateManyArgs>(
      args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(
      args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>,
    ): Prisma__UserSessionClient<
      $Result.GetResult<
        Prisma.$UserSessionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserSessions that matches the filter.
     * @param {UserSessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userSession = await prisma.userSession.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserSessionFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a UserSession.
     * @param {UserSessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userSession = await prisma.userSession.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: UserSessionAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
     **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserSessionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSessionAggregateArgs>(
      args: Subset<T, UserSessionAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>;

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
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
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs["orderBy"] }
        : { orderBy?: UserSessionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserSessionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserSession model
     */
    readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", "String">;
    readonly userId: FieldRef<"UserSession", "String">;
    readonly token: FieldRef<"UserSession", "String">;
    readonly isExpired: FieldRef<"UserSession", "Boolean">;
    readonly createdAt: FieldRef<"UserSession", "DateTime">;
    readonly lastAccessed: FieldRef<"UserSession", "DateTime">;
  }

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput;
  };

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput;
  };

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSessions to fetch.
     */
    orderBy?:
      | UserSessionOrderByWithRelationInput
      | UserSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[];
  };

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSessions to fetch.
     */
    orderBy?:
      | UserSessionOrderByWithRelationInput
      | UserSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[];
  };

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSessions to fetch.
     */
    orderBy?:
      | UserSessionOrderByWithRelationInput
      | UserSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSessions.
     */
    skip?: number;
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[];
  };

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>;
  };

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[];
  };

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>;
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput;
  };

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<
      UserSessionUpdateManyMutationInput,
      UserSessionUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput;
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number;
  };

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput;
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>;
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>;
  };

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput;
  };

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput;
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number;
  };

  /**
   * UserSession findRaw
   */
  export type UserSessionFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * UserSession aggregateRaw
   */
  export type UserSessionAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null;
  };

  /**
   * Model OptionsModel
   */

  export type AggregateOptionsModel = {
    _count: OptionsModelCountAggregateOutputType | null;
    _avg: OptionsModelAvgAggregateOutputType | null;
    _sum: OptionsModelSumAggregateOutputType | null;
    _min: OptionsModelMinAggregateOutputType | null;
    _max: OptionsModelMaxAggregateOutputType | null;
  };

  export type OptionsModelAvgAggregateOutputType = {
    priority: number | null;
    depth: number | null;
  };

  export type OptionsModelSumAggregateOutputType = {
    priority: number | null;
    depth: number | null;
  };

  export type OptionsModelMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    nameAr: string | null;
    priority: number | null;
    depth: number | null;
    tag: string | null;
    createdAt: Date | null;
    parentID: string | null;
  };

  export type OptionsModelMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    nameAr: string | null;
    priority: number | null;
    depth: number | null;
    tag: string | null;
    createdAt: Date | null;
    parentID: string | null;
  };

  export type OptionsModelCountAggregateOutputType = {
    id: number;
    name: number;
    nameAr: number;
    priority: number;
    depth: number;
    tag: number;
    createdAt: number;
    parentID: number;
    _all: number;
  };

  export type OptionsModelAvgAggregateInputType = {
    priority?: true;
    depth?: true;
  };

  export type OptionsModelSumAggregateInputType = {
    priority?: true;
    depth?: true;
  };

  export type OptionsModelMinAggregateInputType = {
    id?: true;
    name?: true;
    nameAr?: true;
    priority?: true;
    depth?: true;
    tag?: true;
    createdAt?: true;
    parentID?: true;
  };

  export type OptionsModelMaxAggregateInputType = {
    id?: true;
    name?: true;
    nameAr?: true;
    priority?: true;
    depth?: true;
    tag?: true;
    createdAt?: true;
    parentID?: true;
  };

  export type OptionsModelCountAggregateInputType = {
    id?: true;
    name?: true;
    nameAr?: true;
    priority?: true;
    depth?: true;
    tag?: true;
    createdAt?: true;
    parentID?: true;
    _all?: true;
  };

  export type OptionsModelAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OptionsModel to aggregate.
     */
    where?: OptionsModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OptionsModels to fetch.
     */
    orderBy?:
      | OptionsModelOrderByWithRelationInput
      | OptionsModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OptionsModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OptionsModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OptionsModels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OptionsModels
     **/
    _count?: true | OptionsModelCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OptionsModelAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OptionsModelSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OptionsModelMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OptionsModelMaxAggregateInputType;
  };

  export type GetOptionsModelAggregateType<
    T extends OptionsModelAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOptionsModel]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptionsModel[P]>
      : GetScalarType<T[P], AggregateOptionsModel[P]>;
  };

  export type OptionsModelGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OptionsModelWhereInput;
    orderBy?:
      | OptionsModelOrderByWithAggregationInput
      | OptionsModelOrderByWithAggregationInput[];
    by: OptionsModelScalarFieldEnum[] | OptionsModelScalarFieldEnum;
    having?: OptionsModelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OptionsModelCountAggregateInputType | true;
    _avg?: OptionsModelAvgAggregateInputType;
    _sum?: OptionsModelSumAggregateInputType;
    _min?: OptionsModelMinAggregateInputType;
    _max?: OptionsModelMaxAggregateInputType;
  };

  export type OptionsModelGroupByOutputType = {
    id: string;
    name: string;
    nameAr: string;
    priority: number;
    depth: number;
    tag: string;
    createdAt: Date;
    parentID: string | null;
    _count: OptionsModelCountAggregateOutputType | null;
    _avg: OptionsModelAvgAggregateOutputType | null;
    _sum: OptionsModelSumAggregateOutputType | null;
    _min: OptionsModelMinAggregateOutputType | null;
    _max: OptionsModelMaxAggregateOutputType | null;
  };

  type GetOptionsModelGroupByPayload<T extends OptionsModelGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OptionsModelGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof OptionsModelGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionsModelGroupByOutputType[P]>
            : GetScalarType<T[P], OptionsModelGroupByOutputType[P]>;
        }
      >
    >;

  export type OptionsModelSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      nameAr?: boolean;
      priority?: boolean;
      depth?: boolean;
      tag?: boolean;
      createdAt?: boolean;
      parentID?: boolean;
    },
    ExtArgs["result"]["optionsModel"]
  >;

  export type OptionsModelSelectScalar = {
    id?: boolean;
    name?: boolean;
    nameAr?: boolean;
    priority?: boolean;
    depth?: boolean;
    tag?: boolean;
    createdAt?: boolean;
    parentID?: boolean;
  };

  export type OptionsModelOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "nameAr"
    | "priority"
    | "depth"
    | "tag"
    | "createdAt"
    | "parentID",
    ExtArgs["result"]["optionsModel"]
  >;

  export type $OptionsModelPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "OptionsModel";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        nameAr: string;
        priority: number;
        depth: number;
        tag: string;
        createdAt: Date;
        parentID: string | null;
      },
      ExtArgs["result"]["optionsModel"]
    >;
    composites: {};
  };

  type OptionsModelGetPayload<
    S extends boolean | null | undefined | OptionsModelDefaultArgs,
  > = $Result.GetResult<Prisma.$OptionsModelPayload, S>;

  type OptionsModelCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OptionsModelFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: OptionsModelCountAggregateInputType | true;
  };

  export interface OptionsModelDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["OptionsModel"];
      meta: { name: "OptionsModel" };
    };
    /**
     * Find zero or one OptionsModel that matches the filter.
     * @param {OptionsModelFindUniqueArgs} args - Arguments to find a OptionsModel
     * @example
     * // Get one OptionsModel
     * const optionsModel = await prisma.optionsModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionsModelFindUniqueArgs>(
      args: SelectSubset<T, OptionsModelFindUniqueArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OptionsModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionsModelFindUniqueOrThrowArgs} args - Arguments to find a OptionsModel
     * @example
     * // Get one OptionsModel
     * const optionsModel = await prisma.optionsModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionsModelFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OptionsModelFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OptionsModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsModelFindFirstArgs} args - Arguments to find a OptionsModel
     * @example
     * // Get one OptionsModel
     * const optionsModel = await prisma.optionsModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionsModelFindFirstArgs>(
      args?: SelectSubset<T, OptionsModelFindFirstArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OptionsModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsModelFindFirstOrThrowArgs} args - Arguments to find a OptionsModel
     * @example
     * // Get one OptionsModel
     * const optionsModel = await prisma.optionsModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionsModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OptionsModelFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OptionsModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptionsModels
     * const optionsModels = await prisma.optionsModel.findMany()
     *
     * // Get first 10 OptionsModels
     * const optionsModels = await prisma.optionsModel.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const optionsModelWithIdOnly = await prisma.optionsModel.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OptionsModelFindManyArgs>(
      args?: SelectSubset<T, OptionsModelFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OptionsModel.
     * @param {OptionsModelCreateArgs} args - Arguments to create a OptionsModel.
     * @example
     * // Create one OptionsModel
     * const OptionsModel = await prisma.optionsModel.create({
     *   data: {
     *     // ... data to create a OptionsModel
     *   }
     * })
     *
     */
    create<T extends OptionsModelCreateArgs>(
      args: SelectSubset<T, OptionsModelCreateArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OptionsModels.
     * @param {OptionsModelCreateManyArgs} args - Arguments to create many OptionsModels.
     * @example
     * // Create many OptionsModels
     * const optionsModel = await prisma.optionsModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OptionsModelCreateManyArgs>(
      args?: SelectSubset<T, OptionsModelCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a OptionsModel.
     * @param {OptionsModelDeleteArgs} args - Arguments to delete one OptionsModel.
     * @example
     * // Delete one OptionsModel
     * const OptionsModel = await prisma.optionsModel.delete({
     *   where: {
     *     // ... filter to delete one OptionsModel
     *   }
     * })
     *
     */
    delete<T extends OptionsModelDeleteArgs>(
      args: SelectSubset<T, OptionsModelDeleteArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OptionsModel.
     * @param {OptionsModelUpdateArgs} args - Arguments to update one OptionsModel.
     * @example
     * // Update one OptionsModel
     * const optionsModel = await prisma.optionsModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OptionsModelUpdateArgs>(
      args: SelectSubset<T, OptionsModelUpdateArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OptionsModels.
     * @param {OptionsModelDeleteManyArgs} args - Arguments to filter OptionsModels to delete.
     * @example
     * // Delete a few OptionsModels
     * const { count } = await prisma.optionsModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OptionsModelDeleteManyArgs>(
      args?: SelectSubset<T, OptionsModelDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OptionsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptionsModels
     * const optionsModel = await prisma.optionsModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OptionsModelUpdateManyArgs>(
      args: SelectSubset<T, OptionsModelUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one OptionsModel.
     * @param {OptionsModelUpsertArgs} args - Arguments to update or create a OptionsModel.
     * @example
     * // Update or create a OptionsModel
     * const optionsModel = await prisma.optionsModel.upsert({
     *   create: {
     *     // ... data to create a OptionsModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptionsModel we want to update
     *   }
     * })
     */
    upsert<T extends OptionsModelUpsertArgs>(
      args: SelectSubset<T, OptionsModelUpsertArgs<ExtArgs>>,
    ): Prisma__OptionsModelClient<
      $Result.GetResult<
        Prisma.$OptionsModelPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OptionsModels that matches the filter.
     * @param {OptionsModelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const optionsModel = await prisma.optionsModel.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OptionsModelFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a OptionsModel.
     * @param {OptionsModelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const optionsModel = await prisma.optionsModel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: OptionsModelAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of OptionsModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsModelCountArgs} args - Arguments to filter OptionsModels to count.
     * @example
     * // Count the number of OptionsModels
     * const count = await prisma.optionsModel.count({
     *   where: {
     *     // ... the filter for the OptionsModels we want to count
     *   }
     * })
     **/
    count<T extends OptionsModelCountArgs>(
      args?: Subset<T, OptionsModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OptionsModelCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OptionsModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionsModelAggregateArgs>(
      args: Subset<T, OptionsModelAggregateArgs>,
    ): Prisma.PrismaPromise<GetOptionsModelAggregateType<T>>;

    /**
     * Group by OptionsModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsModelGroupByArgs} args - Group by arguments.
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
      T extends OptionsModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionsModelGroupByArgs["orderBy"] }
        : { orderBy?: OptionsModelGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OptionsModelGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOptionsModelGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OptionsModel model
     */
    readonly fields: OptionsModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptionsModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionsModelClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OptionsModel model
   */
  interface OptionsModelFieldRefs {
    readonly id: FieldRef<"OptionsModel", "String">;
    readonly name: FieldRef<"OptionsModel", "String">;
    readonly nameAr: FieldRef<"OptionsModel", "String">;
    readonly priority: FieldRef<"OptionsModel", "Int">;
    readonly depth: FieldRef<"OptionsModel", "Int">;
    readonly tag: FieldRef<"OptionsModel", "String">;
    readonly createdAt: FieldRef<"OptionsModel", "DateTime">;
    readonly parentID: FieldRef<"OptionsModel", "String">;
  }

  // Custom InputTypes
  /**
   * OptionsModel findUnique
   */
  export type OptionsModelFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * Filter, which OptionsModel to fetch.
     */
    where: OptionsModelWhereUniqueInput;
  };

  /**
   * OptionsModel findUniqueOrThrow
   */
  export type OptionsModelFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * Filter, which OptionsModel to fetch.
     */
    where: OptionsModelWhereUniqueInput;
  };

  /**
   * OptionsModel findFirst
   */
  export type OptionsModelFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * Filter, which OptionsModel to fetch.
     */
    where?: OptionsModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OptionsModels to fetch.
     */
    orderBy?:
      | OptionsModelOrderByWithRelationInput
      | OptionsModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OptionsModels.
     */
    cursor?: OptionsModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OptionsModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OptionsModels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OptionsModels.
     */
    distinct?: OptionsModelScalarFieldEnum | OptionsModelScalarFieldEnum[];
  };

  /**
   * OptionsModel findFirstOrThrow
   */
  export type OptionsModelFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * Filter, which OptionsModel to fetch.
     */
    where?: OptionsModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OptionsModels to fetch.
     */
    orderBy?:
      | OptionsModelOrderByWithRelationInput
      | OptionsModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OptionsModels.
     */
    cursor?: OptionsModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OptionsModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OptionsModels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OptionsModels.
     */
    distinct?: OptionsModelScalarFieldEnum | OptionsModelScalarFieldEnum[];
  };

  /**
   * OptionsModel findMany
   */
  export type OptionsModelFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * Filter, which OptionsModels to fetch.
     */
    where?: OptionsModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OptionsModels to fetch.
     */
    orderBy?:
      | OptionsModelOrderByWithRelationInput
      | OptionsModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OptionsModels.
     */
    cursor?: OptionsModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OptionsModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OptionsModels.
     */
    skip?: number;
    distinct?: OptionsModelScalarFieldEnum | OptionsModelScalarFieldEnum[];
  };

  /**
   * OptionsModel create
   */
  export type OptionsModelCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * The data needed to create a OptionsModel.
     */
    data: XOR<OptionsModelCreateInput, OptionsModelUncheckedCreateInput>;
  };

  /**
   * OptionsModel createMany
   */
  export type OptionsModelCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OptionsModels.
     */
    data: OptionsModelCreateManyInput | OptionsModelCreateManyInput[];
  };

  /**
   * OptionsModel update
   */
  export type OptionsModelUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * The data needed to update a OptionsModel.
     */
    data: XOR<OptionsModelUpdateInput, OptionsModelUncheckedUpdateInput>;
    /**
     * Choose, which OptionsModel to update.
     */
    where: OptionsModelWhereUniqueInput;
  };

  /**
   * OptionsModel updateMany
   */
  export type OptionsModelUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OptionsModels.
     */
    data: XOR<
      OptionsModelUpdateManyMutationInput,
      OptionsModelUncheckedUpdateManyInput
    >;
    /**
     * Filter which OptionsModels to update
     */
    where?: OptionsModelWhereInput;
    /**
     * Limit how many OptionsModels to update.
     */
    limit?: number;
  };

  /**
   * OptionsModel upsert
   */
  export type OptionsModelUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * The filter to search for the OptionsModel to update in case it exists.
     */
    where: OptionsModelWhereUniqueInput;
    /**
     * In case the OptionsModel found by the `where` argument doesn't exist, create a new OptionsModel with this data.
     */
    create: XOR<OptionsModelCreateInput, OptionsModelUncheckedCreateInput>;
    /**
     * In case the OptionsModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionsModelUpdateInput, OptionsModelUncheckedUpdateInput>;
  };

  /**
   * OptionsModel delete
   */
  export type OptionsModelDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
    /**
     * Filter which OptionsModel to delete.
     */
    where: OptionsModelWhereUniqueInput;
  };

  /**
   * OptionsModel deleteMany
   */
  export type OptionsModelDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OptionsModels to delete
     */
    where?: OptionsModelWhereInput;
    /**
     * Limit how many OptionsModels to delete.
     */
    limit?: number;
  };

  /**
   * OptionsModel findRaw
   */
  export type OptionsModelFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * OptionsModel aggregateRaw
   */
  export type OptionsModelAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * OptionsModel without action
   */
  export type OptionsModelDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OptionsModel
     */
    select?: OptionsModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OptionsModel
     */
    omit?: OptionsModelOmit<ExtArgs> | null;
  };

  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  export type ImageMinAggregateOutputType = {
    id: string | null;
    imagePath: string | null;
    createdAt: Date | null;
    altText: string | null;
  };

  export type ImageMaxAggregateOutputType = {
    id: string | null;
    imagePath: string | null;
    createdAt: Date | null;
    altText: string | null;
  };

  export type ImageCountAggregateOutputType = {
    id: number;
    imagePath: number;
    createdAt: number;
    altText: number;
    _all: number;
  };

  export type ImageMinAggregateInputType = {
    id?: true;
    imagePath?: true;
    createdAt?: true;
    altText?: true;
  };

  export type ImageMaxAggregateInputType = {
    id?: true;
    imagePath?: true;
    createdAt?: true;
    altText?: true;
  };

  export type ImageCountAggregateInputType = {
    id?: true;
    imagePath?: true;
    createdAt?: true;
    altText?: true;
    _all?: true;
  };

  export type ImageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Images
     **/
    _count?: true | ImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ImageMaxAggregateInputType;
  };

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
    [P in keyof T & keyof AggregateImage]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>;
  };

  export type ImageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ImageWhereInput;
    orderBy?:
      | ImageOrderByWithAggregationInput
      | ImageOrderByWithAggregationInput[];
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum;
    having?: ImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImageCountAggregateInputType | true;
    _min?: ImageMinAggregateInputType;
    _max?: ImageMaxAggregateInputType;
  };

  export type ImageGroupByOutputType = {
    id: string;
    imagePath: string;
    createdAt: Date | null;
    altText: string | null;
    _count: ImageCountAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
  };

  type GetImageGroupByPayload<T extends ImageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ImageGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ImageGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>;
        }
      >
    >;

  export type ImageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      imagePath?: boolean;
      createdAt?: boolean;
      altText?: boolean;
      annonceImages?: boolean | Image$annonceImagesArgs<ExtArgs>;
      _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["image"]
  >;

  export type ImageSelectScalar = {
    id?: boolean;
    imagePath?: boolean;
    createdAt?: boolean;
    altText?: boolean;
  };

  export type ImageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "imagePath" | "createdAt" | "altText",
    ExtArgs["result"]["image"]
  >;
  export type ImageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    annonceImages?: boolean | Image$annonceImagesArgs<ExtArgs>;
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ImagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Image";
    objects: {
      annonceImages: Prisma.$AnnonceImagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        imagePath: string;
        createdAt: Date | null;
        altText: string | null;
      },
      ExtArgs["result"]["image"]
    >;
    composites: {};
  };

  type ImageGetPayload<
    S extends boolean | null | undefined | ImageDefaultArgs,
  > = $Result.GetResult<Prisma.$ImagePayload, S>;

  type ImageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ImageFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ImageCountAggregateInputType | true;
  };

  export interface ImageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Image"];
      meta: { name: "Image" };
    };
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     *
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     *
     */
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     *
     */
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      $Result.GetResult<
        Prisma.$ImagePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Images that matches the filter.
     * @param {ImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const image = await prisma.image.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ImageFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Image.
     * @param {ImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const image = await prisma.image.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: ImageAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
     **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ImageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(
      args: Subset<T, ImageAggregateArgs>,
    ): Prisma.PrismaPromise<GetImageAggregateType<T>>;

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs["orderBy"] }
        : { orderBy?: ImageGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetImageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Image model
     */
    readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    annonceImages<T extends Image$annonceImagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Image$annonceImagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AnnonceImagePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", "String">;
    readonly imagePath: FieldRef<"Image", "String">;
    readonly createdAt: FieldRef<"Image", "DateTime">;
    readonly altText: FieldRef<"Image", "String">;
  }

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Images from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Images.
     */
    skip?: number;
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[];
  };

  /**
   * Image create
   */
  export type ImageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
  };

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[];
  };

  /**
   * Image update
   */
  export type ImageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>;
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to update.
     */
    limit?: number;
  };

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput;
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>;
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>;
  };

  /**
   * Image delete
   */
  export type ImageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput;
  };

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput;
    /**
     * Limit how many Images to delete.
     */
    limit?: number;
  };

  /**
   * Image findRaw
   */
  export type ImageFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Image aggregateRaw
   */
  export type ImageAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Image.annonceImages
   */
  export type Image$annonceImagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    where?: AnnonceImageWhereInput;
    orderBy?:
      | AnnonceImageOrderByWithRelationInput
      | AnnonceImageOrderByWithRelationInput[];
    cursor?: AnnonceImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnnonceImageScalarFieldEnum | AnnonceImageScalarFieldEnum[];
  };

  /**
   * Image without action
   */
  export type ImageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null;
  };

  /**
   * Model Annonce
   */

  export type AggregateAnnonce = {
    _count: AnnonceCountAggregateOutputType | null;
    _avg: AnnonceAvgAggregateOutputType | null;
    _sum: AnnonceSumAggregateOutputType | null;
    _min: AnnonceMinAggregateOutputType | null;
    _max: AnnonceMaxAggregateOutputType | null;
  };

  export type AnnonceAvgAggregateOutputType = {
    price: number | null;
  };

  export type AnnonceSumAggregateOutputType = {
    price: number | null;
  };

  export type AnnonceMinAggregateOutputType = {
    id: string | null;
    typeAnnonceId: string | null;
    categorieId: string | null;
    lieuId: string | null;
    userId: string | null;
    subcategorieId: string | null;
    title: string | null;
    description: string | null;
    price: number | null;
    contact: string | null;
    haveImage: boolean | null;
    firstImagePath: string | null;
    status: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
  };

  export type AnnonceMaxAggregateOutputType = {
    id: string | null;
    typeAnnonceId: string | null;
    categorieId: string | null;
    lieuId: string | null;
    userId: string | null;
    subcategorieId: string | null;
    title: string | null;
    description: string | null;
    price: number | null;
    contact: string | null;
    haveImage: boolean | null;
    firstImagePath: string | null;
    status: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
  };

  export type AnnonceCountAggregateOutputType = {
    id: number;
    typeAnnonceId: number;
    categorieId: number;
    lieuId: number;
    userId: number;
    subcategorieId: number;
    title: number;
    description: number;
    price: number;
    contact: number;
    haveImage: number;
    firstImagePath: number;
    status: number;
    updatedAt: number;
    createdAt: number;
    typeAnnonce: number;
    categorie: number;
    subcategorie: number;
    _all: number;
  };

  export type AnnonceAvgAggregateInputType = {
    price?: true;
  };

  export type AnnonceSumAggregateInputType = {
    price?: true;
  };

  export type AnnonceMinAggregateInputType = {
    id?: true;
    typeAnnonceId?: true;
    categorieId?: true;
    lieuId?: true;
    userId?: true;
    subcategorieId?: true;
    title?: true;
    description?: true;
    price?: true;
    contact?: true;
    haveImage?: true;
    firstImagePath?: true;
    status?: true;
    updatedAt?: true;
    createdAt?: true;
  };

  export type AnnonceMaxAggregateInputType = {
    id?: true;
    typeAnnonceId?: true;
    categorieId?: true;
    lieuId?: true;
    userId?: true;
    subcategorieId?: true;
    title?: true;
    description?: true;
    price?: true;
    contact?: true;
    haveImage?: true;
    firstImagePath?: true;
    status?: true;
    updatedAt?: true;
    createdAt?: true;
  };

  export type AnnonceCountAggregateInputType = {
    id?: true;
    typeAnnonceId?: true;
    categorieId?: true;
    lieuId?: true;
    userId?: true;
    subcategorieId?: true;
    title?: true;
    description?: true;
    price?: true;
    contact?: true;
    haveImage?: true;
    firstImagePath?: true;
    status?: true;
    updatedAt?: true;
    createdAt?: true;
    typeAnnonce?: true;
    categorie?: true;
    subcategorie?: true;
    _all?: true;
  };

  export type AnnonceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Annonce to aggregate.
     */
    where?: AnnonceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Annonces to fetch.
     */
    orderBy?:
      | AnnonceOrderByWithRelationInput
      | AnnonceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AnnonceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Annonces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Annonces
     **/
    _count?: true | AnnonceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AnnonceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AnnonceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnnonceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnnonceMaxAggregateInputType;
  };

  export type GetAnnonceAggregateType<T extends AnnonceAggregateArgs> = {
    [P in keyof T & keyof AggregateAnnonce]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonce[P]>
      : GetScalarType<T[P], AggregateAnnonce[P]>;
  };

  export type AnnonceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnnonceWhereInput;
    orderBy?:
      | AnnonceOrderByWithAggregationInput
      | AnnonceOrderByWithAggregationInput[];
    by: AnnonceScalarFieldEnum[] | AnnonceScalarFieldEnum;
    having?: AnnonceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnnonceCountAggregateInputType | true;
    _avg?: AnnonceAvgAggregateInputType;
    _sum?: AnnonceSumAggregateInputType;
    _min?: AnnonceMinAggregateInputType;
    _max?: AnnonceMaxAggregateInputType;
  };

  export type AnnonceGroupByOutputType = {
    id: string;
    typeAnnonceId: string;
    categorieId: string;
    lieuId: string;
    userId: string;
    subcategorieId: string;
    title: string;
    description: string;
    price: number | null;
    contact: string;
    haveImage: boolean;
    firstImagePath: string | null;
    status: string;
    updatedAt: Date;
    createdAt: Date;
    typeAnnonce: JsonValue | null;
    categorie: JsonValue | null;
    subcategorie: JsonValue | null;
    _count: AnnonceCountAggregateOutputType | null;
    _avg: AnnonceAvgAggregateOutputType | null;
    _sum: AnnonceSumAggregateOutputType | null;
    _min: AnnonceMinAggregateOutputType | null;
    _max: AnnonceMaxAggregateOutputType | null;
  };

  type GetAnnonceGroupByPayload<T extends AnnonceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AnnonceGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AnnonceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceGroupByOutputType[P]>;
        }
      >
    >;

  export type AnnonceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      typeAnnonceId?: boolean;
      categorieId?: boolean;
      lieuId?: boolean;
      userId?: boolean;
      subcategorieId?: boolean;
      title?: boolean;
      description?: boolean;
      price?: boolean;
      contact?: boolean;
      haveImage?: boolean;
      firstImagePath?: boolean;
      status?: boolean;
      updatedAt?: boolean;
      createdAt?: boolean;
      typeAnnonce?: boolean;
      categorie?: boolean;
      subcategorie?: boolean;
      annonceImages?: boolean | Annonce$annonceImagesArgs<ExtArgs>;
      _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["annonce"]
  >;

  export type AnnonceSelectScalar = {
    id?: boolean;
    typeAnnonceId?: boolean;
    categorieId?: boolean;
    lieuId?: boolean;
    userId?: boolean;
    subcategorieId?: boolean;
    title?: boolean;
    description?: boolean;
    price?: boolean;
    contact?: boolean;
    haveImage?: boolean;
    firstImagePath?: boolean;
    status?: boolean;
    updatedAt?: boolean;
    createdAt?: boolean;
    typeAnnonce?: boolean;
    categorie?: boolean;
    subcategorie?: boolean;
  };

  export type AnnonceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "typeAnnonceId"
    | "categorieId"
    | "lieuId"
    | "userId"
    | "subcategorieId"
    | "title"
    | "description"
    | "price"
    | "contact"
    | "haveImage"
    | "firstImagePath"
    | "status"
    | "updatedAt"
    | "createdAt"
    | "typeAnnonce"
    | "categorie"
    | "subcategorie",
    ExtArgs["result"]["annonce"]
  >;
  export type AnnonceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    annonceImages?: boolean | Annonce$annonceImagesArgs<ExtArgs>;
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AnnoncePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Annonce";
    objects: {
      annonceImages: Prisma.$AnnonceImagePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        typeAnnonceId: string;
        categorieId: string;
        lieuId: string;
        userId: string;
        subcategorieId: string;
        title: string;
        description: string;
        price: number | null;
        contact: string;
        haveImage: boolean;
        firstImagePath: string | null;
        status: string;
        updatedAt: Date;
        createdAt: Date;
        typeAnnonce: Prisma.JsonValue | null;
        categorie: Prisma.JsonValue | null;
        subcategorie: Prisma.JsonValue | null;
      },
      ExtArgs["result"]["annonce"]
    >;
    composites: {};
  };

  type AnnonceGetPayload<
    S extends boolean | null | undefined | AnnonceDefaultArgs,
  > = $Result.GetResult<Prisma.$AnnoncePayload, S>;

  type AnnonceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AnnonceFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AnnonceCountAggregateInputType | true;
  };

  export interface AnnonceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Annonce"];
      meta: { name: "Annonce" };
    };
    /**
     * Find zero or one Annonce that matches the filter.
     * @param {AnnonceFindUniqueArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnonceFindUniqueArgs>(
      args: SelectSubset<T, AnnonceFindUniqueArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Annonce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnonceFindUniqueOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnonceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AnnonceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Annonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnonceFindFirstArgs>(
      args?: SelectSubset<T, AnnonceFindFirstArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Annonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnonceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnnonceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annonces
     * const annonces = await prisma.annonce.findMany()
     *
     * // Get first 10 Annonces
     * const annonces = await prisma.annonce.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const annonceWithIdOnly = await prisma.annonce.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AnnonceFindManyArgs>(
      args?: SelectSubset<T, AnnonceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Annonce.
     * @param {AnnonceCreateArgs} args - Arguments to create a Annonce.
     * @example
     * // Create one Annonce
     * const Annonce = await prisma.annonce.create({
     *   data: {
     *     // ... data to create a Annonce
     *   }
     * })
     *
     */
    create<T extends AnnonceCreateArgs>(
      args: SelectSubset<T, AnnonceCreateArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Annonces.
     * @param {AnnonceCreateManyArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AnnonceCreateManyArgs>(
      args?: SelectSubset<T, AnnonceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Annonce.
     * @param {AnnonceDeleteArgs} args - Arguments to delete one Annonce.
     * @example
     * // Delete one Annonce
     * const Annonce = await prisma.annonce.delete({
     *   where: {
     *     // ... filter to delete one Annonce
     *   }
     * })
     *
     */
    delete<T extends AnnonceDeleteArgs>(
      args: SelectSubset<T, AnnonceDeleteArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Annonce.
     * @param {AnnonceUpdateArgs} args - Arguments to update one Annonce.
     * @example
     * // Update one Annonce
     * const annonce = await prisma.annonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AnnonceUpdateArgs>(
      args: SelectSubset<T, AnnonceUpdateArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Annonces.
     * @param {AnnonceDeleteManyArgs} args - Arguments to filter Annonces to delete.
     * @example
     * // Delete a few Annonces
     * const { count } = await prisma.annonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AnnonceDeleteManyArgs>(
      args?: SelectSubset<T, AnnonceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AnnonceUpdateManyArgs>(
      args: SelectSubset<T, AnnonceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Annonce.
     * @param {AnnonceUpsertArgs} args - Arguments to update or create a Annonce.
     * @example
     * // Update or create a Annonce
     * const annonce = await prisma.annonce.upsert({
     *   create: {
     *     // ... data to create a Annonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annonce we want to update
     *   }
     * })
     */
    upsert<T extends AnnonceUpsertArgs>(
      args: SelectSubset<T, AnnonceUpsertArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      $Result.GetResult<
        Prisma.$AnnoncePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Annonces that matches the filter.
     * @param {AnnonceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const annonce = await prisma.annonce.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AnnonceFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Annonce.
     * @param {AnnonceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const annonce = await prisma.annonce.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: AnnonceAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceCountArgs} args - Arguments to filter Annonces to count.
     * @example
     * // Count the number of Annonces
     * const count = await prisma.annonce.count({
     *   where: {
     *     // ... the filter for the Annonces we want to count
     *   }
     * })
     **/
    count<T extends AnnonceCountArgs>(
      args?: Subset<T, AnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AnnonceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnonceAggregateArgs>(
      args: Subset<T, AnnonceAggregateArgs>,
    ): Prisma.PrismaPromise<GetAnnonceAggregateType<T>>;

    /**
     * Group by Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceGroupByArgs} args - Group by arguments.
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
      T extends AnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceGroupByArgs["orderBy"] }
        : { orderBy?: AnnonceGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AnnonceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAnnonceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Annonce model
     */
    readonly fields: AnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    annonceImages<T extends Annonce$annonceImagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Annonce$annonceImagesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AnnonceImagePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Annonce model
   */
  interface AnnonceFieldRefs {
    readonly id: FieldRef<"Annonce", "String">;
    readonly typeAnnonceId: FieldRef<"Annonce", "String">;
    readonly categorieId: FieldRef<"Annonce", "String">;
    readonly lieuId: FieldRef<"Annonce", "String">;
    readonly userId: FieldRef<"Annonce", "String">;
    readonly subcategorieId: FieldRef<"Annonce", "String">;
    readonly title: FieldRef<"Annonce", "String">;
    readonly description: FieldRef<"Annonce", "String">;
    readonly price: FieldRef<"Annonce", "Float">;
    readonly contact: FieldRef<"Annonce", "String">;
    readonly haveImage: FieldRef<"Annonce", "Boolean">;
    readonly firstImagePath: FieldRef<"Annonce", "String">;
    readonly status: FieldRef<"Annonce", "String">;
    readonly updatedAt: FieldRef<"Annonce", "DateTime">;
    readonly createdAt: FieldRef<"Annonce", "DateTime">;
    readonly typeAnnonce: FieldRef<"Annonce", "Json">;
    readonly categorie: FieldRef<"Annonce", "Json">;
    readonly subcategorie: FieldRef<"Annonce", "Json">;
  }

  // Custom InputTypes
  /**
   * Annonce findUnique
   */
  export type AnnonceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput;
  };

  /**
   * Annonce findUniqueOrThrow
   */
  export type AnnonceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput;
  };

  /**
   * Annonce findFirst
   */
  export type AnnonceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Annonces to fetch.
     */
    orderBy?:
      | AnnonceOrderByWithRelationInput
      | AnnonceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Annonces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[];
  };

  /**
   * Annonce findFirstOrThrow
   */
  export type AnnonceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Annonces to fetch.
     */
    orderBy?:
      | AnnonceOrderByWithRelationInput
      | AnnonceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Annonces.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[];
  };

  /**
   * Annonce findMany
   */
  export type AnnonceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnonceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Annonces to fetch.
     */
    orderBy?:
      | AnnonceOrderByWithRelationInput
      | AnnonceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Annonces.
     */
    cursor?: AnnonceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Annonces.
     */
    skip?: number;
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[];
  };

  /**
   * Annonce create
   */
  export type AnnonceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Annonce.
     */
    data: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>;
  };

  /**
   * Annonce createMany
   */
  export type AnnonceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[];
  };

  /**
   * Annonce update
   */
  export type AnnonceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Annonce.
     */
    data: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>;
    /**
     * Choose, which Annonce to update.
     */
    where: AnnonceWhereUniqueInput;
  };

  /**
   * Annonce updateMany
   */
  export type AnnonceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>;
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput;
    /**
     * Limit how many Annonces to update.
     */
    limit?: number;
  };

  /**
   * Annonce upsert
   */
  export type AnnonceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Annonce to update in case it exists.
     */
    where: AnnonceWhereUniqueInput;
    /**
     * In case the Annonce found by the `where` argument doesn't exist, create a new Annonce with this data.
     */
    create: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>;
    /**
     * In case the Annonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>;
  };

  /**
   * Annonce delete
   */
  export type AnnonceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
    /**
     * Filter which Annonce to delete.
     */
    where: AnnonceWhereUniqueInput;
  };

  /**
   * Annonce deleteMany
   */
  export type AnnonceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Annonces to delete
     */
    where?: AnnonceWhereInput;
    /**
     * Limit how many Annonces to delete.
     */
    limit?: number;
  };

  /**
   * Annonce findRaw
   */
  export type AnnonceFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Annonce aggregateRaw
   */
  export type AnnonceAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Annonce.annonceImages
   */
  export type Annonce$annonceImagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    where?: AnnonceImageWhereInput;
    orderBy?:
      | AnnonceImageOrderByWithRelationInput
      | AnnonceImageOrderByWithRelationInput[];
    cursor?: AnnonceImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnnonceImageScalarFieldEnum | AnnonceImageScalarFieldEnum[];
  };

  /**
   * Annonce without action
   */
  export type AnnonceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null;
  };

  /**
   * Model AnnonceImage
   */

  export type AggregateAnnonceImage = {
    _count: AnnonceImageCountAggregateOutputType | null;
    _min: AnnonceImageMinAggregateOutputType | null;
    _max: AnnonceImageMaxAggregateOutputType | null;
  };

  export type AnnonceImageMinAggregateOutputType = {
    id: string | null;
    annonceId: string | null;
    imageId: string | null;
    createdAt: Date | null;
  };

  export type AnnonceImageMaxAggregateOutputType = {
    id: string | null;
    annonceId: string | null;
    imageId: string | null;
    createdAt: Date | null;
  };

  export type AnnonceImageCountAggregateOutputType = {
    id: number;
    annonceId: number;
    imageId: number;
    createdAt: number;
    _all: number;
  };

  export type AnnonceImageMinAggregateInputType = {
    id?: true;
    annonceId?: true;
    imageId?: true;
    createdAt?: true;
  };

  export type AnnonceImageMaxAggregateInputType = {
    id?: true;
    annonceId?: true;
    imageId?: true;
    createdAt?: true;
  };

  export type AnnonceImageCountAggregateInputType = {
    id?: true;
    annonceId?: true;
    imageId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type AnnonceImageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AnnonceImage to aggregate.
     */
    where?: AnnonceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnnonceImages to fetch.
     */
    orderBy?:
      | AnnonceImageOrderByWithRelationInput
      | AnnonceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AnnonceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnnonceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnnonceImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AnnonceImages
     **/
    _count?: true | AnnonceImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnnonceImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnnonceImageMaxAggregateInputType;
  };

  export type GetAnnonceImageAggregateType<
    T extends AnnonceImageAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAnnonceImage]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonceImage[P]>
      : GetScalarType<T[P], AggregateAnnonceImage[P]>;
  };

  export type AnnonceImageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnnonceImageWhereInput;
    orderBy?:
      | AnnonceImageOrderByWithAggregationInput
      | AnnonceImageOrderByWithAggregationInput[];
    by: AnnonceImageScalarFieldEnum[] | AnnonceImageScalarFieldEnum;
    having?: AnnonceImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnnonceImageCountAggregateInputType | true;
    _min?: AnnonceImageMinAggregateInputType;
    _max?: AnnonceImageMaxAggregateInputType;
  };

  export type AnnonceImageGroupByOutputType = {
    id: string;
    annonceId: string;
    imageId: string;
    createdAt: Date;
    _count: AnnonceImageCountAggregateOutputType | null;
    _min: AnnonceImageMinAggregateOutputType | null;
    _max: AnnonceImageMaxAggregateOutputType | null;
  };

  type GetAnnonceImageGroupByPayload<T extends AnnonceImageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AnnonceImageGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof AnnonceImageGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceImageGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceImageGroupByOutputType[P]>;
        }
      >
    >;

  export type AnnonceImageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      annonceId?: boolean;
      imageId?: boolean;
      createdAt?: boolean;
      annonce?: boolean | AnnonceDefaultArgs<ExtArgs>;
      image?: boolean | ImageDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["annonceImage"]
  >;

  export type AnnonceImageSelectScalar = {
    id?: boolean;
    annonceId?: boolean;
    imageId?: boolean;
    createdAt?: boolean;
  };

  export type AnnonceImageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "annonceId" | "imageId" | "createdAt",
    ExtArgs["result"]["annonceImage"]
  >;
  export type AnnonceImageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>;
    image?: boolean | ImageDefaultArgs<ExtArgs>;
  };

  export type $AnnonceImagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AnnonceImage";
    objects: {
      annonce: Prisma.$AnnoncePayload<ExtArgs>;
      image: Prisma.$ImagePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        annonceId: string;
        imageId: string;
        createdAt: Date;
      },
      ExtArgs["result"]["annonceImage"]
    >;
    composites: {};
  };

  type AnnonceImageGetPayload<
    S extends boolean | null | undefined | AnnonceImageDefaultArgs,
  > = $Result.GetResult<Prisma.$AnnonceImagePayload, S>;

  type AnnonceImageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AnnonceImageFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: AnnonceImageCountAggregateInputType | true;
  };

  export interface AnnonceImageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AnnonceImage"];
      meta: { name: "AnnonceImage" };
    };
    /**
     * Find zero or one AnnonceImage that matches the filter.
     * @param {AnnonceImageFindUniqueArgs} args - Arguments to find a AnnonceImage
     * @example
     * // Get one AnnonceImage
     * const annonceImage = await prisma.annonceImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnonceImageFindUniqueArgs>(
      args: SelectSubset<T, AnnonceImageFindUniqueArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AnnonceImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnonceImageFindUniqueOrThrowArgs} args - Arguments to find a AnnonceImage
     * @example
     * // Get one AnnonceImage
     * const annonceImage = await prisma.annonceImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnonceImageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AnnonceImageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AnnonceImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceImageFindFirstArgs} args - Arguments to find a AnnonceImage
     * @example
     * // Get one AnnonceImage
     * const annonceImage = await prisma.annonceImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnonceImageFindFirstArgs>(
      args?: SelectSubset<T, AnnonceImageFindFirstArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AnnonceImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceImageFindFirstOrThrowArgs} args - Arguments to find a AnnonceImage
     * @example
     * // Get one AnnonceImage
     * const annonceImage = await prisma.annonceImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnonceImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnnonceImageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AnnonceImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnonceImages
     * const annonceImages = await prisma.annonceImage.findMany()
     *
     * // Get first 10 AnnonceImages
     * const annonceImages = await prisma.annonceImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const annonceImageWithIdOnly = await prisma.annonceImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AnnonceImageFindManyArgs>(
      args?: SelectSubset<T, AnnonceImageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AnnonceImage.
     * @param {AnnonceImageCreateArgs} args - Arguments to create a AnnonceImage.
     * @example
     * // Create one AnnonceImage
     * const AnnonceImage = await prisma.annonceImage.create({
     *   data: {
     *     // ... data to create a AnnonceImage
     *   }
     * })
     *
     */
    create<T extends AnnonceImageCreateArgs>(
      args: SelectSubset<T, AnnonceImageCreateArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AnnonceImages.
     * @param {AnnonceImageCreateManyArgs} args - Arguments to create many AnnonceImages.
     * @example
     * // Create many AnnonceImages
     * const annonceImage = await prisma.annonceImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AnnonceImageCreateManyArgs>(
      args?: SelectSubset<T, AnnonceImageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a AnnonceImage.
     * @param {AnnonceImageDeleteArgs} args - Arguments to delete one AnnonceImage.
     * @example
     * // Delete one AnnonceImage
     * const AnnonceImage = await prisma.annonceImage.delete({
     *   where: {
     *     // ... filter to delete one AnnonceImage
     *   }
     * })
     *
     */
    delete<T extends AnnonceImageDeleteArgs>(
      args: SelectSubset<T, AnnonceImageDeleteArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AnnonceImage.
     * @param {AnnonceImageUpdateArgs} args - Arguments to update one AnnonceImage.
     * @example
     * // Update one AnnonceImage
     * const annonceImage = await prisma.annonceImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AnnonceImageUpdateArgs>(
      args: SelectSubset<T, AnnonceImageUpdateArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AnnonceImages.
     * @param {AnnonceImageDeleteManyArgs} args - Arguments to filter AnnonceImages to delete.
     * @example
     * // Delete a few AnnonceImages
     * const { count } = await prisma.annonceImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AnnonceImageDeleteManyArgs>(
      args?: SelectSubset<T, AnnonceImageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AnnonceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnonceImages
     * const annonceImage = await prisma.annonceImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AnnonceImageUpdateManyArgs>(
      args: SelectSubset<T, AnnonceImageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AnnonceImage.
     * @param {AnnonceImageUpsertArgs} args - Arguments to update or create a AnnonceImage.
     * @example
     * // Update or create a AnnonceImage
     * const annonceImage = await prisma.annonceImage.upsert({
     *   create: {
     *     // ... data to create a AnnonceImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnonceImage we want to update
     *   }
     * })
     */
    upsert<T extends AnnonceImageUpsertArgs>(
      args: SelectSubset<T, AnnonceImageUpsertArgs<ExtArgs>>,
    ): Prisma__AnnonceImageClient<
      $Result.GetResult<
        Prisma.$AnnonceImagePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AnnonceImages that matches the filter.
     * @param {AnnonceImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const annonceImage = await prisma.annonceImage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AnnonceImageFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a AnnonceImage.
     * @param {AnnonceImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const annonceImage = await prisma.annonceImage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: AnnonceImageAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of AnnonceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceImageCountArgs} args - Arguments to filter AnnonceImages to count.
     * @example
     * // Count the number of AnnonceImages
     * const count = await prisma.annonceImage.count({
     *   where: {
     *     // ... the filter for the AnnonceImages we want to count
     *   }
     * })
     **/
    count<T extends AnnonceImageCountArgs>(
      args?: Subset<T, AnnonceImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AnnonceImageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AnnonceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnonceImageAggregateArgs>(
      args: Subset<T, AnnonceImageAggregateArgs>,
    ): Prisma.PrismaPromise<GetAnnonceImageAggregateType<T>>;

    /**
     * Group by AnnonceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceImageGroupByArgs} args - Group by arguments.
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
      T extends AnnonceImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceImageGroupByArgs["orderBy"] }
        : { orderBy?: AnnonceImageGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AnnonceImageGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAnnonceImageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AnnonceImage model
     */
    readonly fields: AnnonceImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnonceImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceImageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    annonce<T extends AnnonceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AnnonceDefaultArgs<ExtArgs>>,
    ): Prisma__AnnonceClient<
      | $Result.GetResult<
          Prisma.$AnnoncePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ImageDefaultArgs<ExtArgs>>,
    ): Prisma__ImageClient<
      | $Result.GetResult<
          Prisma.$ImagePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AnnonceImage model
   */
  interface AnnonceImageFieldRefs {
    readonly id: FieldRef<"AnnonceImage", "String">;
    readonly annonceId: FieldRef<"AnnonceImage", "String">;
    readonly imageId: FieldRef<"AnnonceImage", "String">;
    readonly createdAt: FieldRef<"AnnonceImage", "DateTime">;
  }

  // Custom InputTypes
  /**
   * AnnonceImage findUnique
   */
  export type AnnonceImageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AnnonceImage to fetch.
     */
    where: AnnonceImageWhereUniqueInput;
  };

  /**
   * AnnonceImage findUniqueOrThrow
   */
  export type AnnonceImageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AnnonceImage to fetch.
     */
    where: AnnonceImageWhereUniqueInput;
  };

  /**
   * AnnonceImage findFirst
   */
  export type AnnonceImageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AnnonceImage to fetch.
     */
    where?: AnnonceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnnonceImages to fetch.
     */
    orderBy?:
      | AnnonceImageOrderByWithRelationInput
      | AnnonceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AnnonceImages.
     */
    cursor?: AnnonceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnnonceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnnonceImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AnnonceImages.
     */
    distinct?: AnnonceImageScalarFieldEnum | AnnonceImageScalarFieldEnum[];
  };

  /**
   * AnnonceImage findFirstOrThrow
   */
  export type AnnonceImageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AnnonceImage to fetch.
     */
    where?: AnnonceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnnonceImages to fetch.
     */
    orderBy?:
      | AnnonceImageOrderByWithRelationInput
      | AnnonceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AnnonceImages.
     */
    cursor?: AnnonceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnnonceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnnonceImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AnnonceImages.
     */
    distinct?: AnnonceImageScalarFieldEnum | AnnonceImageScalarFieldEnum[];
  };

  /**
   * AnnonceImage findMany
   */
  export type AnnonceImageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * Filter, which AnnonceImages to fetch.
     */
    where?: AnnonceImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AnnonceImages to fetch.
     */
    orderBy?:
      | AnnonceImageOrderByWithRelationInput
      | AnnonceImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AnnonceImages.
     */
    cursor?: AnnonceImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AnnonceImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AnnonceImages.
     */
    skip?: number;
    distinct?: AnnonceImageScalarFieldEnum | AnnonceImageScalarFieldEnum[];
  };

  /**
   * AnnonceImage create
   */
  export type AnnonceImageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a AnnonceImage.
     */
    data: XOR<AnnonceImageCreateInput, AnnonceImageUncheckedCreateInput>;
  };

  /**
   * AnnonceImage createMany
   */
  export type AnnonceImageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AnnonceImages.
     */
    data: AnnonceImageCreateManyInput | AnnonceImageCreateManyInput[];
  };

  /**
   * AnnonceImage update
   */
  export type AnnonceImageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a AnnonceImage.
     */
    data: XOR<AnnonceImageUpdateInput, AnnonceImageUncheckedUpdateInput>;
    /**
     * Choose, which AnnonceImage to update.
     */
    where: AnnonceImageWhereUniqueInput;
  };

  /**
   * AnnonceImage updateMany
   */
  export type AnnonceImageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AnnonceImages.
     */
    data: XOR<
      AnnonceImageUpdateManyMutationInput,
      AnnonceImageUncheckedUpdateManyInput
    >;
    /**
     * Filter which AnnonceImages to update
     */
    where?: AnnonceImageWhereInput;
    /**
     * Limit how many AnnonceImages to update.
     */
    limit?: number;
  };

  /**
   * AnnonceImage upsert
   */
  export type AnnonceImageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the AnnonceImage to update in case it exists.
     */
    where: AnnonceImageWhereUniqueInput;
    /**
     * In case the AnnonceImage found by the `where` argument doesn't exist, create a new AnnonceImage with this data.
     */
    create: XOR<AnnonceImageCreateInput, AnnonceImageUncheckedCreateInput>;
    /**
     * In case the AnnonceImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceImageUpdateInput, AnnonceImageUncheckedUpdateInput>;
  };

  /**
   * AnnonceImage delete
   */
  export type AnnonceImageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
    /**
     * Filter which AnnonceImage to delete.
     */
    where: AnnonceImageWhereUniqueInput;
  };

  /**
   * AnnonceImage deleteMany
   */
  export type AnnonceImageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AnnonceImages to delete
     */
    where?: AnnonceImageWhereInput;
    /**
     * Limit how many AnnonceImages to delete.
     */
    limit?: number;
  };

  /**
   * AnnonceImage findRaw
   */
  export type AnnonceImageFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * AnnonceImage aggregateRaw
   */
  export type AnnonceImageAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * AnnonceImage without action
   */
  export type AnnonceImageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnnonceImage
     */
    select?: AnnonceImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AnnonceImage
     */
    omit?: AnnonceImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceImageInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    password: "password";
    createdAt: "createdAt";
    lastLogin: "lastLogin";
    isActive: "isActive";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const UserSessionScalarFieldEnum: {
    id: "id";
    userId: "userId";
    token: "token";
    isExpired: "isExpired";
    createdAt: "createdAt";
    lastAccessed: "lastAccessed";
  };

  export type UserSessionScalarFieldEnum =
    (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum];

  export const OptionsModelScalarFieldEnum: {
    id: "id";
    name: "name";
    nameAr: "nameAr";
    priority: "priority";
    depth: "depth";
    tag: "tag";
    createdAt: "createdAt";
    parentID: "parentID";
  };

  export type OptionsModelScalarFieldEnum =
    (typeof OptionsModelScalarFieldEnum)[keyof typeof OptionsModelScalarFieldEnum];

  export const ImageScalarFieldEnum: {
    id: "id";
    imagePath: "imagePath";
    createdAt: "createdAt";
    altText: "altText";
  };

  export type ImageScalarFieldEnum =
    (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];

  export const AnnonceScalarFieldEnum: {
    id: "id";
    typeAnnonceId: "typeAnnonceId";
    categorieId: "categorieId";
    lieuId: "lieuId";
    userId: "userId";
    subcategorieId: "subcategorieId";
    title: "title";
    description: "description";
    price: "price";
    contact: "contact";
    haveImage: "haveImage";
    firstImagePath: "firstImagePath";
    status: "status";
    updatedAt: "updatedAt";
    createdAt: "createdAt";
    typeAnnonce: "typeAnnonce";
    categorie: "categorie";
    subcategorie: "subcategorie";
  };

  export type AnnonceScalarFieldEnum =
    (typeof AnnonceScalarFieldEnum)[keyof typeof AnnonceScalarFieldEnum];

  export const AnnonceImageScalarFieldEnum: {
    id: "id";
    annonceId: "annonceId";
    imageId: "imageId";
    createdAt: "createdAt";
  };

  export type AnnonceImageScalarFieldEnum =
    (typeof AnnonceImageScalarFieldEnum)[keyof typeof AnnonceImageScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    password?: StringFilter<"User"> | string;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null;
    isActive?: BoolFilter<"User"> | boolean;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    lastLogin?: SortOrder;
    isActive?: SortOrder;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<"User"> | string;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null;
      isActive?: BoolFilter<"User"> | boolean;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    lastLogin?: SortOrder;
    isActive?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    password?: StringWithAggregatesFilter<"User"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    lastLogin?:
      | DateTimeNullableWithAggregatesFilter<"User">
      | Date
      | string
      | null;
    isActive?: BoolWithAggregatesFilter<"User"> | boolean;
  };

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[];
    OR?: UserSessionWhereInput[];
    NOT?: UserSessionWhereInput | UserSessionWhereInput[];
    id?: StringFilter<"UserSession"> | string;
    userId?: StringFilter<"UserSession"> | string;
    token?: StringFilter<"UserSession"> | string;
    isExpired?: BoolFilter<"UserSession"> | boolean;
    createdAt?: DateTimeFilter<"UserSession"> | Date | string;
    lastAccessed?: DateTimeNullableFilter<"UserSession"> | Date | string | null;
  };

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    isExpired?: SortOrder;
    createdAt?: SortOrder;
    lastAccessed?: SortOrder;
  };

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: UserSessionWhereInput | UserSessionWhereInput[];
      OR?: UserSessionWhereInput[];
      NOT?: UserSessionWhereInput | UserSessionWhereInput[];
      userId?: StringFilter<"UserSession"> | string;
      token?: StringFilter<"UserSession"> | string;
      isExpired?: BoolFilter<"UserSession"> | boolean;
      createdAt?: DateTimeFilter<"UserSession"> | Date | string;
      lastAccessed?:
        | DateTimeNullableFilter<"UserSession">
        | Date
        | string
        | null;
    },
    "id"
  >;

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    isExpired?: SortOrder;
    createdAt?: SortOrder;
    lastAccessed?: SortOrder;
    _count?: UserSessionCountOrderByAggregateInput;
    _max?: UserSessionMaxOrderByAggregateInput;
    _min?: UserSessionMinOrderByAggregateInput;
  };

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?:
      | UserSessionScalarWhereWithAggregatesInput
      | UserSessionScalarWhereWithAggregatesInput[];
    OR?: UserSessionScalarWhereWithAggregatesInput[];
    NOT?:
      | UserSessionScalarWhereWithAggregatesInput
      | UserSessionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"UserSession"> | string;
    userId?: StringWithAggregatesFilter<"UserSession"> | string;
    token?: StringWithAggregatesFilter<"UserSession"> | string;
    isExpired?: BoolWithAggregatesFilter<"UserSession"> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string;
    lastAccessed?:
      | DateTimeNullableWithAggregatesFilter<"UserSession">
      | Date
      | string
      | null;
  };

  export type OptionsModelWhereInput = {
    AND?: OptionsModelWhereInput | OptionsModelWhereInput[];
    OR?: OptionsModelWhereInput[];
    NOT?: OptionsModelWhereInput | OptionsModelWhereInput[];
    id?: StringFilter<"OptionsModel"> | string;
    name?: StringFilter<"OptionsModel"> | string;
    nameAr?: StringFilter<"OptionsModel"> | string;
    priority?: IntFilter<"OptionsModel"> | number;
    depth?: IntFilter<"OptionsModel"> | number;
    tag?: StringFilter<"OptionsModel"> | string;
    createdAt?: DateTimeFilter<"OptionsModel"> | Date | string;
    parentID?: StringNullableFilter<"OptionsModel"> | string | null;
  };

  export type OptionsModelOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    nameAr?: SortOrder;
    priority?: SortOrder;
    depth?: SortOrder;
    tag?: SortOrder;
    createdAt?: SortOrder;
    parentID?: SortOrder;
  };

  export type OptionsModelWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OptionsModelWhereInput | OptionsModelWhereInput[];
      OR?: OptionsModelWhereInput[];
      NOT?: OptionsModelWhereInput | OptionsModelWhereInput[];
      name?: StringFilter<"OptionsModel"> | string;
      nameAr?: StringFilter<"OptionsModel"> | string;
      priority?: IntFilter<"OptionsModel"> | number;
      depth?: IntFilter<"OptionsModel"> | number;
      tag?: StringFilter<"OptionsModel"> | string;
      createdAt?: DateTimeFilter<"OptionsModel"> | Date | string;
      parentID?: StringNullableFilter<"OptionsModel"> | string | null;
    },
    "id"
  >;

  export type OptionsModelOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    nameAr?: SortOrder;
    priority?: SortOrder;
    depth?: SortOrder;
    tag?: SortOrder;
    createdAt?: SortOrder;
    parentID?: SortOrder;
    _count?: OptionsModelCountOrderByAggregateInput;
    _avg?: OptionsModelAvgOrderByAggregateInput;
    _max?: OptionsModelMaxOrderByAggregateInput;
    _min?: OptionsModelMinOrderByAggregateInput;
    _sum?: OptionsModelSumOrderByAggregateInput;
  };

  export type OptionsModelScalarWhereWithAggregatesInput = {
    AND?:
      | OptionsModelScalarWhereWithAggregatesInput
      | OptionsModelScalarWhereWithAggregatesInput[];
    OR?: OptionsModelScalarWhereWithAggregatesInput[];
    NOT?:
      | OptionsModelScalarWhereWithAggregatesInput
      | OptionsModelScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"OptionsModel"> | string;
    name?: StringWithAggregatesFilter<"OptionsModel"> | string;
    nameAr?: StringWithAggregatesFilter<"OptionsModel"> | string;
    priority?: IntWithAggregatesFilter<"OptionsModel"> | number;
    depth?: IntWithAggregatesFilter<"OptionsModel"> | number;
    tag?: StringWithAggregatesFilter<"OptionsModel"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"OptionsModel"> | Date | string;
    parentID?:
      | StringNullableWithAggregatesFilter<"OptionsModel">
      | string
      | null;
  };

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[];
    OR?: ImageWhereInput[];
    NOT?: ImageWhereInput | ImageWhereInput[];
    id?: StringFilter<"Image"> | string;
    imagePath?: StringFilter<"Image"> | string;
    createdAt?: DateTimeNullableFilter<"Image"> | Date | string | null;
    altText?: StringNullableFilter<"Image"> | string | null;
    annonceImages?: AnnonceImageListRelationFilter;
  };

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    altText?: SortOrder;
    annonceImages?: AnnonceImageOrderByRelationAggregateInput;
  };

  export type ImageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ImageWhereInput | ImageWhereInput[];
      OR?: ImageWhereInput[];
      NOT?: ImageWhereInput | ImageWhereInput[];
      imagePath?: StringFilter<"Image"> | string;
      createdAt?: DateTimeNullableFilter<"Image"> | Date | string | null;
      altText?: StringNullableFilter<"Image"> | string | null;
      annonceImages?: AnnonceImageListRelationFilter;
    },
    "id"
  >;

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    altText?: SortOrder;
    _count?: ImageCountOrderByAggregateInput;
    _max?: ImageMaxOrderByAggregateInput;
    _min?: ImageMinOrderByAggregateInput;
  };

  export type ImageScalarWhereWithAggregatesInput = {
    AND?:
      | ImageScalarWhereWithAggregatesInput
      | ImageScalarWhereWithAggregatesInput[];
    OR?: ImageScalarWhereWithAggregatesInput[];
    NOT?:
      | ImageScalarWhereWithAggregatesInput
      | ImageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Image"> | string;
    imagePath?: StringWithAggregatesFilter<"Image"> | string;
    createdAt?:
      | DateTimeNullableWithAggregatesFilter<"Image">
      | Date
      | string
      | null;
    altText?: StringNullableWithAggregatesFilter<"Image"> | string | null;
  };

  export type AnnonceWhereInput = {
    AND?: AnnonceWhereInput | AnnonceWhereInput[];
    OR?: AnnonceWhereInput[];
    NOT?: AnnonceWhereInput | AnnonceWhereInput[];
    id?: StringFilter<"Annonce"> | string;
    typeAnnonceId?: StringFilter<"Annonce"> | string;
    categorieId?: StringFilter<"Annonce"> | string;
    lieuId?: StringFilter<"Annonce"> | string;
    userId?: StringFilter<"Annonce"> | string;
    subcategorieId?: StringFilter<"Annonce"> | string;
    title?: StringFilter<"Annonce"> | string;
    description?: StringFilter<"Annonce"> | string;
    price?: FloatNullableFilter<"Annonce"> | number | null;
    contact?: StringFilter<"Annonce"> | string;
    haveImage?: BoolFilter<"Annonce"> | boolean;
    firstImagePath?: StringNullableFilter<"Annonce"> | string | null;
    status?: StringFilter<"Annonce"> | string;
    updatedAt?: DateTimeFilter<"Annonce"> | Date | string;
    createdAt?: DateTimeFilter<"Annonce"> | Date | string;
    typeAnnonce?: JsonNullableFilter<"Annonce">;
    categorie?: JsonNullableFilter<"Annonce">;
    subcategorie?: JsonNullableFilter<"Annonce">;
    annonceImages?: AnnonceImageListRelationFilter;
  };

  export type AnnonceOrderByWithRelationInput = {
    id?: SortOrder;
    typeAnnonceId?: SortOrder;
    categorieId?: SortOrder;
    lieuId?: SortOrder;
    userId?: SortOrder;
    subcategorieId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    contact?: SortOrder;
    haveImage?: SortOrder;
    firstImagePath?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
    createdAt?: SortOrder;
    typeAnnonce?: SortOrder;
    categorie?: SortOrder;
    subcategorie?: SortOrder;
    annonceImages?: AnnonceImageOrderByRelationAggregateInput;
  };

  export type AnnonceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AnnonceWhereInput | AnnonceWhereInput[];
      OR?: AnnonceWhereInput[];
      NOT?: AnnonceWhereInput | AnnonceWhereInput[];
      typeAnnonceId?: StringFilter<"Annonce"> | string;
      categorieId?: StringFilter<"Annonce"> | string;
      lieuId?: StringFilter<"Annonce"> | string;
      userId?: StringFilter<"Annonce"> | string;
      subcategorieId?: StringFilter<"Annonce"> | string;
      title?: StringFilter<"Annonce"> | string;
      description?: StringFilter<"Annonce"> | string;
      price?: FloatNullableFilter<"Annonce"> | number | null;
      contact?: StringFilter<"Annonce"> | string;
      haveImage?: BoolFilter<"Annonce"> | boolean;
      firstImagePath?: StringNullableFilter<"Annonce"> | string | null;
      status?: StringFilter<"Annonce"> | string;
      updatedAt?: DateTimeFilter<"Annonce"> | Date | string;
      createdAt?: DateTimeFilter<"Annonce"> | Date | string;
      typeAnnonce?: JsonNullableFilter<"Annonce">;
      categorie?: JsonNullableFilter<"Annonce">;
      subcategorie?: JsonNullableFilter<"Annonce">;
      annonceImages?: AnnonceImageListRelationFilter;
    },
    "id"
  >;

  export type AnnonceOrderByWithAggregationInput = {
    id?: SortOrder;
    typeAnnonceId?: SortOrder;
    categorieId?: SortOrder;
    lieuId?: SortOrder;
    userId?: SortOrder;
    subcategorieId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    contact?: SortOrder;
    haveImage?: SortOrder;
    firstImagePath?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
    createdAt?: SortOrder;
    typeAnnonce?: SortOrder;
    categorie?: SortOrder;
    subcategorie?: SortOrder;
    _count?: AnnonceCountOrderByAggregateInput;
    _avg?: AnnonceAvgOrderByAggregateInput;
    _max?: AnnonceMaxOrderByAggregateInput;
    _min?: AnnonceMinOrderByAggregateInput;
    _sum?: AnnonceSumOrderByAggregateInput;
  };

  export type AnnonceScalarWhereWithAggregatesInput = {
    AND?:
      | AnnonceScalarWhereWithAggregatesInput
      | AnnonceScalarWhereWithAggregatesInput[];
    OR?: AnnonceScalarWhereWithAggregatesInput[];
    NOT?:
      | AnnonceScalarWhereWithAggregatesInput
      | AnnonceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Annonce"> | string;
    typeAnnonceId?: StringWithAggregatesFilter<"Annonce"> | string;
    categorieId?: StringWithAggregatesFilter<"Annonce"> | string;
    lieuId?: StringWithAggregatesFilter<"Annonce"> | string;
    userId?: StringWithAggregatesFilter<"Annonce"> | string;
    subcategorieId?: StringWithAggregatesFilter<"Annonce"> | string;
    title?: StringWithAggregatesFilter<"Annonce"> | string;
    description?: StringWithAggregatesFilter<"Annonce"> | string;
    price?: FloatNullableWithAggregatesFilter<"Annonce"> | number | null;
    contact?: StringWithAggregatesFilter<"Annonce"> | string;
    haveImage?: BoolWithAggregatesFilter<"Annonce"> | boolean;
    firstImagePath?:
      | StringNullableWithAggregatesFilter<"Annonce">
      | string
      | null;
    status?: StringWithAggregatesFilter<"Annonce"> | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string;
    typeAnnonce?: JsonNullableWithAggregatesFilter<"Annonce">;
    categorie?: JsonNullableWithAggregatesFilter<"Annonce">;
    subcategorie?: JsonNullableWithAggregatesFilter<"Annonce">;
  };

  export type AnnonceImageWhereInput = {
    AND?: AnnonceImageWhereInput | AnnonceImageWhereInput[];
    OR?: AnnonceImageWhereInput[];
    NOT?: AnnonceImageWhereInput | AnnonceImageWhereInput[];
    id?: StringFilter<"AnnonceImage"> | string;
    annonceId?: StringFilter<"AnnonceImage"> | string;
    imageId?: StringFilter<"AnnonceImage"> | string;
    createdAt?: DateTimeFilter<"AnnonceImage"> | Date | string;
    annonce?: XOR<AnnonceScalarRelationFilter, AnnonceWhereInput>;
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>;
  };

  export type AnnonceImageOrderByWithRelationInput = {
    id?: SortOrder;
    annonceId?: SortOrder;
    imageId?: SortOrder;
    createdAt?: SortOrder;
    annonce?: AnnonceOrderByWithRelationInput;
    image?: ImageOrderByWithRelationInput;
  };

  export type AnnonceImageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      annonceId_imageId?: AnnonceImageAnnonceIdImageIdCompoundUniqueInput;
      AND?: AnnonceImageWhereInput | AnnonceImageWhereInput[];
      OR?: AnnonceImageWhereInput[];
      NOT?: AnnonceImageWhereInput | AnnonceImageWhereInput[];
      annonceId?: StringFilter<"AnnonceImage"> | string;
      imageId?: StringFilter<"AnnonceImage"> | string;
      createdAt?: DateTimeFilter<"AnnonceImage"> | Date | string;
      annonce?: XOR<AnnonceScalarRelationFilter, AnnonceWhereInput>;
      image?: XOR<ImageScalarRelationFilter, ImageWhereInput>;
    },
    "id" | "annonceId_imageId"
  >;

  export type AnnonceImageOrderByWithAggregationInput = {
    id?: SortOrder;
    annonceId?: SortOrder;
    imageId?: SortOrder;
    createdAt?: SortOrder;
    _count?: AnnonceImageCountOrderByAggregateInput;
    _max?: AnnonceImageMaxOrderByAggregateInput;
    _min?: AnnonceImageMinOrderByAggregateInput;
  };

  export type AnnonceImageScalarWhereWithAggregatesInput = {
    AND?:
      | AnnonceImageScalarWhereWithAggregatesInput
      | AnnonceImageScalarWhereWithAggregatesInput[];
    OR?: AnnonceImageScalarWhereWithAggregatesInput[];
    NOT?:
      | AnnonceImageScalarWhereWithAggregatesInput
      | AnnonceImageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"AnnonceImage"> | string;
    annonceId?: StringWithAggregatesFilter<"AnnonceImage"> | string;
    imageId?: StringWithAggregatesFilter<"AnnonceImage"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"AnnonceImage"> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    lastLogin?: Date | string | null;
    isActive?: boolean;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    lastLogin?: Date | string | null;
    isActive?: boolean;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastLogin?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastLogin?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    lastLogin?: Date | string | null;
    isActive?: boolean;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastLogin?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastLogin?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserSessionCreateInput = {
    id?: string;
    userId: string;
    token: string;
    isExpired?: boolean;
    createdAt?: Date | string;
    lastAccessed?: Date | string | null;
  };

  export type UserSessionUncheckedCreateInput = {
    id?: string;
    userId: string;
    token: string;
    isExpired?: boolean;
    createdAt?: Date | string;
    lastAccessed?: Date | string | null;
  };

  export type UserSessionUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    isExpired?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserSessionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    isExpired?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserSessionCreateManyInput = {
    id?: string;
    userId: string;
    token: string;
    isExpired?: boolean;
    createdAt?: Date | string;
    lastAccessed?: Date | string | null;
  };

  export type UserSessionUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    isExpired?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserSessionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    isExpired?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lastAccessed?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type OptionsModelCreateInput = {
    id?: string;
    name: string;
    nameAr: string;
    priority: number;
    depth: number;
    tag: string;
    createdAt?: Date | string;
    parentID?: string | null;
  };

  export type OptionsModelUncheckedCreateInput = {
    id?: string;
    name: string;
    nameAr: string;
    priority: number;
    depth: number;
    tag: string;
    createdAt?: Date | string;
    parentID?: string | null;
  };

  export type OptionsModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    nameAr?: StringFieldUpdateOperationsInput | string;
    priority?: IntFieldUpdateOperationsInput | number;
    depth?: IntFieldUpdateOperationsInput | number;
    tag?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentID?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OptionsModelUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    nameAr?: StringFieldUpdateOperationsInput | string;
    priority?: IntFieldUpdateOperationsInput | number;
    depth?: IntFieldUpdateOperationsInput | number;
    tag?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentID?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OptionsModelCreateManyInput = {
    id?: string;
    name: string;
    nameAr: string;
    priority: number;
    depth: number;
    tag: string;
    createdAt?: Date | string;
    parentID?: string | null;
  };

  export type OptionsModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    nameAr?: StringFieldUpdateOperationsInput | string;
    priority?: IntFieldUpdateOperationsInput | number;
    depth?: IntFieldUpdateOperationsInput | number;
    tag?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentID?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OptionsModelUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    nameAr?: StringFieldUpdateOperationsInput | string;
    priority?: IntFieldUpdateOperationsInput | number;
    depth?: IntFieldUpdateOperationsInput | number;
    tag?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentID?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ImageCreateInput = {
    id?: string;
    imagePath: string;
    createdAt?: Date | string | null;
    altText?: string | null;
    annonceImages?: AnnonceImageCreateNestedManyWithoutImageInput;
  };

  export type ImageUncheckedCreateInput = {
    id?: string;
    imagePath: string;
    createdAt?: Date | string | null;
    altText?: string | null;
    annonceImages?: AnnonceImageUncheckedCreateNestedManyWithoutImageInput;
  };

  export type ImageUpdateInput = {
    imagePath?: StringFieldUpdateOperationsInput | string;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    altText?: NullableStringFieldUpdateOperationsInput | string | null;
    annonceImages?: AnnonceImageUpdateManyWithoutImageNestedInput;
  };

  export type ImageUncheckedUpdateInput = {
    imagePath?: StringFieldUpdateOperationsInput | string;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    altText?: NullableStringFieldUpdateOperationsInput | string | null;
    annonceImages?: AnnonceImageUncheckedUpdateManyWithoutImageNestedInput;
  };

  export type ImageCreateManyInput = {
    id?: string;
    imagePath: string;
    createdAt?: Date | string | null;
    altText?: string | null;
  };

  export type ImageUpdateManyMutationInput = {
    imagePath?: StringFieldUpdateOperationsInput | string;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    altText?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ImageUncheckedUpdateManyInput = {
    imagePath?: StringFieldUpdateOperationsInput | string;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    altText?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AnnonceCreateInput = {
    id?: string;
    typeAnnonceId: string;
    categorieId: string;
    lieuId: string;
    userId: string;
    subcategorieId: string;
    title: string;
    description: string;
    price?: number | null;
    contact: string;
    haveImage?: boolean;
    firstImagePath?: string | null;
    status: string;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    typeAnnonce?: InputJsonValue | null;
    categorie?: InputJsonValue | null;
    subcategorie?: InputJsonValue | null;
    annonceImages?: AnnonceImageCreateNestedManyWithoutAnnonceInput;
  };

  export type AnnonceUncheckedCreateInput = {
    id?: string;
    typeAnnonceId: string;
    categorieId: string;
    lieuId: string;
    userId: string;
    subcategorieId: string;
    title: string;
    description: string;
    price?: number | null;
    contact: string;
    haveImage?: boolean;
    firstImagePath?: string | null;
    status: string;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    typeAnnonce?: InputJsonValue | null;
    categorie?: InputJsonValue | null;
    subcategorie?: InputJsonValue | null;
    annonceImages?: AnnonceImageUncheckedCreateNestedManyWithoutAnnonceInput;
  };

  export type AnnonceUpdateInput = {
    typeAnnonceId?: StringFieldUpdateOperationsInput | string;
    categorieId?: StringFieldUpdateOperationsInput | string;
    lieuId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    subcategorieId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    contact?: StringFieldUpdateOperationsInput | string;
    haveImage?: BoolFieldUpdateOperationsInput | boolean;
    firstImagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    typeAnnonce?: InputJsonValue | InputJsonValue | null;
    categorie?: InputJsonValue | InputJsonValue | null;
    subcategorie?: InputJsonValue | InputJsonValue | null;
    annonceImages?: AnnonceImageUpdateManyWithoutAnnonceNestedInput;
  };

  export type AnnonceUncheckedUpdateInput = {
    typeAnnonceId?: StringFieldUpdateOperationsInput | string;
    categorieId?: StringFieldUpdateOperationsInput | string;
    lieuId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    subcategorieId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    contact?: StringFieldUpdateOperationsInput | string;
    haveImage?: BoolFieldUpdateOperationsInput | boolean;
    firstImagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    typeAnnonce?: InputJsonValue | InputJsonValue | null;
    categorie?: InputJsonValue | InputJsonValue | null;
    subcategorie?: InputJsonValue | InputJsonValue | null;
    annonceImages?: AnnonceImageUncheckedUpdateManyWithoutAnnonceNestedInput;
  };

  export type AnnonceCreateManyInput = {
    id?: string;
    typeAnnonceId: string;
    categorieId: string;
    lieuId: string;
    userId: string;
    subcategorieId: string;
    title: string;
    description: string;
    price?: number | null;
    contact: string;
    haveImage?: boolean;
    firstImagePath?: string | null;
    status: string;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    typeAnnonce?: InputJsonValue | null;
    categorie?: InputJsonValue | null;
    subcategorie?: InputJsonValue | null;
  };

  export type AnnonceUpdateManyMutationInput = {
    typeAnnonceId?: StringFieldUpdateOperationsInput | string;
    categorieId?: StringFieldUpdateOperationsInput | string;
    lieuId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    subcategorieId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    contact?: StringFieldUpdateOperationsInput | string;
    haveImage?: BoolFieldUpdateOperationsInput | boolean;
    firstImagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    typeAnnonce?: InputJsonValue | InputJsonValue | null;
    categorie?: InputJsonValue | InputJsonValue | null;
    subcategorie?: InputJsonValue | InputJsonValue | null;
  };

  export type AnnonceUncheckedUpdateManyInput = {
    typeAnnonceId?: StringFieldUpdateOperationsInput | string;
    categorieId?: StringFieldUpdateOperationsInput | string;
    lieuId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    subcategorieId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    contact?: StringFieldUpdateOperationsInput | string;
    haveImage?: BoolFieldUpdateOperationsInput | boolean;
    firstImagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    typeAnnonce?: InputJsonValue | InputJsonValue | null;
    categorie?: InputJsonValue | InputJsonValue | null;
    subcategorie?: InputJsonValue | InputJsonValue | null;
  };

  export type AnnonceImageCreateInput = {
    id?: string;
    createdAt?: Date | string;
    annonce: AnnonceCreateNestedOneWithoutAnnonceImagesInput;
    image: ImageCreateNestedOneWithoutAnnonceImagesInput;
  };

  export type AnnonceImageUncheckedCreateInput = {
    id?: string;
    annonceId: string;
    imageId: string;
    createdAt?: Date | string;
  };

  export type AnnonceImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    annonce?: AnnonceUpdateOneRequiredWithoutAnnonceImagesNestedInput;
    image?: ImageUpdateOneRequiredWithoutAnnonceImagesNestedInput;
  };

  export type AnnonceImageUncheckedUpdateInput = {
    annonceId?: StringFieldUpdateOperationsInput | string;
    imageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnnonceImageCreateManyInput = {
    id?: string;
    annonceId: string;
    imageId: string;
    createdAt?: Date | string;
  };

  export type AnnonceImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnnonceImageUncheckedUpdateManyInput = {
    annonceId?: StringFieldUpdateOperationsInput | string;
    imageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    isSet?: boolean;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    lastLogin?: SortOrder;
    isActive?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    lastLogin?: SortOrder;
    isActive?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    lastLogin?: SortOrder;
    isActive?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    isExpired?: SortOrder;
    createdAt?: SortOrder;
    lastAccessed?: SortOrder;
  };

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    isExpired?: SortOrder;
    createdAt?: SortOrder;
    lastAccessed?: SortOrder;
  };

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    token?: SortOrder;
    isExpired?: SortOrder;
    createdAt?: SortOrder;
    lastAccessed?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type OptionsModelCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    nameAr?: SortOrder;
    priority?: SortOrder;
    depth?: SortOrder;
    tag?: SortOrder;
    createdAt?: SortOrder;
    parentID?: SortOrder;
  };

  export type OptionsModelAvgOrderByAggregateInput = {
    priority?: SortOrder;
    depth?: SortOrder;
  };

  export type OptionsModelMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    nameAr?: SortOrder;
    priority?: SortOrder;
    depth?: SortOrder;
    tag?: SortOrder;
    createdAt?: SortOrder;
    parentID?: SortOrder;
  };

  export type OptionsModelMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    nameAr?: SortOrder;
    priority?: SortOrder;
    depth?: SortOrder;
    tag?: SortOrder;
    createdAt?: SortOrder;
    parentID?: SortOrder;
  };

  export type OptionsModelSumOrderByAggregateInput = {
    priority?: SortOrder;
    depth?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type AnnonceImageListRelationFilter = {
    every?: AnnonceImageWhereInput;
    some?: AnnonceImageWhereInput;
    none?: AnnonceImageWhereInput;
  };

  export type AnnonceImageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    altText?: SortOrder;
  };

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    altText?: SortOrder;
  };

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    altText?: SortOrder;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    isSet?: boolean;
  };

  export type AnnonceCountOrderByAggregateInput = {
    id?: SortOrder;
    typeAnnonceId?: SortOrder;
    categorieId?: SortOrder;
    lieuId?: SortOrder;
    userId?: SortOrder;
    subcategorieId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    contact?: SortOrder;
    haveImage?: SortOrder;
    firstImagePath?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
    createdAt?: SortOrder;
    typeAnnonce?: SortOrder;
    categorie?: SortOrder;
    subcategorie?: SortOrder;
  };

  export type AnnonceAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type AnnonceMaxOrderByAggregateInput = {
    id?: SortOrder;
    typeAnnonceId?: SortOrder;
    categorieId?: SortOrder;
    lieuId?: SortOrder;
    userId?: SortOrder;
    subcategorieId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    contact?: SortOrder;
    haveImage?: SortOrder;
    firstImagePath?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AnnonceMinOrderByAggregateInput = {
    id?: SortOrder;
    typeAnnonceId?: SortOrder;
    categorieId?: SortOrder;
    lieuId?: SortOrder;
    userId?: SortOrder;
    subcategorieId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    contact?: SortOrder;
    haveImage?: SortOrder;
    firstImagePath?: SortOrder;
    status?: SortOrder;
    updatedAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AnnonceSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          "path"
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type AnnonceScalarRelationFilter = {
    is?: AnnonceWhereInput;
    isNot?: AnnonceWhereInput;
  };

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput;
    isNot?: ImageWhereInput;
  };

  export type AnnonceImageAnnonceIdImageIdCompoundUniqueInput = {
    annonceId: string;
    imageId: string;
  };

  export type AnnonceImageCountOrderByAggregateInput = {
    id?: SortOrder;
    annonceId?: SortOrder;
    imageId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AnnonceImageMaxOrderByAggregateInput = {
    id?: SortOrder;
    annonceId?: SortOrder;
    imageId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AnnonceImageMinOrderByAggregateInput = {
    id?: SortOrder;
    annonceId?: SortOrder;
    imageId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
    unset?: boolean;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type AnnonceImageCreateNestedManyWithoutImageInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutImageInput,
          AnnonceImageUncheckedCreateWithoutImageInput
        >
      | AnnonceImageCreateWithoutImageInput[]
      | AnnonceImageUncheckedCreateWithoutImageInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutImageInput
      | AnnonceImageCreateOrConnectWithoutImageInput[];
    createMany?: AnnonceImageCreateManyImageInputEnvelope;
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
  };

  export type AnnonceImageUncheckedCreateNestedManyWithoutImageInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutImageInput,
          AnnonceImageUncheckedCreateWithoutImageInput
        >
      | AnnonceImageCreateWithoutImageInput[]
      | AnnonceImageUncheckedCreateWithoutImageInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutImageInput
      | AnnonceImageCreateOrConnectWithoutImageInput[];
    createMany?: AnnonceImageCreateManyImageInputEnvelope;
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
  };

  export type AnnonceImageUpdateManyWithoutImageNestedInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutImageInput,
          AnnonceImageUncheckedCreateWithoutImageInput
        >
      | AnnonceImageCreateWithoutImageInput[]
      | AnnonceImageUncheckedCreateWithoutImageInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutImageInput
      | AnnonceImageCreateOrConnectWithoutImageInput[];
    upsert?:
      | AnnonceImageUpsertWithWhereUniqueWithoutImageInput
      | AnnonceImageUpsertWithWhereUniqueWithoutImageInput[];
    createMany?: AnnonceImageCreateManyImageInputEnvelope;
    set?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    disconnect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    delete?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    update?:
      | AnnonceImageUpdateWithWhereUniqueWithoutImageInput
      | AnnonceImageUpdateWithWhereUniqueWithoutImageInput[];
    updateMany?:
      | AnnonceImageUpdateManyWithWhereWithoutImageInput
      | AnnonceImageUpdateManyWithWhereWithoutImageInput[];
    deleteMany?: AnnonceImageScalarWhereInput | AnnonceImageScalarWhereInput[];
  };

  export type AnnonceImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutImageInput,
          AnnonceImageUncheckedCreateWithoutImageInput
        >
      | AnnonceImageCreateWithoutImageInput[]
      | AnnonceImageUncheckedCreateWithoutImageInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutImageInput
      | AnnonceImageCreateOrConnectWithoutImageInput[];
    upsert?:
      | AnnonceImageUpsertWithWhereUniqueWithoutImageInput
      | AnnonceImageUpsertWithWhereUniqueWithoutImageInput[];
    createMany?: AnnonceImageCreateManyImageInputEnvelope;
    set?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    disconnect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    delete?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    update?:
      | AnnonceImageUpdateWithWhereUniqueWithoutImageInput
      | AnnonceImageUpdateWithWhereUniqueWithoutImageInput[];
    updateMany?:
      | AnnonceImageUpdateManyWithWhereWithoutImageInput
      | AnnonceImageUpdateManyWithWhereWithoutImageInput[];
    deleteMany?: AnnonceImageScalarWhereInput | AnnonceImageScalarWhereInput[];
  };

  export type AnnonceImageCreateNestedManyWithoutAnnonceInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutAnnonceInput,
          AnnonceImageUncheckedCreateWithoutAnnonceInput
        >
      | AnnonceImageCreateWithoutAnnonceInput[]
      | AnnonceImageUncheckedCreateWithoutAnnonceInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutAnnonceInput
      | AnnonceImageCreateOrConnectWithoutAnnonceInput[];
    createMany?: AnnonceImageCreateManyAnnonceInputEnvelope;
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
  };

  export type AnnonceImageUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutAnnonceInput,
          AnnonceImageUncheckedCreateWithoutAnnonceInput
        >
      | AnnonceImageCreateWithoutAnnonceInput[]
      | AnnonceImageUncheckedCreateWithoutAnnonceInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutAnnonceInput
      | AnnonceImageCreateOrConnectWithoutAnnonceInput[];
    createMany?: AnnonceImageCreateManyAnnonceInputEnvelope;
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
    unset?: boolean;
  };

  export type AnnonceImageUpdateManyWithoutAnnonceNestedInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutAnnonceInput,
          AnnonceImageUncheckedCreateWithoutAnnonceInput
        >
      | AnnonceImageCreateWithoutAnnonceInput[]
      | AnnonceImageUncheckedCreateWithoutAnnonceInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutAnnonceInput
      | AnnonceImageCreateOrConnectWithoutAnnonceInput[];
    upsert?:
      | AnnonceImageUpsertWithWhereUniqueWithoutAnnonceInput
      | AnnonceImageUpsertWithWhereUniqueWithoutAnnonceInput[];
    createMany?: AnnonceImageCreateManyAnnonceInputEnvelope;
    set?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    disconnect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    delete?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    update?:
      | AnnonceImageUpdateWithWhereUniqueWithoutAnnonceInput
      | AnnonceImageUpdateWithWhereUniqueWithoutAnnonceInput[];
    updateMany?:
      | AnnonceImageUpdateManyWithWhereWithoutAnnonceInput
      | AnnonceImageUpdateManyWithWhereWithoutAnnonceInput[];
    deleteMany?: AnnonceImageScalarWhereInput | AnnonceImageScalarWhereInput[];
  };

  export type AnnonceImageUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?:
      | XOR<
          AnnonceImageCreateWithoutAnnonceInput,
          AnnonceImageUncheckedCreateWithoutAnnonceInput
        >
      | AnnonceImageCreateWithoutAnnonceInput[]
      | AnnonceImageUncheckedCreateWithoutAnnonceInput[];
    connectOrCreate?:
      | AnnonceImageCreateOrConnectWithoutAnnonceInput
      | AnnonceImageCreateOrConnectWithoutAnnonceInput[];
    upsert?:
      | AnnonceImageUpsertWithWhereUniqueWithoutAnnonceInput
      | AnnonceImageUpsertWithWhereUniqueWithoutAnnonceInput[];
    createMany?: AnnonceImageCreateManyAnnonceInputEnvelope;
    set?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    disconnect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    delete?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    connect?: AnnonceImageWhereUniqueInput | AnnonceImageWhereUniqueInput[];
    update?:
      | AnnonceImageUpdateWithWhereUniqueWithoutAnnonceInput
      | AnnonceImageUpdateWithWhereUniqueWithoutAnnonceInput[];
    updateMany?:
      | AnnonceImageUpdateManyWithWhereWithoutAnnonceInput
      | AnnonceImageUpdateManyWithWhereWithoutAnnonceInput[];
    deleteMany?: AnnonceImageScalarWhereInput | AnnonceImageScalarWhereInput[];
  };

  export type AnnonceCreateNestedOneWithoutAnnonceImagesInput = {
    create?: XOR<
      AnnonceCreateWithoutAnnonceImagesInput,
      AnnonceUncheckedCreateWithoutAnnonceImagesInput
    >;
    connectOrCreate?: AnnonceCreateOrConnectWithoutAnnonceImagesInput;
    connect?: AnnonceWhereUniqueInput;
  };

  export type ImageCreateNestedOneWithoutAnnonceImagesInput = {
    create?: XOR<
      ImageCreateWithoutAnnonceImagesInput,
      ImageUncheckedCreateWithoutAnnonceImagesInput
    >;
    connectOrCreate?: ImageCreateOrConnectWithoutAnnonceImagesInput;
    connect?: ImageWhereUniqueInput;
  };

  export type AnnonceUpdateOneRequiredWithoutAnnonceImagesNestedInput = {
    create?: XOR<
      AnnonceCreateWithoutAnnonceImagesInput,
      AnnonceUncheckedCreateWithoutAnnonceImagesInput
    >;
    connectOrCreate?: AnnonceCreateOrConnectWithoutAnnonceImagesInput;
    upsert?: AnnonceUpsertWithoutAnnonceImagesInput;
    connect?: AnnonceWhereUniqueInput;
    update?: XOR<
      XOR<
        AnnonceUpdateToOneWithWhereWithoutAnnonceImagesInput,
        AnnonceUpdateWithoutAnnonceImagesInput
      >,
      AnnonceUncheckedUpdateWithoutAnnonceImagesInput
    >;
  };

  export type ImageUpdateOneRequiredWithoutAnnonceImagesNestedInput = {
    create?: XOR<
      ImageCreateWithoutAnnonceImagesInput,
      ImageUncheckedCreateWithoutAnnonceImagesInput
    >;
    connectOrCreate?: ImageCreateOrConnectWithoutAnnonceImagesInput;
    upsert?: ImageUpsertWithoutAnnonceImagesInput;
    connect?: ImageWhereUniqueInput;
    update?: XOR<
      XOR<
        ImageUpdateToOneWithWhereWithoutAnnonceImagesInput,
        ImageUpdateWithoutAnnonceImagesInput
      >,
      ImageUncheckedUpdateWithoutAnnonceImagesInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    isSet?: boolean;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
      isSet?: boolean;
    };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, "path">
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    isSet?: boolean;
  };

  export type AnnonceImageCreateWithoutImageInput = {
    id?: string;
    createdAt?: Date | string;
    annonce: AnnonceCreateNestedOneWithoutAnnonceImagesInput;
  };

  export type AnnonceImageUncheckedCreateWithoutImageInput = {
    id?: string;
    annonceId: string;
    createdAt?: Date | string;
  };

  export type AnnonceImageCreateOrConnectWithoutImageInput = {
    where: AnnonceImageWhereUniqueInput;
    create: XOR<
      AnnonceImageCreateWithoutImageInput,
      AnnonceImageUncheckedCreateWithoutImageInput
    >;
  };

  export type AnnonceImageCreateManyImageInputEnvelope = {
    data: AnnonceImageCreateManyImageInput | AnnonceImageCreateManyImageInput[];
  };

  export type AnnonceImageUpsertWithWhereUniqueWithoutImageInput = {
    where: AnnonceImageWhereUniqueInput;
    update: XOR<
      AnnonceImageUpdateWithoutImageInput,
      AnnonceImageUncheckedUpdateWithoutImageInput
    >;
    create: XOR<
      AnnonceImageCreateWithoutImageInput,
      AnnonceImageUncheckedCreateWithoutImageInput
    >;
  };

  export type AnnonceImageUpdateWithWhereUniqueWithoutImageInput = {
    where: AnnonceImageWhereUniqueInput;
    data: XOR<
      AnnonceImageUpdateWithoutImageInput,
      AnnonceImageUncheckedUpdateWithoutImageInput
    >;
  };

  export type AnnonceImageUpdateManyWithWhereWithoutImageInput = {
    where: AnnonceImageScalarWhereInput;
    data: XOR<
      AnnonceImageUpdateManyMutationInput,
      AnnonceImageUncheckedUpdateManyWithoutImageInput
    >;
  };

  export type AnnonceImageScalarWhereInput = {
    AND?: AnnonceImageScalarWhereInput | AnnonceImageScalarWhereInput[];
    OR?: AnnonceImageScalarWhereInput[];
    NOT?: AnnonceImageScalarWhereInput | AnnonceImageScalarWhereInput[];
    id?: StringFilter<"AnnonceImage"> | string;
    annonceId?: StringFilter<"AnnonceImage"> | string;
    imageId?: StringFilter<"AnnonceImage"> | string;
    createdAt?: DateTimeFilter<"AnnonceImage"> | Date | string;
  };

  export type AnnonceImageCreateWithoutAnnonceInput = {
    id?: string;
    createdAt?: Date | string;
    image: ImageCreateNestedOneWithoutAnnonceImagesInput;
  };

  export type AnnonceImageUncheckedCreateWithoutAnnonceInput = {
    id?: string;
    imageId: string;
    createdAt?: Date | string;
  };

  export type AnnonceImageCreateOrConnectWithoutAnnonceInput = {
    where: AnnonceImageWhereUniqueInput;
    create: XOR<
      AnnonceImageCreateWithoutAnnonceInput,
      AnnonceImageUncheckedCreateWithoutAnnonceInput
    >;
  };

  export type AnnonceImageCreateManyAnnonceInputEnvelope = {
    data:
      | AnnonceImageCreateManyAnnonceInput
      | AnnonceImageCreateManyAnnonceInput[];
  };

  export type AnnonceImageUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: AnnonceImageWhereUniqueInput;
    update: XOR<
      AnnonceImageUpdateWithoutAnnonceInput,
      AnnonceImageUncheckedUpdateWithoutAnnonceInput
    >;
    create: XOR<
      AnnonceImageCreateWithoutAnnonceInput,
      AnnonceImageUncheckedCreateWithoutAnnonceInput
    >;
  };

  export type AnnonceImageUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: AnnonceImageWhereUniqueInput;
    data: XOR<
      AnnonceImageUpdateWithoutAnnonceInput,
      AnnonceImageUncheckedUpdateWithoutAnnonceInput
    >;
  };

  export type AnnonceImageUpdateManyWithWhereWithoutAnnonceInput = {
    where: AnnonceImageScalarWhereInput;
    data: XOR<
      AnnonceImageUpdateManyMutationInput,
      AnnonceImageUncheckedUpdateManyWithoutAnnonceInput
    >;
  };

  export type AnnonceCreateWithoutAnnonceImagesInput = {
    id?: string;
    typeAnnonceId: string;
    categorieId: string;
    lieuId: string;
    userId: string;
    subcategorieId: string;
    title: string;
    description: string;
    price?: number | null;
    contact: string;
    haveImage?: boolean;
    firstImagePath?: string | null;
    status: string;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    typeAnnonce?: InputJsonValue | null;
    categorie?: InputJsonValue | null;
    subcategorie?: InputJsonValue | null;
  };

  export type AnnonceUncheckedCreateWithoutAnnonceImagesInput = {
    id?: string;
    typeAnnonceId: string;
    categorieId: string;
    lieuId: string;
    userId: string;
    subcategorieId: string;
    title: string;
    description: string;
    price?: number | null;
    contact: string;
    haveImage?: boolean;
    firstImagePath?: string | null;
    status: string;
    updatedAt?: Date | string;
    createdAt?: Date | string;
    typeAnnonce?: InputJsonValue | null;
    categorie?: InputJsonValue | null;
    subcategorie?: InputJsonValue | null;
  };

  export type AnnonceCreateOrConnectWithoutAnnonceImagesInput = {
    where: AnnonceWhereUniqueInput;
    create: XOR<
      AnnonceCreateWithoutAnnonceImagesInput,
      AnnonceUncheckedCreateWithoutAnnonceImagesInput
    >;
  };

  export type ImageCreateWithoutAnnonceImagesInput = {
    id?: string;
    imagePath: string;
    createdAt?: Date | string | null;
    altText?: string | null;
  };

  export type ImageUncheckedCreateWithoutAnnonceImagesInput = {
    id?: string;
    imagePath: string;
    createdAt?: Date | string | null;
    altText?: string | null;
  };

  export type ImageCreateOrConnectWithoutAnnonceImagesInput = {
    where: ImageWhereUniqueInput;
    create: XOR<
      ImageCreateWithoutAnnonceImagesInput,
      ImageUncheckedCreateWithoutAnnonceImagesInput
    >;
  };

  export type AnnonceUpsertWithoutAnnonceImagesInput = {
    update: XOR<
      AnnonceUpdateWithoutAnnonceImagesInput,
      AnnonceUncheckedUpdateWithoutAnnonceImagesInput
    >;
    create: XOR<
      AnnonceCreateWithoutAnnonceImagesInput,
      AnnonceUncheckedCreateWithoutAnnonceImagesInput
    >;
    where?: AnnonceWhereInput;
  };

  export type AnnonceUpdateToOneWithWhereWithoutAnnonceImagesInput = {
    where?: AnnonceWhereInput;
    data: XOR<
      AnnonceUpdateWithoutAnnonceImagesInput,
      AnnonceUncheckedUpdateWithoutAnnonceImagesInput
    >;
  };

  export type AnnonceUpdateWithoutAnnonceImagesInput = {
    typeAnnonceId?: StringFieldUpdateOperationsInput | string;
    categorieId?: StringFieldUpdateOperationsInput | string;
    lieuId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    subcategorieId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    contact?: StringFieldUpdateOperationsInput | string;
    haveImage?: BoolFieldUpdateOperationsInput | boolean;
    firstImagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    typeAnnonce?: InputJsonValue | InputJsonValue | null;
    categorie?: InputJsonValue | InputJsonValue | null;
    subcategorie?: InputJsonValue | InputJsonValue | null;
  };

  export type AnnonceUncheckedUpdateWithoutAnnonceImagesInput = {
    typeAnnonceId?: StringFieldUpdateOperationsInput | string;
    categorieId?: StringFieldUpdateOperationsInput | string;
    lieuId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    subcategorieId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    contact?: StringFieldUpdateOperationsInput | string;
    haveImage?: BoolFieldUpdateOperationsInput | boolean;
    firstImagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    typeAnnonce?: InputJsonValue | InputJsonValue | null;
    categorie?: InputJsonValue | InputJsonValue | null;
    subcategorie?: InputJsonValue | InputJsonValue | null;
  };

  export type ImageUpsertWithoutAnnonceImagesInput = {
    update: XOR<
      ImageUpdateWithoutAnnonceImagesInput,
      ImageUncheckedUpdateWithoutAnnonceImagesInput
    >;
    create: XOR<
      ImageCreateWithoutAnnonceImagesInput,
      ImageUncheckedCreateWithoutAnnonceImagesInput
    >;
    where?: ImageWhereInput;
  };

  export type ImageUpdateToOneWithWhereWithoutAnnonceImagesInput = {
    where?: ImageWhereInput;
    data: XOR<
      ImageUpdateWithoutAnnonceImagesInput,
      ImageUncheckedUpdateWithoutAnnonceImagesInput
    >;
  };

  export type ImageUpdateWithoutAnnonceImagesInput = {
    imagePath?: StringFieldUpdateOperationsInput | string;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    altText?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ImageUncheckedUpdateWithoutAnnonceImagesInput = {
    imagePath?: StringFieldUpdateOperationsInput | string;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    altText?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AnnonceImageCreateManyImageInput = {
    id?: string;
    annonceId: string;
    createdAt?: Date | string;
  };

  export type AnnonceImageUpdateWithoutImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    annonce?: AnnonceUpdateOneRequiredWithoutAnnonceImagesNestedInput;
  };

  export type AnnonceImageUncheckedUpdateWithoutImageInput = {
    annonceId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnnonceImageUncheckedUpdateManyWithoutImageInput = {
    annonceId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnnonceImageCreateManyAnnonceInput = {
    id?: string;
    imageId: string;
    createdAt?: Date | string;
  };

  export type AnnonceImageUpdateWithoutAnnonceInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    image?: ImageUpdateOneRequiredWithoutAnnonceImagesNestedInput;
  };

  export type AnnonceImageUncheckedUpdateWithoutAnnonceInput = {
    imageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnnonceImageUncheckedUpdateManyWithoutAnnonceInput = {
    imageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

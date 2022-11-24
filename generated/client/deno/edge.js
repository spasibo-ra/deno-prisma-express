const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} from '.././runtime/edge-esm.js'

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


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


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name'
});


exports.Prisma.ModelName = makeEnum({
  user: 'user'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\sandbox\\deno-prisma-express\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..\\..\\prisma",
  "clientVersion": "4.6.1",
  "engineVersion": "694eea289a8462c80264df36757e4fdc129b1b32",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50IgogIHByZXZpZXdGZWF0dXJlcyA9IFsiZGVubyJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIHVzZXIgewogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBmaXJzdF9uYW1lICBTdHJpbmcKICBsYXN0X25hbWUgICBTdHJpbmcKfQo='
config.inlineSchemaHash = '1f01415007407f35569fb9da0dad6858b044add2d61c6f3d04350dc7af40ecff'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }


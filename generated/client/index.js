
Object.defineProperty(exports, "__esModule", { value: true });

const {
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
} = require('./runtime/index')


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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated\\client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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
  User: 'User'
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

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50IgogIHByZXZpZXdGZWF0dXJlcyA9IFsiZGVubyJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBmaXJzdF9uYW1lICBTdHJpbmcKICBsYXN0X25hbWUgICBTdHJpbmcKfQo='
config.inlineSchemaHash = '8a5a075d5c761cf0604cea9d84682110c88c8ceb2a9b1d55e00813343eb8bf5f'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)


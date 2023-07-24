const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL",)
        schema: env("DATABASE_SCHEMA",),
      },
      pool: {
        min: 0,
        max: 5,
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", "data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};

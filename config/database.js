module.exports = ({ env }) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi_cap"),
        user: env("DATABASE_USER", "postgres"),
        password: env("DATABASE_PASS", "postgres"),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  };
};

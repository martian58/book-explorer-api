
export default {
  schema: "./src/schema.js",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL
  },
  dialect: "postgresql",
};
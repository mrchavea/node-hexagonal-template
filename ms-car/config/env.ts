import dotenv from "dotenv";
import env from "env-var";

dotenv.config({ path: ".env.local" });

export const envs = {
  PORT: env.get("PORT").default(3000).asPortNumber(),
  DB_HOST: env.get("DB_HOST").default("localhost").asString(),
  DB_NAME: env.get("DB_NAME").default("car").asString(),
  DB_PORT: env.get("DB_PORT").default("27017").asString()
};

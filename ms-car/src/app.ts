import { envs } from "@config/env";
import { MongoDatabase, MongooseSettings } from "@database/mongoose";
import { Server, Settings } from "@/presentation/server";
import { AppRoutes } from "@/presentation/routes";
import { CustomError } from "@/domain/entities";

const serverSettings: Settings = {
  port: envs.PORT,
  routes: AppRoutes.routes
};

const databaseSettings: MongooseSettings = {
  dbName: envs.DB_NAME,
  mongoUrl: `mongodb://${envs.DB_HOST}:${envs.DB_PORT}`
};

async function main() {
  try {
    await MongoDatabase.connect(databaseSettings);
    const server = new Server(serverSettings);
    await server.start();
  } catch (error) {
    console.error(error);
    throw CustomError.internalServer("Initialization error!");
  }
}

(() => {
  main();
})();

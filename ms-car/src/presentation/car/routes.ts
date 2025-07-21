import { Router } from "express";
import { CarController } from "@/presentation/car";
import { CarMongooseImpl } from "@/infrastructure/datasources/car.mongoose.impl";
import { CarRepositoryImpl } from "@/infrastructure/repositories";

export class CarRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new CarMongooseImpl();
    const repository = new CarRepositoryImpl(datasource);
    const controller = new CarController(repository);

    router.post("/", controller.createCar);
    return router;
  }
}

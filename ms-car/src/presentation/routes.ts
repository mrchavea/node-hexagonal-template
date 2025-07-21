import { Router } from "express";
import { CarRoutes } from "./car";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/car", CarRoutes.routes);
    return router;
  }
}

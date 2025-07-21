import { CreateCarUseCase } from "@/application/use-cases/car/create-car.use-case";
import { CreateCarDTO } from "@/domain/dtos";
import { CarRepositoryImpl } from "@/infrastructure/repositories";
import { handleError } from "@/lib/utils";
import { Request, Response } from "express";

export class CarController {
  private carDataSource: CarRepositoryImpl;

  constructor(carDataSource: CarRepositoryImpl) {
    this.carDataSource = carDataSource;
  }

  public createCar = async (req: Request, res: Response) => {
    try {
      const carDto: CreateCarDTO = await CreateCarDTO.validate(req.body);
      new CreateCarUseCase(this.carDataSource)
        .execute(carDto)
        .then((car) => res.status(200).json(car))
        .catch((err) => handleError(err, res));
    } catch (error) {
      handleError(error, res);
    }
  };
}

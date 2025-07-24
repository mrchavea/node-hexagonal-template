import { CreateCarUseCase } from "@/application/use-cases/car/create-car.use-case";
import { UpdateCarUseCase } from "@/application/use-cases/car/update-car.use-case";
import { CreateCarDTO } from "@/domain/dtos";
import { UpdateCarDTO } from "@/domain/dtos/car/updateCar.dto";
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

  public updateCar = async (req: Request, res: Response) => {
    try {
      const updateCarDto = await UpdateCarDTO.validate(req.body);
      const carId = req.params.id;
      new UpdateCarUseCase(this.carDataSource).execute(carId, updateCarDto)
        .then(car => res.status(200).json(car))
        .catch(err => handleError(err, res));
    } catch (error) {
      handleError(error, res);
    }
  }
}

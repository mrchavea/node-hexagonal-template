import { UpdateCarDTO } from "@/domain/dtos/car/updateCar.dto";
import { Car } from "@/domain/entities";
import { CarDBRepository } from "@/domain/repositories";

export class CarRepositoryImpl implements CarDBRepository {
  constructor(private carDataSource: CarDBRepository) {}

  update(id:string, partialCar: Partial<UpdateCarDTO>): Promise<Car> {
    return this.carDataSource.update(id, partialCar);
  }

  create(car: Car): Promise<Car> {
    return this.carDataSource.create(car);
  }
}

import { Car } from "@/domain/entities";
import { CarDBRepository } from "@/domain/repositories";

export class CarRepositoryImpl implements CarDBRepository {
  constructor(private carDataSource: CarDBRepository) {}

  create(car: Car): Promise<Car> {
    return this.carDataSource.create(car);
  }
}

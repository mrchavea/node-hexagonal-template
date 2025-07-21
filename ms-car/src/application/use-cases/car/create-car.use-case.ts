import { CreateCarDTO } from "@/domain/dtos";
import { Car } from "@/domain/entities";
import { CarDBRepository } from "@/domain/repositories";
import { CarFactory } from "@/infrastructure/factories";

export class CreateCarUseCase {
  constructor(private readonly carRepository: CarDBRepository) {
    this.carRepository = carRepository;
  }

  async execute(createCarDTO: CreateCarDTO): Promise<Car> {
    const car: Car = CarFactory.makeCar(createCarDTO);
    return this.carRepository.create(car);
  }
}

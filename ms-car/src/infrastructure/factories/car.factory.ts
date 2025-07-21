import { CreateCarDTO } from "@/domain/dtos";
import { Car } from "@/domain/entities";

export class CarFactory {
  static makeCar(createCarDto: CreateCarDTO): Car {
    return new Car(createCarDto.brand, createCarDto.horsePower);
  }
}

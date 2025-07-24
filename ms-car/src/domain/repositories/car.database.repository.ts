import { Car } from "@/domain/entities";
import { UpdateCarDTO } from "../dtos/car/updateCar.dto";

export interface CarDBRepository {
  create(car: Car): Promise<Car>;
  update(id:string, partialCar: Partial<UpdateCarDTO>): Promise<Car>;
}

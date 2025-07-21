import { Car } from "@/domain/entities";

export interface CarDBRepository {
  create(car: Car): Promise<Car>;
}

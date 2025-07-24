import { UpdateCarDTO } from "@/domain/dtos/car/updateCar.dto";
import { Car } from "@/domain/entities";
import { CarDBRepository } from "@/domain/repositories";

export class UpdateCarUseCase {
    constructor(private readonly carRepository: CarDBRepository){
        this.carRepository = carRepository;
    }

    async execute(id:string, updateCarDto: Partial<UpdateCarDTO>): Promise<Car> {
        return this.carRepository.update(id, updateCarDto);
    }
}
import { Car, CustomError } from "@/domain/entities";
import { CarDBRepository } from "@/domain/repositories";
import { CarModel } from "@database/mongoose";

export class CarMongooseImpl implements CarDBRepository {
  async create(car: Car): Promise<Car> {
    console.log("Saving car in mongoose...", car);
    try {
      // const carExist = await CarModel.exists({ _id: "123" });
      // if (carExist) throw CustomError.badRequest("Car already exists");
      const car_DB = await CarModel.create(car);
      await car_DB.save();
      return car;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      console.log("DATS ERR", error);
      throw CustomError.internalServer("Error creating car");
    }
  }
}

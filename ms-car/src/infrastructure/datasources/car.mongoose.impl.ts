import { UpdateCarDTO } from "@/domain/dtos/car/updateCar.dto";
import { Car, CustomError } from "@/domain/entities";
import { CarDBRepository } from "@/domain/repositories";
import { CarModel } from "@database/mongoose";

export class CarMongooseImpl implements CarDBRepository {

  async update(id:string, partialCar: Partial<UpdateCarDTO>): Promise<Car> {
    console.info("Updating car in mongoose...", partialCar);
    try {
      const car_db = await CarModel.findOneAndUpdate({_id: id}, partialCar, {new: true});
      return new Car(car_db!.brand, car_db!.horsePower, car_db!._id.toString());
    } catch (error) {
      console.error("Error updating car in mongoose", error);
      throw CustomError.internalServer("Error updating car");
    }
  }

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

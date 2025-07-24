import { CustomError } from "@/domain/entities";

export class UpdateCarDTO {
  brand: string;
  horsePower: number;

  private constructor(brand: string, horsePower: number) {
    this.brand = brand;
    this.horsePower = horsePower;
  }

  static async validate(object: { [key: string]: any }): Promise<UpdateCarDTO> {
    const { brand, horsePower } = object;
    if (typeof brand !== "string") throw CustomError.badRequest("brand must be a string");
    if (typeof horsePower !== "number") throw CustomError.badRequest("horsePower must be a number");
    return new UpdateCarDTO(brand as string, horsePower as number);
  }
}

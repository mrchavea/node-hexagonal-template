import { CustomError } from "@/domain/entities";

export class CreateCarDTO {
  brand: string;
  horsePower: number;

  private constructor(brand: string, horsePower: number) {
    this.brand = brand;
    this.horsePower = horsePower;
  }

  static async validate(object: { [key: string]: any }): Promise<CreateCarDTO> {
    const { brand, horsePower } = object;
    if (!brand) throw CustomError.badRequest("brand is mandatory");
    if (!horsePower) throw CustomError.badRequest("horsePower is mandatory");
    return new CreateCarDTO(brand, horsePower);
  }
}

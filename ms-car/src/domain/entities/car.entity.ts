export class Car {
  private id?: string
  private brand: string;
  private horsePower: number;

  constructor(brand: string, horsePower: number, id?: string) {
    this.id = id;
    this.brand = brand;
    this.horsePower = horsePower;
  }
}

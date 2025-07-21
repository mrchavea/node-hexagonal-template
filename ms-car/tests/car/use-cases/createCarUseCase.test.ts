import { jest } from "@jest/globals";

import { Car } from "@/domain/entities";
import { CreateCarDTO } from "@/domain/dtos";
import { CarDBRepository } from "@/domain/repositories";
import { CreateCarUseCase } from "@/application/use-cases";
import { CarFactory } from "@/infrastructure/factories";

describe("CreateCarUseCase", () => {
  let carRepositoryMock: jest.Mocked<CarDBRepository>;
  let createCarUseCase: CreateCarUseCase;

  beforeEach(() => {
    carRepositoryMock = {
      create: jest.fn()
    } as unknown as jest.Mocked<CarDBRepository>;

    createCarUseCase = new CreateCarUseCase(carRepositoryMock);
  });

  it("It should create a car successfully", async () => {
    const carDTO: CreateCarDTO = { brand: "Tesla", horsePower: 120 };
    const carMock: Car = CarFactory.makeCar(carDTO);

    carRepositoryMock.create.mockResolvedValue(carMock);

    const result = await createCarUseCase.execute(carDTO);

    expect(carRepositoryMock.create).toHaveBeenCalledWith(carMock);
    expect(result).toEqual(carMock);
  });

  it("It should trigger an error because of the repository", async () => {
    const carDTO: CreateCarDTO = { brand: "Tesla", horsePower: 120 };

    carRepositoryMock.create.mockRejectedValue(new Error("DB error"));

    await expect(createCarUseCase.execute(carDTO)).rejects.toThrow("DB error");
  });
});

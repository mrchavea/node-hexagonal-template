import { CustomError } from "@/domain/entities";
import { Response } from "express";

export const handleError = (error: unknown, res: Response) => {
  console.error("controller ERR", error);
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ error: error.message });
  }
  return res.status(500).json({ error: "There was an unexpected error" });
};

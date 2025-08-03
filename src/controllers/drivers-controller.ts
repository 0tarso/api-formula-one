import { Request, Response } from "express";
import { getDriverService } from "../services/drivers/get-driver-service";

export const getDriver = async (req: Request, res: Response) => {

  const data = await getDriverService()

  res.status(200).json(data)
}
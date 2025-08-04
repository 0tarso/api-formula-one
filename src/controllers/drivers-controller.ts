import { Request, Response } from "express";
import { getDriverByIdService } from "../services/drivers/get-driver-by-id-service";
import { getAllDriversService } from "../services/drivers/get-all-drivers-service";


export const getDriverById = async (req: Request, res: Response) => {

  const id = parseInt(req.params.id)

  const httpResponse = await getDriverByIdService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getAllDrivers = async (req: Request, res: Response) => {

  const httpResponse = await getAllDriversService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
import { Request, Response } from "express";
import { HttpStatusCode } from "../utils/http-status-code";
import { getDriverService } from "../services/drivers/get-driver-service";
import { HttpResponseOK } from "../utils/http-helper";
import { getDriversListService } from "../services/drivers/get-drivers-list-service";

export const getDriver = async (req: Request, res: Response) => {

  const httpResponse = await getDriverService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getAllDrivers = async (req: Request, res: Response) => {

  const httpResponse = await getDriversListService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
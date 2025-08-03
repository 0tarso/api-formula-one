import { Request, Response } from "express";
import { HttpStatusCode } from "../utils/http-status-code";
import { getDriverService } from "../services/drivers/get-driver-service";
import { HttpResponseFormat } from "../utils/http-helper";

export const getDriver = async (req: Request, res: Response) => {

  const data = await getDriverService()

  const response = await HttpResponseFormat(data)

  res.status(response.statusCode).json(response.body)
}
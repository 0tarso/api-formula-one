import { Request, Response } from "express";
import { HttpStatusCode } from "../utils/http-status-code";
import { getDriverService } from "../services/drivers/get-driver-service";
import { HttpResponseOK } from "../utils/http-helper";

export const getDriver = async (req: Request, res: Response) => {

  const httpResponse = await getDriverService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
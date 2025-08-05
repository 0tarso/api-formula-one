import { Request, Response } from "express";
import { getDriverByIdService } from "../services/drivers/get-driver-by-id-service";
import { getAllDriversService } from "../services/drivers/get-all-drivers-service";
import { HttpResponseOK } from "../utils/http-helper";
import { DriverModel } from "../models/driver-model";
import { postDriverService } from "../services/drivers/post-driver-service";
import { deleteDriverByIdService } from "../services/drivers/delete-driver-by-id-service";
import { updateDriverByIdService } from "../services/drivers/update-driver-by-id-service";
import { DriverModelDTO } from "../models/driver-model-DTO";


export const getDriverById = async (req: Request, res: Response) => {

  const id = parseInt(req.params.id)

  const httpResponse = await getDriverByIdService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getAllDrivers = async (req: Request, res: Response) => {

  const httpResponse = await getAllDriversService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const postDriver = async (req: Request, res: Response) => {

  const body: DriverModel = req.body

  const httpResponse = await postDriverService(body)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const deleteDriverById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const httpResponse = await deleteDriverByIdService(id)

  res.status(httpResponse?.statusCode).json(httpResponse.body)

}

export const updateDriverById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const body: DriverModelDTO = req.body

  const httpResponse = await updateDriverByIdService(id, body)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
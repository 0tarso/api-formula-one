import * as DriverRepository from "../../repositories/drivers-repository";
import { HttpResponseNoContent, HttpResponseOK } from "../../utils/http-helper";

export const getAllDriversService = async () => {

  const data = await DriverRepository.findAllDrivers()

  let response = null

  if (data) {
    response = await HttpResponseOK(data)
  }
  else {
    response = await HttpResponseNoContent()
  }

  return response

}
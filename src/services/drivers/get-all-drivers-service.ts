import * as DriverRepository from "../../repositories/in-memory-drivers-repository.ts";
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
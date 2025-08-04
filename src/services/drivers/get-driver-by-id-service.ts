import * as DriverRepository from "../../repositories/drivers-repository";
import { HttpResponseNoContent, HttpResponseOK } from "../../utils/http-helper";

export const getDriverByIdService = async (id: number) => {

  const data = await DriverRepository.findDriverById(id)

  let response = null

  if (data) {
    response = await HttpResponseOK(data)
  }
  else {
    response = await HttpResponseNoContent()
  }

  return response

}
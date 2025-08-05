import { DriverModel } from "../../models/driver-model";
import * as DriverRepository from "../../repositories/drivers-repository";
import { HttpResponseBadRequest, HttpResponseCreated } from "../../utils/http-helper";


export const postDriverService = async (driver: DriverModel) => {
  let response = null

  if (Object.keys(driver).length === 0) {
    response = await HttpResponseBadRequest()

    return response
  }

  const data = await DriverRepository.insertDriver(driver)

  if (data) {
    response = await HttpResponseCreated(data)
  }
  else {
    response = await HttpResponseBadRequest()
  }

  return response

}
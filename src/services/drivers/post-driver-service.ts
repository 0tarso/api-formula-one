import { DriverModel } from "../../models/driver-model";
import { DriverSchema } from "../../schemas/driver.schema";
import * as DriverRepository from "../../repositories/drivers-repository";
import { HttpResponseBadRequest, HttpResponseCreated } from "../../utils/http-helper";


export const postDriverService = async (driver: DriverModel) => {

  let response = null

  const driverParseResult = DriverSchema.safeParse(driver)
  if (!driverParseResult.success) {
    response = await HttpResponseBadRequest("Invalid Driver Data")
    return response
  }


  const data = await DriverRepository.insertDriver(driver)
  if (data) {
    response = await HttpResponseCreated(data)
  }
  else {
    response = await HttpResponseBadRequest("Driver could not be created")
  }

  return response

}
import { DriverModel } from "../../models/driver-model";
import { HttpResponseBadRequest, HttpResponseNotFound, HttpResponseUpdated } from "../../utils/http-helper";
import * as DriverRepository from "../../repositories/drivers-repository"
import { PartialUpdateDriverSchema } from "../../schemas/driver.schema";
import { DriverModelDTO } from "../../models/driver-model-DTO";

export const updateDriverByIdService = async (id: number, driver: DriverModelDTO) => {
  let response = null

  if (!id) {
    response = await HttpResponseBadRequest("Invalid id")
    return response
  }


  const driverResultParser = PartialUpdateDriverSchema.safeParse(driver)
  if (!driverResultParser.success) {
    response = await HttpResponseBadRequest("Invalid Driver data")
    return response
  }


  const data = await DriverRepository.updateDriver(id, driver)
  if (data) {
    response = await HttpResponseUpdated(data)
  }
  else {
    response = await HttpResponseNotFound("Driver not found")
  }

  return response

}
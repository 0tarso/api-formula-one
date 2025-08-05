import { HttpResponseBadRequest, HttpResponseNotFound, HttpResponseOK } from "../../utils/http-helper"
import * as DriverRepository from "../../repositories/drivers-repository"

export const deleteDriverByIdService = async (id: number) => {
  let response = null

  if (!id) {
    response = await HttpResponseBadRequest("No id driver to delete")
    return response
  }

  const data = await DriverRepository.deleteDriver(id)

  if (data) {
    response = await HttpResponseOK(data)
  }
  else {
    response = await HttpResponseNotFound("Driver not found")
  }

  return response
}
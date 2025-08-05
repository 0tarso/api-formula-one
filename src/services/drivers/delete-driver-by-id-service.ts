import { HttpResponseBadRequest, HttpResponseNotFound, HttpResponseOK } from "../../utils/http-helper"
import * as DriverRepository from "../../repositories/drivers-repository"

export const deleteDriverByIdService = async (id: number) => {
  let response = null

  if (!id) {
    response = await HttpResponseBadRequest("No id driver to delete")
    return response
  }

  const isDeleted = await DriverRepository.deleteDriver(id)

  if (isDeleted) {
    response = await HttpResponseOK({ message: "deleted" })
  }
  else {
    response = await HttpResponseNotFound("Driver not found")
  }

  return response
}
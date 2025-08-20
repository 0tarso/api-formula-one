// import * as DriverRepository from "../../repositories/in-memory-drivers-repository.ts";
import * as DriverRepository from "../../repositories/supabase-drivers-repository/index";
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
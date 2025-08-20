import { HttpResponseNoContent, HttpResponseOK } from "../../utils/http-helper";

//Dados salvos em memória
// import * as DriverRepository from "../../repositories/in-memory-drivers-repository.ts";

//Dados salvos no Supabase
import * as DriverRepository from "../../repositories/supabase-drivers-repository/index";


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
import { HttpResponseNoContent, HttpResponseOK } from "../../utils/http-helper";

export const getDriverService = async () => {

  const data = null

  let response = null

  if (data) {
    response = await HttpResponseOK(data)
  }
  else {
    response = await HttpResponseNoContent()
  }

  return response

}
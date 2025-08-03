import { HttpStatusCode } from "./http-status-code";

interface HttpResponse {
  statusCode: number;
  body: {
    message: string,
    content: any
  }
}


export const HttpResponseFormat = async (data: any): Promise<HttpResponse> => {


  return {
    statusCode: 200,
    body: {
      message: String(HttpStatusCode.OK),
      content: data,
    }
  }

}
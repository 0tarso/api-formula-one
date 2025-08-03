import { HttpStatusCode } from "./http-status-code";

interface HttpResponse {
  statusCode: number;
  body?: {
    message: string,
    content: any
  }
}


export const HttpResponseOK = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.OK,
    body: {
      message: `${String(HttpStatusCode.OK)} - OK`,
      content: data,
    }
  }
}

export const HttpResponseNoContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.NO_CONTENT,
  }
}
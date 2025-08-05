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

export const HttpResponseCreated = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.CREATED,
    body: {
      message: `${String(HttpStatusCode.CREATED)} - Created`,
      content: data,
    }
  }
}

export const HttpResponseBadRequest = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: {
      message: `${String(HttpStatusCode.BAD_REQUEST)} - ${message}`,
      content: {},
    }
  }
}

export const HttpResponseNotFound = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.NOT_FOUND,
    body: {
      message: `${String(HttpStatusCode.NOT_FOUND)} - ${message}`,
      content: {},
    }
  }
}

export const HttpResponseUpdated = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.OK,
    body: {
      message: `${String(HttpStatusCode.OK)} - Updated`,
      content: data,
    }
  }
}
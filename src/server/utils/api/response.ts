import { HttpStatusCode } from "axios";

const DEFAULT_HEADER = {
  "Content-Type": "application/json",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
};

export const responseJson = (
  data: object,
  code = HttpStatusCode.Ok,
  headers = {}
) => {
  const json = JSON.stringify(data);
  const response = new Response(json, {
    status: code,
    headers: { ...DEFAULT_HEADER, ...headers },
  });
  return response;
};

export const responseMessage = (
  message: string,
  code = HttpStatusCode.Ok,
  headers = {}
) => {
  const json = JSON.stringify({
    message: message,
  });
  const response = new Response(json, {
    status: code,
    headers: { ...DEFAULT_HEADER, ...headers },
  });
  return response;
};

export const responseRawData = (
  rawString: string,
  code = HttpStatusCode.Ok,
  headers = {}
) => {
  const response = new Response(rawString, {
    status: code,
    headers: { ...DEFAULT_HEADER, ...headers },
  });
  return response;
};

export const responseRedirect = (
  url: string,
  code = HttpStatusCode.TemporaryRedirect,
  headers = {}
) => {
  const response = new Response("", {
    status: code,
    headers: { ...headers },
  });
  response.headers.set("location", "url");
  return response;
};

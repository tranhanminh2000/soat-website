import { HttpStatusCode } from 'axios';

class ApiResponse {
  static readonly defaultHeaders = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  };

  static json = (body: any, statusCode = HttpStatusCode.Ok, headers = {}) => {
    return new Response(JSON.stringify(body), {
      status: statusCode,
      headers: { ...ApiResponse.defaultHeaders, ...headers },
    });
  };

  static message(message: string, statusCode = HttpStatusCode.Ok, headers = {}) {
    return new Response(JSON.stringify({
      message,
    }), {
      status: statusCode,
      headers: { ...ApiResponse.defaultHeaders, ...headers },
    });
  }

  static raw(rawString: string, statusCode = HttpStatusCode.Ok, headers = {}) {
    return new Response(String(rawString), {
      status: statusCode,
      headers: { ...ApiResponse.defaultHeaders, ...headers },
    });
  }

  static redirect(url: string, statusCode = HttpStatusCode.TemporaryRedirect, headers = {}) {
    return new Response(String(url), {
      status: statusCode,
      headers: {
        ...ApiResponse.defaultHeaders,
        ...headers,
        Location: String(url),
      },
    });
  }
}

export default ApiResponse;
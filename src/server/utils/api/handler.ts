import { HttpStatusCode } from "axios";
import { responseMessage } from "./response";
import { Message } from "../constants/message";
import { SystemValidationError } from "../error";
import { ValidationError } from "yup";

const errorHandler = (error: Error) => {
  if (error instanceof SystemValidationError) {
    return responseMessage(error.message, error.statusCode);
  }

  if (error instanceof ValidationError) {
    return responseMessage(error.message, HttpStatusCode.BadRequest);
  }

  console.log(error);
  return responseMessage(
    Message.ERROR.INVALID_CREDENTIAL.TXT,
    HttpStatusCode.Unauthorized
  );
};

interface IHandler {
  (req: Request): Promise<Response>;
}

export const withErrorHandling = (handler: IHandler) => {
  return async (req: Request) => {
    try {
      return await handler(req);
    } catch (error: any) {
      return errorHandler(error);
    }
  };
};

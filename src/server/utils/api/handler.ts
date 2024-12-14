import ApiResponse from './response';
import connectMongo from '@/server/configs/mongo';
import { HttpStatusCode } from 'axios';
import { HttpError } from '@/shared/utils/errors/http-error';
import { ValidationError } from 'yup';
import { IHandler } from '@/server/utils/types/handler';
import { logger } from '@/shared/utils/logger';
import { Message } from '@/shared/utils/constants/message';

const errorHandler = (error: Error) => {
  if (error instanceof HttpError) {
    return ApiResponse.message(error.message, error.statusCode);
  }

  if (error instanceof ValidationError) {
    return ApiResponse.message(error.message, HttpStatusCode.BadRequest);
  }

  logger.error(error.message);
  return ApiResponse.message(
    Message.Error.InternalServerError.txt,
    HttpStatusCode.InternalServerError,
  );
};

export const useErrorHandling = (handler: IHandler) => {
  return async (req: Request) => {
    const requestCloned = req.clone();
    logger.info(JSON.stringify(await requestCloned.json(), null, 2));
    try {
      await connectMongo();
      return await handler(req);
    } catch (error: any) {
      return errorHandler(error);
    }
  };
};

import { logger } from "./logger";
import { NotDefined } from "./errors/not-defined";
import { NotFound } from "./errors/not-found";
import { ValidationError } from "./errors/validation-error";

export function errorHandler(error: any) {
  if (isBadRequestError(error)) {
    logger.warn(error.message);
    return createErrorResponse(400, "Bad Request", error.message);
  }

  if (error instanceof NotFound) {
    logger.warn(error.message);
    return createErrorResponse(404, "Not Found", error.message);
  }

  if (error instanceof ValidationError) {
    logger.warn(error.message);
    return createErrorResponse(422, "Validation Error", error.message);
  }

  logger.error(error.message);
  return createErrorResponse(500, "Server Error", error.message);
}

function isBadRequestError(error: any) {
  if (error instanceof NotDefined) return true;
  return false;
}

function createErrorResponse(status: number, type: string, message: string) {
  return { status, error: { type, message } };
}

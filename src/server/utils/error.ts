import { HttpStatusCode } from "axios";

export class SystemValidationError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = HttpStatusCode.BadRequest) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;

    // Set the prototype explicitly for extending built-in classes
    Object.setPrototypeOf(this, SystemValidationError.prototype);
  }
}

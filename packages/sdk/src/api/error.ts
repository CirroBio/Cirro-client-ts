export class ApiError extends Error {
  errors: string[];
  errorCode: number;

  constructor(message: string, errors: string[], errorCode: number) {
    super(message);
    this.errors = errors;
    this.errorCode = errorCode;
  }
}

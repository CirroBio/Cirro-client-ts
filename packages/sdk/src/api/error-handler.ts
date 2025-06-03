import { Middleware, ResponseContext } from "@cirrobio/api-client";
import { ApiError } from "./error";

export class PortalErrorHandler implements Middleware {
  async post(context: ResponseContext): Promise<Response | void> {
    const { response } = context;
    if (response && (response.status >= 200 && response.status < 300)) {
      return response;
    }

    // Handle Error
    let errorMessage: string;
    const errors = [];
    try {
      const err = await response.json();
      console.warn(err);
      if ('errorDetail' in err) {
        errorMessage = err.errorDetail;
        errors.push(err.errors.map((e: any) => e.message));
      } else {
        errorMessage = err.message;
      }
    } catch (ignore) {
      errorMessage = "Unknown Error";
    }
    throw new ApiError(errorMessage, errors);
  }
}

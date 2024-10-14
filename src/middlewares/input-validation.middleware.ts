import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export function inputValidateMiddleware(schema: yup.AnySchema) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const input = { ...req.body, ...req.params, ...req.query };

      await schema.validate(input, { abortEarly: false });

      next();
    } catch (error) {
      const yupError = error as yup.ValidationError;
      const errors: Record<string, string> = {};
      yupError.inner.forEach((error) => {
        if (!error.path) return;
        errors[error.path] = error.message;
      });

      res.status(422).json({
        error: {
          type: "Validation Error",
          message: errors,
        },
      });
      return;
    }
  };
}

import * as yup from "yup";

export const nameSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .transform((value) => value && value.toLowerCase())
    .matches(/^[^\d]*$/),
});

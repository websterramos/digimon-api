import * as yup from "yup";

export const levelSchema = yup.object().shape({
  level: yup
    .string()
    .transform((value) => value && value.toLowerCase())
    .oneOf(["fresh", "in training", "rookie", "champion", "mega", "ultimate"]),
});

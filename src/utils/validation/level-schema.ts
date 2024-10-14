import * as yup from "yup";

export const levelSchema = yup.object().shape({
  level: yup
    .string()
    .required()
    .oneOf(["Fresh", "In Training", "Rookie", "Champion", "Mega", "Ultimate"]),
});

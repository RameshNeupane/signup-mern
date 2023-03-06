import * as yup from "yup";

export const verifyEmailSchema = yup.object({
  email: yup
    .string()
    .email("enter valid email.")
    .required("email is required.")
    .trim()
    .default(""),
});

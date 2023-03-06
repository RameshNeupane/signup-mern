import * as yup from "yup";

export const registerSchema = yup.object({
  fullname: yup
    .string()
    .required("fullname is required.")
    .min(5, "minimum 5 characters.")
    .max(25, "maximum 25 characters.")
    .trim()
    .default(""),

  username: yup
    .string()
    .required("username is required")
    .matches(/^[a-zA-Z0-9]+$/, "should contain only letters and numbers")
    .min(5, "minimum 5 characters.")
    .max(15, "No more than 15 characters")
    .trim()
    .default(""),

  email: yup
    .string()
    .email("enter valid email.")
    .required("email is required.")
    .trim()
    .default(""),

  password: yup
    .string()
    .required("password is required.")
    .matches(/^[a-zA-Z0-9!@$#%&*]+$/, "letters, numbers and '!@$#%&*' only.")
    .min(8, "minimum 8 characters.")
    .max(20, "maximum 20 characters.")
    .trim()
    .default(""),
});

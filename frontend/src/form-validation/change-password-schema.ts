import * as yup from "yup";

export const changePasswordSchema = yup.object({
  oldPassword: yup
    .string()
    .required("password is required.")
    .matches(/^[a-zA-Z0-9!@$#%&*]+$/, "letters, numbers and '!@$#%&*' only.")
    .min(8, "minimum 8 characters.")
    .max(20, "maximum 20 characters.")
    .trim()
    .default(""),

  newPassword: yup
    .string()
    .required("password is required.")
    .notOneOf(
      [yup.ref("oldPassword")],
      "should be different than old password."
    )
    .matches(/^[a-zA-Z0-9!@$#%&*]+$/, "letters, numbers and '!@$#%&*' only.")
    .min(8, "minimum 8 characters.")
    .max(20, "maximum 20 characters.")
    .trim()
    .default(""),

  confirmNewPassword: yup
    .string()
    .required("confirm password is required.")
    .oneOf([yup.ref("newPassword")], "must match with new password."),
});

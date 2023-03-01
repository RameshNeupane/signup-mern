import crypto from "crypto";

export const hashPassword = (plainPassword: string): string => {
  const salt = "signup-mern";
  const saltedPassword = salt + plainPassword;
  const hashedPassword = crypto
    .createHash("sha256")
    .update(saltedPassword)
    .digest("hex");
  return hashedPassword;
};

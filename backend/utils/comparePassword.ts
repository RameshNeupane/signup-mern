import { hashPassword } from "./hashPassword";

export const comparePassword = (
  password: string,
  hashedPassword: string
): boolean => {
  const newHashedPassword = hashPassword(password);
  return newHashedPassword === hashedPassword;
};

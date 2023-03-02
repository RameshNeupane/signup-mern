import crypto from "crypto";
import bcrypt from "bcrypt";

export const hashPassword = async (
  plainPassword: string,
  saltRounds = 10
): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds, "b");
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
  } catch (error: any) {
    throw new Error(`Error hashing password: ${error.message}`);
  }
};

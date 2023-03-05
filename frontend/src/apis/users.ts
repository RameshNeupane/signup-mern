import axiosInstance, {
  handleError,
  handleResponse,
} from "@config/config-axios";
import { loginData, User } from "../types/user";

import { AxiosError } from "axios";

// get all user
export const fetchAllUsersApi = async (): Promise<User[] | undefined> => {
  try {
    const response = await axiosInstance.get("/user/all-users");
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    handleError(error as AxiosError);
  }
};

// login
export const loginUserApi = async (cred: loginData) => {
  try {
    const response = await axiosInstance.post("/user/login", cred);
    const data = await response.data;
    return data;
  } catch (error) {
    handleError(error as AxiosError);
  }
};

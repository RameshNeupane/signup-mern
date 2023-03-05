import { fetchAllUsersApi, loginUserApi } from "@apis/users";
import { AxiosError } from "axios";
import { myDispatchType } from "../../types/dispatch";
import { actionType, errorType, loginData, User } from "../../types/user";
import * as actions from "./type";

/** FETCH ALL USERS */
const fetchAllUsesrRequested = (): actionType => {
  return {
    type: actions.FETCH_ALL_USERS_REQUESTED,
  };
};

const fetchAllUsersSucceeded = (data: User[]): actionType => {
  return {
    type: actions.FETCH_ALL_USERS_SUCCEEDED,
    payload: data,
  };
};

const fetchAllUsersFailed = (data: errorType): actionType => {
  return {
    type: actions.FETCH_ALL_USERS_FAILED,
    payload: data,
  };
};

// fetch all users async
export const fetchAllUsers = () => async (dispatch: myDispatchType) => {
  dispatch(fetchAllUsesrRequested());
  try {
    const response = (await fetchAllUsersApi()) as User[];
    dispatch(fetchAllUsersSucceeded(response));
  } catch (error: any) {
    console.log(error);
    dispatch(fetchAllUsersFailed(error));
  }
};

/** LOGIN */
const loginRequested = (): actionType => {
  return {
    type: actions.LOGIN_REQUESTED,
  };
};

const loginSucceeded = (data: User): actionType => {
  return {
    type: actions.LOGIN_SUCCEEDED,
    payload: data,
  };
};

const loginFailed = (data: errorType): actionType => {
  return {
    type: actions.LOGIN_FAILED,
    payload: data,
  };
};

// login async
export const loginUser =
  (data: loginData) => async (dispatch: myDispatchType) => {
    dispatch(loginRequested());
    try {
      const user = (await loginUserApi(data)) as User;
      dispatch(loginSucceeded(user));
    } catch (error: any) {
      console.log("error error error", error);
      dispatch(loginFailed(error));
    }
  };

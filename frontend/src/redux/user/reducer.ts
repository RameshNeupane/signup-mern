// import { RootState } from "@redux/root-reducer";
import { actionType, usersStateType } from "../../types/user";
import * as actions from "./type";

const initialState = {
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: {},
  data: {},
  tokens: {},
};

export const usersReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    // all users
    case actions.FETCH_ALL_USERS_REQUESTED:
      return {
        ...state,
        status: "loading",
      };
    case actions.FETCH_ALL_USERS_SUCCEEDED:
      return {
        ...state,
        status: "succeeded",
        data: action.payload,
        error: {},
      };
    case actions.FETCH_ALL_USERS_FAILED:
      return {
        ...state,
        status: "failed",
        data: [],
        error: action.payload,
      };

    // login
    case actions.LOGIN_REQUESTED:
      return {
        ...state,
        status: "loading",
      };
    case actions.LOGIN_SUCCEEDED:
      return {
        ...state,
        status: "succeeded",
        data: action.payload,
        error: {},
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        status: "failed",
        data: {},
        error: action.payload,
      };

    // google login
    case actions.GOOGLE_LOGIN_REQUESTED:
      return {
        ...state,
        status: "loading",
      };
    case actions.GOOGLE_LOGIN_SUCCEEDED:
      return {
        ...state,
        status: "succeeded",
        data: action.payload,
        error: {},
      };
    case actions.GOOGLE_LOGIN_FAILED:
      return {
        ...state,
        status: "failed",
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

import * as actions from "./type";

const initialState = {
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: {},
  data: [],
};

export const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_ALL_USERS_REQUESTED:
      return {
        ...state,
        status: "loading",
      };
    case actions.FETCH_ALL_USERS_SUCCEEDED:
      return {
        ...state,
        status: "succeeded",
        data: [...action.payload],
        error: {},
      };
    case actions.FETCH_ALL_USERS_FAILED:
      return {
        ...state,
        status: "failed",
        data: [],
        error: { ...action.payload },
      };
    default:
      return state;
  }
};

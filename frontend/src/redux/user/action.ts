import * as actions from "./type";

export const fetchAllUsesrRequested = () => {
  return {
    type: actions.FETCH_ALL_USERS_REQUESTED,
  };
};

export const fetchAllUsersSucceeded = (data: {}) => {
  return {
    type: actions.FETCH_ALL_USERS_SUCCEEDED,
    payload: data,
  };
};

export const fetchAllUsersFailed = (data: {}) => {
  return {
    type: actions.FETCH_ALL_USERS_FAILED,
    payload: data,
  };
};

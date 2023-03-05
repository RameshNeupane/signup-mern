import { combineReducers } from "redux";

import { usersReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

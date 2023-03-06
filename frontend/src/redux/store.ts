import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./root-reducer";
import { myDispatchType } from "../types/dispatch";

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch | myDispatchType;

export default store;

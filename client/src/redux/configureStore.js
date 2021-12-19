import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./features/user.reducer";
import contacts from "./features/contact.reducer";

const uls = localStorage.getItem("user-reducer");

const preloadedStore = {
  user: uls ? JSON.parse(uls) : undefined,
};

export const store = createStore(
  combineReducers({ user, contacts }),
  preloadedStore,
  composeWithDevTools(applyMiddleware(thunk))
);

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import publicationsReducer from "./searcPublicationsSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  publications: publicationsReducer,
});

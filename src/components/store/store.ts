import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { rootReducer } from "./reducers";

export const store = configureStore({ reducer: rootReducer });

import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth/authSlice";

export default combineReducers({
  auth: authSlice,
});
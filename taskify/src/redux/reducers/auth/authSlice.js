import { createSlice } from "@reduxjs/toolkit";
import { AiFillQqCircle } from "react-icons/ai";

const initialState = {
  loading: false,
  isLoggedIn: false,
  token: "",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, action) {
      state.loading = true;
    },
    loginRequestSuccess(state, action) {
      state.loading = false;
      state.isLoggedIn = true;
      state.token = action.payload;
      state.error = "";
    },
    loginRequestFail(state, action) {
      state.loading = false;
      state.isLoggedIn = false;
      state.token = "";
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginRequestFail,
  loginRequestSuccess,
} = authSlice.actions;
export default authSlice.reducer;

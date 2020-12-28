import axios from "axios";
import { API_PREFIX } from "../constants";
import {
  loginRequest,
  loginRequestFail,
  loginRequestSuccess,
} from "../redux/reducers/auth/authSlice";

export const login = ({ username, password }) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post(`${API_PREFIX}/login`, {
        username,
        password,
      })
      .then((resp) => {
        console.log("Successfully authenticated");
        const { token } = resp.data;
        dispatch(loginRequestSuccess(token));
      })
      .catch((error) => {
        error.response.status !== 401
          ? dispatch(
              loginRequestFail(
                "There has been an error. Please try again later."
              )
            )
          : dispatch(loginRequestFail("Invalid Credentials"));
      });
  };
};


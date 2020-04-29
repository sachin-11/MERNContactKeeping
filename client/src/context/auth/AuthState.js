import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //load User

  //register User

  //Login User

  //Logout

  //clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        loading: state.loading,
        error: state.error,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

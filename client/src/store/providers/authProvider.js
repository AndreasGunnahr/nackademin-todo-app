import React, { useReducer } from "react";
import AuthReducer from "../reducers/authReducer";
import AuthContext from "../context/authContext";

const initialState = {
  user: undefined,
  isAuthenticated: false,
  isLoading: true,
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

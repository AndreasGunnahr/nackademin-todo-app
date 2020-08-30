import React, { createContext, useState, useMemo, useContext } from "react";

import decode from "jwt-decode";

export const AuthContext = createContext(null);

const initialAuthData = {};

const checkAuth = () => {
  let token = localStorage.getItem("auth-token");

  if (!token) return false;
  const { id, username, email, exp } = decode(token);
  try {
    if (exp < new Date().getTime() / 1000) return false;

    return {
      user: { token, id, username, email },
      isAuthenticated: true,
    };
  } catch (e) {
    return false;
  }
};

const AuthProvider = (props) => {
  const [authData, setAuthData] = useState(checkAuth());

  const onLogout = () => {
    setAuthData(initialAuthData);
    localStorage.clear();
  };

  const onLogin = (newAuthData) => setAuthData(newAuthData);

  const authDataValue = useMemo(() => ({ ...authData, onLogin, onLogout }), [
    authData,
  ]);

  return <AuthContext.Provider value={authDataValue} {...props} />;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;

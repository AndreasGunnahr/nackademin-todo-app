import { useEffect, useContext } from "react";
import AuthContext from "store/context/authContext";

const useCheckToken = () => {
  const { authDispatch } = useContext(AuthContext);
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const response = await fetch("/api/auth/validToken", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { error, user } = await response.json();

      if (!error) {
        authDispatch({
          type: "VALIDATED_TOKEN",
          payload: { user, isAuthenticated: true, isLoading: false },
        });
        return;
      }
      authDispatch({
        type: "NOT_VALID_TOKEN",
        payload: { isLoading: false },
      });
    };

    checkLoggedIn();
  }, []);
};

export default useCheckToken;

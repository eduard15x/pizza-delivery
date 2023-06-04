import { useState } from "react";
import { useAuthenticationContext } from "./useAuthenticationContext";
const loginURL = process.env.REACT_APP_LOGIN_USER;

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthenticationContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(loginURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save user to localStorage -> we will store the email and the token here
      localStorage.setItem("user", JSON.stringify(json));
      // update the useAuthenticationContext
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

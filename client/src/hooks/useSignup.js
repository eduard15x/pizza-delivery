import { useState } from "react";
import { useAuthenticationContext } from "./useAuthenticationContext";
const signupURL = process.env.REACT_APP_SIGNUP_USER;

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthenticationContext();

  const signup = async (userName, email, phone, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(signupURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, phone, password }),
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

  return { signup, isLoading, error };
};

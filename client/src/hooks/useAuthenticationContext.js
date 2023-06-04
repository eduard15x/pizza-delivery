import { AuthenticationContext } from "../context/AuthenticationContext";
import { useContext } from "react";

export const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw Error(
      "useAuthenticationContext must be used inside an AuthenticationContextProvider"
    );
  }

  return context;
};

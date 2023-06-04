import { useAuthenticationContext } from "./useAuthenticationContext";

export const useLogout = () => {
  const { dispatch } = useAuthenticationContext();

  const logout = () => {
    // remove user information from local storage
    localStorage.removeItem("user");

    // dispatch the logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

import { createContext, useReducer, useEffect } from "react";
export const AuthenticationContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

// create custom component
// the 'children' means all of this component will wrap
export const AuthenticationContextProvider = ({ children }) => {
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [state, dispatch] = useReducer(authReducer, {
    user: userLocalStorage,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthenticationContext state: ", state);

  return (
    // we return the component that we create above the file that will wrap our entire app
    // the children will be the App component
    <AuthenticationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

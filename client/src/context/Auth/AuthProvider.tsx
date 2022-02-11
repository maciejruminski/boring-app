// Functions.
import { ReactNode, useReducer } from "react";

// Reducer.
import reducer from "./reducer";

// State.
import initialState from "./initialState";

// Context.
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

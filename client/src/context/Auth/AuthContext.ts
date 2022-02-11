// Functions.
import { createContext, Dispatch } from "react";

// State.
import initialState from "./initialState";

const AuthContext = createContext<{
  state: IAuthState;
  dispatch: Dispatch<IAuthAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default AuthContext;

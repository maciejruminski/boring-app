// Functions.
import { createContext, Dispatch } from "react";

// State.
import initialState from "./initialState";

const globalContext = createContext<{
  state: IState;
  dispatch: Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default globalContext;

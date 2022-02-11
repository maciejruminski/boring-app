// Functions.
import { createContext, Dispatch } from "react";

// State.
import initialState from "./initialState";

const DetailsContext = createContext<{
  state: IDetailsState;
  dispatch: Dispatch<IDetailsAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default DetailsContext;

// Functions.
import { createContext, Dispatch } from "react";

// State.
import initialState from "./initialState";

const PlacesContext = createContext<{
  state: IPlacesState;
  dispatch: Dispatch<IPlacesAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default PlacesContext;

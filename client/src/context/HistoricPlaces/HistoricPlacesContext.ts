// Functions.
import { createContext, Dispatch } from "react";

// State.
import initialState from "./initialState";

const HistoricPlacesContext = createContext<{
  state: IHistoricPlacesState;
  dispatch: Dispatch<IHistoricPlacesAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default HistoricPlacesContext;

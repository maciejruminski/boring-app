// Functions.
import { createContext, Dispatch } from "react";

// State.
import initialState from "./initialState";

const FiltersAndPlacesContext = createContext<{
  state: IFiltersAndPlacesState;
  dispatch: Dispatch<IFiltersAndPlacesAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default FiltersAndPlacesContext;

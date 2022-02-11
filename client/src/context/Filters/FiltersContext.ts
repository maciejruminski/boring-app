// Functions.
import { createContext, Dispatch } from "react";

// State.
import initialState from "./initialState";

const FiltersContext = createContext<{
  state: IFiltersState;
  dispatch: Dispatch<IFiltersAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default FiltersContext;

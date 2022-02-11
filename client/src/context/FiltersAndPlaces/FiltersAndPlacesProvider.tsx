// Functions.
import { ReactNode, useReducer } from "react";

// Reducer.
import reducer from "./reducer";

// State.
import initialState from "./initialState";

// Context.
import FiltersAndPlacesContext from "./FiltersAndPlacesContext";

const FiltersAndPlacesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FiltersAndPlacesContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FiltersAndPlacesContext.Provider>
  );
};

export default FiltersAndPlacesProvider;

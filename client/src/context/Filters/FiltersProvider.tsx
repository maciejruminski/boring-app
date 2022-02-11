// Functions.
import { ReactNode, useReducer } from "react";

// Reducer.
import reducer from "./reducer";

// State.
import initialState from "./initialState";

// Context.
import FiltersContext from "./FiltersContext";

const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FiltersContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;

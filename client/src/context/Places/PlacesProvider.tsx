// Functions.
import { ReactNode, useReducer } from "react";

// Reducer.
import reducer from "./reducer";

// State.
import initialState from "./initialState";

// Context.
import PlacesContext from "./PlacesContext";

const PlacesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlacesContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesProvider;

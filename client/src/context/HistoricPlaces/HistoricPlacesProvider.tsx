// Functions.
import { ReactNode, useReducer } from "react";

// Reducer.
import reducer from "./reducer";

// State.
import initialState from "./initialState";

// Context.
import HistoricPlacesContext from "./HistoricPlacesContext";

const HistoricPlacesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HistoricPlacesContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </HistoricPlacesContext.Provider>
  );
};

export default HistoricPlacesProvider;

// Functions.
import { ReactNode, useReducer } from "react";

// Reducer.
import reducer from "./reducer";

// State.
import initialState from "./initialState";

// Context.
import globalContext from "./globalContext";

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <globalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;

// Functions.
import { ReactNode, useReducer } from "react";

// Reducer.
import reducer from "./reducer";

// State.
import initialState from "./initialState";

// Context.
import DetailsContext from "./DetailsContext";

const DetailsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DetailsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
